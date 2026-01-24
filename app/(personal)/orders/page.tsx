import { OrderService } from "@/services/order-service";
import { ParamsOrder } from "@/types/params.type";
import { CreateParams } from "@/utils/createParam";
import { Metadata } from "next";
import ListOrdersPage from "./list-orders";

export const metadata: Metadata = {
  title: "Orders History | Lumina",
  description: "Store fashion",
};

interface PageProps {
  searchParams: ParamsOrder;
}

const OrdersPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const query = CreateParams(params);

  const data = await OrderService.getAll(query);
  return <ListOrdersPage data={data.payload} />;
};

export default OrdersPage;
