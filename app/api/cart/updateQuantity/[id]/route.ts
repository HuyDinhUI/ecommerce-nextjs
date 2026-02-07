import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  ctx: RouteContext<"/api/cart/updateQuantity/[id]">,
) => {
  const { quantity } = await req.json();
  const { id } = await ctx.params;

  if (quantity <= 0) {
    await prisma.cartItem.delete({
      where: {
        id,
      },
    });
  } else {
    await prisma.cartItem.update({
      where: { id },
      data: { quantity },
    });
  }

  return NextResponse.json({ message: "Update is success" }, { status: 200});
};
