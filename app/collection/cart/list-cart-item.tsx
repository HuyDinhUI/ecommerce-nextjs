"use client";

import { DATA_CART_MOCK } from "@/app/mock/cart.mock";
import { CartItem } from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export const ListCartItem = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
        {DATA_CART_MOCK.CartItem.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="p-10 absolute top-1/10 right-20 ring ring-gray-300 w-80">
        <h5 className="font-beatrice-deck text-[14px] font-extralight uppercase">
          order summary
        </h5>
        <div className="mt-6 text-[12px]">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${DATA_CART_MOCK.totalPrice}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between mt-4 border-t border-gray-300 pt-4">
            <span className="font-beatrice-deck font-bold uppercase">
              Total <span className="text-[10px]">{`(TAX INCL.)`}</span>
            </span>
            <span className="font-beatrice-deck font-bold uppercase">
              ${DATA_CART_MOCK.totalPrice + 10}
            </span>
          </div>
          <div className="flex items-center mt-10">
            <Checkbox
              size="sm"
              checked={checked}
              onCheckedChange={(checked) => {
                setChecked(checked);
              }}
            />
            <span className="ml-2 text-[11px] tracking-tight">
              I agree to the Terms and Conditions
            </span>
          </div>
        </div>
        <div className="mt-6">
          <Button
            disabled={!checked}
            title="continute"
            className="bg-gray-300 w-full uppercase font-extralight"
          />
        </div>
      </div>
    </div>
  );
};
