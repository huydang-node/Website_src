import React from "react";
import { Section, Container, Tag } from "@/components/ui";
import Link from "next/link";

type IndustryTag = "khach-san" | "san-xuat" | "ban-le" | "dich-vu";

interface IndustryItem {
  id: string;
  name: string;
  problem: string;
  focus: string;
  tags: IndustryTag[];
  href: string;
  icon: React.ReactNode;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "khach-san",
    name: "Khách sạn",
    problem: "Doanh thu phòng, dịch vụ, kênh đặt phòng tách rời khỏi kế toán.",
    focus: "Đặt phòng, lễ tân, night audit nối thẳng vào sổ cái.",
    tags: ["khach-san"],
    href: "/giai-phap/khach-san",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
        <path d="M8 7h.01M16 7h.01M12 7h.01M12 11h.01M16 11h.01M8 11h.01" />
      </svg>
    ),
  },
  {
    id: "san-xuat",
    name: "Sản xuất",
    problem: "Giá thành không chính xác, kế hoạch vật tư rời rạc.",
    focus: "BOM, lệnh sản xuất, tính giá thành, kiểm soát chất lượng.",
    tags: ["san-xuat"],
    href: "/giai-phap/san-xuat",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1M12 18h1M7 18h1" />
      </svg>
    ),
  },
  {
    id: "ban-le",
    name: "Bán lẻ",
    problem: "Nhiều cửa hàng, ca bán, hóa đơn từ máy tính tiền.",
    focus: "POS, ca thu ngân, HĐĐT khởi tạo từ máy tính tiền.",
    tags: ["ban-le"],
    href: "/giai-phap/ban-le",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: "dich-vu",
    name: "Dịch vụ theo HĐ",
    problem: "Hợp đồng khung, nghiệm thu hàng tháng, công nợ khó theo dõi.",
    focus: "HĐ → Lệnh dịch vụ → Nghiệm thu → Hóa đơn → Công nợ.",
    tags: ["dich-vu"],
    href: "/giai-phap/dich-vu-hop-dong",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
];

export function IndustryPreviewSection() {
  return (
    <Section id="industry-preview" variant="surface">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-q-h2 text-q-text-heading">
              Giải pháp theo đặc thù từng ngành
          </h2>
          <p className="q-lead mt-4 text-q-text-secondary">
            Mỗi ngành có bài toán riêng — Qortex hiểu và xử lý đúng trọng tâm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="group q-card p-7 flex gap-5 no-underline hover:border-q-border-strong hover:bg-q-bg-surface-alt transition-colors duration-q-normal"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-q-lg bg-q-bg-surface-alt flex items-center justify-center text-q-green-800 group-hover:bg-q-green-800 group-hover:text-q-neutral-0 transition-colors duration-q-normal">
                {industry.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-h4 text-q-text-primary">
                    {industry.name}
                  </h3>
                  <ArrowIcon />
                </div>
                <p className="text-small text-q-text-secondary mb-3">
                  {industry.problem}
                </p>
                <div className="flex items-center gap-2">
                  {industry.tags.map((tag) => (
                    <Tag key={tag} industry={tag}>
                      {industry.name}
                    </Tag>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-8 text-center">
          <p className="text-small text-q-text-muted">
            Xem tất cả giải pháp theo ngành{" "}
            <Link
              href="/giai-phap"
              className="text-q-link hover:text-q-brass-700 transition-colors"
            >
              tại đây
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-q-text-muted group-hover:text-q-green-800 transition-colors"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
