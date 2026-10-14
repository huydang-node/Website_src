import { cn } from "@/lib/utils";

type CardVariant = "default" | "inverse" | "spotlight" | "feature" | "stat" | "process";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  as?: "div" | "article" | "section" | "li";
  href?: string;
  ariaLabel?: string;
}

const variantClasses: Record<CardVariant, string> = {
  default: "",
  inverse: "q-inverse",
  spotlight: "rounded-q-xl shadow-q-lg",
  feature: "p-8",
  stat: "border-t-2 border-q-accent p-6",
  process: "border-l-2 border-q-green-800",
};

export function Card({
  children,
  className,
  variant = "default",
  as: Component = "div",
  href,
  ariaLabel,
}: CardProps) {
  const classes = cn("q-card", variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} className={cn(classes, "block no-underline")} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return <Component className={classes}>{children}</Component>;
}
