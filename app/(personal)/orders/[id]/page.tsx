import { OrderService } from "@/services/order-service";
import OrderDetail from "./order-detail";

const OrderDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await OrderService.getOne(id);
  return <OrderDetail data={res.payload} />;
};

export default OrderDetailPage;
