"use client";

import { CartItem as CartItemType, UpdateVariantType } from "@/types/cart.type";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import { ExchangeIcon } from "@/icon";
import { ProductClothes, ProductVariant, VariantSize } from "@/types/product.type";
import Popover from "../ui/popover/popover";
import useIsMobile from "@/hooks/useIsMobile";
import useCart from "@/hooks/useCart";

export const CartItem = ({
  item,
  product,
}: {
  item: CartItemType;
  product: ProductClothes;
}) => {
  const {
    handleRemoveCart,
    handleUpdateColor,
    handleUpdateSize,
    handleUpdateQuantity,
  } = useCart();
  const { isMobile } = useIsMobile();

  const currentVariant = product?.variants.find(
    (v) => v.color.code === item.attribute.color.code
  );

  const prepareDataUpdateColor = (variant: ProductVariant, cartItem: CartItemType) => {
     const sizeAvailable = variant.size.find((s) => s.stock > 0);
    if (!sizeAvailable) return;
    const thumbnail = variant.image.find((i) => i.isThumbnail);
    const payload: UpdateVariantType = {
      productId: cartItem.productId,
      oldSku: cartItem.sku,
      newSku: sizeAvailable.sku,
      newPrice: sizeAvailable.price!,
      newImage: thumbnail?.url ?? "",
      newVariant: {
        color: {
          name: variant.color.name,
          code: variant.color.code,
        },
        size: variant.size[0].size,
      },
    };

    return payload
  }

  const prepareDataUpdateSize = (sizeItem: VariantSize, cartItem: CartItemType) => {
    const currentVariant = product?.variants.find(
      (v) => v.color.code === cartItem.attribute.color.code
    );
    const thumbnail = currentVariant?.image.find((i) => i.isThumbnail);
    const payload: UpdateVariantType = {
      productId: cartItem.productId,
      oldSku: cartItem.sku,
      newSku: sizeItem.sku,
      newPrice: sizeItem.price!,
      newImage: thumbnail?.url ?? "",
      newVariant: {
        color: {
          name: currentVariant!.color.name,
          code: currentVariant!.color.code,
        },
        size: sizeItem.size,
      },
    };

    return payload
  }

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
        <Button onClick={() => handleRemoveCart(item.sku)} icon={<IoClose />} />
        <div className="flex flex-col gap-3 mt-20">
          <span>{item.attribute.size}</span>
          <Button
            className={`w-8 h-8`}
            style={{ backgroundColor: `${item.attribute.color.code}` }}
          />
          <div className="flex flex-col items-center ring ring-gray-500 ">
            <Button
              className="w-8 h-8 flex justify-center items-center font-extralight"
              title="+"
              onClick={() =>
                handleUpdateQuantity(item.quantity + 1, item)
              }
              // disabled={item.quantity === stock}
            ></Button>
            <span className="border-t border-gray-500 border-b w-8 h-8 py-1 text-center">
              {item.quantity}
            </span>
            <Button
              className="w-8 h-8 flex justify-center items-center font-extralight"
              title="-"
              onClick={() =>
                handleUpdateQuantity(item.quantity - 1, item)
              }
              disabled={item.quantity === 1}
            ></Button>
          </div>
          <Popover
            trigger={<Button className="w-8 h-8" icon={<ExchangeIcon />} />}
            position={isMobile ? "left" : "bottom"}
          >
            <div>
              <span className="text-sm text-gray-400">Color</span>
              <div className="flex gap-1 mt-1">
                {product?.variants.map((variant) => (
                  <Button
                    key={variant.color.code}
                    className={`w-10 h-10 ${
                      currentVariant?.color.code === variant.color.code
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: variant.color.code }}
                    onClick={() => {
                      handleUpdateColor(prepareDataUpdateColor(variant, item)!);
                    }}
                  ></Button>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <span className="text-sm text-gray-400">Size</span>
              <div className="flex gap-1 mt-1">
                {currentVariant?.size.map((size) => (
                  <Button
                    title={size.size}
                    key={size.sku}
                    className="w-10 h-10 flex items-center justify-center font-extralight"
                    variant={item.sku === size.sku ? "dark" : "outline"}
                    disabled={size.stock === 0}
                    onClick={() => handleUpdateSize(prepareDataUpdateSize(size, item))}
                  ></Button>
                ))}
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};
