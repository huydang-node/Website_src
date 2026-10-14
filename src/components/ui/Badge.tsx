import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "brass" | "green" | "outline";

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-q-bg-surface-alt text-q-text-secondary",
  brass: "bg-q-cta-on-inverse-bg text-q-green-800",
  green: "bg-q-green-500 text-q-neutral-0",
  outline:
    "bg-transparent text-q-text-secondary border border-q-border-strong",
};

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
  iconLeft?: React.ReactNode;
}

export function Badge({
  children,
  className,
  variant = "neutral",
  iconLeft,
}: BadgeProps) {
  return (
    <span className={cn("q-badge", variantClasses[variant], className)}>
      {iconLeft}
      {children}
    </span>
  );
}
