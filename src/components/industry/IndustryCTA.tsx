/**
 * IndustryCTA — CTA section cuối trang ngành.
 * "Demo theo ngành" với messaging riêng.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import Link from "next/link";

interface IndustryCTAProps {
  industryName: string;
  ctaText: string;
}

/**
 * IndustryCTA section — CTA cuối trang ngành.
 * Hiển thị với background inverse (dark green) để tạo contrast.
 */
export function IndustryCTA({ industryName, ctaText }: IndustryCTAProps) {
  return (
    <Section variant="inverse" id="dat-demo">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-q-h2 text-q-text-on-inverse mb-4">
            Xem Qortex xử lý bài toán {industryName.toLowerCase()}
          </h2>

          {/* Subtext */}
          <p className="q-lead text-q-text-on-inverse-muted mb-8">
            Chúng tôi sẽ chạy một quy trình mẫu phù hợp với đặc thù {industryName.toLowerCase()} của bạn —
            ngay trong buổi demo 60 phút.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dat-lich-demo"
              className="q-btn q-btn-cta q-btn-lg inline-flex items-center gap-2 no-underline min-w-[220px] justify-center"
            >
              {ctaText}
              <ArrowIcon />
            </Link>
            <Link
              href="/giai-phap"
              className="q-btn q-btn-on-inverse q-btn-lg inline-flex items-center gap-2 no-underline min-w-[220px] justify-center"
            >
              Xem ngành khác
            </Link>
          </div>

          {/* Note */}
          <p className="text-caption text-q-text-on-inverse-muted mt-6 opacity-70">
            Không cần chuẩn bị trước. Demo miễn phí.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
