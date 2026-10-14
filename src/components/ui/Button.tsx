import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "cta"
  | "outline"
  | "ghost"
  | "on-inverse";

type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  iconLeft,
  iconRight,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "q-btn",
        `q-btn-${variant}`,
        size === "sm" && "q-btn-sm",
        size === "lg" && "q-btn-lg",
        className
      )}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

export type LinkButtonProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  iconLeft,
  iconRight,
  href,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "q-btn",
        `q-btn-${variant}`,
        size === "sm" && "q-btn-sm",
        size === "lg" && "q-btn-lg",
        className
      )}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </a>
  );
}
