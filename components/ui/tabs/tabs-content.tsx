"use client";

import { useTabs } from "./tabs";

export function TabsContent({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const { value: active } = useTabs();

  return (
    <div hidden={active !== value} className="pt-4">
      {children}
    </div>
  );
}
