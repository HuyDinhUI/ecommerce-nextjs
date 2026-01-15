"use client"

import { useFavouriteStore } from "@/store/favourite.store";
import { FavouriteItem } from "@/types/favourite.type";

export const FavouriteFacade = {
  toggle: (item: FavouriteItem) => {
    useFavouriteStore.getState().toggle(item);
  },

  remove: (productId: string) => {
    useFavouriteStore.getState().remove(productId);
  },

  clear: () => {
    useFavouriteStore.getState().clear();
  },

  useIsFavourite(productId: string) {
    return useFavouriteStore(
      state => state.items.some(i => i.productId === productId)
    );
  },
};
