import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type InputSize = "md" | "sm";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helper?: string;
  error?: string;
  required?: boolean;
  inputSize?: InputSize;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helper,
    error,
    required,
    inputSize = "md",
    id,
    className,
    ...rest
  },
  ref
) {
  const inputId = id ?? `q-input-${rest.name ?? Math.random().toString(36).slice(2, 9)}`;
  const helperId = helper ? `${inputId}-helper` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-small font-semibold text-q-text-heading mb-2"
        >
          {label}
          {required && (
            <span className="text-q-danger ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        className={cn(
          "q-input",
          inputSize === "sm" && "min-h-[40px] py-2 text-small",
          error && "border-2 border-q-danger",
          className
        )}
        {...rest}
      />
      {helper && !error && (
        <p id={helperId} className="mt-2 text-caption text-q-text-muted">
          {helper}
        </p>
      )}
      {error && (
        <p
          id={errorId}
          className="mt-2 text-caption text-q-danger flex items-center gap-1"
          role="alert"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
});
