/**
 * Demo form data — options và config cho /dat-lich-demo.
 *
 * Form fields spec: page-structure.md §2.7 + implementation-plan.md Task 10.
 *
 * ⚠️ Open Questions:
 *   - Email nhận lead (dùng placeholder)
 *   - Captcha provider (chưa tích hợp)
 *   - Lead storage / CRM integration (placeholder)
 *   - Quy mô nhân sự options (placeholder — cần xác nhận)
 *   - Thời gian phản hồi (cần xác nhận)
 */

/* ─── Industry options (từ brief + navigation.ts) ─── */
export const INDUSTRY_OPTIONS = [
  { value: "khach-san", label: "Khách sạn" },
  { value: "san-xuat", label: "Sản xuất" },
  { value: "ban-le", label: "Bán lẻ" },
  { value: "dich-vu-hop-dong", label: "Dịch vụ theo hợp đồng" },
  { value: "khac", label: "Khác" },
];

/* ─── Team size options — ⚠️ placeholder, cần xác nhận ─── */
export const TEAM_SIZE_OPTIONS = [
  { value: "1-10", label: "1 – 10 người" },
  { value: "11-50", label: "11 – 50 người" },
  { value: "51-200", label: "51 – 200 người" },
  { value: "201-500", label: "201 – 500 người" },
  { value: "500+", label: "Trên 500 người" },
];

/* ─── Form config ─── */
export const DEMO_FORM = {
  /** ⚠️ Cần xác nhận email nhận lead */
  recipientEmail: "contact@qortex.vn",
  submitLabel: "Gửi yêu cầu demo",
  submittingLabel: "Đang gửi…",
  successHeading: "Cảm ơn bạn!",
  successMessage:
    "Chúng tôi đã nhận được thông tin và sẽ liên hệ trong vòng 1 ngày làm việc.",
  errorMessage:
    "Đã xảy ra lỗi khi gửi. Vui lòng thử lại hoặc gửi email trực tiếp đến contact@qortex.vn.",
  privacyLabel:
    "Tôi đồng ý để Qortex xử lý dữ liệu cá nhân theo Chính sách bảo vệ dữ liệu.",
  privacyUrl: "/chinh-sach-bao-mat",
};

/* ─── Thank you page content ─── */
export const THANK_YOU = {
  eyebrow: "Cảm ơn",
  heading: "Yêu cầu demo của bạn đã được gửi",
  message:
    "Chúng tôi đã nhận được thông tin và sẽ liên hệ với bạn trong vòng 1 ngày làm việc để xác nhận lịch demo phù hợp.",
  nextSteps: [
    "Kiểm tra email để xác nhận chúng tôi đã nhận được yêu cầu.",
    "Chuẩn bị 1-2 quy trình nghiệp vụ mà bạn muốn chạy thử trên Qortex.",
    "Có mặt một người hiểu rõ quy trình kế toán / vận hành để tận dụng tốt buổi demo.",
  ],
};
