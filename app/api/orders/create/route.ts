export const POST = async (req: Request) => {
  const data = await req.json()
  console.log(data)
  return Response.json({ orderId: "order-test-01" });
};
