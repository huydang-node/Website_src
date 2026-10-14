import { cn } from "@/lib/utils";

export interface TagProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  industry?: "khach-san" | "san-xuat" | "ban-le" | "dich-vu";
}

const industryDot: Record<NonNullable<TagProps["industry"]>, string> = {
  "khach-san": "bg-q-green-500",
  "san-xuat": "bg-q-brass-500",
  "ban-le": "bg-q-green-800",
  "dich-vu": "bg-q-green-600",
};

export function Tag({ children, className, href, industry }: TagProps) {
  const classes = cn("q-tag gap-1.5", className);

  const content = (
    <>
      {industry && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full", industryDot[industry])}
          aria-hidden="true"
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(classes, "no-underline")}>
        {content}
      </a>
    );
  }

  return <span className={classes}>{content}</span>;
}
