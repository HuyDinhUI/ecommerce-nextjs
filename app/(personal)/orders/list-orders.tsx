"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/loading";
import useIsMobile from "@/hooks/useIsMobile";
import { OrderService } from "@/services/order-service";
import { CreateParams } from "@/utils/createParam";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ListOrdersPage = () => {
  const params = useSearchParams();
  const query = CreateParams(params);
  const { data, isLoading } = useQuery({
    queryKey: ["orders", query],
    queryFn: () => OrderService.getAll(query),
  });
  const { isMobile } = useIsMobile();
  if (isLoading) return <Spinner />;
  return (
    <>
      {data?.payload.data.length ? (
        <div className="grid md:grid-cols-2 gap-5 max-md:grid-cols-1 mt-10">
          {data.payload.data.map((item) => (
            <div key={item.id} className="flex gap-5">
              <div className="aspect-3/4 relative w-50 h-60 ring ring-gray-300">
                <Image
                  src={item.items[0].image}
                  fill
                  alt={item.items[0].name}
                />
              </div>
              <div className="flex flex-col gap-2 max-sm:text-sm">
                <h2 className="w-50 text-ellipsis overflow-hidden text-nowrap">{item.items[0].name}</h2>
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
                        item.status === "processing" ||
                        item.status === "shipped"
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
      ) : (
        <div className="flex flex-col justify-center items-center mt-10 h-50">
          <span className="italic text-gray-500">
            There are no orders yet.
          </span>
          <Link href={"/shop"} className="underline">
            Shopping now
          </Link>
        </div>
      )}
    </>
  );
};

export default ListOrdersPage;
