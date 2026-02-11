import { authOptions } from "@/lib/auth";
import { OrderService } from "@/lib/order/order-service";
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

  const orders = OrderService.getAll(
    session.user.id,
    status || undefined,
    sort,
    page,
    limit,
    skip,
  );

  return NextResponse.json(orders, { status: 200 });
}
