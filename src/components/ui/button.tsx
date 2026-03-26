"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "filled" | "outlined" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  filled:
    "bg-champagne text-midnight hover:bg-champagne-light active:bg-champagne",
  outlined:
    "border border-champagne text-champagne hover:bg-champagne/10 active:bg-champagne/5",
  ghost:
    "text-stone-500 hover:text-midnight hover:bg-stone-100 active:bg-stone-200",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[11px]",
  md: "px-6 py-3 text-[13px]",
  lg: "px-8 py-4 text-[13px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled", size = "md", href, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium uppercase tracking-[0.1em] rounded-[4px] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
