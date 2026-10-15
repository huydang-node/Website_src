/**
 * Navigation data structure — single source of truth cho Header & Footer.
 * Import từ đây, không hardcode menu items trong component.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  /** "industries" = dropdown hiển thị 4 ngành dạng grid */
  type?: "industries";
  /** Trường này set thì item trở thành dropdown */
  children?: NavItem[];
}

export interface IndustryItem {
  id: string;
  label: string;
  description: string;
  href: string;
  /** Dot color: "green" | "brass" | "dark" | "accent" */
  dot?: "green" | "brass" | "dark" | "accent";
}

export interface CTAItem {
  label: string;
  href: string;
  variant: "primary" | "outline" | "ghost" | "cta" | "on-inverse";
}

/* ─── Navigation items ─── */
/*
  Header order: Nền tảng | Giải pháp (dropdown) | Vì sao Qortex | Về chúng tôi | [Đặt lịch demo]
  INDUSTRIES dropdown: 4 ngành cùng cấp, không có trang /giai-phap riêng (xác nhận brief).
*/

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Nền tảng",
    href: "/nen-tang",
  },
  {
    label: "Giải pháp",
    href: "/giai-phap",
    type: "industries",
    description: "Chọn ngành để xem giải pháp phù hợp",
  },
  {
    label: "Vì sao Qortex",
    href: "/vi-sao-qortex",
  },
  {
    label: "Về chúng tôi",
    href: "/ve-chung-toi",
  },
];

/* ─── Industry dropdown items ─── */

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "khach-san",
    label: "Khách sạn",
    description: "Quản lý phòng, nhà hàng, spa, lễ tân — tất cả trên một nền tảng.",
    href: "/giai-phap/khach-san",
    dot: "green",
  },
  {
    id: "san-xuat",
    label: "Sản xuất",
    description: "Công thức, BOM, lệnh sản xuất, kế hoạch, tồn kho theo lot.",
    href: "/giai-phap/san-xuat",
    dot: "brass",
  },
  {
    id: "ban-le",
    label: "Bán lẻ",
    description: "Nhiều chi nhánh, kho trung tâm, hàng hóa theo serial/lot.",
    href: "/giai-phap/ban-le",
    dot: "dark",
  },
  {
    id: "dich-vu",
    label: "Dịch vụ theo hợp đồng",
    description: "Hợp đồng dịch vụ, công việc theo tiến độ, nghiệm thu.",
    href: "/giai-phap/dich-vu-hop-dong",
    dot: "accent",
  },
];

/* ─── CTA buttons ─── */

export const NAV_CTA: CTAItem = {
  label: "Đặt lịch demo",
  href: "/dat-lich-demo",
  variant: "cta",
};

/* ─── Footer columns ─── */

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Giải pháp",
    links: [
      { label: "Theo ngành", href: "/giai-phap" },
      { label: "Khách sạn", href: "/giai-phap/khach-san" },
      { label: "Sản xuất", href: "/giai-phap/san-xuat" },
      { label: "Bán lẻ", href: "/giai-phap/ban-le" },
      { label: "Dịch vụ HĐ", href: "/giai-phap/dich-vu-hop-dong" },
    ],
  },
  {
    heading: "Tính năng",
    links: [
      { label: "Hóa đơn TT99/TT78", href: "/tinh-nang/hoa-don-tt99" },
      { label: "Kế toán tự động", href: "/tinh-nang/ke-toan-tu-dong" },
      { label: "Quản lý kho", href: "/tinh-nang/quan-ly-kho" },
      { label: "CRM & Báo giá", href: "/tinh-nang/crm-bao-gia" },
      { label: "Tất cả tính năng", href: "/tinh-nang" },
    ],
  },
  {
    heading: "Tài nguyên",
    links: [
      { label: "Blog", href: "/ve-qortex/blog" },
      { label: "Tài liệu API", href: "/tai-lieu/api" },
      { label: "Hướng dẫn cài đặt", href: "/huong-dan" },
      { label: "Câu hỏi thường gặp", href: "/faq" },
      { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
    ],
  },
  {
    heading: "Công ty",
    links: [
      { label: "Về Qortex", href: "/ve-qortex" },
      { label: "Tuyển dụng", href: "/ve-qortex/tuyen-dung" },
      { label: "Liên hệ", href: "/lien-he" },
      { label: "Điều khoản sử dụng", href: "/dieu-khoan" },
    ],
  },
];
