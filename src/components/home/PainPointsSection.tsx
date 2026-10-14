import { Section, Container, Eyebrow } from "@/components/ui";

const PAIN_POINTS = [
  {
    id: "outgrown",
    title: "Đã lớn hơn công cụ đang dùng",
    description:
      "Kế toán riêng, kho riêng, bán hàng riêng, còn lại là Excel. Cuối tháng đối chiếu mất nhiều ngày, mỗi bộ phận một số liệu.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    id: "compliance",
    title: "Áp lực tuân thủ",
    description:
      "Chế độ kế toán mới theo TT99, hóa đơn điện tử, thuế. Mỗi lần quy định đổi lại phải vá hệ thống, tốn chi phí và rủi ro sai sót.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "trapped",
    title: "Kẹt giữa hai lựa chọn",
    description:
      "ERP ngoại quá đắt và cồng kềnh, triển khai 12-18 tháng. Phần mềm nội giá rẻ thì nông, dữ liệu bị khóa vào nhà cung cấp.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
];

export function PainPointsSection() {
  return (
    <Section id="pain-points" variant="default">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Eyebrow className="mb-3">Bài toán</Eyebrow>
          <h2 className="text-q-h2 text-q-text-heading">
            Bài toán quen thuộc của doanh nghiệp đang lớn
          </h2>
          <p className="q-lead mt-4 text-q-text-secondary">
            Bạn nhìn thấy mình trong những tình huống này?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point) => (
            <article
              key={point.id}
              className="group q-card p-7 transition-colors duration-q-normal ease-q-ease hover:border-q-border-strong hover:bg-q-bg-surface-alt"
            >
              <div className="w-12 h-12 rounded-q-md bg-q-bg-surface-alt flex items-center justify-center text-q-green-800 mb-5 transition-colors group-hover:bg-q-green-800 group-hover:text-q-neutral-0">
                {point.icon}
              </div>
              <h3 className="text-h4 text-q-text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-q-text-secondary text-small leading-relaxed">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
