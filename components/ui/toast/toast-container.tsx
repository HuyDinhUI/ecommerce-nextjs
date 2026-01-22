"use client";

import { useToastStore } from "@/store/toast.store";
import { ToastItem } from "./toast-item";
import { AnimatePresence } from "motion/react";

export function ToastContainer() {
  const { toasts, remove } = useToastStore();

  return (
    <div className="fixed top-4 right-1/2 translate-x-1/2 z-9999 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onClose={() => remove(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
