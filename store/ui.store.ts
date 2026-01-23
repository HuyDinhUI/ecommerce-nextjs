"use client";

import { create } from "zustand";

type UIList = "modal" | "sidebar";

interface UIState {
  isModal: boolean;
  isSidebar: boolean;
  setOpen: (v: boolean, type: UIList) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isModal: false,
  isSidebar: false,
  setOpen: (v, type) => {
    switch (type) {
      case "modal":
        set({ isModal: v });
        break;
      case "sidebar":
        set({ isSidebar: v });
        break;
    }
  },
}));
