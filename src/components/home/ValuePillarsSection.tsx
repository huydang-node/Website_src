import { Section, Container, Eyebrow } from "@/components/ui";

const PILLARS = [
  {
    id: "compliance",
    title: "Tuân thủ là nền móng",
    benefit:
      "Không lo sai chế độ kế toán hay thuế; luôn sẵn sàng khi kiểm toán, quyết toán.",
    evidence:
      "Định khoản tự động theo TT99, liên kết HĐĐT, audit trail cho mọi thay đổi.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "data-ownership",
    title: "Dữ liệu thuộc về doanh nghiệp",
    benefit:
      "Không bị khóa vào nhà cung cấp; xuất hoặc kết nối bất cứ lúc nào.",
    evidence:
      "Lõi ERP với cấu trúc dữ liệu mở; API để tích hợp với hệ thống hiện có.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: "single-source",
    title: "Một dòng chảy, một sự thật",
    benefit:
      "Từ báo giá đến báo cáo tài chính liền mạch, không nhập lại, không lệch số.",
    evidence:
      "Quy trình O2C, P2P, R2R; đối chiếu 3 chiều đơn mua – phiếu nhập – hóa đơn.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v18" />
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    id: "access-control",
    title: "Ai thấy đúng phần việc của người đó",
    benefit:
      "Kiểm soát nội bộ chặt, giảm rủi ro gian lận và lộ dữ liệu.",
    evidence:
      "Phân quyền theo vai trò; luồng phê duyệt theo hạn mức; đăng nhập một lần SSO.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="16" r="4" />
        <path d="M6 16V8a6 6 0 0 1 12 0v8" />
        <path d="M20 16v4" />
        <path d="M4 16v4" />
      </svg>
    ),
  },
];

export function ValuePillarsSection() {
  return (
    <Section id="value-pillars" variant="default">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow className="mb-3">Giá trị</Eyebrow>
          <h2 className="text-q-h2 text-q-text-heading">
            4 lý do doanh nghiệp chọn Qortex
          </h2>
          <p className="q-lead mt-4 text-q-text-secondary">
            Mỗi trụ giá trị đi kèm bằng chứng cụ thể — không phải khẩu hiệu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="q-card p-8 flex gap-6 group hover:border-q-border-strong hover:bg-q-bg-surface-alt transition-colors duration-q-normal"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-q-lg bg-q-bg-surface-alt flex items-center justify-center text-q-green-800 group-hover:bg-q-green-800 group-hover:text-q-neutral-0 transition-colors duration-q-normal">
                  {pillar.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-h4 text-q-text-primary mb-2">
                  {pillar.title}
                </h3>
                <p className="text-body text-q-text-secondary mb-3">
                  {pillar.benefit}
                </p>
                <p className="text-small text-q-text-muted leading-relaxed">
                  {pillar.evidence}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
