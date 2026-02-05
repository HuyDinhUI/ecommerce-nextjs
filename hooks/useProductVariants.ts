"use client";

import {
  ProductClothes,
  ProductImage,
  ProductVariant,
  VariantSize,
} from "@/types/product.type";
import { useState } from "react";

const useProductVariants = (product: ProductClothes) => {
  const [currentVariant, setCurrentVariant] = useState<ProductVariant>(
    product.variants[0]
  );

  const [selectedSize, setSelectedSize] = useState<VariantSize>(
    currentVariant.sizes.find((size) => size.stock > 0)!
  );
  const [currentImage, setCurrentImage] = useState<ProductImage>(
    currentVariant.images.find((img) => img.is_thumbnail)!
  );

  return {
    setCurrentVariant,
    setCurrentImage,
    setSelectedSize,
    currentImage,
    selectedSize,
    currentVariant,
  };
};

export default useProductVariants;
