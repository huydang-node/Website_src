import { Section, Container, Eyebrow, LinkButton } from "@/components/ui";
import Link from "next/link";

const TRUST_SIGNALS = [
  {
    id: "depth",
    title: "Chiều sâu nghiệp vụ",
    description:
      "Xử lý tình huống khó: trả hàng một phần, chênh lệch tỷ giá, khóa sổ kỳ, đối chiếu công nợ đa cấp. Không phải phần mềm 'nông' chỉ quản lý được vài nghiệp vụ đơn giản.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function TrustSignalsSection() {
  return (
    <Section id="trust-signals" variant="default">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow className="mb-3">Uy tín</Eyebrow>
          <h2 className="text-q-h2 text-q-text-heading">
            Vì sao tin tưởng Qortex
          </h2>
          <p className="q-lead mt-4 text-q-text-secondary">
            Khi chưa có khách hàng vận hành để tham khảo, hãy nhìn vào nền tảng
            và con người.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TRUST_SIGNALS.map((signal) => (
            <article
              key={signal.id}
              className="text-center q-card p-8 hover:border-q-border-strong hover:bg-q-bg-surface-alt transition-colors duration-q-normal"
            >
              <div className="w-14 h-14 rounded-full bg-q-bg-surface-alt flex items-center justify-center text-q-green-800 mx-auto mb-5">
                {signal.icon}
              </div>
              <h3 className="text-h4 text-q-text-primary mb-3">
                {signal.title}
              </h3>
              <p className="text-small text-q-text-secondary leading-relaxed">
                {signal.description}
              </p>
            </article>
          ))}
        </div>

        {/* About link */}
        <div className="mt-8 text-center">
          <p className="text-body text-q-text-secondary">
            Tìm hiểu thêm{" "}
            <Link
              href="/ve-chung-toi"
              className="text-q-link hover:text-q-brass-700 font-semibold transition-colors"
            >
              về đội ngũ Qortex
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}
