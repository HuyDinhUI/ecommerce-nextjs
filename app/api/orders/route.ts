import { authOptions } from "@/lib/auth";
import { Order, OrderStatus } from "@/types/order.type";
import { Size } from "@/types/product.type";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 12);
  const skip = (page - 1) * limit;
  const status = searchParams.get("status") ?? "";
  const sort = searchParams.get("sort") || "desc";

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const where: Prisma.OrderWhereInput = {
    userId: session.user.id,
    ...(status && { status: status as OrderStatus }),
  };

  const [orders, totalOrders] = await Promise.all([
    prisma.order.findMany({
      where,
      orderBy: { createdAt: sort === "asc" ? "asc" : "desc" },
      skip,
      take: limit,
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
    }),
    prisma.order.count({ where }),
  ]);

  if (orders.length === 0) {
    return NextResponse.json(
      {
        data: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
        },
      },
      { status: 200 },
    );
  }

  const orderMapped: Order[] = orders.map((order) => ({
    id: order.id,
    orderCode: order.orderCode,
    userId: order.userId,
    items: order.items.map((item) => ({
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

  return NextResponse.json(
    {
      data: orderMapped,
      pagination: {
        page,
        limit,
        total: totalOrders,
        totalPages: Math.ceil(totalOrders / limit),
      },
    },
    { status: 200 },
  );
}
