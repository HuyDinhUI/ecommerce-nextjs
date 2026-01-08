"use client";
import { IoCheckmark } from "react-icons/io5";

interface Props {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const Checkbox = ({ onCheckedChange, checked }: Props) => {
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

      <div className="ring ring-gray-400 w-7 h-7 flex items-center justify-center">
        {checked && <IoCheckmark />}
      </div>
    </label>
  );
};
