import { Order } from "@/types/order.type";
import Link from "next/link";

const ListOrdersPage = ({ data }: { data: Order[] }) => {
  return (
    <div>
      {data.length > 0 ? (
        <div></div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10 h-50">
          <span className="italic text-gray-500">
            Your order is currently empty.
          </span>
          <Link href={"/shop"} className="underline">
            Shopping now
          </Link>
        </div>
      )}
    </div>
  );
};

export default ListOrdersPage;
