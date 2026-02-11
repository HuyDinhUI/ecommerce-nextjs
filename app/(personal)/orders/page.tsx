import { Metadata } from "next";
import ListOrdersPage from "./list-orders";
import FilterBarOrder from "./filter-bar-order";
import { ParamsOrder } from "@/types/params.type";
import { Suspense } from "react";
import { OrderService } from "@/lib/order/order-service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Orders History | Lumina",
  description: "Store fashion",
};

interface PageProps {
  searchParams: ParamsOrder;
}

const OrdersPage = async ({ searchParams }: PageProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const params = await searchParams;

  const res = await OrderService.getAll(
    session.user.id,
    params.status || undefined,
    params.sort || "desc",
    Number(params.page) || 1,
    Number(params.limit) || 12,
  );

  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <FilterBarOrder />
      <ListOrdersPage data={res.data} />
    </Suspense>
  );
};

export default OrdersPage;
