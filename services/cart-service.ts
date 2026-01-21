import { CartItem } from "@/types/cart.type";
import http from "@/utils/http";

interface ICartService {
  add(item: CartItem): Promise<{ status: number; payload: CartItem }>;
  remove(sku: string): Promise<{ status: number; payload: string }>;
  updateColor(payload: {
    productId: string;
    sku: string;
    color: string;
  }): Promise<{ status: number; payload: any }>;
  updateSize(payload: {
    productId: string;
    sku: string;
  }): Promise<{ status: number; payload: any }>;
  updateQuantity(payload: {
    productId: string;
    sku: string;
    quantity: number;
  }): Promise<{ status: number; payload: any }>;
}

class Cart implements ICartService {
  add(item: CartItem): Promise<{ status: number; payload: CartItem }> {
    return http.post<CartItem>("/cart/add", item);
  }

  remove(sku: string): Promise<{ status: number; payload: string }> {
    return http.delete<string>(`/cart/remove/${sku}`);
  }

  updateColor(payload: {
    productId: string;
    sku: string;
    color: string;
  }): Promise<{ status: number; payload: any }> {
    return http.put(`/cart/updateColor`, payload);
  }

  updateSize(payload: {
    productId: string;
    sku: string;
  }): Promise<{ status: number; payload: any }> {
    return http.put(`/cart/updateSize`, payload);
  }

  updateQuantity(payload: {
    productId: string;
    sku: string;
    quantity: number;
  }): Promise<{ status: number; payload: any }> {
    return http.put(`/cart/updateQuantity`, payload);
  }
}

export const CartService = new Cart();
