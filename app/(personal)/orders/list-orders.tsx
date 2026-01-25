"use client";

import { Button } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";
import { useFilter } from "@/hooks/useFilter";
import useIsMobile from "@/hooks/useIsMobile";
import { Order } from "@/types/order.type";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const DATA_STATUS_ORDER = [
  "Pending",
  "Confirmed",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const DATA_SORT_ORDER = [
  {
    label: "Most short",
    value: "short",
  },
  {
    label: "Most long",
    value: "long",
  },
];

const ListOrdersPage = ({ data }: { data: Order[] }) => {
  const { isMobile } = useIsMobile();
  const { onToggle, getParams, setParams } = useFilter();
  return (
    <div>
      {data.length > 0 ? (
        <div>
          <div className="flex max-xl:flex-wrap gap-2">
            {DATA_STATUS_ORDER.map((item, index) => (
              <Button
                key={index}
                title={item}
                variant={
                  getParams("status").includes(item) ? "dark" : "outline"
                }
                className="font-extralight"
                onClick={() => onToggle("status", item)}
              />
            ))}
            <Dropdown
              options={DATA_SORT_ORDER}
              onChange={(v) => setParams("sort", v)}
              value={getParams("sort")[0]}
              placeholder="Order by"
            />
          </div>
          <div className="grid md:grid-cols-2 max-md:grid-cols-1 mt-10">
            {data.map((item) => (
              <div key={item.id} className="flex gap-5">
                <div className="aspect-3/4 relative w-50 ring ring-gray-300">
                  <Image
                    src={item.items[0].image}
                    fill
                    alt={item.items[0].name}
                  />
                </div>
                <div className="flex flex-col gap-2 max-sm:text-sm">
                  <h2>{item.items[0].name}</h2>
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
        </div>
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
