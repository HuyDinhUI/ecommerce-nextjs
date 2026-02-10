import { Metadata } from "next";
import ListOrdersPage from "./list-orders";
import FilterBarOrder from "./filter-bar-order";

export const metadata: Metadata = {
  title: "Orders History | Lumina",
  description: "Store fashion",
};

const OrdersPage = async () => {
  return (
    <div>
      <FilterBarOrder />
      <ListOrdersPage />
    </div>
  );
};

export default OrdersPage;
