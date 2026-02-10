import { authOptions } from "@/lib/auth";
import { CheckoutSchema } from "@/schemas/checkout.schema";
import { CreateOrderPayload, PaymentMethod } from "@/types/order.type";
import calculateTotal from "@/utils/calculatePrice";
import calculateShippingFee from "@/utils/calculateShippingFee";
import createOrderCode from "@/utils/createOrderCode";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body: CreateOrderPayload = await req.json();
  const session = await getServerSession(authOptions);
  // const parsed = CheckoutSchema.safeParse(body);

  if (!session) {
    return NextResponse.json({ message: "Please login" }, { status: 401 });
  }

  // if (!parsed.success) {
  //   return NextResponse.json(
  //     { message: parsed.error.message },
  //     { status: 400 },
  //   );
  // }

  const shippingMethod = await prisma.shippingMethod.findMany({
    where: {
      code: body.shippingMethodId,
    },
  });

  if (!shippingMethod.length) {
    return NextResponse.json(
      { message: "Shipping method is invalid" },
      { status: 400 },
    );
  }

  const fee = calculateShippingFee(
    shippingMethod[0],
    Number(body.address.city),
  );

  const total = calculateTotal(body, fee);

  prisma.$transaction([]);

  const order = await prisma.order.create({
    data: {
      orderCode: createOrderCode(),
      status: body.paymentMethod === "cod" ? "pending" : "confirmed",
      userId: session?.user?.id,
    },
  });

  await prisma.orderShipping.create({
    data: {
      orderId: order.id,
      methodId: body.shippingMethodId,
      methodName: shippingMethod[0].name,
      fee,
      estimateDaysMin: shippingMethod[0].estimateDaysMin,
      estimateDaysMax: shippingMethod[0].estimateDaysMax,
    },
  });

  await prisma.orderPayment.create({
    data: {
      orderId: order.id,
      method: body.paymentMethod as PaymentMethod,
      status: "unpaid",
    },
  });

  await prisma.orderAddress.create({
    data: {
      orderId: order.id,
      email: body.address.email,
      phone: body.address.phone,
      fullname: body.address.fullname,
      city: body.address.city,
      district: body.address.district,
      addressLine: body.address.addressLine,
    },
  });

  await prisma.orderItem.createMany({
    data: body.items.map((i) => ({
      orderId: order.id,
      productId: i.productId,
      productSizeId: i.productSizeId,
      price: i.price,
      quantity: i.quantity,
    })) as Prisma.OrderItemCreateManyInput[],
  });

  await prisma.orderTotal.create({
    data: {
      orderId: order.id,
      shippingFee: fee,
      discount: 0, // not yet build
      tax: 0, // not yet build
      subtotal: total.subtotal,
      quantity: total.totalQuantity,
      total: total.total,
    },
  });

  return Response.json(
    { orderId: order.id, message: "Create order is success" },
    { status: 200 },
  );
};
