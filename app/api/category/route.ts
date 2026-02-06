import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json({ data: categories }, { status: 200 });
  } catch (error: any) {
    console.error("[GET_CATEGORIES]", error);
    return NextResponse.json(
      { message: "Failed to fetch category" },
      { status: 500 },
    );
  }
}
