"use client";

import { create } from "zustand";

interface SidebarState {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export const useSidebarStore = create<SidebarState>()((set) => ({
  open: false,
  setOpen: (v: boolean) => {
    set({ open: v });
  },
}));
