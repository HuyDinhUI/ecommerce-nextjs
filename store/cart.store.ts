"use client";

import { Cart, CartItem } from "@/types/cart.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const Calculate = (items: CartItem[]) => {
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return { totalQuantity, totalPrice };
};

interface CartState extends Cart {
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  updateQuantity: (sku: string, quantity: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      CartItem: [],
      totalQuantity: 0,
      totalPrice: 0,

      addItem: (item) => {
        const items = [...get().CartItem];
        const existing = items.find((i) => i.variant.sku === item.variant.sku);

        if (existing) {
          existing.quantity += item.quantity;
        } else {
          items.push(item);
        }

        set({ CartItem: items, ...Calculate(items) });
      },

      removeItem: (sku) => {
        const items = get().CartItem.filter((i) => i.variant.sku !== sku);
        set({ CartItem: items, ...Calculate(items) });
      },

      updateQuantity: (sku, quantity) => {
        if (quantity <= 0) return;

        const items = get().CartItem.map((item) =>
          item.variant.sku === sku ? { ...item, quantity } : item
        );

        set({ CartItem: items, ...Calculate(items) });
      },

      clearCart: () => {
        set({ CartItem: [], totalQuantity: 0, totalPrice: 0 });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
