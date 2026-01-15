"use client";

import { CartItem as CartItemType } from "@/types/cart.type";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import { cartFacade } from "@/facades/cart.facade";
import { ExchangeIcon } from "@/icon";

export const CartItem = ({ item }: { item: CartItemType }) => {

  return (
    <div className="flex gap-5">
      <div className="w-70">
        <div className="ring ring-gray-300">
          <Link
            href={`/shop/${item.slug}?product_id=${item.productId}`}
            className="block aspect-3/4 relative overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </Link>
        </div>
        <div className="mt-3 font-beatrice-deck text-sm">
          <span>{item.material}</span>
          <h5 className="font-medium">{item.name}</h5>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Button
          onClick={() => cartFacade.removeCard(item.variant.sku)}
          icon={<IoClose />}
        />
        <div className="flex flex-col gap-3 mt-20">
          <span>{item.variant.size}</span>
          <Button
            className={`w-7 h-7`}
            style={{ backgroundColor: `${item.variant.color.code}` }}
          />
          <div className="flex flex-col items-center ring ring-gray-500 ">
            <Button
              className="w-8 h-8 flex justify-center items-center font-extralight"
              title="+"
              onClick={() => cartFacade.updateQuantity(item.variant.sku, item.quantity + 1)}
            ></Button>
            <span className="border-t border-gray-500 border-b w-8 h-8 py-1 text-center">
              {item.quantity}
            </span>
            <Button
              className="w-8 h-8 flex justify-center items-center font-extralight"
              title="-"
              onClick={() => cartFacade.updateQuantity(item.variant.sku, item.quantity - 1)}
            ></Button>
          </div>
          <Button className="w-8 h-8" icon={<ExchangeIcon />} />
        </div>
      </div>
    </div>
  );
};
