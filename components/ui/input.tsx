import React from "react";

type InputVariant = "default" | "primary" | "danger" | "borderNone";
type InputSize = "sm" | "md" | "lg";

type InputProps = {
  placeholder?: string;
  variant?: InputVariant;
  sizeOpt?: InputSize;
} & React.InputHTMLAttributes<HTMLInputElement>;

const variantClass: Record<InputVariant, string> = {
  default: "ring ring-gray-300 text-sm dark:ring-gray-500",
  primary: "",
  danger: "",
  borderNone: "",
};

const sizeClass: Record<InputSize, string> = {
  sm: "",
  md: "px-5 py-3",
  lg: "",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, variant = "default", sizeOpt = "md", className, ...rest },
    ref
  ) => {
    const base = "w-full aria-invalid:ring-red-500 aria-invalid:outline-red-500";
    const finalClass = `${base} ${variantClass[variant]} ${sizeClass[sizeOpt]} ${className}`;

    return (
      <input
        ref={ref}
        className={finalClass}
        {...rest}
        placeholder={placeholder}
      ></input>
    );
  }
);

Input.displayName = "Input";