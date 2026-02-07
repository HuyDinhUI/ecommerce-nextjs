import { authOptions } from "@/lib/auth";
import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const cookie = await cookies();

  const userId = session?.user?.id ?? null;
  const guestCartId = req.cookies.get("cart_id")?.value ?? null;

  if (!guestCartId || !userId) return Response.json({ ok: true });

  const [guestCart, userCart] = await Promise.all([
    prisma.cart.findUnique({
      where: { id: guestCartId },
      include: { items: true },
    }),
    prisma.cart.findUnique({
      where: { userId },
      include: { items: true },
    }),
  ]);

  if (!guestCart) return Response.json({ ok: true });

  const finalCart =
    userCart ??
    (await prisma.cart.create({
      data: { userId },
      include: { items: true },
    }));

  for (const item of guestCart.items) {
    await prisma.cartItem.upsert({
      where: {
        cartId_productSizeId: {
          cartId: finalCart.id,
          productSizeId: item.productSizeId,
        },
      },
      update: {
        quantity: { increment: item.quantity },
      },
      create: {
        cartId: finalCart.id,
        productId: item.productId,
        productSizeId: item.productSizeId,
        quantity: item.quantity,
      },
    });
  }

  await prisma.cart.delete({ where: { id: guestCart.id } });
  cookie.delete("cart_id");

  return NextResponse.json({ success: true });
}
