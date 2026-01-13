import { Cart } from "@/types/cart.type";
import { Size } from "@/types/product.type";
import { slugtify } from "@/utils/formatter";

export const DATA_CART_MOCK: Cart = {
  CartItem: [
    {
      id: "cartitem-001",
      productId: "prod-001",
      name: "Los Angeles T-Shirt",
      slug: slugtify("Los Angeles T-Shirt"),
      image:
        "https://img.ltwebstatic.com/images3_pi/2024/03/28/ea/17116030626317222aeca830cfd19dde3a24854d17_thumbnail_900x.webp",
      material: "Cotton",
      price: 198,
      quantity: 2,
      variant: {
        sku: "MH1010",
        color: {
          name: "Black",
          code: "#000000",
        },
        size: Size.M,
      },
    },
    {
      id: "cartitem-002",
      productId: "prod-001",
      name: "Los Angeles T-Shirt",
      slug: slugtify("Los Angeles T-Shirt"),
      image:
        "https://img.ltwebstatic.com/images3_pi/2024/03/28/ea/17116030626317222aeca830cfd19dde3a24854d17_thumbnail_900x.webp",
      material: "Cotton",
      price: 99,
      quantity: 1,
      variant: {
        sku: "MH1010",
        color: {
          name: "Black",
          code: "#000000",
        },
        size: Size.S,
      },
    },
    {
      id: "cartitem-003",
      productId: "prod-002",
      name: "Manfinity EMRG T-Shirt",
      slug: slugtify("Manfinity EMRG T-Shirt"),
      image:
        "https://img.ltwebstatic.com/v4/j/pi/2025/08/15/b9/1755226200d71fa6b5260caf52e787f01ca27858d9_thumbnail_900x.webp",
      material: "Cotton",
      price: 99,
      quantity: 1,
      variant: {
        sku: "MH1020",
        color: {
          name: "Dark Grey",
          code: "#adb5bd",
        },
        size: Size.L,
      },
    },
  ],
  totalQuantity: 4,
  totalPrice: 495,
};
