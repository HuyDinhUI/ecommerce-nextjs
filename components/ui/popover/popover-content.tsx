"use client";

import clsx from "clsx";
import { usePopover } from "./popover-provider";

export function PopoverContent({
  children,
  position = "bottom",
}: {
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}) {
  const { open } = usePopover();

  if (!open) return null;

  const positionClass = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  };

  return (
    <div
      className={clsx(
        "absolute z-50 min-w-50 rounded-md bg-white p-3 shadow-lg",
        "animate-popover",
        positionClass[position]
      )}
    >
      {children}
    </div>
  );
}
