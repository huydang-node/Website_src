import { cn } from "@/lib/utils";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "surface" | "inverse" | "alt" | "warm";
  tight?: boolean;
  id?: string;
  as?: "section" | "div" | "article";
}

export function Section({
  children,
  className,
  variant = "default",
  tight = false,
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        tight ? "q-section-tight" : "q-section",
        {
          "bg-q-bg-page": variant === "default",
          "bg-q-bg-surface": variant === "surface",
          "bg-q-bg-page-alt": variant === "alt" || variant === "warm",
          "q-inverse": variant === "inverse",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
