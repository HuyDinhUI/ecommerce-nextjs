export enum Gender {
  MEN = "men",
  WOMEN = "women",
  UNISEX = "unisex",
}

export enum ProductStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  OUT_OF_STOCK = "out_of_stock",
}

export enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export interface VariantSize {
  size: Size;
  quantity: number
}

export interface ProductVariant {
  color: {
    name: string,
    code: string
  },
  
  image: ProductImage[]
  
  size: VariantSize[];

  price?: number;          
  sku: string;             
}

export interface ProductImage {
  url: string;
  alt?: string;
  isThumbnail?: boolean;
}


export interface ProductClothes {
  id: string;
  name: string;
  slug: string;

  description: string;
  shortDescription?: string;

  brand?: string;
  categoryId: string;

  gender: Gender;
  material?: string;        // cotton, jean, linen
  fit?: string;             // slim, regular, oversize

  price: number;
  salePrice?: number;

  variants: ProductVariant[];

  status: ProductStatus;
  rating?: number;
  totalSold?: number;

  createdAt: string;
  updatedAt: string;
}
