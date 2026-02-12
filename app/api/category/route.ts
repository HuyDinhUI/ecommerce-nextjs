import { CategoryService } from "@/lib/category/category-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const categories = await CategoryService.getAll();
    return NextResponse.json(categories, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to fetch category" },
      { status: 500 },
    );
  }
}
