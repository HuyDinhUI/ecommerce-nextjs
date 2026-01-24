import { DATA_ORDERS } from "@/app/mock/orders.mock";

export const GET = async (
  req: Request,
  ctx: RouteContext<"/api/orders/[id]">
) => {
  const { id } = await ctx.params;

  if (!id) {
    return Response.json({ message: "Order ID is required" }, { status: 400 });
  }

  const data = DATA_ORDERS.find((i) => i.id === id);

  if (!data) {
    return Response.json({ message: "Order not found" }, { status: 404 });
  }

  return Response.json(data, { status: 200 });
};
