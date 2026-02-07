import { prisma } from "@/utils/prisma";

export async function getOrCreateCart({
  cartId,
  userId,
}: {
  cartId: string | null;
  userId: string | null;
}) {
  const items = {
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
  };

  if (userId) {
    const userCart = await prisma.cart.findUnique({
      where: { userId },
      include: { items },
    });
    if (userCart) return userCart;
  }

  if (cartId) {
    const guestCart = await prisma.cart.findUnique({
      where: { id: cartId },
      include: { items },
    });
    if (guestCart) return guestCart;
  }

  return await prisma.cart.create({
    data: { userId },
    include: {
      items,
    },
  });
}
