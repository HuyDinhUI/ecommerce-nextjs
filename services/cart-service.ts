import { CartItem } from "@/types/cart.type";
import http from "@/utils/http";

interface ICartService {
  fetchCard(): Promise<{ status: number; payload: { data: CartItem[] } }>;

  add(item: CartItem): Promise<{ status: number; payload: { data: any } }>;

  remove(id: string): Promise<{ status: number }>;

  updateVariant(payload: {
    id: string;
    sku: string;
  }): Promise<{ status: number }>;

  updateQuantity(payload: {
    quantity: number;
    id: string;
  }): Promise<{ status: number }>;

  mergeCart(): Promise<{ status: number }>;
}

class Cart implements ICartService {
  fetchCard(): Promise<{ status: number; payload: { data: CartItem[] } }> {
    return http.post<{ data: CartItem[] }>("/cart", null, {
      credentials: "include",
    });
  }

  add(item: CartItem): Promise<{ status: number; payload: { data: any } }> {
    return http.post<{ data: any }>("/cart/add", item);
  }

  remove(id: string): Promise<{ status: number }> {
    return http.delete<string>(`/cart/remove/${id}`);
  }

  updateVariant(payload: {
    id: string;
    sku: string;
  }): Promise<{ status: number }> {
    return http.patch(`/cart/updateVariant/${payload.id}`, {
      sku: payload.sku,
    });
  }

  updateQuantity(payload: {
    quantity: number;
    id: string;
  }): Promise<{ status: number }> {
    return http.patch(`/cart/updateQuantity/${payload.id}`, {
      quantity: payload.quantity,
    });
  }

  mergeCart(): Promise<{ status: number }> {
    return http.post("/cart/merge", null, {
      credentials: "include",
    });
  }
}

export const CartService = new Cart();
