import { ProductService } from "@/lib/product/product-service";

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

  try {
    const data = await ProductService.getOne(id);
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: (error as Error).message || "Internal Server Error" },
      { status: 500 },
    );
  }
};
