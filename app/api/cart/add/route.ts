export const POST = async (req: Request) => {
  const cartItem = await req.json();

  return Response.json({ data: cartItem }, { status: 200 });
};
