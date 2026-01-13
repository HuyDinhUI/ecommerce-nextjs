"use client";
import { IoCheckmark } from "react-icons/io5";

interface Props {
  size?: "sm" | "md" | "lg";
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const SIZE_CLASSES: Record<string, string> = {
  sm: "w-4 h-4",
  md: "w-7 h-7",
  lg: "w-9 h-9",
};

export const Checkbox = ({ onCheckedChange, checked, size = "md" }: Props) => {
  return (
    <label className="cursor-pointer">
      <input
        name="v1"
        type="checkbox"
        hidden
        checked={checked}
        onChange={(e) => {
          onCheckedChange(e.target.checked);
        }}
      />

      <div className={`ring ring-gray-400 ${SIZE_CLASSES[size]} flex items-center justify-center`}>
        {checked && <IoCheckmark />}
      </div>
    </label>
  );
};
