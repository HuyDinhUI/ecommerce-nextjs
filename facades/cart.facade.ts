"use client";

import { useCartStore } from "@/store/cart.store";
import { CartItem } from "@/types/cart.type";

export const cartFacade = {
  addCard: (item: CartItem) => {
    useCartStore.getState().addItem(item);
  },
  removeCard: (sku: string) => {
    useCartStore.getState().removeItem(sku);
  },
  updateQuantity: (sku: string, quantity: number) => {
    useCartStore.getState().updateQuantity(sku, quantity);
  },
  clearCart: () => {
    useCartStore.getState().clearCart();
  },
};
