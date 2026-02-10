import OrderDetail from "./order-detail";

const OrderDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <OrderDetail id={id} />;
};

export default OrderDetailPage;
