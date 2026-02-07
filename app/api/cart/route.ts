import { authOptions } from "@/lib/auth";
import { getOrCreateCart } from "@/lib/cart";
import { CartItem } from "@/types/cart.type";
import { Size } from "@/types/product.type";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id ?? null;
  const cartId = req.cookies.get("cart_id")?.value ?? null;

  const res = await getOrCreateCart({ userId, cartId });

  const cart: CartItem[] = res?.items.map((item) => {
    return {
      id: item.id,
      productId: item.productId,
      sku: item.productSize.sku,

      attribute: {
        color: {
          colorName: item.productSize.color.colorName,
          colorCode: item.productSize.color.colorCode,
        },
        size: item.productSize.name as Size,
      },
      name: item.product.name,
      slug: item.product.slug,
      image: item.productSize.color.images[0].image_url,
      material: item.product.material,
      price: item.product.price,
      quantity: item.quantity,
    };
  });

  return NextResponse.json({ data: cart }, { status: 200 });
}
