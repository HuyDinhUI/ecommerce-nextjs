export const DELETE = async (
  req: Request,
  ctx: RouteContext<"/api/cart/remove/[sku]">
) => {
  const { sku } = await ctx.params;

  if (!sku) {
    return Response.json({ message: "Sku is required" }, { status: 400 });
  }

  return Response.json({ sku }, { status: 200 });
};
