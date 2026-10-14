"use client";

import { LinkButton } from "@/components/ui";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-q-bg-inverse pt-[88px] pb-[56px] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="q-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="max-w-xl">
            <p className="q-eyebrow text-q-cta-on-inverse-bg mb-4">
              Nền tảng ERP
            </p>
            <h1
              id="hero-heading"
              className="text-q-display text-q-text-on-inverse text-wrap-balance"
            >
              Hệ thống quản trị chuẩn doanh nghiệp lớn, vừa vặn với doanh
              nghiệp đang lớn.
            </h1>
            <p className="q-lead mt-6 text-q-text-on-inverse-muted max-w-lg">
              Nền tảng ERP xây trên nền tuân thủ vững chắc, dữ liệu thuộc về
              doanh nghiệp.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href="/dat-lich-demo" variant="cta" size="lg">
                Đặt lịch demo
              </LinkButton>
              <LinkButton href="/giai-phap" variant="on-inverse" size="lg">
                Xem giải pháp theo ngành
              </LinkButton>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-q-xl shadow-q-lg overflow-hidden bg-q-neutral-0">
              {/* Mock dashboard UI */}
              <div className="p-6">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-q-sm bg-q-green-800 flex items-center justify-center">
                      <span className="text-q-neutral-0 text-small font-semibold">Q</span>
                    </div>
                    <span className="text-h5 font-semibold text-q-green-800">Qortex Books</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-q-bg-surface-alt" />
                    <div className="w-6 h-6 rounded-full bg-q-bg-surface-alt" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-q-md bg-q-bg-surface-alt">
                    <p className="text-caption text-q-text-muted q-mono">Doanh thu tháng</p>
                    <p className="text-h4 font-semibold text-q-green-800 q-mono mt-1">
                      12,450,000
                    </p>
                    <p className="text-caption text-q-green-600 mt-1">↑ 8.2%</p>
                  </div>
                  <div className="p-4 rounded-q-md bg-q-bg-surface-alt">
                    <p className="text-caption text-q-text-muted q-mono">Công nợ phải thu</p>
                    <p className="text-h4 font-semibold text-q-green-800 q-mono mt-1">
                      3,280,000
                    </p>
                    <p className="text-caption text-q-text-muted mt-1">23 hóa đơn</p>
                  </div>
                  <div className="p-4 rounded-q-md bg-q-bg-surface-alt">
                    <p className="text-caption text-q-text-muted q-mono">Tồn kho</p>
                    <p className="text-h4 font-semibold text-q-green-800 q-mono mt-1">
                      1,847
                    </p>
                    <p className="text-caption text-q-text-muted mt-1">mặt hàng</p>
                  </div>
                </div>

                {/* Table preview */}
                <div className="bg-q-neutral-0 border border-q-border rounded-q-md overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-q-border bg-q-bg-surface-alt">
                    <span className="text-small font-semibold text-q-text-primary q-mono">Sổ cái</span>
                    <span className="text-caption text-q-text-muted q-mono">— CT000123</span>
                  </div>
                  <div className="divide-y divide-q-border">
                    <div className="flex justify-between px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-small text-q-text-secondary q-mono">1121</span>
                        <span className="text-small text-q-text-primary">Tiền gửi ngân hàng</span>
                      </div>
                      <div className="text-right">
                        <span className="text-small font-semibold text-q-green-600 q-mono">
                          +45,000,000
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-small text-q-text-secondary q-mono">5111</span>
                        <span className="text-small text-q-text-primary">Doanh thu bán hàng</span>
                      </div>
                      <div className="text-right">
                        <span className="text-small font-semibold text-q-green-600 q-mono">
                          +50,000,000
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-small text-q-text-secondary q-mono">3331</span>
                        <span className="text-small text-q-text-primary">Thuế GTGT phải nộp</span>
                      </div>
                      <div className="text-right">
                        <span className="text-small font-semibold text-q-text-secondary q-mono">
                          -5,000,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer status */}
                <div className="flex items-center justify-between mt-4 px-2">
                  <span className="text-caption text-q-text-muted q-mono">
                    Kỳ: Tháng 10/2026 • TT99
                  </span>
                  <span className="text-caption text-q-green-600 font-medium">Đã khóa sổ</span>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-q-brass-300/10 blur-2xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
