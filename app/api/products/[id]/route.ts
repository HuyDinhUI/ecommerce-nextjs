import { DATA_CLOTHES_MOCK } from "@/app/mock/products.mock";

export const GET = async (
  request: Request,
  ctx: RouteContext<"/api/products/[id]">
) => {
  const { id } = await ctx.params;

  if (!id) {
    return Response.json(
      { message: "Product ID is required" },
      { status: 400 }
    );
  }

  const data = DATA_CLOTHES_MOCK.find((item) => item.id === id);

  if (!data) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  return Response.json(data, { status: 200 });
};
