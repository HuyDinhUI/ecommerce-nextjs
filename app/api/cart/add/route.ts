import { authOptions } from "@/lib/auth";
import { getOrCreateCart } from "@/lib/cart";
import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { productId, sku } = await req.json();
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

  const productSizeId = await prisma.productSize.findUnique({
    where: {
      sku,
    },
    select: {
      id: true,
    },
  });

  if (!productSizeId?.id)
    return NextResponse.json({ message: "Sku is not exist" }, { status: 400 });

  const res = await prisma.cartItem.upsert({
    where: {
      cartId_productSizeId: {
        cartId: cart.id,
        productSizeId: productSizeId?.id,
      },
    },
    update: {
      quantity: { increment: 1 },
    },
    create: {
      cartId: cart.id,
      productId,
      productSizeId: productSizeId?.id,
      quantity: 1,
    },
  });

  return NextResponse.json(
    { message: "Add to card is success", data: res },
    { status: 200 },
  );
};
