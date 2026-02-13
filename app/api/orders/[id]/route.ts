import { authOptions } from "@/lib/auth";
import { OrderWithItems } from "@/lib/order/order-repository";
import { Order } from "@/types/order.type";
import { Size } from "@/types/product.type";
import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";

export const GET = async (
  req: Request,
  ctx: RouteContext<"/api/orders/[id]">,
) => {
  const session = await getServerSession(authOptions);
  const { id } = await ctx.params;

  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (!id) {
    return Response.json({ message: "OrderCode is required" }, { status: 400 });
  }

  const order = await prisma.order.findUnique({
    where: { id, userId: session.user.id },
    include: {
      items: {
        include: {
          productSize: {
            include: {
              color: {
                include: {
                  product: true,
                  images: {
                    where: {
                      is_thumbnail: true,
                    },
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
      address: true,
      shipping: true,
      payment: true,
      total: true,
    },
  });

  if (!order) {
    return Response.json({ message: "Order not found" }, { status: 404 });
  }

  const dataMapped: Order = {
    id: order.id,
    orderCode: order.orderCode,
    userId: order.userId,
    items: order.items.map((item: OrderWithItems["items"][number]) => ({
      productId: item.productId,
      sku: item.productSize.sku,
      attribute: {
        color: {
          name: item.productSize.color.colorName,
          code: item.productSize.color.colorCode,
        },
        size: item.productSize.name as Size,
      },

      name: item.productSize.color.product.name,
      slug: item.productSize.color.product.slug,
      image: item.productSize.color.images[0].image_url || "",
      material: item.productSize.color.product.material,
      price: item.price,
      quantity: item.quantity,
    })),
    address: {
      email: order.address?.email || "",
      phone: order.address?.phone || "",
      fullname: order.address?.fullname || "",
      country: order.address?.country || "",
      city: order.address?.city || "",
      district: order.address?.district || "",
      addressLine: order.address?.addressLine || "",
    },
    shipping: {
      methodId: order.shipping?.methodId || "",
      methodName: order.shipping?.methodName || "",
      fee: order.shipping?.fee || 0,
      estimateDays:
        ((order.shipping?.estimateDaysMin || 0) +
          (order.shipping?.estimateDaysMax || 0)) /
        2,
    },
    payment: {
      method: order.payment?.method || "",
      status: order.payment?.status || "unpaid",
      transactionId: order.payment?.transactionId || "",
      paidAt: order.payment?.paidAt || "",
    },
    totals: {
      subtotal: order.total?.subtotal || 0,
      shippingFee: order.total?.shippingFee || 0,
      tax: order.total?.tax || 0,
      quantity: order.total?.quantity || 0,
      discount: order.total?.discount || 0,
      total: order.total?.total || 0,
    },
    status: order.status,
    createdAt: order.createdAt.toISOString(),
  };

  return Response.json({ data: dataMapped }, { status: 200 });
};
