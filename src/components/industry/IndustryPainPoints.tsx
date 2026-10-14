/**
 * IndustryPainPoints — Section hiển thị 3 bài toán đặc thù của từng ngành.
 * Dùng trong trang chi tiết ngành.
 */
import React from "react";
import { Section, Container, Card } from "@/components/ui";
import { PainPoint } from "@/data/industries";

/* ─── Icon mapping ─── */
function PainPointIcon({ type }: { type: PainPoint["icon"] }) {
  const cls = "w-10 h-10 flex-shrink-0 text-q-green-800";
  switch (type) {
    case "dispersed":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
          <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
        </svg>
      );
    case "manual":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" />
        </svg>
      );
    case "compliance":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "cost":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "tracking":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "quality":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01" />
        </svg>
      );
    case "multi-store":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "pos":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      );
    case "contract":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      );
  }
}

interface IndustryPainPointsProps {
  painPoints: PainPoint[];
}

/**
 * IndustryPainPoints section — 3 thẻ bài toán đặc thù.
 * Variants:
 * - "overview" — 2 thẻ ngắn (dùng trong overview grid)
 * - "detail"   — 3 thẻ đầy đủ (dùng trong trang chi tiết)
 */
export function IndustryPainPoints({ painPoints }: IndustryPainPointsProps) {
  return (
    <Section variant="surface" id="bai-toan">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl mb-10">
          <p className="q-eyebrow mb-3">Bài toán đặc thù</p>
          <h2 className="text-q-h2 text-q-text-heading">
            Thực trạng phổ biến trong ngành này
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="q-card p-6 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-q-md bg-q-bg-surface-alt flex items-center justify-center">
                <PainPointIcon type={point.icon} />
              </div>

              {/* Title */}
              <h3 className="text-h5 text-q-text-heading font-semibold leading-snug">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-body text-q-text-secondary leading-relaxed flex-1">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Short pain point card cho overview grid ─── */
interface IndustryPainCardProps {
  title: string;
  description: string;
  dotColor: "green" | "brass" | "dark" | "accent";
}

const dotColorClasses: Record<IndustryPainCardProps["dotColor"], string> = {
  green: "bg-q-green-600",
  brass: "bg-q-brass-500",
  dark: "bg-q-neutral-700",
  accent: "bg-q-accent",
};

export function IndustryPainCard({ title, description, dotColor }: IndustryPainCardProps) {
  return (
    <div className="q-card p-5 flex flex-col gap-2">
      {/* Color dot + title */}
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColorClasses[dotColor]}`} aria-hidden="true" />
        <h4 className="text-small font-semibold text-q-text-primary leading-snug">
          {title}
        </h4>
      </div>
      <p className="text-small text-q-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
