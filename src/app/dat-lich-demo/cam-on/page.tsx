/**
 * Trang cảm ơn — /dat-lich-demo/cam-on
 *
 * Hiển thị sau khi submit demo form thành công.
 * Server action redirect về đây.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui";
import { THANK_YOU } from "@/data/demo-form";

export const metadata: Metadata = {
  title: "Cảm ơn bạn, yêu cầu demo đã được gửi",
  description: "Chúng tôi đã nhận được yêu cầu demo của bạn và sẽ liên hệ trong 1 ngày làm việc.",
};

/* Layout revalidation — prevent stale thank-you page */
export const dynamic = "force-dynamic";

export default function CamOnPage() {
  return (
    <main>
      {/* Hero */}
      <Section variant="inverse" className="pt-20 pb-16 md:pt-24 md:pb-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Success icon */}
            <div className="mb-8 inline-flex">
              <div className="w-20 h-20 rounded-full bg-q-neutral-0/10 border border-q-neutral-0/20 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-q-neutral-0"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="text-text-on-inverse mb-4"
              style={{
                fontSize: "var(--q-text-display-size)",
                lineHeight: "var(--q-text-display-line)",
                fontWeight: "var(--q-text-display-weight)",
                letterSpacing: "var(--q-text-display-tracking)",
                color: "var(--q-text-on-inverse)",
              }}
            >
              Cảm ơn — Yêu cầu demo của bạn đã được gửi
            </h1>

            {/* Message */}
            <p className="q-lead text-q-text-on-inverse-muted mb-0">
              {THANK_YOU.message}
            </p>
          </div>
        </Container>
      </Section>

      {/* Next steps */}
      <Section variant="default" className="py-14 md:py-18">
        <Container>
          <div className="max-w-xl mx-auto">
            <h2 className="text-h4 text-q-text-heading font-semibold mb-8 text-center">
              Bước tiếp theo
            </h2>

            <ol className="flex flex-col gap-5">
              {THANK_YOU.nextSteps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="w-8 h-8 rounded-full bg-q-green-800 text-q-neutral-0 text-small font-semibold flex items-center justify-center flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="text-body text-q-text-secondary leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            {/* CTA back to home */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="q-btn q-btn-primary q-btn-lg no-underline text-center"
              >
                Về trang chủ
              </Link>
              <Link
                href="/vi-sao-qortex"
                className="q-btn q-btn-outline q-btn-lg no-underline text-center"
              >
                Tìm hiểu thêm về Qortex
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
