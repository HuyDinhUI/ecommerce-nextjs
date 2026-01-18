"use client";

import { ProductService } from "@/app/services/product-service";
import { CartItem } from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { SkeletonCartPage } from "@/components/ui/skeleton";
import { useTotalPrice } from "@/hooks/useTotalPrice";
import { useCartStore } from "@/store/cart.store";
import { useCheckoutStore } from "@/store/checkout.store";
import { ProductClothes } from "@/types/product.type";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ListCartItem = () => {
  
  const [checked, setChecked] = useState<boolean>(false);
  const cart = {
    items: useCartStore((state) => state.CartItem),
    subtotal: useCartStore((state) => state.subtotal),
  };
  const {shippingFee} = useCheckoutStore()
  const total = useTotalPrice()
  const productIds = [...new Set(cart.items.map((i) => i.productId))];
  const { data, isLoading } = useQuery({
    queryKey: ["cart-products", productIds],
    queryFn: () => ProductService.getByIds(productIds),
    enabled: productIds.length > 0,
    staleTime: 1000 * 60 * 5,
  });
  
  const router = useRouter()

  if (isLoading) return <SkeletonCartPage/>

  return (
    <div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
        {cart.items.map((item) => {
          const product = data?.payload.find(
            (p: ProductClothes) => p.id === item.productId
          );
          return <CartItem key={item.sku} item={item} product={product!} />;
        })}
      </div>
      {cart.items.length === 0 && (
        <div className="text-center py-20">Your cart is currently empty.</div>
      )}
      <Separator classname="my-4 border-gray-300" />
      {cart.items.length > 0 && (
        <div className="p-10 xl:absolute xl:top-30 xl:right-20 xl:ring xl:ring-gray-300 xl:w-80 max-xl:fixed max-xl:bottom-0 max-xl:left-0 max-xl:right-0 max-xl:bg-white max-xl:p-5 max-xl:ring-0 z-998">
          <h5 className="font-beatrice-deck text-[14px] font-extralight uppercase">
            order summary
          </h5>
          <div className="mt-6 text-[12px]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cart.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Shipping</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-4 border-t border-gray-300 pt-4">
              <span className="font-beatrice-deck font-bold uppercase">
                Total <span className="text-[10px]">{`(TAX INCL.)`}</span>
              </span>
              <span className="font-beatrice-deck font-bold uppercase">
                ${total.toFixed(2)}
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
              className="bg-gray-300 w-full uppercase font-extralight justify-center"
              onClick={() => router.push('/checkout')}
            />
          </div>
        </div>
      )}
    </div>
  );
};
