"use client"

import type { ReactNode } from 'react';
import React from 'react';

type ButtonVariant = 'default' | 'primary' | 'danger' | 'outline' | 'dark' | 'icon' | 'transparent' | 'item';
type ButtonSize = 'sm' | 'md' | 'lg' | 'ic' | 'lb';

type ButtonProps = {
    title?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    icon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // Thêm các props như onClick, type,...

const variantClass: Record<ButtonVariant, string> = {
    default: 'bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-200/50',
    primary: 'bg-blue-500 hover:bg-blue-600 text-white dark:border dark:border-white dark:hover:border-purple-500 dark:hover:bg-transparent dark:bg-transparent',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    dark: 'bg-black hover:bg-black/80 text-white dark:bg-gray-200 dark:text-black dark:hover:bg-white',
    outline: 'ring ring-gray-300 dark:ring-gray-500 hover:bg-white/10',
    icon: 'rounded-full hover:bg-black/80',
    transparent: 'bg-transparent',
    item: 'bg-transparent dark:text-gray-300'
};

const sizeClass: Record<ButtonSize, string> = {
    sm: 'py-1 px-2 text-[10px]',
    md: 'text-base py-2 px-2',
    lg: 'px-5 py-3 text-lg',
    ic: 'p-2',
    lb: ''
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            title,
            variant = 'default',
            size = 'md',
            disabled = false,
            icon,
            className,
            ...rest
        },
        ref
    ) => {
        const base = 'gap-2 transition duration-200 font-bold box-border flex items-center';
        const finalClass = `${base} ${variantClass[variant]} ${sizeClass[size]} ${variant === "icon" && "justify-center"} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className ?? ''}`;

        return (
            <button ref={ref} className={finalClass} disabled={disabled} {...rest}>
                {icon && <span className='flex justify-center'>{icon}</span>}
                {title && variant !== 'icon' && <span>{title}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';
