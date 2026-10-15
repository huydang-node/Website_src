/**
 * WhyHero — Hero section cho trang Vì sao Qortex.
 * Giới thiệu mục đích trang so sánh.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import Link from "next/link";

export function WhyHero() {
  return (
    <Section variant="default" className="pt-16 pb-12 md:pt-20 md:pb-16">
      <Container>
        {/* Heading */}
        <h1
          className="text-q-text-heading mb-6 max-w-3xl"
          style={{
            fontSize: "var(--q-text-display-size)",
            lineHeight: "var(--q-text-display-line)",
            fontWeight: "var(--q-text-display-weight)",
            letterSpacing: "var(--q-text-display-tracking)",
          }}
        >
          Qortex ở đâu trong bức tranh lựa chọn?
        </h1>

        {/* Subtitle */}
        <p
          className="q-lead text-q-text-secondary max-w-2xl mb-8"
          style={{
            fontSize: "var(--q-text-lead-size)",
            lineHeight: "var(--q-text-lead-line)",
          }}
        >
          Không phải ERP nào cũng giống nhau. Mỗi nhóm giải pháp có điểm mạnh và
          giới hạn khác nhau — phù hợp với những loại doanh nghiệp khác nhau. Trang này
          giúp bạn hiểu Qortex đang ở đâu trong bức tranh đó.
        </p>

        {/* CTA */}
        <Link
          href="/dat-lich-demo"
          className="q-btn q-btn-cta q-btn-lg inline-flex items-center gap-2 no-underline"
        >
          Đặt lịch demo
          <ArrowIcon />
        </Link>
      </Container>
    </Section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
