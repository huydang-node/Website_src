/**
 * Đặt lịch demo — /dat-lich-demo
 *
 * Mục đích: thu thông tin khách tiềm năng.
 *
 * Sections:
 * 1. DemoHero — heading + trust signals
 * 2. DemoForm — 9 fields, server action
 *
 * ⚠️ Open Questions:
 *   - Email nhận lead
 *   - Captcha provider
 *   - Lead storage / CRM
 *   - Thời gian phản hồi chính xác
 */
import type { Metadata } from "next";
import { Section, Container } from "@/components/ui";
import { DemoForm } from "@/components/demo/DemoForm";

export const metadata: Metadata = {
  title: "Đặt lịch demo",
  description:
    "Đặt lịch demo Qortex — chạy quy trình thật của doanh nghiệp bạn trên hệ thống thực. Không cần chuẩn bị trước.",
};

export default function DatLichDemoPage() {
  return (
    <main>
      {/* Hero */}
      <Section variant="default" className="pt-14 pb-10 md:pt-18 md:pb-12">
        <Container>
          <div className="max-w-xl">
            <h1
              className="text-q-text-heading mb-4"
              style={{
                fontSize: "var(--q-text-display-size)",
                lineHeight: "var(--q-text-display-line)",
                fontWeight: "var(--q-text-display-weight)",
                letterSpacing: "var(--q-text-display-tracking)",
              }}
            >
              Demo — Chạy thử Qortex với quy trình thật của bạn
            </h1>
            <p
              className="q-lead text-q-text-secondary"
              style={{
                fontSize: "var(--q-text-lead-size)",
                lineHeight: "var(--q-text-lead-line)",
              }}
            >
              Buổi demo 60 phút, trực tiếp trên hệ thống thật. Không cần chuẩn bị slide
              hay báo cáo — chỉ cần một quy trình bạn đang làm hằng ngày.
            </p>
          </div>
        </Container>
      </Section>

      {/* Trust bar */}
      <div className="bg-q-bg-surface border-y border-q-border py-4">
        <Container>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <TrustItem icon={<CheckIcon />} text="Không phải demo có sẵn" />
            <TrustItem icon={<CheckIcon />} text="Không cần chuẩn bị dữ liệu" />
            <TrustItem icon={<CheckIcon />} text="60 phút, trực tiếp trên hệ thống thật" />
            <TrustItem icon={<CheckIcon />} text="Miễn phí" />
          </div>
        </Container>
      </div>

      {/* Form + what to expect */}
      <Section variant="default" className="py-12 md:py-16">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-20 items-start">
            {/* Form — chiếm 3/5 trên lg */}
            <div className="lg:col-span-3">
              <DemoForm />
            </div>

            {/* Sidebar info — chiếm 2/5 trên lg */}
            <aside className="lg:col-span-2">
              <div className="q-card p-6 sticky top-24">
                <h2 className="text-h5 text-q-text-heading font-semibold mb-4">
                  Demo gồm những gì?
                </h2>
                <ul className="flex flex-col gap-3">
                  <ExpectItem
                    step={1}
                    title="Xác nhận lịch"
                    description="Chúng tôi liên hệ trong 1 ngày làm việc để chọn thời gian phù hợp."
                  />
                  <ExpectItem
                    step={2}
                    title="Chuẩn bị tài khoản"
                    description="Bạn nhận tài khoản dùng thử trước buổi demo 1 ngày."
                  />
                  <ExpectItem
                    step={3}
                    title="Buổi demo 60 phút"
                    description="Chạy 1-2 quy trình thật của doanh nghiệp bạn — đơn mua, hóa đơn, kho, sổ sổ cái."
                  />
                  <ExpectItem
                    step={4}
                    title="Đánh giá & next step"
                    description="Kết thúc buổi demo, bạn có bảng đánh giá nhanh Qortex phù hợp với doanh nghiệp đến đâu."
                  />
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}

/* ─── Trust bar item ─── */
function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-2 text-small text-q-text-secondary font-medium">
      {icon}
      {text}
    </li>
  );
}

/* ─── What to expect item ─── */
function ExpectItem({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <span
        className="w-7 h-7 rounded-full bg-q-green-800 text-q-neutral-0 text-small font-semibold flex items-center justify-center flex-shrink-0 mt-0.5"
        aria-hidden="true"
      >
        {step}
      </span>
      <div className="flex flex-col gap-0.5">
        <p className="text-small font-semibold text-q-text-heading">{title}</p>
        <p className="text-caption text-q-text-muted leading-relaxed">{description}</p>
      </div>
    </li>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-q-green-800 flex-shrink-0"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
