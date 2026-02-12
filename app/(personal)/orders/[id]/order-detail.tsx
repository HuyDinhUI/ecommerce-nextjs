"use client";

import { Spinner } from "@/components/ui/loading";
import { Separator } from "@/components/ui/separator";
import { OrderService } from "@/services/order-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const OrderDetail = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["order-detail", id],
    queryFn: () => OrderService.getOne(id),
  });

  const orderData = data?.payload.data;

  if (isLoading) return <Spinner />;

  if (!orderData) return <div className="text-center">No order data found.</div>;
  
  return (
    <div className="flex max-xl:flex-col xl:justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex xl:gap-50 max-xl:gap-20">
            <strong className="uppercase">Shipping</strong>
            <div className="flex flex-col gap-2">
              <p>{orderData?.address.fullname}</p>
              <p>{orderData?.address.phone}</p>
              <p>{orderData?.address.addressLine}</p>
              <p>{orderData?.shipping.methodName}</p>
              <p className="text-blue-600 uppercase">{orderData?.status}</p>
            </div>
          </div>
          <Separator classname="my-5 border-gray-300" />
          <div className="flex xl:gap-50 max-xl:gap-20">
            <strong className="uppercase">payment</strong>
            <div className="flex flex-col gap-2">
              <p className="uppercase">{orderData?.payment.method}</p>
              <p className="text-green-600 uppercase">
                {orderData?.payment.status}
              </p>
            </div>
          </div>
        </div>
      <Separator classname="my-5 border-gray-300 xl:hidden" />
      <div className="font-medium">
        <div className="relative">
          <strong className="uppercase">items</strong>
          <div className="flex flex-col gap-5 mt-5">
            {orderData?.items.map((item) => (
              <div key={item.sku} className="flex gap-3">
                <div className="aspect-3/4 xl:w-30 max-xl:w-35 relative ring ring-gray-300">
                  <Image src={item.image} fill alt={item.name} />
                </div>
                <div className="flex-1 text-sm font-beatrice-deck font-light py-5">
                  <h5 className="mb-2">{item.name}</h5>
                  <span className="text-gray-500">
                    {item.attribute.color.name}/{item.attribute.size}
                  </span>
                  <div className="flex justify-between mt-15 items-center">
                    <span className="font-beatrice-deck text-brand-dark-blue">{`(${item.quantity})`}</span>
                    <span>$ {item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 font-beatrice-deck text-sm">
            <Separator classname="my-2 border-gray-300" />
            <div className="flex justify-between">
              <h5>Subtotal</h5>
              <span>$ {orderData?.totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <h5>Shipping</h5>
              <span className="text-gray-500">
                $ {orderData?.totals.shippingFee.toFixed(2)}
              </span>
            </div>
            <Separator classname="my-2 border-gray-300" />
            <div className="flex justify-between">
              <h5>Total</h5>
              <span>$ {orderData?.totals.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
