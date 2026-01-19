"use client";

import { Separator } from "@/components/ui/separator";
import { useTotalPrice } from "@/hooks/useTotalPrice";
import { useCartStore } from "@/store/cart.store";
import { useCheckoutStore } from "@/store/checkout.store";
import Image from "next/image";

const OrderDetail = () => {
  const { CartItem, totalQuantity, subtotal } = useCartStore();
  const {shippingFee} = useCheckoutStore()
  const total = useTotalPrice()
  return (
    <div className="xl:px-20 pt-20 font-medium">
      <div className="ring ring-gray-300 p-10 relative">
        <h4 className="uppercase font-beatrice-deck font-light">your order</h4>
        <div className="flex flex-col gap-5 mt-5">
          {CartItem.map((item) => (
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
            <span>$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <h5>Shipping</h5>
            <span className="text-gray-500">$ {shippingFee.toFixed(2)}</span>
          </div>
          <Separator classname="my-2 border-gray-300" />
          <div className="flex justify-between">
            <h5>Total</h5>
            <span>$ {total.toFixed(2)}</span>
          </div>
          <div className="bg-white p-2 absolute top-0 right-0">
            <span>{`(${totalQuantity})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
