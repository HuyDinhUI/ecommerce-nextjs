import { Order } from "@/types/order.type";
import { Size } from "@/types/product.type";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";

const orderInclude = {
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
};

export type OrderWithItems = Prisma.OrderGetPayload<{
  include: typeof orderInclude;
}>;

export class OrderRepository {
  static async findByUserId(
    sort?: string,
    page?: number,
    limit?: number,
    skip?: number,
    where?: Prisma.OrderWhereInput,
  ) {
    const [orders, totalOrders] = await Promise.all([
      prisma.order.findMany({
        where,
        orderBy: { createdAt: sort === "asc" ? "asc" : "desc" },
        skip,
        take: limit,
        include: orderInclude,
      }),
      prisma.order.count({ where }),
    ]);

    if (orders.length === 0) {
      return {
        data: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
        },
      };
    }

    const orderMapped = orders.map((order):Order => ({
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
    }));

    return {
      data: orderMapped,
      pagination: {
        page,
        limit,
        total: totalOrders,
        totalPages: Math.ceil(totalOrders / (limit || totalOrders)),
      },
    };
  }
}
