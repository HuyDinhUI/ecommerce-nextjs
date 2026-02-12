import { Gender, ProductClothes, Size } from "@/types/product.type";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";

export class ProductRepository {
  static async findAll(
    page?: number,
    limit?: number,
    skip?: number,
    where?: Prisma.ProductWhereInput,
  ) {
    try {
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
                    price: true,
                  },
                },
              },
            },
          },
        }),
        prisma.product.count({ where }),
      ]);

      const productsMapped: ProductClothes[] = products.map((product) => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description ?? "",
        shortDescription: product.shortDescription ?? "",
        brand: product.brand ?? "",
        categoryId: product.category.id,
        gender: product.gender as Gender,
        material: product.material ?? "",
        fit: product.fit ?? "",
        price: product.price,
        salePrice: product.salePrice ?? undefined,
        variants: product.variants.map((variant) => ({
          colorName: variant.colorName,
          colorCode: variant.colorCode,
          images: variant.images.map((image) => ({
            image_url: image.image_url,
            alt: product.name,
            is_thumbnail: image.is_thumbnail,
          })),
          sizes: variant.sizes.map((size) => ({
            id: size.id,
            name: size.name as Size,
            stock: size.stock,
            sku: size.sku,
            price: size.price ?? undefined,
          })),
        })),
      }));
      return {
        data: productsMapped,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / (limit ?? 12)),
        },
      };
    } catch (error) {
      throw error;
    }
  }

  static async findById(id: string) {
    try {
      const data = await prisma.product.findUnique({
        where: { id },
        include: {
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

      if (!data) {
        throw new Error("Product not found");
      }

      const dataMapped: ProductClothes = {
        id: data.id,
        name: data.name,
        slug: data.slug,
        description: data.description ?? "",
        shortDescription: data.shortDescription ?? "",
        brand: data.brand ?? "",
        categoryId: data.categoryId,
        gender: data.gender as Gender,
        material: data.material ?? "",
        fit: data.fit ?? "",
        price: data.price,
        salePrice: data.salePrice ?? undefined,
        variants: data.variants.map((variant) => ({
          colorName: variant.colorName,
          colorCode: variant.colorCode,
          images: variant.images.map((image) => ({
            image_url: image.image_url,
            alt: data.name,
            is_thumbnail: image.is_thumbnail,
          })),
          sizes: variant.sizes.map((size) => ({
            id: size.id,
            name: size.name as Size,
            stock: size.stock,
            sku: size.sku,
          })),
        })),
      };

      return dataMapped;
    } catch (error) {
      throw error;
    }
  }
}
