import { ReactNode } from "react";
import { PopoverContent } from "./popover-content";
import { PopoverProvider } from "./popover-provider";
import { PopoverTrigger } from "./popover-trigger";

interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  position: "top" | "bottom" | "left" | "right";
}

const Popover = ({ children,trigger, position = "bottom" }: PopoverProps) => {
  return (
    <PopoverProvider>
      <PopoverTrigger>{trigger}</PopoverTrigger>

      <PopoverContent position={position}>{children}</PopoverContent>
    </PopoverProvider>
  );
};

export default Popover;
