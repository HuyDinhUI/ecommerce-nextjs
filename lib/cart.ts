import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";

const cartInclude = {
  items: {
    include: {
      product: {
        select: {
          id: true,
          name: true,
          slug: true,
          price: true,
          salePrice: true,
          material: true,
        },
      },
      productSize: {
        select: {
          name: true,
          stock: true,
          sku: true,
          color: {
            select: {
              colorName: true,
              colorCode: true,
              images: {
                where: { is_thumbnail: true },
                take: 1,
                select: {
                  image_url: true,
                },
              },
            },
          },
        },
      },
    },
  },
} as const

export type CartWithItems = Prisma.CartGetPayload<{
  include: typeof cartInclude;
}>;

export async function getOrCreateCart({
  cartId,
  userId,
}: {
  cartId: string | null;
  userId: string | null;
}): Promise<CartWithItems> {
  if (userId) {
    const userCart = await prisma.cart.findUnique({
      where: { userId },
      include: cartInclude,
    });
    if (userCart) return userCart;
  }

  if (cartId) {
    const guestCart = await prisma.cart.findUnique({
      where: { id: cartId },
      include: cartInclude,
    });
    if (guestCart) return guestCart;
  }

  return await prisma.cart.create({
    data: { userId },
    include: cartInclude,
  });
}
