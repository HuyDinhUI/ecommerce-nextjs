import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const PATCH = async (
  req: Request,
  ctx: RouteContext<"/api/cart/updateVariant/[id]">,
) => {
  const { sku } = await req.json();
  const { id } = await ctx.params;

  if (!sku)
    return NextResponse.json({ message: "Sku is invalid" }, { status: 400 });

  const product_size = await prisma.productSize.findUnique({
    where: {
      sku,
    },
    select: {
      id: true,
    },
  });

  if (!product_size)
    return NextResponse.json(
      { message: "Variant is not exist" },
      { status: 400 },
    );

  await prisma.cartItem.update({
    where: {
      id,
    },
    data: {
      productSizeId: product_size.id,
    },
  });

  return Response.json({ message: "Update is success" }, { status: 200 });
};
