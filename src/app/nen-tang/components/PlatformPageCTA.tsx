import { Section, Container, Eyebrow, LinkButton } from "@/components/ui";

/**
 * Cuối mỗi trang ngành / trang nội dung theo brief §4 đều kết thúc bằng
 * khối CTA "Đặt lịch demo". Giữ cùng cấu trúc với trang chủ (Section inverse)
 * nhưng nội dung ngắn gọn cho trang Nền tảng — không dùng lại PageCTASection
 * vì component đó chứa form đầy đủ chỉ dành cho CTA cuối trang chủ.
 */
export function PlatformPageCTA() {
  return (
    <Section id="platform-cta" variant="inverse">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <Eyebrow onInverse className="mb-3">
            Demo 60 phút
          </Eyebrow>
          <h2 className="text-q-h2 text-q-text-on-inverse">
            Chạy quy trình thật của doanh nghiệp bạn trên Qortex
          </h2>
          <p className="q-lead mt-5 text-q-text-on-inverse-muted">
            Chuyên gia Qortex sẽ tìm hiểu nghiệp vụ của bạn, chuẩn bị demo theo
            đúng quy mô — không phải demo chung chung.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href="/dat-lich-demo" variant="cta" size="lg">
              Đặt lịch demo
            </LinkButton>
            <LinkButton href="/giai-phap" variant="on-inverse" size="lg">
              Xem giải pháp theo ngành
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
