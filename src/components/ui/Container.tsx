import { cn } from "@/lib/utils";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
}

export function Container({
  children,
  className,
  narrow = false,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        narrow ? "q-container-narrow" : "q-container",
        className
      )}
    >
      {children}
    </Component>
  );
}
