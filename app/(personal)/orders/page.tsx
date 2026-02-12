import { Metadata } from "next";
import ListOrdersPage from "./list-orders";
import FilterBarOrder from "./filter-bar-order";
import { ParamsOrder } from "@/types/params.type";
import { Suspense } from "react";
import { OrderService } from "@/lib/order/order-service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

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

  if (res.data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center mt-10 h-50">
        <span className="italic text-gray-500">There are no orders yet.</span>
        <Link href={"/shop"} className="underline">
          Shopping now
        </Link>
      </div>
    );
  }

  return (
    <>
      <FilterBarOrder />
      <ListOrdersPage data={res.data} />
    </>
  );
};

export default OrdersPage;
