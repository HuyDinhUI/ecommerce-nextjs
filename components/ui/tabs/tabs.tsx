"use client";

import { createContext, useContext, useState } from "react";

interface TabsContextType {
  value: string;
  setValue: (v: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: any) => void;
  children: React.ReactNode;
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const value = controlledValue ?? internalValue;

  const setValue = (v: string) => {
    onValueChange?.(v);
    if (controlledValue === undefined) {
      setInternalValue(v);
    }
  };

  return (
    <TabsContext.Provider value={{ value: value!, setValue }}>
      {children}
    </TabsContext.Provider>
  );
}

export const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs must be used inside Tabs");
  return ctx;
};
