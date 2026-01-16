"use client";

import { createContext, useContext, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutSide";

interface PopoverContextType {
  open: boolean;
  setOpen: (v: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}

const PopoverContext = createContext<PopoverContextType | null>(null);

export function PopoverProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside<HTMLDivElement>(wrapperRef, () => setOpen(false));

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      <div ref={wrapperRef} className="relative inline-block">
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export const usePopover = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Popover must be used inside Popover");
  return ctx;
};
