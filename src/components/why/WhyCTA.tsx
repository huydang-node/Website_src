/**
 * WhyCTA — CTA section cuối trang Why Qortex.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import Link from "next/link";

export function WhyCTA() {
  return (
    <Section variant="inverse" id="dat-demo">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-q-h2 text-q-text-on-inverse mb-4">
            Muốn biết Qortex phù hợp không — dùng thử 60 phút
          </h2>
          <p className="q-lead text-q-text-on-inverse-muted mb-8">
            Chúng tôi chạy quy trình thật của doanh nghiệp bạn trên Qortex,
            ngay trong buổi demo. Không cần chuẩn bị trước.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dat-lich-demo"
              className="q-btn q-btn-cta q-btn-lg inline-flex items-center gap-2 no-underline min-w-[220px] justify-center"
            >
              Đặt lịch demo
              <ArrowIcon />
            </Link>
            <Link
              href="/giai-phap"
              className="q-btn q-btn-on-inverse q-btn-lg inline-flex items-center gap-2 no-underline min-w-[220px] justify-center"
            >
              Xem giải pháp theo ngành
            </Link>
          </div>
        </div>
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
