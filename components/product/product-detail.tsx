"use client";

import {
  ProductClothes,
  ProductImage,
  ProductVariant,
} from "@/types/product.type";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface ProductDetailProps {
  data: ProductClothes;
}

export const ProductDetail = ({ data }: ProductDetailProps) => {
  const [currentVariant, setCurrentVariant] = useState<ProductVariant>(
    data.variants[0]
  );
  const thumbnail = currentVariant.image.find((img) => img.isThumbnail);
  const [currentImage, setCurrentImage] = useState<ProductImage>(thumbnail!);
  return (
    <div className="w-full flex justify-center max-lg:flex-col p-10 font-beatrice-deck">
      <div className="flex w-150 py-5">
        <div className="aspect-3/4 relative ring ring-gray-300">
          <Image src={currentImage?.url ?? ""} fill alt={data.name} />
        </div>
        <div className="ml-5 flex flex-col gap-3 w-15">
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
      <div className="ring ring-gray-300 w-90 p-10">
        <h1>{data.name}</h1>
        <span className="block mt-2 font-beatrice">${currentVariant.price ?? data.price}</span>
        <p className="text-sm text-gray-600 font-beatrice mt-3">MRP incl. of all taxes</p>
        <p className="text-[12px] mt-10">{data.shortDescription}</p>
        <div className="mt-20">
          <span className="text-sm text-gray-400">Color</span>
          <div className="flex gap-1 mt-1">
            {data.variants.map((variant) => (
              <Button
                key={variant.id}
                className={`w-8 h-8 border-2 ${
                  currentVariant.id === variant.id
                    ? "border-black"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: variant.color.code }}
                onClick={() => {
                  setCurrentVariant(variant);
                  const thumb = variant.image.find((img) => img.isThumbnail);
                  if (thumb) {
                    setCurrentImage(thumb);
                  }
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
                className="border border-gray-300 w-8 h-8 flex items-center justify-center font-extralight"
              ></Button>
            ))}
          </div>
        </div>
        <div className="flex items-center text-[11px] text-gray-600 mt-2 uppercase">
            <span>find your size</span>
            <Separator orientation="vertical" classname="w-4"/>
            <span>measurement guide</span>
        </div>
        <Button title="ADD TO CARD" className="w-full bg-gray-300 font-light mt-2"/>
      </div>
    </div>
  );
};
