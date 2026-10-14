import { Section, Container, Eyebrow, LinkButton } from "@/components/ui";

const MODULES = [
  {
    id: "crm",
    name: "CRM",
    description: "Quản lý khách hàng & báo giá",
  },
  {
    id: "sales",
    name: "Bán hàng",
    description: "Đơn bán, giao hàng, hóa đơn",
  },
  {
    id: "purchase",
    name: "Mua hàng",
    description: "Đề nghị, đơn mua, nhận hàng",
  },
  {
    id: "inventory",
    name: "Kho",
    description: "Tồn kho, giá vốn, kiểm kê",
  },
  {
    id: "contract",
    name: "Hợp đồng",
    description: "HĐ khung, nghiệm thu, nghĩa vụ",
  },
  {
    id: "accounting",
    name: "Tài chính",
    description: "Sổ cái, công nợ, ngân hàng",
  },
];

export function SolutionOverviewSection() {
  return (
    <Section id="solution-overview" variant="surface">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <Eyebrow className="mb-3">Lời giải</Eyebrow>
            <h2 className="text-q-h2 text-q-text-heading">
              Một hệ thống duy nhất nối toàn bộ hoạt động kinh doanh
            </h2>
            <p className="q-lead mt-5 text-q-text-secondary max-w-xl">
              Từ báo giá đến báo cáo tài chính, mọi nghiệp vụ được ghi nhận
              liền mạch — đúng chuẩn mực Việt Nam ngay từ gốc.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-body text-q-text-secondary">
                  Không nhập lại dữ liệu giữa các phòng ban
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-body text-q-text-secondary">
                  Bút toán định khoản tự động theo TT99
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-body text-q-text-secondary">
                  Hóa đơn điện tử khởi tạo từ nghiệp vụ gốc
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-body text-q-text-secondary">
                  Một dòng tiền, một sổ sách, một sự thật
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <LinkButton href="/nen-tang" variant="outline">
                Tìm hiểu nền tảng
              </LinkButton>
            </div>
          </div>

          {/* Module flow diagram */}
          <div className="relative">
            <div className="bg-q-neutral-0 border border-q-border rounded-q-xl p-8 relative">
              {/* Central node */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 rounded-q-lg bg-q-green-800 flex items-center justify-center shadow-q-md">
                  <span className="text-h3 font-semibold text-q-neutral-0">Q</span>
                </div>
                <p className="mt-3 text-h5 font-semibold text-q-text-primary">
                  Sổ cái chung
                </p>
                <p className="text-caption text-q-text-muted q-mono">
                  theo TT99
                </p>
              </div>

              {/* Module connections */}
              <div className="grid grid-cols-3 gap-4">
                {MODULES.map((mod, i) => (
                  <div key={mod.id} className="text-center">
                    <div className="w-full aspect-square rounded-q-md bg-q-bg-surface-alt border border-q-border p-3 flex flex-col items-center justify-center hover:border-q-green-800 transition-colors">
                      <span className="text-small font-semibold text-q-text-primary">
                        {mod.name}
                      </span>
                      <span className="text-caption text-q-text-muted mt-0.5 hidden sm:block">
                        {mod.description}
                      </span>
                    </div>
                    {/* Connector line to center */}
                    <div
                      className="h-4 mx-auto w-px bg-q-border mt-2"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>

              {/* Data flow indicators */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" aria-hidden="true">
                  <path
                    d="M0 12h32M28 6l8 6-8 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-q-brass-500"
                  />
                </svg>
              </div>
            </div>

            {/* Data labels */}
            <div className="mt-4 flex items-center justify-center gap-6 text-caption text-q-text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-q-green-500" />
                Bút toán tự động
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-q-brass-500" />
                Đối chiếu 3 chiều
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-q-green-600 mt-0.5"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
