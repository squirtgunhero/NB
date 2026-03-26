import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "font-body text-[12px] font-medium uppercase tracking-[0.15em] mb-4",
            dark ? "text-champagne" : "text-champagne"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-normal",
          dark ? "text-ivory" : "text-midnight"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-stone-400" : "text-stone-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
