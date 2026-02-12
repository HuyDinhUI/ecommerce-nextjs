import { rest } from "msw";

export const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: "Products fetched successfully" }),
    );
  }),
];
