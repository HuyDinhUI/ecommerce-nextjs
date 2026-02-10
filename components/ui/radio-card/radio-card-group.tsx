import React from "react";
import { RadioCardProps } from "./radio-card-item";

interface RadioGroupProps {
  children:
    | React.ReactElement<RadioCardProps>
    | React.ReactElement<RadioCardProps>[]
    | React.ReactNode;
}

export function RadioGroup({ children }: RadioGroupProps) {
  return (
    <div className="grid gap-3">
      {children}
    </div>
  );
}
