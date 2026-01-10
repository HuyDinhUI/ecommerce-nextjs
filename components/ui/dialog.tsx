"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosClose } from "react-icons/io";

type Size = "sm" | "md" | "lg";

type DialogProps = {
  trigger: ReactNode;
  children: ReactNode;
  handleClose?: () => void;
  close?: boolean;
  size?: Size;
};

const SizeOptions = {
  sm: "w-200",
  md: "w-300 min-h-100",
  lg: "w-400",
};

function Portal({ children }: { children: React.ReactNode }) {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
}

export const Dialog = ({
  children,
  trigger,
  handleClose,
  close = false,
  size = "md",
}: DialogProps) => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(close);

  useEffect(() => {
    setIsOpenDialog(close);
  }, [close]);

  useEffect(() => {
    if (isOpenDialog) {
      console.log("open dialog");
      document.body.style.overflow = "hidden";
    } else {
      console.log("close dialog");
      document.body.style.overflow = "auto";
    }
  }, [isOpenDialog]);

  return (
    <div>
      <div onClick={() => setIsOpenDialog(true)} className="trigger w-full">
        {trigger}
      </div>
      {isOpenDialog && (
        <Portal>
          <div className="fixed top-0 left-0 w-screen h-screen bg-black/20 z-999"></div>
          <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url(/noisy_background.png)] bg-white dark:bg-card ${SizeOptions[size]} z-999`}
          >
            {children}

            <button
              onClick={() => {
                if (handleClose) {
                  handleClose();
                }
                setIsOpenDialog(false);
              }}
              className="bg-white rounded-full absolute top-3 right-3 p-1 cursor-pointer"
            >
              <IoIosClose color="black" size={30} />
            </button>
          </div>
        </Portal>
      )}
    </div>
  );
};
