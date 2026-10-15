import { Section, Container } from "@/components/ui";
import Link from "next/link";

const TRUST_SIGNALS = [
  {
    id: "depth",
    title: "Chiều sâu nghiệp vụ",
    description:
      "Xử lý tình huống khó: trả hàng một phần, chênh lệch tỷ giá, khóa sổ kỳ, đối chiếu công nợ đa cấp. Không phải phần mềm 'nông' chỉ quản lý được vài nghiệp vụ đơn giản.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "proven",
    title: "Lõi ERP đã kiểm chứng",
    description:
      "Nền tảng Qortex Books được xây dựng và vận hành nhiều năm, xử lý hàng nghìn chứng từ mỗi ngày. Kiến trúc mở, sẵn sàng mở rộng theo nhu cầu doanh nghiệp.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "team",
    title: "Đội ngũ sáng lập",
    description:
      "Kiến trúc sư phần mềm doanh nghiệp — những người đã triển khai ERP cho doanh nghiệp lớn, hiểu cả góc nhìn nghiệp vụ lẫn kỹ thuật. Không phải đội ngũ chỉ biết lập trình.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function TrustSignalsSection() {
  return (
    <Section id="trust-signals" variant="warm">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-q-h2 text-q-text-heading">
            Vì sao tin tưởng Qortex
          </h2>
          <p className="q-lead mt-4 text-q-text-secondary">
            Khi chưa có khách hàng vận hành để tham khảo, hãy nhìn vào nền tảng
            và con người.
          </p>
        </div>

        {/* Horizontal strip — dividers between items */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-q-border max-w-4xl mx-auto">
          {TRUST_SIGNALS.map((signal) => (
            <div
              key={signal.id}
              className="py-8 px-6 first:pl-0 last:pr-0 first:py-0 last:py-0 md:py-0"
            >
              <div className="text-center">
                {/* Icon — inline, no circle wrapper */}
                <div className="inline-flex text-q-green-600 mb-4">
                  {signal.icon}
                </div>
                <h3 className="text-h5 text-q-text-primary mb-2 font-semibold">
                  {signal.title}
                </h3>
                <p className="text-small text-q-text-secondary leading-relaxed">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* About link */}
        <div className="mt-10 text-center">
          <Link
            href="/ve-chung-toi"
            className="inline-flex items-center gap-2 text-body text-q-link hover:text-q-brass-700 font-semibold transition-colors"
          >
            Tìm hiểu về đội ngũ Qortex
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
