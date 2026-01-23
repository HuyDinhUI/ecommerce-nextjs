"use client";

import { ReactNode } from "react";
import { useDialog } from "./dialog-provider";

export const DialogTrigger = ({ children }: { children: ReactNode }) => {
  const { open, setOpen, triggerRef } = useDialog();

  return (
    <div
      ref={triggerRef}
      onClick={() => setOpen(!open)}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
};
