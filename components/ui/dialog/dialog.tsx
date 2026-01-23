"use client";

import { ReactNode } from "react";
import DialogContainer from "./dialog-container";
import DialogContent from "./dialog-content";
import { DialogProvider } from "./dialog-provider";
import { DialogTrigger } from "./dialog-trigger";

type Size = "sm" | "md" | "lg";

interface DialogProps {
  trigger: ReactNode;
  children: ReactNode;
  size: Size;
}

const Dialog = ({ children, trigger, size = "md" }: DialogProps) => {
  return (
    <DialogProvider>
      <DialogTrigger>{trigger}</DialogTrigger>

      <DialogContainer>
        <DialogContent size={size}>{children}</DialogContent>
      </DialogContainer>
    </DialogProvider>
  );
};

export default Dialog
