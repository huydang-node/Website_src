"use client";

import { useState } from "react";
import { Section, Container, LinkButton } from "@/components/ui";

const TABS = [
  {
    id: "o2c",
    label: "O2C",
    fullName: "Order to Cash",
    description: "Từ báo giá đến thu tiền",
    steps: [
      { name: "Báo giá", detail: "Tạo từ CRM" },
      { name: "Đơn bán", detail: "Xác nhận đơn hàng" },
      { name: "Giao hàng", detail: "Xuất kho" },
      { name: "Hóa đơn", detail: "HĐĐT tự động" },
      { name: "Thu tiền", detail: "Đối soát công nợ" },
    ],
    journalNote: "Định khoản: Nợ 131 / Có 5111, 3331",
  },
  {
    id: "p2p",
    label: "P2P",
    fullName: "Procure to Pay",
    description: "Từ mua hàng đến thanh toán",
    steps: [
      { name: "Đề nghị mua", detail: "Phê duyệt nội bộ" },
      { name: "Đơn mua", detail: "Xác nhận NCC" },
      { name: "Nhận hàng", detail: "Kiểm tra & nhập kho" },
      { name: "Hóa đơn NCC", detail: "Đối chiếu 3 chiều" },
      { name: "Thanh toán", detail: "Chuyển khoản / TM" },
    ],
    journalNote: "Đối chiếu 3 chiều: đơn mua – phiếu nhập – hóa đơn",
  },
  {
    id: "r2r",
    label: "R2R",
    fullName: "Record to Report",
    description: "Từ ghi sổ đến báo cáo",
    steps: [
      { name: "Ghi sổ", detail: "Bút toán tự động" },
      { name: "Đối chiếu", detail: "Đối soát liên module" },
      { name: "Khóa sổ", detail: "Kết chuyển cuối kỳ" },
      { name: "Báo cáo", detail: "BCTC theo TT99" },
    ],
    journalNote: "Audit trail cho mọi thay đổi, sẵn sàng kiểm toán",
  },
];

export function BusinessFlowSection() {
  const [activeTab, setActiveTab] = useState(0);

  const current = TABS[activeTab];

  return (
      <Section id="business-flow" variant="alt">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-q-h2 text-q-text-heading">
              Dòng chảy nghiệp vụ liền mạch
          </h2>
          <p className="q-lead mt-4 text-q-text-secondary">
            Mỗi bước tự động sinh bút toán định khoản — không cần kế toán viên
            nhập tay.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-q-bg-surface-alt rounded-q-md p-1 gap-1">
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`
                  px-6 py-2.5 rounded-q-sm text-small font-semibold transition-all duration-q-fast
                  ${
                    activeTab === i
                      ? "bg-q-neutral-0 text-q-green-800 shadow-q-xs"
                      : "text-q-text-secondary hover:text-q-text-primary"
                  }
                `}
                aria-selected={activeTab === i}
                role="tab"
              >
                <span className="q-mono">{tab.label}</span>
                <span className="ml-2 hidden sm:inline">{tab.fullName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Flow visualization */}
        <div className="bg-q-neutral-0 border border-q-border rounded-q-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-h4 font-semibold text-q-text-primary">
                {current.description}
              </p>
              <p className="text-small text-q-text-muted q-mono mt-1">
                {current.journalNote}
              </p>
            </div>
          </div>

          {/* Steps flow */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
            {current.steps.map((step, i) => (
              <div key={step.name} className="flex items-center flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <div
                    className={`
                      rounded-q-md p-4 text-center border-2 transition-colors
                      ${
                        i === 0
                          ? "border-q-green-800 bg-q-green-800/5"
                          : "border-q-border bg-q-bg-surface-alt hover:border-q-border-strong"
                      }
                    `}
                  >
                    <p className="text-small font-semibold text-q-text-primary q-mono">
                      {step.name}
                    </p>
                    <p className="text-caption text-q-text-muted mt-1 hidden sm:block">
                      {step.detail}
                    </p>
                  </div>
                </div>
                {i < current.steps.length - 1 && (
                  <div className="flex-shrink-0 px-2" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-q-border-strong"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auto journal note */}
          <div className="mt-6 pt-6 border-t border-q-border">
            <div className="flex items-center gap-3 text-small">
              <span className="w-6 h-6 rounded-full bg-q-green-800 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-q-neutral-0" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="text-q-text-secondary">
                Mỗi bước tự động sinh bút toán — kế toán chỉ cần xác nhận, không
                nhập lại.
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <LinkButton href="/dat-lich-demo" variant="outline">
            Xem demo quy trình
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}
