import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500 mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-3 bg-white border border-stone-200 text-midnight placeholder:text-stone-400 text-[15px] transition-colors duration-200 focus:border-champagne focus:outline-none",
            error && "border-error",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-[12px] text-error">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500 mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-3 bg-white border border-stone-200 text-midnight placeholder:text-stone-400 text-[15px] transition-colors duration-200 focus:border-champagne focus:outline-none resize-y min-h-[120px]",
            error && "border-error",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-[12px] text-error">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500 mb-2"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-3 bg-white border border-stone-200 text-midnight text-[15px] transition-colors duration-200 focus:border-champagne focus:outline-none appearance-none",
            error && "border-error",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-[12px] text-error">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
