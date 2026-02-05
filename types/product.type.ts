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
  name: Size;
  stock: number
  sku: string
  price?: number;
}

export interface ProductVariant {
  colorName: string,
  colorCode: string
  images: ProductImage[]
  sizes: VariantSize[];
         
}

export interface ProductImage {
  image_url: string;
  alt?: string;
  is_thumbnail?: boolean;
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
  material?: string;       
  fit?: string;             

  price: number;
  salePrice?: number;

  variants: ProductVariant[];

  status: ProductStatus;
  rating?: number;
  totalSold?: number;

  createdAt: string;
  updatedAt: string;
}

export interface ProductDTO {
  data: ProductClothes[],
  pagination: {
    page: number,
    limit: number,
    total: number,
    totalPages: number
  }
}
