import { ProductClothes, ProductDTO } from "@/types/product.type";
import http from "@/utils/http";

interface IProductService {
  getAll(
    params: string
  ): Promise<{ status: number; payload: ProductDTO }>;
  getOne(id: string): Promise<{ status: number; payload: ProductClothes }>;
  getByIds(
    ids: string[]
  ): Promise<{ status: number; payload: ProductClothes[] }>;
}

class Product implements IProductService {
  getAll(
    params: string
  ): Promise<{ status: number; payload: ProductDTO }> {
    return http.get<ProductDTO>(`/products?${params}`);
  }

  getOne(id: string): Promise<{ status: number; payload: ProductClothes }> {
    return http.get<ProductClothes>(`/products/${id}`);
  }

  getByIds(ids: string[]): Promise<{ status: number; payload: ProductClothes[]; }> {
    return http.post<ProductClothes[]>(`/products/by-ids`,{ids})
  }
}

export const ProductService = new Product();
