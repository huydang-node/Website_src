type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Record<string, boolean | null | undefined>
  | ClassValue[];

function flatten(value: ClassValue, out: string[]) {
  if (!value && value !== 0) return;
  if (Array.isArray(value)) {
    value.forEach((v) => flatten(v, out));
    return;
  }
  if (typeof value === "string") {
    out.push(value);
    return;
  }
  if (typeof value === "number") {
    out.push(String(value));
    return;
  }
  if (typeof value === "object") {
    for (const key of Object.keys(value)) {
      if (value[key]) out.push(key);
    }
  }
}

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  inputs.forEach((v) => flatten(v, out));
  return out.join(" ");
}
