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
  const { handleToggleFavourite, isFavourite } = useFavourite();
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
      image:
        currentVariant.images.find((img) => img.is_thumbnail)?.image_url ?? "",
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
      thumnail:
        data.variants[0].images.find((i) => i.is_thumbnail)?.image_url ?? "",
    };

    return favouriteItem;
  };

  return (
    <div className="w-full flex max-lg:flex-col font-beatrice-deck p-7">
      <div className="flex flex-row-reverse xl:gap-2 flex-1 max-lg:flex-col xl:w-150">
        <div className="aspect-3/4 flex-1 relative">
          <Image
            src={currentImage?.image_url ?? ""}
            fill
            alt={data.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="max-lg:overflow-x-scroll max-sm:w-90">
          <div className="max-sm:min-w-100 max-lg:mt-5 flex xl:flex-col gap-3 xl:w-15 max-lg:h-20">
            {currentVariant.images.map((img) => (
              <div
                key={img.image_url}
                className={`aspect-3/4 relative overflow-hidden cursor-pointer ${
                  currentImage.image_url === img.image_url
                    ? ""
                    : "opacity-50 hover:opacity-100"
                }`}
                onClick={() => setCurrentImage(img)}
              >
                <Image
                  src={img.image_url}
                  fill
                  alt={img.alt ?? ""}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  fetchPriority="high"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="xl:w-100 max-lg:mt-10 lg:px-10 lg:sticky relative top-0 z-1">
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
          onCheckedChange={(checked) =>
            handleToggleFavourite(prepareDataFavourite(), checked)
          }
        />
      </div>
    </div>
  );
};
