"use client";

import { useCartStore } from "@/store/cart.store";
import { CartItem, UpdateVariantType } from "@/types/cart.type";

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

  updateVariant: (payload: UpdateVariantType) => {
    useCartStore.getState().updateVariant({
      productId: payload.productId,
      oldSku: payload.oldSku,
      newSku: payload.newSku,
      newPrice: payload.newPrice,
      newImage: payload.newImage,
      newVariant: payload.newVariant,
    });
  }
};
