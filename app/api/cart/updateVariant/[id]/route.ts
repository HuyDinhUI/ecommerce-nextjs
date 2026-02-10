import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const PATCH = async (
  req: Request,
  ctx: RouteContext<"/api/cart/updateVariant/[id]">,
) => {
  const body = await req.json();
  const { id } = await ctx.params;

  if (!body.productSizeId) {
    return NextResponse.json(
      { message: "productSizeId is required" },
      { status: 400 },
    );
  }

  await prisma.cartItem.update({
    where: {
      id,
    },
    data: {
      productSizeId: body.productSizeId,
    },
  });

  return NextResponse.json({ message: "Update is success" }, { status: 200 });
};
