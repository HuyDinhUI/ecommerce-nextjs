import { ProductRepository } from "./product-repository";
import { Prisma } from "@prisma/client";

export class ProductService {
  static async getAll(
    page?: number,
    limit?: number,
    categories: string[] = [],
    colors: string[] = [],
    sizes: string[] = [],
    gender?: string,
    minPrice?: string,
    maxPrice?: string,
    keyword?: string,
  ) {
    try {
      const skip = (page! - 1) * limit!;

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
      const data = await ProductRepository.findAll(page, limit, skip, where);

      return {
        status: 200,
        message: "Get products successfully",
        payload: data,
      };
    } catch (error) {
      throw error;
    }
  }
}
