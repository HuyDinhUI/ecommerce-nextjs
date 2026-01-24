import { Order } from "@/types/order.type";
import { Size } from "@/types/product.type";
import { slugtify } from "@/utils/formatter";

export const DATA_ORDERS: Order[] = [
  {
    id: "order-1",
    orderCode: "ORDER-2026-01",
    items: [
      {
        productId: "prod-001",
        sku: "MHLBlack001",
        name: "Los Angeles T-Shirt",
        slug: slugtify("Los Angeles T-Shirt"),
        image:
          "https://img.ltwebstatic.com/images3_pi/2024/03/28/ea/17116030626317222aeca830cfd19dde3a24854d17_thumbnail_900x.webp",
        material: "Cotton",
        price: 99,
        quantity: 1,
        attribute: {
          color: {
            name: "Black",
            code: "#000000",
          },
          size: Size.L,
        },
      },
    ],
    address: {
      email: "huydinh28032004@gmail.com",
      phone: "0354382607",
      fullname: "Dinh Van Huy",
      city: "12",
      district: "5644",
      addressLine: "35/8 Nguyen Huu Tien",
    },
    shipping: {
      methodId: "1",
      methodName: "Standard",
      fee: 10,
      estimateDays: 3,
    },
    payment: {
      method: "cod",
      status: "paid",
    },
    status: "confirmed",
    totals: {
      subtotal: 110,
      shippingFee: 10,
      tax: 0,
      discount: 0,
      total: 120,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
