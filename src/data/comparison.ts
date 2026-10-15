/**
 * Comparison data — single source of truth cho Why Qortex page.
 *
 * 3 cột: ERP quốc tế lớn | Phần mềm nội địa | Qortex
 * 6 tiêu chí theo brief (page-structure.md §2.5)
 *
 * ⚠️ 3 trường cần xác nhận từ đội nghiệp vụ:
 *   - Chi phí sở hữu Qortex
 *   - Thời gian triển khai Qortex
 *   - Khả năng mở rộng Qortex
 */

export type CompetitorType = "international" | "local" | "qortex";

export type ComparisonCellValue =
  | string
  | { text: string; confirmed: true }
  | { text: string; confirmed: false };

export interface ComparisonRow {
  id: string;
  /** Câu hỏi tiêu chí */
  criteria: string;
  /** Tên hiển thị cột */
  international: ComparisonCellValue;
  local: ComparisonCellValue;
  qortex: ComparisonCellValue;
}

export interface ComparisonSection {
  heading?: string;
  rows: ComparisonRow[];
}

export const COMPARISON_SECTIONS: ComparisonSection[] = [
  {
    heading: "Chi phí & Thời gian",
    rows: [
      {
        id: "chi-phi",
        criteria: "Chi phí sở hữu",
        international: "Cao (license + bảo trì hằng năm)",
        local: "Thấp (thường theo tháng/năm)",
        qortex: { text: "[Cần xác nhận]", confirmed: false },
      },
      {
        id: "thoi-gian",
        criteria: "Thời gian triển khai",
        international: "6 – 18 tháng",
        local: "1 – 3 tháng",
        qortex: { text: "[Cần xác nhận]", confirmed: false },
      },
    ],
  },
  {
    heading: "Nghiệp vụ & Tuân thủ",
    rows: [
      {
        id: "chieu-sau",
        criteria: "Chiều sâu nghiệp vụ",
        international: "Rất sâu — đủ cho doanh nghiệp lớn",
        local: "Nông – Trung bình",
        qortex: { text: "Sâu — xử lý tình huống phức tạp", confirmed: true },
      },
      {
        id: "tuân-thủ",
        criteria: "Tuân thủ chuẩn mực Việt Nam",
        international: "Cần tùy chỉnh đáng kể cho TT99, HĐĐT",
        local: "Có sẵn — phù hợp quy mô nhỏ",
        qortex: { text: "Có sẵn — TT99, HĐĐT, audit trail", confirmed: true },
      },
    ],
  },
  {
    heading: "Dữ liệu & Khả năng mở rộng",
    rows: [
      {
        id: "quyen-so-huu",
        criteria: "Quyền sở hữu dữ liệu",
        international: "Hạn chế — phụ thuộc nhà cung cấp",
        local: "Phụ thuộc nhà cung cấp — khó xuất dữ liệu",
        qortex: {
          text: "Thuộc về doanh nghiệp — xuất hoặc kết nối bất cứ lúc nào",
          confirmed: true,
        },
      },
      {
        id: "kha-nang-mo-rong",
        criteria: "Khả năng mở rộng",
        international: "Cao — cho tập đoàn đa quốc gia",
        local: "Thấp — giới hạn bởi kiến trúc",
        qortex: { text: "[Cần xác nhận]", confirmed: false },
      },
    ],
  },
];

/** Tất cả criteria id — dùng cho aria */
export const ALL_CRITERIA_IDS = COMPARISON_SECTIONS.flatMap((s) =>
  s.rows.map((r) => r.id)
);

/** Product roadmap / AI principles data */
export const ROADMAP_ITEMS = [
  {
    id: "ai-principle",
    title: "AI chỉ đề xuất và chuẩn bị — con người luôn quyết định",
    description:
      "Qortex dùng AI để giảm thao tác thủ công (đề xuất định khoản, gợi ý công nợ, chuẩn bị báo cáo). Mọi bút toán, phê duyệt và xác nhận vẫn do con người thực hiện.",
    tag: "Nguyên tắc hiện tại",
  },
  {
    id: "audit-trail",
    title: "Mọi thay đổi đều có dấu vết — không có 'hộp đen'",
    description:
      "Hệ thống ghi nhận ai làm gì, lúc nào, trên dữ liệu gì. Không phụ thuộc vào bất kỳ mô hình AI nào mà không thể giải trình.",
    tag: "Nguyên tắc hiện tại",
  },
  {
    id: "roadmap-disclaimer",
    title: "Tính năng AI trong tương lai — lộ trình, không cam kết",
    description:
      "Chúng tôi đang nghiên cứu các mảng như phân tích dòng tiền, dự báo tồn kho và gợi ý tối ưu hóa. Thời gian và phạm vi triển khai phụ thuộc vào kết quả thử nghiệm thực tế.",
    tag: "Lộ trình",
  },
];
