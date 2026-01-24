"use client";

import { Separator } from "@/components/ui/separator";
import { Order } from "@/types/order.type";
import Image from "next/image";

const OrderDetail = ({ data }: { data: Order }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-50">
            <strong className="uppercase">Shipping</strong>
            <div className="flex flex-col gap-2">
              <p>{data.address.fullname}</p>
              <p>{data.address.phone}</p>
              <p>{data.address.addressLine}</p>
              <p>{data.shipping.methodName}</p>
              <p className="text-blue-600 uppercase">{data.status}</p>
            </div>
          </div>
          <Separator classname="my-5 border-gray-300" />
          <div className="flex gap-50">
            <strong className="uppercase">payment</strong>
            <div className="flex flex-col gap-2">
              <p className="uppercase">{data.payment.method}</p>
              <p className="text-green-600 uppercase">{data.payment.status}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-medium">
        <div className="relative">
          <strong className="uppercase">
            items
          </strong>
          <div className="flex flex-col gap-5 mt-5">
            {data.items.map((item) => (
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
              <span>$ {data.totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <h5>Shipping</h5>
              <span className="text-gray-500">
                $ {data.totals.shippingFee.toFixed(2)}
              </span>
            </div>
            <Separator classname="my-2 border-gray-300" />
            <div className="flex justify-between">
              <h5>Total</h5>
              <span>$ {data.totals.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
