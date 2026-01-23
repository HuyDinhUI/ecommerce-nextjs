"use client";

import { useUIStore } from "@/store/ui.store";
import { AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import Portal from "../portal";

const ModalContainer = ({ children }: { children: ReactNode }) => {
  const { isModal, setOpen } = useUIStore();

  return (
    <>
      <AnimatePresence>
        {isModal && (
          <Portal>
            <div
              onClick={() => setOpen(false, "modal")}
              className="fixed top-0 left-0 w-screen h-screen bg-black/20 z-999"
            ></div>
            {children}
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalContainer;
