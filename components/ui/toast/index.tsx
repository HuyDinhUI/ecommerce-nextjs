"use client"

import { useToastStore } from "@/store/toast.store";

export const toast = {
  success: (msg: string, duration = 3000) =>
    useToastStore.getState().add({ type: "success", message: msg, duration }),

  error: (msg: string, duration = 3000) =>
    useToastStore.getState().add({ type: "error", message: msg, duration }),

  info: (msg: string, duration = 3000) =>
    useToastStore.getState().add({ type: "info", message: msg, duration }),

  warning: (msg: string, duration = 3000) =>
    useToastStore.getState().add({ type: "warning", message: msg, duration }),
};