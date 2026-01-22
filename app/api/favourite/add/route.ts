export const POST = async (req: Request) => {
  const data = await req.json();

  return Response.json({ data }, { status: 200 });
};
