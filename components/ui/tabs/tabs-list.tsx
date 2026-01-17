"use client";

import clsx from "clsx";

export function TabsList({ children, classname }: { children: React.ReactNode, classname?: string }) {
  return (
    <div className={clsx("flex",classname)}>
      {children}
    </div>
  );
}
