import { cn } from "@/lib/utils";

export interface DividerProps {
  className?: string;
  onInverse?: boolean;
}

export function Divider({ className, onInverse = false }: DividerProps) {
  return (
    <hr
      role="separator"
      className={cn(
        "h-px border-0",
        onInverse ? "bg-q-border-on-inverse" : "bg-q-border",
        className
      )}
    />
  );
}
