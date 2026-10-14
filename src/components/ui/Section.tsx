import { cn } from "@/lib/utils";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "surface" | "inverse" | "alt";
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
          "q-inverse": variant === "inverse",
          "bg-q-bg-surface-alt": variant === "alt",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
