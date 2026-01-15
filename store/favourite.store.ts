"use client";

import { FavouriteItem } from "@/types/favourite.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouriteState {
  items: FavouriteItem[];
  toggle: (item: FavouriteItem) => void;
  remove: (productId: string) => void;
  clear: () => void;
  isFavourite: (productId: string) => boolean;
}

export const useFavouriteStore = create<FavouriteState>()(
  persist(
    (set, get) => ({
      items: [],

      toggle: (item) => {
        const exists = get().items.some((i) => i.productId === item.productId);
        const items = exists
          ? get().items.filter((i) => i.productId !== item.productId)
          : [...get().items, item];

        set({ items });
      },

      remove: (productId) => {
        set({
          items: get().items.filter((i) => i.productId !== productId),
        });
      },

      clear: () => {
        set({ items: [] });
      },

      isFavourite: (productId) =>
        get().items.some((i) => i.productId === productId),
    }),
    {
      name: "wishlist-storage",
    }
  )
);
