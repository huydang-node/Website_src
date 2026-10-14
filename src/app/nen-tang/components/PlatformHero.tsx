import { Section, Container, Eyebrow, LinkButton } from "@/components/ui";

export function PlatformHero() {
  return (
    <Section
      id="platform-hero"
      variant="inverse"
      className="pt-[88px] pb-[64px] md:pb-[88px]"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow onInverse className="mb-4">
            Nền tảng Qortex
          </Eyebrow>
          <h1 className="text-q-display text-q-text-on-inverse text-wrap-balance">
            Một lõi ERP mạnh mẽ, nhiều module gắn vào theo nhu cầu doanh nghiệp.
          </h1>
          <p className="q-lead mt-6 text-q-text-on-inverse-muted max-w-2xl">
            Từ sổ cái theo chế độ Việt Nam đến quản lý kho nhiều chi nhánh — tất cả
            chạy trên một nền tảng dữ liệu thống nhất. Phù hợp doanh nghiệp đã có
            đội vận hành chuyên nghiệp và muốn hệ thống hóa toàn bộ nghiệp vụ.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <LinkButton href="/dat-lich-demo" variant="cta" size="lg">
              Đặt lịch demo
            </LinkButton>
            <LinkButton href="#module-groups" variant="on-inverse" size="lg">
              Xem các nhóm module
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
