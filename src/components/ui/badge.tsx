import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "champagne" | "dark";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em]",
        variant === "default" && "bg-stone-100 text-stone-600",
        variant === "champagne" && "bg-champagne/15 text-champagne",
        variant === "dark" && "bg-midnight text-ivory",
        className
      )}
    >
      {children}
    </span>
  );
}
