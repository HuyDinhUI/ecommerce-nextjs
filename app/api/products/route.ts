import { NextRequest, NextResponse } from "next/server";
import { ProductService } from "@/lib/product/product-service";
import { parseArray } from "@/utils/parse";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ===== Query params =====
    const keyword = searchParams.get("search");

    const page = Number(searchParams.get("page") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 12);
    const categories = parseArray(searchParams.get("category"));
    const colors = parseArray(searchParams.get("color"));
    const sizes = parseArray(searchParams.get("size")?.toUpperCase() ?? "");
    const gender = searchParams.get("gender");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    const products = await ProductService.getAll(
      page,
      limit,
      categories,
      colors,
      sizes,
      gender || undefined,
      minPrice || undefined,
      maxPrice || undefined,
      keyword || undefined,
    );
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
