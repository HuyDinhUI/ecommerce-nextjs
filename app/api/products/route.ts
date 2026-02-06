import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";

const parseArray = (value: string | null) =>
  value ? value.split(",").filter(Boolean) : [];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ===== Query params =====
    const keyword = searchParams.get("search");

    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 12);
    const categories = parseArray(searchParams.get("category"));
    const colors = parseArray(searchParams.get("color"));
    const sizes = parseArray(searchParams.get("size")?.toUpperCase() ?? "");
    const gender = searchParams.get("gender");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    const skip = (page - 1) * limit;

    // ===== Where condition =====
    const where: Prisma.ProductWhereInput = {
      isActive: true,
      ...(categories.length && {
        category: {
          slug: { in: categories },
        },
      }),
      ...(colors.length || sizes.length
        ? {
            variants: {
              some: {
                ...(colors.length && {
                  colorName: { in: colors },
                }),
                ...(sizes.length && {
                  sizes: {
                    some: {
                      name: { in: sizes },
                      stock: { gt: 0 },
                    },
                  },
                }),
              },
            },
          }
        : undefined),
      ...(gender && { gender }),
      ...(minPrice || maxPrice
        ? {
            price: {
              ...(minPrice && { gte: Number(minPrice) }),
              ...(maxPrice && { lte: Number(maxPrice) }),
            },
          }
        : {}),

      ...(keyword && {
        OR: [
          {
            name: {
              contains: keyword,
              mode: "insensitive",
            },
          },
          {
            slug: {
              contains: keyword,
              mode: "insensitive",
            },
          },
          {
            shortDescription: {
              contains: keyword,
              mode: "insensitive",
            },
          },
          {
            brand: {
              contains: keyword,
              mode: "insensitive",
            },
          },
        ],
      }),
    };

    // ===== Query =====
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
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
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json(
      {
        data: products,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[GET_PRODUCTS]", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
