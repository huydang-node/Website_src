/**
 * Platform / Module groups data — single source of truth cho `/nen-tang` page.
 *
 * Cấu trúc: 6 nhóm module theo brief (project-brief.md §4.1 và page-structure.md §2.2).
 * Mỗi nhóm liệt kê các module chính cùng chức năng nổi bật.
 *
 * Lưu ý: Không cam kết số liệu chưa đo được, không nêu tên công nghệ lõi.
 */

export interface PlatformModule {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export interface ModuleGroup {
  id: string;
  name: string;
  description: string;
  modules: PlatformModule[];
}

export const MODULE_GROUPS: ModuleGroup[] = [
  {
    id: "tai-chinh-ke-toan",
    name: "Tài chính – Kế toán",
    description:
      "Sổ cái theo chế độ kế toán Việt Nam, công nợ và ngân hàng — gốc của mọi báo cáo tài chính.",
    modules: [
      {
        id: "so-cai",
        name: "Sổ cái & Hệ thống tài khoản",
        description:
          "Hệ thống tài khoản theo TT99, định khoản tự động từ nghiệp vụ gốc.",
        features: [
          "Hệ thống tài khoản theo TT99",
          "Định khoản tự động theo chứng từ",
          "Audit trail cho mọi thay đổi",
          "Khóa sổ theo kỳ",
        ],
      },
      {
        id: "cong-no",
        name: "Công nợ phải thu / phải trả",
        description:
          "Theo dõi công nợ khách hàng và nhà cung cấp, đối chiếu liên module.",
        features: [
          "Sổ chi tiết công nợ theo đối tượng",
          "Đối chiếu với bán hàng và mua hàng",
          "Cảnh báo hạn thanh toán",
          "Lịch sử giao dịch đầy đủ",
        ],
      },
      {
        id: "ngan-hang",
        name: "Ngân hàng & Tiền mặt",
        description:
          "Quản lý thu chi, đối chiếu sao kê ngân hàng, nhiều tài khoản.",
        features: [
          "Quản lý nhiều tài khoản ngân hàng",
          "Phiếu thu / phiếu chi",
          "Đối chiếu sao kê ngân hàng",
          "Tích hợp chuyển khoản nội bộ",
        ],
      },
      {
        id: "bao-cao",
        name: "Báo cáo tài chính",
        description:
          "Báo cáo theo chế độ Việt Nam: Bảng cân đối, Kết quả kinh doanh, Lưu chuyển tiền tệ.",
        features: [
          "Báo cáo theo chế độ kế toán Việt Nam",
          "Bảng cân đối kế toán",
          "Báo cáo kết quả kinh doanh",
          "Báo cáo lưu chuyển tiền tệ",
        ],
      },
    ],
  },
  {
    id: "ban-hang",
    name: "Bán hàng",
    description:
      "Từ báo giá đến hóa đơn điện tử — gắn liền với kho và sổ cái.",
    modules: [
      {
        id: "crm",
        name: "CRM",
        description:
          "Quản lý khách hàng, cơ hội bán hàng và lịch sử tương tác.",
        features: [
          "Hồ sơ khách hàng 360°",
          "Quản lý cơ hội / pipeline",
          "Lịch sử liên lạc",
          "Phân nhóm khách hàng",
        ],
      },
      {
        id: "bao-gia",
        name: "Báo giá & Đơn bán",
        description:
          "Báo giá từ CRM, đơn bán chuyển tiếp sang giao hàng và hóa đơn.",
        features: [
          "Báo giá từ CRM, chuyển đơn bán 1 bước",
          "Quản lý đơn bán theo trạng thái",
          "Chính sách giá, chiết khấu",
          "Đồng bộ tồn kho khi chốt đơn",
        ],
      },
      {
        id: "giao-hang",
        name: "Giao hàng & Xuất kho",
        description:
          "Xuất kho theo đơn bán, ghi nhận giá vốn tự động.",
        features: [
          "Phiếu xuất kho liên kết đơn bán",
          "Xuất một phần / nhiều lần",
          "Tính giá vốn theo phương pháp đăng ký",
          "Hỗ trợ xuất theo lô / serial",
        ],
      },
      {
        id: "hoa-don",
        name: "Hóa đơn & POS",
        description:
          "Khởi tạo hóa đơn điện tử (HĐĐT) từ đơn bán hoặc ca bán POS.",
        features: [
          "Khởi tạo HĐĐT từ nghiệp vụ gốc",
          "Hỗ trợ nhiều mẫu hóa đơn",
          "POS cho bán lẻ tại quầy",
          "Đối chiếu với sổ cái tự động",
        ],
      },
    ],
  },
  {
    id: "mua-hang-kho",
    name: "Mua hàng – Kho",
    description:
      "Chuỗi mua hàng từ đề nghị đến nhận hàng, đối chiếu 3 chiều với hóa đơn NCC.",
    modules: [
      {
        id: "de-nghi-mua",
        name: "Đề nghị mua & Đơn mua",
        description:
          "Đề nghị mua nội bộ, phê duyệt theo hạn mức, đơn mua gửi NCC.",
        features: [
          "Đề nghị mua với luồng phê duyệt",
          "Chuyển đề nghị mua → đơn mua",
          "Theo dõi trạng thái đơn mua",
          "Hạn mức mua hàng thei vai trò",
        ],
      },
      {
        id: "nhap-kho",
        name: "Nhận hàng & Kiểm kê",
        description:
          "Phiếu nhập kho từ đơn mua, kiểm kê định kỳ.",
        features: [
          "Phiếu nhập kho liên kết đơn mua",
          "Nhập một phần / nhiều lần",
          "Kiểm kê theo chu kỳ",
          "Đối chiếu 3 chiều: đơn mua – phiếu nhập – hóa đơn",
        ],
      },
      {
        id: "ton-kho",
        name: "Tồn kho & Giá vốn",
        description:
          "Theo dõi tồn kho thời gian thực, tính giá vốn theo phương pháp chọn.",
        features: [
          "Tồn kho theo nhiều kho / nhiều chi nhánh",
          "Tính giá vốn: Bình quân gia quyền / Nhập trước xuất trước",
          "Cảnh báo tồn kho dưới định mức",
          "Quản lý lô và hạn sử dụng",
        ],
      },
    ],
  },
  {
    id: "hop-dong",
    name: "Hợp đồng",
    description:
      "Quản lý hợp đồng khung, nghiệm thu định kỳ và nghĩa vụ phát sinh.",
    modules: [
      {
        id: "hop-dong-khung",
        name: "Hợp đồng khung",
        description:
          "Hợp đồng khung với khách hàng / NCC, theo dõi giá trị và nghĩa vụ.",
        features: [
          "Hồ sơ hợp đồng tập trung",
          "Theo dõi giá trị và thời hạn",
          "Đính kèm tài liệu hợp đồng",
          "Cảnh báo hết hạn / sắp đến hạn",
        ],
      },
      {
        id: "don-goi-hang",
        name: "Đơn gọi hàng & Nghiệm thu",
        description:
          "Đơn gọi hàng theo hợp đồng khung, nghiệm thu định kỳ.",
        features: [
          "Đơn gọi hàng từ hợp đồng khung",
          "Biên bản nghiệm thu theo đợt",
          "Theo dõi khối lượng nghiệm thu",
          "Đồng bộ với công nợ",
        ],
      },
    ],
  },
  {
    id: "quan-tri-phan-tich",
    name: "Quản trị – Phân tích",
    description:
      "Dashboard và BI — bức tranh tổng thể và chi tiết theo vai trò.",
    modules: [
      {
        id: "dashboard",
        name: "Dashboard công việc cá nhân",
        description:
          "Theo dõi việc cần làm: phiếu chờ duyệt, công nợ đến hạn, chứng từ cần xử lý.",
        features: [
          "Danh sách tác vụ theo vai trò",
          "Cảnh báo công nợ đến hạn",
          "Phiếu chờ phê duyệt",
          "Lọc theo trạng thái / mức ưu tiên",
        ],
      },
      {
        id: "bi",
        name: "BI & Báo cáo phân tích",
        description:
          "Báo cáo trực quan: doanh thu, biên lợi nhuận, dòng tiền theo nhiều chiều.",
        features: [
          "Báo cáo trực quan theo chiều kinh doanh",
          "Lọc / nhóm / khoanh vùng dữ liệu",
          "Xuất báo cáo PDF / Excel",
          "Theo dõi KPI doanh nghiệp",
        ],
      },
    ],
  },
  {
    id: "nen-tang-chung",
    name: "Nền tảng chung",
    description:
      "Phân quyền, phê duyệt, SSO, API — lớp nền cho mọi nghiệp vụ ở trên.",
    modules: [
      {
        id: "phan-quyen",
        name: "Phân quyền theo vai trò",
        description:
          "Phân quyền chi tiết theo chức năng, vai trò và phạm vi dữ liệu.",
        features: [
          "Phân quyền theo vai trò và phạm vi dữ liệu",
          "Phân quyền theo chi nhánh / công ty",
          "Nhật ký truy cập",
          "Hỗ trợ kiểm toán nội bộ",
        ],
      },
      {
        id: "phe-duyet",
        name: "Luồng phê duyệt",
        description:
          "Luồng phê duyệt theo hạn mức và loại chứng từ, có thể cấu hình.",
        features: [
          "Luồng phê duyệt theo hạn mức",
          "Cấu hình đa cấp / song song",
          "Theo dõi trạng thái phê duyệt",
          "Hỗ trợ phê duyệt trên di động",
        ],
      },
      {
        id: "sso",
        name: "Đăng nhập một lần (SSO)",
        description:
          "Đăng nhập một lần qua nhà cung cấp danh tính doanh nghiệp.",
        features: [
          "Tích hợp SSO với hệ thống danh tính doanh nghiệp",
          "Quản lý phiên đăng nhập tập trung",
          "Đồng bộ nhóm người dùng",
          "Tăng cường bảo mật",
        ],
      },
      {
        id: "api",
        name: "API tích hợp",
        description:
          "API tài liệu đầy đủ để kết nối với hệ thống bên ngoài.",
        features: [
          "API REST có tài liệu",
          "Webhook cho sự kiện nghiệp vụ",
          "Kết nối hệ thống bên ngoài",
          "Cấu trúc dữ liệu mở",
        ],
      },
      {
        id: "da-cong-ty",
        name: "Đa công ty / Đa chi nhánh",
        description:
          "Vận hành nhiều công ty / chi nhánh trên một nền tảng, dữ liệu tách bạch.",
        features: [
          "Quản lý nhiều pháp nhân trên 1 hệ thống",
          "Dữ liệu tách bạch theo công ty / chi nhánh",
          "Hỗ trợ báo cáo hợp nhất",
          "Phân quyền theo phạm vi tổ chức",
        ],
      },
    ],
  },
];

export const ARCHITECTURE_HIGHLIGHTS = [
  {
    id: "deployment",
    title: "Triển khai linh hoạt",
    description:
      "Cloud dùng chung hoặc triển khai riêng cho doanh nghiệp lớn. Không phụ thuộc vào một nhà cung cấp hạ tầng duy nhất.",
    icon: "cloud",
  },
  {
    id: "data-ownership",
    title: "Dữ liệu thuộc về doanh nghiệp",
    description:
      "Cấu trúc dữ liệu mở, có thể xuất hoặc kết nối bất cứ lúc nào. Không bị khóa vào nhà cung cấp.",
    icon: "database",
  },
  {
    id: "extensibility",
    title: "Mở rộng bằng plugin",
    description:
      "Mở rộng chức năng qua plugin mà không cần sửa lõi. Lõi ổn định, tùy biến theo nghiệp vụ riêng của từng doanh nghiệp.",
    icon: "puzzle",
  },
  {
    id: "integration",
    title: "Tích hợp dễ dàng",
    description:
      "API tài liệu đầy đủ và webhook cho sự kiện nghiệp vụ — kết nối với hệ thống ngân hàng, sàn, CRM hoặc công cụ nội bộ.",
    icon: "link",
  },
];
