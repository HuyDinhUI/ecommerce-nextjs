import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const res = await request.json();
    const ids = res.ids;

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { message: "ids must be a non-empty array" },
        { status: 400 },
      );
    }

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: ids,
        },
        isActive: true,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        variants: {
          include: {
            images: true,
            sizes: {
              select: {
                id: true,
                name: true,
                stock: true,
                sku: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ data: products }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
