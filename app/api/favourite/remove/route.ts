export const DELETE = async (req: Request) => {
  const {searchParams} = new URL(req.url)

  return Response.json({ searchParams }, { status: 200 });
};
