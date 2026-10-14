/**
 * IndustryOverview — Grid 4 thẻ ngành cho trang /giai-phap.
 *
 * Sử dụng dữ liệu từ industries.ts để render overview grid.
 * Mỗi thẻ có: icon, tên ngành, bài toán, link đến trang chi tiết.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";

/* ─── Icon mapping ─── */
function IndustryIcon({ slug }: { slug: string }) {
  const cls = "w-8 h-8 text-q-neutral-0";
  switch (slug) {
    case "khach-san":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
          <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
          <path d="M8 7h.01M16 7h.01M12 7h.01M12 11h.01M16 11h.01M8 11h.01" />
        </svg>
      );
    case "san-xuat":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
          <path d="M17 18h1M12 18h1M7 18h1" />
        </svg>
      );
    case "ban-le":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "dich-vu-hop-dong":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─── Dot colors ─── */
const dotColorClasses: Record<string, string> = {
  green: "bg-q-green-600",
  brass: "bg-q-brass-500",
  dark: "bg-q-neutral-700",
  accent: "bg-q-accent",
};

/* ─── HeroTitle mapping ─── */
const heroTitles: Record<string, string> = {
  "khach-san": "Kế toán khách sạn liền mạch từ đặt phòng đến sổ cái",
  "san-xuat": "Giá thành chính xác, kế hoạch vật tư đồng bộ",
  "ban-le": "Nhiều cửa hàng, một hệ thống — tồn kho và doanh thu thống nhất",
  "dich-vu-hop-dong": "Theo dõi hợp đồng dịch vụ từ ký kết đến nghiệm thu và công nợ",
};

/**
 * IndustryOverview — grid 4 thẻ ngành cho trang /giai-phap.
 */
export function IndustryOverview() {
  return (
    <Section variant="default" className="pt-10 pb-24">
      <Container>
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.slug}
              href={industry.href}
              className="group q-card p-7 flex flex-col gap-5 no-underline hover:border-q-border-strong hover:bg-q-bg-surface-alt transition-colors duration-200"
              aria-label={`Xem giải pháp cho ngành ${industry.name}`}
            >
              {/* Icon + dot */}
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-q-lg bg-q-green-800 flex items-center justify-center`}>
                  <IndustryIcon slug={industry.slug} />
                </div>
                <span
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-2 ${dotColorClasses[industry.dotColor]}`}
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <div>
                <h3 className="text-h4 text-q-text-heading mb-2">
                  {industry.name}
                </h3>
                <p className="text-small text-q-text-muted leading-snug">
                  {heroTitles[industry.slug]}
                </p>
              </div>

              {/* Pain summary — 2 pain points */}
              <div className="flex flex-col gap-2">
                {industry.painPoints.slice(0, 2).map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5 text-q-neutral-400" aria-hidden="true">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <p className="text-small text-q-text-secondary leading-snug">
                      {point.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-q-border mt-auto">
                <span className="text-small text-q-link font-semibold group-hover:text-q-brass-700 transition-colors">
                  Xem chi tiết giải pháp
                </span>
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-q-text-muted group-hover:text-q-green-800 transition-colors" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
