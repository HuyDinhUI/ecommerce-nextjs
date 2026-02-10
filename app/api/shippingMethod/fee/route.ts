import calculateShippingFee from "@/utils/calculateShippingFee";
import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { code, codeAddress } = await req.json();

  const method = await prisma.shippingMethod.findMany({
    where: {
      code,
    },
  });

  if (!method.length)
    return NextResponse.json(
      { message: "Shipping is not exsist" },
      { status: 400 },
    );

  const fee = calculateShippingFee(method[0], codeAddress);

  return NextResponse.json({ fee }, { status: 200 });
}
