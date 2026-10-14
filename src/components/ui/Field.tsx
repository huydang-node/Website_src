import { cn } from "@/lib/utils";

export type FieldProps = {
  label?: string;
  required?: boolean;
} & (
  | { kind: "input"; children: React.ReactNode }
  | { kind: "select"; children: React.ReactNode }
  | { kind: "textarea"; children: React.ReactNode }
);

export function Field({ label, required, children }: FieldProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-small font-semibold text-q-text-heading mb-2">
          {label}
          {required && (
            <span className="text-q-danger ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      {children}
    </div>
  );
}
