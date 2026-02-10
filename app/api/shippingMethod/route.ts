import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const shippingMethod = await prisma.shippingMethod.findMany();

  return NextResponse.json(
    { data: shippingMethod, message: "Get shipping method is success" },
    { status: 200 },
  );
}
