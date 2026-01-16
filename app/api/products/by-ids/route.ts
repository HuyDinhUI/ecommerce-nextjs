import { DATA_CLOTHES_MOCK } from "@/app/mock/products.mock";

export const POST = async (request: Request) => {
  try {
    const res = await request.json();
    const ids = res.ids;
    const data = DATA_CLOTHES_MOCK.filter((i) => ids.includes(i.id));
    return Response.json(data, { status: 200 });
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
};
