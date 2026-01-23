"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from "react";

interface DialogContextType {
  open: boolean;
  setOpen: (v: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}

const DialogContext = createContext<DialogContextType | null>(null);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <DialogContext.Provider value={{ open, setOpen, triggerRef }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Popover must be used inside Popover");
  return ctx;
};
