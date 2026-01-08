"use client";

import { ReactNode, useState } from "react";
import { GoChevronRight } from "react-icons/go";

interface Props {
    label: string
    children: ReactNode
}

export const Collapsible = ({ children, label }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="pt-3">
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <label className="font-bold">{label}</label>
        <GoChevronRight
          size={20}
          className={`${
            isOpen ? "rotate-90" : "rotate-0"
          } transition-transform`}
        />
      </div>
      <div className={`${isOpen ? "min-h-20" : "h-0 overflow-hidden"} mt-3`}>{children}</div>
    </div>
  );
};
