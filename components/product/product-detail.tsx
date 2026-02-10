"use client";

import { ProductClothes } from "@/types/product.type";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Favourite } from "../ui/favourite";
import useProductVariants from "@/hooks/useProductVariants";
import useCart from "@/hooks/useCart";
import { Spinner } from "../ui/loading";
import { CartItem } from "@/types/cart.type";
import useFavourite from "@/hooks/useFavourite";
import { FavouriteItem } from "@/types/favourite.type";

interface ProductDetailProps {
  data: ProductClothes;
}

export const ProductDetail = ({ data }: ProductDetailProps) => {
  const {
    setCurrentImage,
    setCurrentVariant,
    setSelectedSize,
    currentImage,
    currentVariant,
    selectedSize,
  } = useProductVariants(data);
  const { handleAddToCart, loading } = useCart();
  const { handleToggleFavourite, isFavourite } =
    useFavourite();
  const prepareData = () => {
    const cartItem: CartItem = {
      id: crypto.randomUUID(),
      productId: data.id,
      productSizeId: selectedSize.id,
      sku: selectedSize.sku,
      attribute: {
        color: currentVariant,
        size: selectedSize.name,
      },
      quantity: 1,
      name: data.name,
      slug: data.slug,
      image: currentVariant.images.find((img) => img.is_thumbnail)?.image_url ?? "",
      material: data.material!,
      price: selectedSize.price ?? data.price,
    };

    return cartItem;
  };

  const prepareDataFavourite = () => {
    const favouriteItem: FavouriteItem = {
      productId: data.id,
      name: data.name,
      slug: data.slug,
      thumnail: data.variants[0].images.find((i) => i.is_thumbnail)?.image_url ?? '',
    };

    return favouriteItem;
  };

  return (
    <div className="w-full flex xl:justify-center max-lg:flex-col p-7 font-beatrice-deck">
      <div className="flex max-lg:flex-col xl:w-150">
        <div className="aspect-3/4 relative ring ring-gray-300">
          <Image src={currentImage?.image_url ?? ""} fill alt={data.name} />
        </div>
        <div className="xl:ml-5 max-lg:mt-5 flex xl:flex-col gap-3 xl:w-15 max-lg:h-20 max-lg:overflow-x-scroll">
          {currentVariant.images.map((img) => (
            <div
              key={img.image_url}
              className={`aspect-3/4 relative overflow-hidden ring ring-gray-300 cursor-pointer ${
                currentImage.image_url === img.image_url
                  ? ""
                  : "opacity-50 hover:opacity-100"
              }`}
              onClick={() => setCurrentImage(img)}
            >
              <Image src={img.image_url} fill alt={img.alt ?? ""} />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:ring ring-gray-300 xl:w-90 max-lg:mt-10 lg:p-10 relative">
        <h1>{data.name}</h1>
        <span className="block mt-2 font-beatrice">
          ${selectedSize.price ?? data.price}
        </span>
        <p className="text-sm text-gray-600 font-beatrice mt-3">
          MRP incl. of all taxes
        </p>
        <p className="text-[12px] mt-10">{data.shortDescription}</p>
        <div className="mt-10">
          <span className="text-sm text-gray-400">Color</span>
          <div className="flex gap-1 mt-1">
            {data.variants.map((variant) => (
              <Button
                key={variant.colorCode}
                className={`w-10 h-10 ${
                  currentVariant.colorCode === variant.colorCode
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-100"
                }`}
                style={{ backgroundColor: variant.colorCode }}
                onClick={() => {
                  setCurrentVariant(variant);
                  const thumb = variant.images.find((img) => img.is_thumbnail);
                  if (thumb) {
                    setCurrentImage(thumb);
                  }
                  setSelectedSize(variant.sizes[0]);
                }}
              ></Button>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <span className="text-sm text-gray-400">Size</span>
          <div className="flex gap-1 mt-1">
            {currentVariant.sizes.map((size) => (
              <Button
                title={size.name}
                key={size.sku}
                className="w-10 h-10 flex items-center justify-center font-extralight"
                onClick={() => setSelectedSize(size)}
                variant={selectedSize.name === size.name ? "dark" : "outline"}
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
          title={loading ? "" : "ADD"}
          icon={loading ? <Spinner /> : ""}
          className="w-full bg-gray-300 font-light mt-3 justify-center"
          size="lg"
          onClick={() => handleAddToCart(prepareData())}
        />
        <Favourite
          classname="absolute top-0 right-0"
          checked={isFavourite(data.id)}
          onCheckedChange={(checked) => handleToggleFavourite(prepareDataFavourite(), checked)}
        />
      </div>
    </div>
  );
};
