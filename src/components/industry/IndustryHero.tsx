/**
 * IndustryHero — Hero section cho trang ngành.
 * Hiển thị tên ngành + bài toán đặc thù.
 *
 * Variants:
 * - "overview" — hero cho trang overview 4 ngành
 * - "detail"  — hero cho trang chi tiết từng ngành
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";

interface IndustryHeroProps {
  variant?: "overview" | "detail";
  industry?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    href: string;
    ctaText: string;
  };
}

/* ─── Overview variant ─── */
export function IndustryHeroOverview() {
  return (
    <Section variant="default" className="pt-16 pb-12 md:pt-20 md:pb-16">
      <Container>
        {/* Eyebrow */}
        <p className="q-eyebrow mb-4">Giải pháp theo ngành</p>

        {/* Heading */}
        <h1
          className="text-q-display text-q-text-heading mb-6 max-w-2xl"
          style={{ fontSize: "var(--q-text-display-size)", lineHeight: "var(--q-text-display-line)" }}
        >
          Mỗi ngành có bài toán riêng — Qortex hiểu và xử lý đúng trọng tâm
        </h1>

        {/* Subtitle */}
        <p
          className="q-lead text-q-text-secondary max-w-2xl"
          style={{ fontSize: "var(--q-text-lead-size)", lineHeight: "var(--q-text-lead-line)" }}
        >
          Bốn ngành đại diện cho bốn nhóm bài toán phổ biến của doanh nghiệp Việt Nam.
          Chọn ngành của bạn để xem Qortex xử lý như thế nào.
        </p>
      </Container>
    </Section>
  );
}

/* ─── Detail variant (dùng trong [slug]/page.tsx) ─── */
export function IndustryHeroDetail({
  eyebrow,
  title,
  subtitle,
  ctaText,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaText: string;
}) {
  return (
    <Section variant="default" className="pt-16 pb-12 md:pt-20 md:pb-16">
      <Container>
        {/* Back link */}
        <Link
          href="/giai-phap"
          className="inline-flex items-center gap-2 text-small text-q-text-muted hover:text-q-link transition-colors mb-8 no-underline"
        >
          <BackArrow />
          Tất cả giải pháp theo ngành
        </Link>

        {/* Eyebrow */}
        <p className="q-eyebrow mb-4">{eyebrow}</p>

        {/* Heading */}
        <h1
          className="text-q-text-heading mb-6 max-w-3xl"
          style={{ fontSize: "var(--q-text-display-size)", lineHeight: "var(--q-text-display-line)", fontWeight: "var(--q-text-display-weight)", letterSpacing: "var(--q-text-display-tracking)" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="q-lead text-q-text-secondary max-w-2xl mb-8"
          style={{ fontSize: "var(--q-text-lead-size)", lineHeight: "var(--q-text-lead-line)" }}
        >
          {subtitle}
        </p>

        {/* CTA */}
        <Link href="/dat-lich-demo" className="q-btn q-btn-cta q-btn-lg inline-flex no-underline">
          {ctaText}
          <ArrowRight />
        </Link>
      </Container>
    </Section>
  );
}

/* ─── Industry hero factory — chọn variant theo prop ─── */
export function IndustryHero(props: IndustryHeroProps) {
  if (props.variant === "overview") {
    return <IndustryHeroOverview />;
  }
  if (props.industry) {
    return (
      <IndustryHeroDetail
        eyebrow={props.industry.eyebrow}
        title={props.industry.title}
        subtitle={props.industry.subtitle}
        ctaText={props.industry.ctaText}
      />
    );
  }
  return null;
}

/* ─── Helpers ─── */
function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
