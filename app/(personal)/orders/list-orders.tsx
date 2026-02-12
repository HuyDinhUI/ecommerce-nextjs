"use client";

import { Button } from "@/components/ui/button";
import useIsMobile from "@/hooks/useIsMobile";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Order } from "@/types/order.type";

const ListOrdersPage = ({ data }: { data: Order[] }) => {
  const { isMobile } = useIsMobile();
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 max-md:grid-cols-1 mt-10">
        {data.map((item) => (
          <div key={item.id} className="flex gap-5">
            <div className="aspect-3/4 relative h-60 ring ring-gray-300">
              <Image src={item.items[0].image} fill alt={item.items[0].name} />
            </div>
            <div className="flex flex-col gap-2 max-sm:text-sm">
              <h2 className="w-50 max-sm:w-30 text-ellipsis overflow-hidden text-nowrap">
                {item.items[0].name}
              </h2>
              <p>$ {item.items[0].price}</p>
              <p>x{item.totals.quantity}</p>
              <p
                className={clsx(
                  "uppercase",
                  item.status !== "cancelled"
                    ? "text-blue-500"
                    : "text-red-500",
                )}
              >
                {item.status}
              </p>
              <Link href={`orders/${item.id}`} className="underline">
                Detail
              </Link>
              <div className="flex gap-2 mt-5">
                <Button
                  size={isMobile ? "sm" : "md"}
                  title="Contact"
                  variant="dark"
                />
                {item.status !== "delivered" ? (
                  <Button
                    size={isMobile ? "sm" : "md"}
                    title="Cancel"
                    variant="outline"
                    disabled={
                      item.status === "processing" || item.status === "shipped"
                    }
                  />
                ) : (
                  <Button title="Refund" variant="dark" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListOrdersPage;
