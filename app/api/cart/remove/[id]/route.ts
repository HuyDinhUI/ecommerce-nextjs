import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  ctx: RouteContext<"/api/cart/remove/[id]">,
) => {
  const { id } = await ctx.params;

  if (!id) {
    return NextResponse.json({ message: "Id is invalid" }, { status: 400 });
  }

  await prisma.cartItem.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({ message: "Delete is success" }, { status: 200 });
};
