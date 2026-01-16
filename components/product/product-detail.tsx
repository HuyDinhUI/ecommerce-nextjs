"use client";

import {
  ProductClothes,
  ProductImage,
  ProductVariant,
  VariantSize,
} from "@/types/product.type";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Favourite } from "../ui/favourite";
import { cartFacade } from "@/facades/cart.facade";
import { CartItem } from "@/types/cart.type";
import { FavouriteFacade } from "@/facades/favourite.facade";
import { FavouriteItem } from "@/types/favourite.type";

interface ProductDetailProps {
  data: ProductClothes;
}

export const ProductDetail = ({ data }: ProductDetailProps) => {
  const [currentVariant, setCurrentVariant] = useState<ProductVariant>(
    data.variants[0]
  );
  const thumbnail = currentVariant.image.find((img) => img.isThumbnail);
  const [currentImage, setCurrentImage] = useState<ProductImage>(thumbnail!);
  const defaultSize = currentVariant.size[0];
  const [selectedSize, setSelectedSize] = useState<VariantSize>(defaultSize);
  const isFavourite = FavouriteFacade.useIsFavourite(data.id);

  const handleFavouriteChange = () => {
    const favouriteItem: FavouriteItem = {
      productId: data.id,
      name: data.name,
      slug: data.slug,
      thumnail: thumbnail?.url ?? "",
    };

    FavouriteFacade.toggle(favouriteItem);
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: data.id,
      sku: selectedSize.sku,
      attribute: {
        
        color: currentVariant.color,
        size: selectedSize.size,
      },
      quantity: 1,
      name: data.name,
      slug: data.slug,
      image: currentVariant.image.find((img) => img.isThumbnail)?.url ?? "",
      material: data.material!,
      price: selectedSize.price ?? data.price,
    };

    cartFacade.addCard(cartItem);
  };

  return (
    <div className="w-full flex xl:justify-center max-lg:flex-col p-7 font-beatrice-deck">
      <div className="flex max-lg:flex-col xl:w-150">
        <div className="aspect-3/4 relative ring ring-gray-300">
          <Image src={currentImage?.url ?? ""} fill alt={data.name} />
        </div>
        <div className="xl:ml-5 max-lg:mt-5 flex xl:flex-col gap-3 xl:w-15 max-lg:h-20 max-lg:overflow-x-scroll">
          {currentVariant.image.map((img) => (
            <div
              key={img.url}
              className={`aspect-3/4 relative overflow-hidden ring ring-gray-300 cursor-pointer ${
                currentImage.url === img.url
                  ? ""
                  : "opacity-50 hover:opacity-100"
              }`}
              onClick={() => setCurrentImage(img)}
            >
              <Image src={img.url} fill alt={img.alt ?? ""} />
            </div>
          ))}
        </div>
      </div>
      <div className="ring ring-gray-300 xl:w-90 max-lg:mt-10 p-10 relative">
        <h1>{data.name}</h1>
        <span className="block mt-2 font-beatrice">
          ${selectedSize.price ?? data.price}
        </span>
        <p className="text-sm text-gray-600 font-beatrice mt-3">
          MRP incl. of all taxes
        </p>
        <p className="text-[12px] mt-10">{data.shortDescription}</p>
        <div className="mt-20">
          <span className="text-sm text-gray-400">Color</span>
          <div className="flex gap-1 mt-1">
            {data.variants.map((variant) => (
              <Button
                key={variant.color.code}
                className={`w-10 h-10 ${
                  currentVariant.color.code === variant.color.code
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-100"
                }`}
                style={{ backgroundColor: variant.color.code }}
                onClick={() => {
                  setCurrentVariant(variant);
                  const thumb = variant.image.find((img) => img.isThumbnail);
                  if (thumb) {
                    setCurrentImage(thumb);
                  }
                  setSelectedSize(variant.size[0]);
                }}
              ></Button>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <span className="text-sm text-gray-400">Size</span>
          <div className="flex gap-1 mt-1">
            {currentVariant.size.map((size) => (
              <Button
                title={size.size}
                key={size.size}
                className="w-10 h-10 flex items-center justify-center font-extralight"
                onClick={() => setSelectedSize(size)}
                variant={selectedSize.size === size.size ? "dark" : "outline"}
                disabled={size.stock === 0}
              ></Button>
            ))}
          </div>
        </div>
        <div className="flex items-center text-[11px] text-gray-600 mt-3 uppercase">
          <span>find your size</span>
          <Separator orientation="vertical" classname="w-4" />
          <span>measurement guide</span>
        </div>
        <Button
          title="ADD"
          className="w-full bg-gray-300 font-light mt-3 max-lg:fixed max-lg:z-99 max-lg:bottom-0 max-lg:left-0 max-lg:right-0"
          size="lg"
          onClick={() => handleAddToCart()}
        />
        <Favourite
          classname="absolute top-0 right-0"
          checked={isFavourite}
          onCheckedChange={() => handleFavouriteChange()}
        />
      </div>
    </div>
  );
};
