import { cn } from "@/lib/utils";

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  onInverse?: boolean;
  as?: "p" | "span" | "div";
}

export function Eyebrow({
  children,
  className,
  onInverse = false,
  as: Component = "p",
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "q-eyebrow",
        onInverse && "text-q-cta-on-inverse-bg",
        className
      )}
    >
      {children}
    </Component>
  );
}
