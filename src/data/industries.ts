/**
 * Industry data — single source of truth cho trang ngành & overview.
 *
 * 4 ngành: Khách sạn, Sản xuất, Bán lẻ, Dịch vụ HĐ.
 * Slug phải khớp route trong app/giai-phap/[slug].
 *
 * ⚠️ Không bịa số liệu; bài toán và lời giải dựa trên brief.
 */

export interface PainPoint {
  title: string;
  description: string;
  icon: "dispersed" | "manual" | "compliance" | "cost" | "tracking" | "quality" | "multi-store" | "pos" | "contract" | "default";
}

export interface QortexSolution {
  title: string;
  description: string;
  flow: string[];
}

export interface Industry {
  slug: string;
  name: string;
  /** Đường dẫn route — phải khớp [slug] param */
  href: string;
  /** Eyebrow badge trên hero */
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoints: PainPoint[];
  qortexSolution: QortexSolution;
  /** ID của module groups trong platform.ts cần highlight */
  relatedModules: string[];
  ctaText: string;
  /** Dot color cho industry card overview */
  dotColor: "green" | "brass" | "dark" | "accent";
  metaDescription: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "khach-san",
    name: "Khách sạn",
    href: "/giai-phap/khach-san",
    eyebrow: "Ngành Khách sạn",
    heroTitle: "Kế toán khách sạn liền mạch từ đặt phòng đến sổ cái",
    heroSubtitle:
      "Đặt phòng, lễ tân, buồng phòng và night audit — mọi giao dịch nối thẳng vào sổ cái. Không còn đối chiếu thủ công cuối tháng.",
    painPoints: [
      {
        title: "Doanh thu phân tán theo kênh",
        description:
          "Kênh đặt phòng trực tuyến, lễ tân, nhà hàng, spa, bar — mỗi nơi một hệ thống riêng. Cuối tháng, kế toán phải tổng hợp bằng tay từ nhiều nguồn, tốn vài ngày đối chiếu.",
        icon: "dispersed",
      },
      {
        title: "Night audit thủ công, dễ sai",
        description:
          "Chốt ca đêm ghi nhận doanh thu phòng, phòng trả, phí dịch vụ bằng Excel hoặc sổ. Sai một con số ở đầu — cả báo cáo tài chính tháng lệch theo.",
        icon: "manual",
      },
      {
        title: "Tuân thủ hóa đơn điện tử",
        description:
          "Mỗi loại dịch vụ có mẫu hóa đơn riêng; hóa đơn phải khớp với doanh thu thực tế. Sửa chữa hóa đơn sau khi phát hành là rủi ro kiểm toán.",
        icon: "compliance",
      },
    ],
    qortexSolution: {
      title: "Một dòng tiền, một sổ sách",
      description:
        "Từ đặt phòng đến night audit, mọi giao dịch tự sinh bút toán vào sổ cái Qortex. Kế toán chỉ kiểm tra — không nhập lại.",
      flow: [
        "Đặt phòng → Lễ tân check-in",
        "Sử dụng dịch vụ → Ghi nhận tự động",
        "Night audit → Sinh bút toán vào sổ cái",
        "Xuất HĐĐT → Khớp với doanh thu thực tế",
      ],
    },
    relatedModules: ["crm", "bao-gia", "giao-hang", "hoa-don", "so-cai", "ngan-hang"],
    ctaText: "Demo ngành Khách sạn",
    dotColor: "green",
    metaDescription:
      "Giải pháp ERP cho khách sạn: đặt phòng, lễ tân, night audit nối thẳng vào sổ cái. Không còn đối chiếu thủ công cuối tháng.",
  },
  {
    slug: "san-xuat",
    name: "Sản xuất",
    href: "/giai-phap/san-xuat",
    eyebrow: "Ngành Sản xuất",
    heroTitle: "Giá thành chính xác, kế hoạch vật tư đồng bộ",
    heroSubtitle:
      "Từ công thức (BOM), lệnh sản xuất, kiểm soát chất lượng đến tính giá thành — trên một nền tảng duy nhất. Không còn giá vốn ước tính cuối tháng.",
    painPoints: [
      {
        title: "Giá thành không chính xác",
        description:
          "Chi phí nguyên vật liệu, nhân công, máy móc tính rời rạc hoặc ước lượng cuối tháng. Báo cáo lãi lỗ không phản ánh thực tế — khó định giá bán và đàm phán hợp đồng.",
        icon: "cost",
      },
      {
        title: "Kế hoạch vật tư rời rạc",
        description:
          "BOM có nhưng không liên kết đơn hàng; mua thiếu vật tư, sản xuất dừng chờ; mua thừa thì ứ đọng vốn. Không nhìn thấy toàn cảnh nhu cầu.",
        icon: "tracking",
      },
      {
        title: "Chất lượng không kiểm soát được đầu ra",
        description:
          "Quy trình sản xuất giao cho từng phân xưởng tự quản lý; lỗi phát hiện muộn — sau khi đã xuất hàng hoặc thành phẩm nằm trong kho. Khó truy nguyên lô hàng.",
        icon: "quality",
      },
    ],
    qortexSolution: {
      title: "Từ đơn hàng đến giá thành — một dòng chảy",
      description:
        "BOM liên kết đơn hàng; lệnh sản xuất tự động sinh nhu cầu mua hàng; kiểm soát chất lượng theo từng công đoạn; giá thành tính tự động theo phương pháp đăng ký.",
      flow: [
        "Đơn hàng → BOM & lệnh sản xuất",
        "Lệnh SX → Nhu cầu mua hàng tự động",
        "Nhập kho → Kiểm soát chất lượng đầu vào",
        "Hoàn thành → Tính giá thành tự động",
      ],
    },
    relatedModules: ["bao-gia", "de-nghi-mua", "nhap-kho", "ton-kho", "bao-cao"],
    ctaText: "Demo ngành Sản xuất",
    dotColor: "brass",
    metaDescription:
      "Giải pháp ERP cho sản xuất: BOM, lệnh sản xuất, tính giá thành, kiểm soát chất lượng trên một nền tảng. Giá thành chính xác, không ước lượng.",
  },
  {
    slug: "ban-le",
    name: "Bán lẻ",
    href: "/giai-phap/ban-le",
    eyebrow: "Ngành Bán lẻ",
    heroTitle: "Nhiều cửa hàng, một hệ thống — tồn kho và doanh thu thống nhất",
    heroSubtitle:
      "POS tại quầy, ca thu ngân, HĐĐT khởi tạo từ máy tính tiền và tồn kho nhiều điểm bán — trên cùng lõi ERP. Đối chiếu nhanh, không phải cuối ngày mới biết số.",
    painPoints: [
      {
        title: "Nhiều cửa hàng, dữ liệu rời rạc",
        description:
          "Mỗi chi nhánh có máy tính tiền riêng, phần mềm riêng hoặc file Excel; quản lý trung ương không nhìn thấy tồn kho thực của từng điểm. Đặt hàng bị trễ vì không biết hàng còn hay hết.",
        icon: "multi-store",
      },
      {
        title: "Ca bán hàng cần đối chiếu thủ công",
        description:
          "Cuối ca, thu ngân phải đối chiếu tiền mặt, thẻ, chuyển khoản với báo cáo POS. Sai sót phát hiện trễ — khi đã khóa sổ hoặc nhân viên nghỉ.",
        icon: "manual",
      },
      {
        title: "Hóa đơn từ máy tính tiền khó khớp",
        description:
          "HĐĐT phát hành riêng, không liên kết với đơn hàng hoặc ca bán; đối chiếu doanh thu với sổ sách kế toán mất thời gian cuối tháng.",
        icon: "compliance",
      },
    ],
    qortexSolution: {
      title: "POS → Sổ cái, không cần nhập lại",
      description:
        "POS bán hàng tại quầy; ca thu ngân tự đối chiếu với sổ tiền mặt; HĐĐT khởi tạo tự động từ ca bán; tồn kho cập nhật thời gian thực theo từng chi nhánh.",
      flow: [
        "POS bán hàng tại quầy",
        "Ca thu ngân → Đối chiếu tự động với sổ tiền",
        "HĐĐT sinh tự động từ ca bán",
        "Tồn kho cập nhật thời gian thực theo chi nhánh",
      ],
    },
    relatedModules: ["hoa-don", "ton-kho", "ngan-hang", "bao-cao"],
    ctaText: "Demo ngành Bán lẻ",
    dotColor: "dark",
    metaDescription:
      "Giải pháp ERP cho bán lẻ: POS, ca thu ngân, HĐĐT khởi tạo tự động, tồn kho nhiều chi nhánh trên một nền tảng.",
  },
  {
    slug: "dich-vu-hop-dong",
    name: "Dịch vụ theo HĐ",
    href: "/giai-phap/dich-vu-hop-dong",
    eyebrow: "Dịch vụ theo Hợp đồng",
    heroTitle: "Theo dõi hợp đồng dịch vụ từ ký kết đến nghiệm thu và công nợ",
    heroSubtitle:
      "Hợp đồng khung, lệnh dịch vụ, biên bản nghiệm thu, hóa đơn và công nợ — trên một dòng chảy liền mạch. Không còn mất dấu hợp đồng nào.",
    painPoints: [
      {
        title: "Hợp đồng nhiều, theo dõi bằng file rời",
        description:
          "Hợp đồng khung với các bên khác nhau, mỗi hợp đồng có nhiều đợt nghiệm thu. Theo dõi bằng Excel hoặc phần mềm không liên kết — dễ bỏ sót hoặc xuất hóa đơn trùng.",
        icon: "contract",
      },
      {
        title: "Công nợ khó đối chiếu theo từng hợp đồng",
        description:
          "Nghiệm thu dịch vụ hàng tháng không đồng bộ với xuất hóa đơn; công nợ phải thu lọt hoặc trễ hạn. Khách hàng hỏi công nợ, kế toán mất thời gian tra lại từng hợp đồng.",
        icon: "tracking",
      },
      {
        title: "Doanh thu dịch vụ ghi nhận không đúng kỳ",
        description:
          "Hóa đơn xuất chậm vì chờ biên bản nghiệm thu ký; doanh thu tháng này thực tế là dịch vụ tháng trước. Báo cáo tài chính quý bị ảnh hưởng.",
        icon: "compliance",
      },
    ],
    qortexSolution: {
      title: "Hợp đồng → Dịch vụ → Nghiệm thu → Công nợ",
      description:
        "Hợp đồng khung quản lý giá trị và tiến độ; lệnh dịch vụ sinh tự động theo tần suất; biên bản nghiệm thu làm căn cứ xuất HĐĐT; công nợ theo dõi theo từng hợp đồng.",
      flow: [
        "Ký hợp đồng khung → Theo dõi giá trị & tiến độ",
        "Lệnh dịch vụ sinh theo tần suất",
        "Nghiệm thu → Căn cứ xuất HĐĐT tự động",
        "Công nợ theo dõi theo từng hợp đồng",
      ],
    },
    relatedModules: ["hop-dong-khung", "don-goi-hang", "hoa-don", "cong-no"],
    ctaText: "Demo ngành Dịch vụ theo HĐ",
    dotColor: "accent",
    metaDescription:
      "Giải pháp ERP cho dịch vụ theo hợp đồng: quản lý hợp đồng khung, lệnh dịch vụ, nghiệm thu, HĐĐT và công nợ trên một dòng chảy liền mạch.",
  },
];

/** Tìm industry theo slug — dùng trong [slug]/page.tsx */
export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((ind) => ind.slug === slug);
}

/** Tìm industry theo route path */
export function getIndustryByHref(href: string): Industry | undefined {
  return INDUSTRIES.find((ind) => ind.href === href);
}
