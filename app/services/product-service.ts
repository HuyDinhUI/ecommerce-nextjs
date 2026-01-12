import { ProductClothes } from "@/types/product.type";
import http from "@/utils/http";

interface IProductService {
  getAll(
    params: string
  ): Promise<{ status: number; payload: ProductClothes[] }>;
  getOne(id: string): Promise<{ status: number; payload: ProductClothes }>;
}

class Product implements IProductService {
  getAll(
    params: string
  ): Promise<{ status: number; payload: ProductClothes[] }> {
    return http.get<ProductClothes[]>(`/products?${params}`, {
      next: { revalidate: 60 },
    });
  }

  getOne(id: string): Promise<{ status: number; payload: ProductClothes }> {
    return http.get<ProductClothes>(`/products/${id}`);
  }
}

export const ProductService = new Product();
