"use client";

import { AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import Portal from "../portal";
import { useDialog } from "./dialog-provider";

const DialogContainer = ({ children }: { children: ReactNode }) => {
  const { open, setOpen } = useDialog();
  return (
    <>
      <AnimatePresence>
        {open && (
          <Portal>
            <div
              onClick={() => setOpen(false)}
              className="fixed top-0 left-0 w-screen h-screen bg-black/20 z-999"
            ></div>
            {children}
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default DialogContainer;
