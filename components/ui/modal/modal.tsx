"use client";

import { ReactNode } from "react";
import ModalContainer from "./modal-container";
import ModalContent from "./modal-content";

interface ModalProps {
  children: ReactNode;
  size: "sm" | "md" | "lg";
}

const Modal = ({ children, size = "md" }: ModalProps) => {
  return (
    <ModalContainer>
      <ModalContent size={size}>{children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;
