"use client";

import { usePopover } from "./popover-provider";

export function PopoverTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, setOpen, triggerRef } = usePopover();

  return (
    <div
      ref={triggerRef}
      onClick={() => setOpen(!open)}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}
