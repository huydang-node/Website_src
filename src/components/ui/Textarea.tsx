import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helper?: string;
  error?: string;
  required?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { label, helper, error, required, id, className, rows = 4, ...rest },
    ref
  ) {
    const taId =
      id ?? `q-textarea-${rest.name ?? Math.random().toString(36).slice(2, 9)}`;
    const helperId = helper ? `${taId}-helper` : undefined;
    const errorId = error ? `${taId}-error` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={taId}
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
        <textarea
          ref={ref}
          id={taId}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          aria-required={required || undefined}
          className={cn(
            "q-input min-h-[120px] py-3 resize-y",
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
            className="mt-2 text-caption text-q-danger"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
