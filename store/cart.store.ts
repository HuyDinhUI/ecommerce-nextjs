"use client";

import { Cart, CartItem, UpdateVariantType } from "@/types/cart.type";
import { create } from "zustand";

const Calculate = (items: CartItem[]) => {
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return { totalQuantity, subtotal };
};

interface CartState extends Cart {
  setCart: (items: CartItem[]) => void;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  updateQuantity: (sku: string, quantity: number) => void;
  updateVariant: (payload: UpdateVariantType) => void;
  snapshot: () => CartItem[];
  restore: (items: CartItem[]) => void;
  syncCartItemId: (temp_id: string, real_id: string) => void;
}

export const useCartStore = create<CartState>()((set, get) => ({
  CartItem: [],
  totalQuantity: 0,
  subtotal: 0,

  setCart: (items) => {
    set({ CartItem: items, ...Calculate(items) });
  },

  addItem: (item) => {
    const items = [...get().CartItem];
    const existing = items.find((i) => i.sku === item.sku);

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      items.push(item);
    }

    set({ CartItem: items, ...Calculate(items) });
  },

  removeItem: (id) => {
    const items = get().CartItem.filter((i) => i.id !== id);
    set({ CartItem: items, ...Calculate(items) });
  },

  updateQuantity: (sku, quantity) => {
    if (quantity <= 0) return;

    const items = get().CartItem.map((item) =>
      item.sku === sku ? { ...item, quantity } : item,
    );

    set({ CartItem: items, ...Calculate(items) });
  },

  clearCart: () => {
    set({ CartItem: [], totalQuantity: 0, subtotal: 0 });
  },

  updateVariant: ({
    productId,
    oldSku,
    newSku,
    newPrice,
    newImage,
    newVariant,
  }) => {
    // 1: Find old cart item
    // 2: Check newSku is exsist (same size & color)
    // - case 1: exsist === true -> merge quantity
    // - case 2: exsist === false -> replace sku
    // 3: Update

    const items = [...get().CartItem];

    const oldIndex = items.findIndex(
      (i) => i.productId === productId && i.sku === oldSku,
    );

    if (oldIndex === -1) return;

    const oldItem = items[oldIndex];

    const existingIndex = items.findIndex(
      (i) => i.productId === productId && i.sku === newSku,
    );

    if (existingIndex !== -1) {
      items[existingIndex] = {
        ...items[existingIndex],
        quantity: items[existingIndex].quantity + oldItem.quantity,
      };
      items.splice(oldIndex, 1);
    } else {
      items[oldIndex] = {
        ...oldItem,
        image: newImage,
        price: newPrice,
        sku: newSku,
        attribute: newVariant,
      };
    }

    set({ CartItem: items, ...Calculate(items) });
  },

  snapshot: () => {
    return get().CartItem;
  },

  restore: (items) => {
    set({ CartItem: items, ...Calculate });
  },

  syncCartItemId: (temp_id, real_id) => {
    const items = [...get().CartItem];

    const item = items.find((i) => i.id === temp_id);
    item!.id = real_id;

    set({ CartItem: items });
  },
}));
