import { prisma } from "@/utils/prisma";

export const GET = async (
  req: Request,
  ctx: RouteContext<"/api/products/[id]">,
) => {
  const { id } = await ctx.params;

  if (!id) {
    return Response.json(
      { message: "Product ID is required" },
      { status: 400 },
    );
  }

  const data = await prisma.product.findUnique({
    where: { id },
    include: {
      variants: {
        include: {
          images: true,
          sizes: {
            select: {
              id: true,
              name: true,
              stock: true,
              sku: true,
            },
          },
        },
      },
    },
  });

  if (!data) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  return Response.json(data, { status: 200 });
};
