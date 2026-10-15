/**
 * About Us page data — single source of truth cho /ve-chung-toi.
 *
 * Content từ brief §4.4 + page-structure.md §2.6.
 *
 * ⚠️ Open Questions cần xác nhận trước khi công bố:
 *   - Mã số doanh nghiệp
 *   - Địa chỉ trụ sở
 *   - Ảnh và thông tin đội ngũ
 *   - Nội dung câu chuyện sáng lập chi tiết
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  /** URL ảnh — cần xác nhận trước khi dùng ảnh thật */
  imageUrl?: string;
}

export interface LegalInfo {
  companyNameVi: string;
  companyNameEn: string;
  /** ⚠️ Cần xác nhận sau khi đăng ký */
  businessCode: string;
  /** ⚠️ Cần xác nhận */
  address: string;
  /** ⚠️ Cần xác nhận */
  representativeName?: string;
}

/* ─── Legal info — dùng trong LegalInfo section ─── */
export const LEGAL_INFO: LegalInfo = {
  companyNameVi: "Công ty TNHH Giải pháp Qortex",
  companyNameEn: "Qortex Solutions Co., Ltd",
  businessCode: "[Cần xác nhận sau khi đăng ký]",
  address: "[Cần xác nhận]",
};

/* ─── Story section ─── */
export const STORY = {
  eyebrow: "Câu chuyện",
  title: "Khoảng trống giữa hai thế giới",
  subtitle:
    "Tại sao Qortex tồn tại và tại sao chúng tôi chọn xây thứ ở giữa.",
  /** Content paragraph — dựa trên brief §4.4; cần xác nhận chi tiết */
  paragraphs: [
    "Trên thị trường Việt Nam có hai nhóm giải pháp quản trị doanh nghiệp phổ biến. Một bên là ERP quốc tế — mạnh mẽ nhưng đắt đỏ, cồng kềnh, đòi hỏi đội ngũ IT lớn và thời gian triển khai nhiều năm. Một bên là phần mềm nội địa — rẻ và nhanh, nhưng chiều sâu nghiệp vụ hạn chế, cấu trúc dữ liệu không mở, và doanh nghiệp dễ bị khóa vào nhà cung cấp.",
    "Giữa hai thế giới đó là một khoảng trống lớn: những doanh nghiệp đã lớn hơn công cụ đang dùng, nhưng chưa đủ lớn hoặc chưa sẵn sàng cho ERP quốc tế. Đó là doanh nghiệp vừa đang tăng trưởng, cần tuân thủ chuẩn mực Việt Nam, cần quyền sở hữu dữ liệu thực sự — nhưng vẫn cần triển khai trong thời gian hợp lý.",
    "Qortex được xây để lấp khoảng trống đó. Đủ mạnh về nghiệp vụ như ERP quốc tế, đủ gần với doanh nghiệp Việt như phần mềm nội địa, và có một lõi tuân thủ vững chắc ngay từ đầu — không phải vá thêm sau.",
  ],
};

/* ─── Philosophy section ─── */
export const PHILOSOPHY = {
  eyebrow: "Triết lý",
  title: "Luôn xây trên nền tảng tuân thủ vững vàng",
  subtitle:
    "Mọi quyết định thiết kế của Qortex bắt đầu từ một nguyên tắc: tuân thủ không phải là chi phí, mà là nền tảng.",
  pillars: [
    {
      id: "tt99",
      title: "Tuân thủ từ gốc",
      description:
        "Sổ cái Qortex được thiết kế ngay từ đầu theo Thông tư 99/TT-BTC — không phải một lớp ánh xạ thêm vào. Mọi bút toán, mọi định khoản đều phản ánh đúng chế độ kế toán Việt Nam.",
    },
    {
      id: "audit-trail",
      title: "Dấu vết đầy đủ",
      description:
        "Mọi thay đổi trên hệ thống đều được ghi lại: ai làm, lúc nào, trên dữ liệu gì. Audit trail không phải tính năng tùy chọn — đó là cách hệ thống vận hành.",
    },
    {
      id: "hddt",
      title: "Hóa đơn điện tử tích hợp",
      description:
        "HĐĐT không phải module rời — nó gắn liền với nghiệp vụ gốc. Đơn bán nào, giao hàng nào, xuất HĐĐT đúng hóa đơn đó, khớp sổ cái tự động.",
    },
    {
      id: "doi-chieu",
      title: "Đối chiếu thay vì kiểm tra",
      description:
        "Thay vì kế toán phải đối chiếu thủ công giữa các hệ thống, Qortex đối chiếu tự động: đơn mua – phiếu nhập – hóa đơn NCC theo 3 chiều. Sai số được phát hiện ngay lúc nhập, không phải cuối tháng.",
    },
  ],
};

/* ─── Team section ─── */
/* ⚠️ Cần xác nhận: ảnh thật và thông tin vai trò */
export const TEAM = {
  eyebrow: "Đội ngũ",
  title: "Con người đứng sau Qortex",
  subtitle:
    "Đội ngũ sáng lập có kinh nghiệm lâu năm trong lĩnh vực phần mềm doanh nghiệp Việt Nam.",
  members: [
    {
      id: "founder-1",
      name: "[Họ và tên — cần xác nhận]",
      role: "[Vai trò — cần xác nhận]",
      bio: "[Tiểu sử — cần xác nhận]",
    },
    {
      id: "founder-2",
      name: "[Họ và tên — cần xác nhận]",
      role: "[Vai trò — cần xác nhận]",
      bio: "[Tiểu sử — cần xác nhận]",
    },
    {
      id: "founder-3",
      name: "[Họ và tên — cần xác nhận]",
      role: "[Vai trò — cần xác nhận]",
      bio: "[Tiểu sử — cần xác nhận]",
    },
  ] as TeamMember[],
};

/* ─── Legal info section ─── */
/* ⚠️ Mã số và địa chỉ cần xác nhận trước khi công bố */
export const ABOUT_LEGAL_SECTION = {
  eyebrow: "Thông tin pháp lý",
  title: "Thông tin công ty",
};
