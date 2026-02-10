import { authOptions } from "@/lib/auth";
import { getOrCreateCart } from "@/lib/cart";
import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { productId, productSizeId } = await req.json();
  const session = await getServerSession(authOptions);
  const cookie = await cookies();

  const userId = session?.user?.id ?? null;
  const cartId = req.cookies.get("cart_id")?.value ?? null;

  const cart = await getOrCreateCart({ userId, cartId });

  if (!cartId) {
    cookie.set({
      name: "cart_id",
      value: cart.id,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  const res = await prisma.cartItem.upsert({
    where: {
      cartId_productSizeId: {
        cartId: cart.id,
        productSizeId: productSizeId,
      },
    },
    update: {
      quantity: { increment: 1 },
    },
    create: {
      cartId: cart.id,
      productId,
      productSizeId: productSizeId,
      quantity: 1,
    },
  });

  return NextResponse.json(
    { message: "Add to card is success", data: res },
    { status: 200 },
  );
};
