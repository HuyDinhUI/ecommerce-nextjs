import * as React from "react";
import clsx from "clsx";

export interface RadioCardProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  title: string;
  description?: string;
  disabled?: boolean;
}

export function RadioCard({
  value,
  checked,
  onChange,
  title,
  description,
  disabled,
}: RadioCardProps) {
  return (
    <label
      className={clsx(
        "relative block cursor-pointer border p-4 transition",
        checked
          ? "border-black bg-black/5"
          : "border-gray-300 hover:border-black",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <input
        type="radio"
        className="sr-only"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
      />

      <div className="flex gap-3 items-start">
        <div
          className={clsx(
            "mt-1 h-4 w-4 rounded-full border flex items-center justify-center",
            checked ? "border-black" : "border-gray-400"
          )}
        >
          {checked && (
            <div className="h-2 w-2 rounded-full bg-black" />
          )}
        </div>

        <div>
          <p className="font-medium">{title}</p>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </label>
  );
}
