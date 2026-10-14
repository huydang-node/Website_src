# Page Structure — Qortex Website

> **Phiên bản:** 1.0  
> **Ngày:** 14/10/2026  
> **Dựa trên:** `project-brief.md` + `design-system.md`

---

## 1. Tổng quan Sitemap

```
/
├── / (Trang chủ)
├── /nen-tang (Nền tảng)
├── /giai-phap (Giải pháp - menu dropdown)
│   ├── /giai-phap/khach-san
│   ├── /giai-phap/san-xuat
│   ├── /giai-phap/ban-le
│   └── /giai-phap/dich-vu
├── /vi-sao-qortex
├── /ve-chung-toi
├── /dat-lich-demo
├── /chinh-sach-bao-mat
└── /dieu-khoan-su-dung
```

### Ghi chú về cấu trúc `/giai-phap`

**Xác nhận:** Trang `/giai-phap` chỉ cần menu dropdown dẫn thẳng đến 4 trang con?

---

## 2. Chi tiết từng trang

### 2.1 Trang chủ (`/`)

| Thuộc tính | Giá trị |
|---|---|
| **Route** | `/` |
| **Mục tiêu** | Kể trọn mạch chuyện trong một lần cuộn |
| **CTA chính** | Đặt lịch demo |
| **Template** | Custom (không dùng template ngành) |

#### Sections (thứ tự bắt buộc):

| # | Section ID | Tên | Mục đích | CTA |
|---|---|---|---|---|
| 1 | `hero` | Hero | Nói Qortex là gì, cho ai, trong 5 giây | Đặt lịch demo / Xem giải pháp theo ngành |
| 2 | `pain-points` | Bài toán của doanh nghiệp | Khách thấy "đúng là công ty mình" | Không |
| 3 | `solution-overview` | Lời giải Qortex | Một câu hứa + hình tổng thể | Tìm hiểu nền tảng |
| 4 | `value-pillars` | 4 trụ giá trị | Lý do chọn Qortex | Không |
| 5 | `business-flow` | Dòng chảy nghiệp vụ | Chứng minh tính liền mạch | Xem demo quy trình |
| 6 | `industry-preview` | Giải pháp theo ngành | Khách tìm thấy ngành của mình | Link từng ngành |
| 7 | `trust-signals` | Vì sao tin Qortex | Xây lòng tin khi chưa có khách vận hành | Về chúng tôi |
| 8 | `cta-section` | CTA cuối trang | Chốt hành động | Đặt lịch demo |

#### Chi tiết Section 4 - 4 trụ giá trị:

| ID | Tiêu đề | Câu lợi ích | Bằng chứng |
|---|---|---|---|
| `compliance` | Tuân thủ là nền móng | Không lo sai chế độ kế toán hay thuế; luôn sẵn sàng khi kiểm toán, quyết toán | Định khoản tự động theo TT99, liên kết HĐĐT, audit trail |
| `data-ownership` | Dữ liệu thuộc về doanh nghiệp | Không bị khóa vào nhà cung cấp; xuất hoặc kết nối bất cứ lúc nào | Lõi ERP với cấu trúc dữ liệu mở; API để tích hợp |
| `single-source` | Một dòng chảy, một sự thật | Từ báo giá đến báo cáo tài chính liền mạch, không nhập lại, không lệch số | Quy trình O2C, P2P, R2R; đối chiếu 3 chiều |
| `access-control` | Ai thấy đúng phần việc của người đó | Kiểm soát nội bộ chặt, giảm rủi ro gian lận và lộ dữ liệu | Phân quyền theo vai trò, luồng phê duyệt theo hạn mức, SSO |

---

### 2.2 Nền tảng (`/nen-tang`)

| Thuộc tính | Giá trị |
|---|---|
| **Route** | `/nen-tang` |
| **Mục tiêu** | Giới thiệu module và kiến trúc cho người cần chi tiết |
| **CTA chính** | Đặt lịch demo |
| **Template** | Custom (dạng module grid) |

#### Sections:

| # | Section ID | Tên | Mục đích |
|---|---|---|---|
| 1 | `hero` | Hero Nền tảng | Giới thiệu tổng quan Qortex Platform |
| 2 | `module-groups` | Các nhóm module | Grid 6 nhóm module |
| 3 | `architecture` | Kiến trúc | Dành cho trưởng IT |

#### Chi tiết Module Groups:

| Nhóm | Module |
|---|---|
| Tài chính – Kế toán | Sổ cái và hệ thống tài khoản theo TT99; công nợ phải thu, phải trả; ngân hàng, tiền mặt; khóa sổ và báo cáo tài chính |
| Bán hàng | CRM; báo giá, đơn bán, giao hàng, hóa đơn; POS |
| Mua hàng – Kho | Đề nghị mua, đơn mua, nhận hàng; tồn kho, giá vốn, kiểm kê |
| Hợp đồng | Hợp đồng khung, đơn gọi hàng, nghiệm thu định kỳ, nghĩa vụ hợp đồng |
| Quản trị – Phân tích | Dashboard công việc cá nhân; BI |
| Nền tảng chung | Phân quyền theo vai trò, luồng phê duyệt, SSO, API tích hợp, đa công ty / đa chi nhánh |

---

### 2.3 Giải pháp - Overview (`/giai-phap`)

| Thuộc tính | Giá trị |
|---|---|
| **Route** | `/giai-phap` |
| **Mục tiêu** | Overview 4 ngành, khách chọn ngành phù hợp |
| **CTA chính** | Đặt lịch demo |
| **Template** | Overview grid |

#### Sections:

| # | Section ID | Tên | Mục đích |
|---|---|---|---|
| 1 | `hero` | Hero Giải pháp | Tổng quan giải pháp theo ngành |
| 2 | `industry-grid` | 4 ngành | Grid 4 thẻ ngành với link đến trang chi tiết |

---

### 2.4 Trang ngành (`/giai-phap/[nganh]`)

| Thuộc tính | Giá trị |
|---|---|
| **Routes** | `/giai-phap/khach-san`, `/giai-phap/san-xuat`, `/giai-phap/ban-le`, `/giai-phap/dich-vu` |
| **Mục tiêu** | Khách thấy bài toán ngành mình được giải |
| **CTA chính** | Demo theo ngành |
| **Template** | Shared industry template |

#### Cấu trúc template trang ngành (dùng chung):

| # | Section ID | Tên | Nội dung |
|---|---|---|---|
| 1 | `hero` | Hero ngành | Tên ngành + bài toán đặc thù |
| 2 | `pain-points` | Bài toán đặc thù | Mô tả chi tiết vấn đề của ngành |
| 3 | `qortex-flow` | Quy trình Qortex xử lý | Cách Qortex giải quyết bài toán |
| 4 | `modules-used` | Module liên quan | Grid các module được sử dụng |
| 5 | `cta-section` | CTA | Demo theo ngành |

#### Chi tiết 4 ngành:

| Ngành | Slug | Bài toán đặc thù | Trọng tâm nội dung |
|---|---|---|---|
| Khách sạn | `khach-san` | Doanh thu phòng, dịch vụ, kênh đặt phòng tách rời khỏi kế toán | Đặt phòng, lễ tân, buồng phòng, chốt ca đêm (night audit) nối thẳng vào sổ cái |
| Sản xuất | `san-xuat` | Giá thành không chính xác, kế hoạch vật tư rời rạc | BOM, lệnh sản xuất, tính giá thành, kiểm soát chất lượng |
| Bán lẻ | `ban-le` | Nhiều cửa hàng, ca bán, hóa đơn từ máy tính tiền | POS, ca thu ngân, HĐĐT khởi tạo từ máy tính tiền, tồn kho nhiều điểm |
| Dịch vụ theo HĐ | `dich-vu` | Hợp đồng khung, nghiệm thu hàng tháng, công nợ theo từng hợp đồng khó theo dõi | Hợp đồng → lệnh dịch vụ → nghiệm thu → hóa đơn → công nợ |

---

### 2.5 Vì sao Qortex (`/vi-sao-qortex`)

| Thuộc tính | Giá trị |
|---|---|
| **Route** | `/vi-sao-qortex` |
| **Mục tiêu** | So sánh định vị với các nhóm giải pháp khác |
| **CTA chính** | Đặt lịch demo |
| **Template** | Comparison table + roadmap |

#### Sections:

| # | Section ID | Tên | Mục đích |
|---|---|---|---|
| 1 | `hero` | Hero | Giới thiệu trang so sánh |
| 2 | `comparison-table` | Bảng so sánh | 3 cột: ERP quốc tế lớn – Phần mềm nội địa phổ thông – Qortex |
| 3 | `product-roadmap` | Định hướng sản phẩm | Nguyên tắc AI có kiểm soát (ghi rõ là lộ trình) |

#### Tiêu chí so sánh:

| Tiêu chí | ERP quốc tế | Phần mềm nội địa | Qortex |
|---|---|---|---|
| Chi phí sở hữu | Cao (license + maintainance) | Thấp | [Cần xác nhận] |
| Thời gian triển khai | 6-18 tháng | 1-3 tháng | [Cần xác nhận] |
| Chiều sâu nghiệp vụ | Rất sâu | Nông – Trung bình | Sâu (theo mô tả brief) |
| Tuân thủ chuẩn mực VN | Cần tùy chỉnh | Có sẵn | Có sẵn (TT99, HĐĐT) |
| Quyền sở hữu dữ liệu | Hạn chế | Phụ thuộc nhà cung cấp | Thuộc về doanh nghiệp |
| Khả năng mở rộng | Cao | Thấp | [Cần xác nhận] |

**Lưu ý:** Không nêu tên đối thủ cụ thể; chỉ so sánh theo nhóm.

---

### 2.6 Về chúng tôi (`/ve-chung-toi`)

| Thuộc tính | Giá trị |
|---|---|
| **Route** | `/ve-chung-toi` |
| **Mục tiêu** | Câu chuyện sáng lập, triết lý, pháp lý |
| **CTA chính** | Liên hệ |
| **Template** | About page |

#### Sections:

| # | Section ID | Tên | Mục đích |
|---|---|---|---|
| 1 | `hero` | Hero | Tổng quan về Qortex Solutions |
| 2 | `story` | Câu chuyện sáng lập | Khoảng trống giữa ERP ngoại và phần mềm nội |
| 3 | `philosophy` | Triết lý | Luôn xây trên nền tảng tuân thủ vững vàng |
| 4 | `team` | Đội ngũ | Ảnh và vai trò thật |
| 5 | `legal` | Thông tin pháp lý | Tên công ty, mã số, địa chỉ |

#### Thông tin pháp lý (cần xác nhận):

| Trường | Giá trị |
|---|---|
| Tên tiếng Việt | Công ty TNHH Giải pháp Qortex |
| Tên tiếng Anh | Qortex Solutions Co., Ltd |
| Mã số doanh nghiệp | [CẦN XÁC NHẬN sau khi đăng ký] |
| Địa chỉ trụ sở | [CẦN XÁC NHẬN] |

---

### 2.7 Đặt lịch demo (`/dat-lich-demo`)

| Thuộc tính | Giá trị |
|---|---|
| **Route** | `/dat-lich-demo` |
| **Mục tiêu** | Thu thông tin khách tiềm năng |
| **CTA chính** | Gửi form |
| **Template** | Form page |

#### Form fields:

| Field | Loại | Bắt buộc | Ghi chú |
|---|---|---|---|
| Họ tên | text | ✅ | |
| Chức vụ | text | ✅ | |
| Tên công ty | text | ✅ | |
| Ngành | select | ✅ | 5 options: Khách sạn, Sản xuất, Bán lẻ, Dịch vụ HĐ, Khác |
| Quy mô nhân sự | select | ✅ | [Cần xác định options] |
| Email | email | ✅ | |
| Số điện thoại | tel | ✅ | |
| Hệ thống đang dùng | text | ❌ | Tùy chọn |
| Nhu cầu chính | textarea | ❌ | Tùy chọn |
| Đồng ý xử lý dữ liệu | checkbox | ✅ | Theo quy định bảo vệ dữ liệu cá nhân |

#### Sau khi gửi:
- Trang cảm ơn với thông báo bước tiếp theo
- Thời gian phản hồi dự kiến [CẦN XÁC NHẬN]

---

### 2.8 Trang pháp lý

#### 2.8.1 Chính sách bảo vệ dữ liệu cá nhân (`/chinh-sach-bao-mat`)

| Thuộc tính | Giá trị |
|---|---|
| **Route** | `/chinh-sach-bao-mat` |
| **Mục đích** | Tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân |
| **Link** | Footer |

**Nội dung cần bao gồm:**
- Mục đích xử lý dữ liệu
- Phạm vi thu thập
- Thời gian lưu trữ
- Quyền của chủ thể dữ liệu
- Thông tin liên hệ DPO (nếu có)

**⚠️ Cờ xác nhận:** Nội dung cần được soạn bởi đội ngũ pháp lý hoặc tư vấn.

---

#### 2.8.2 Điều khoản sử dụng website (`/dieu-khoan-su-dung`)

| Thuộc tính | Giá trị |
|---|---|
| **Route** | `/dieu-khoan-su-dung` |
| **Mục đích** | Quy định việc sử dụng website |
| **Link** | Footer |

**Nội dung cần bao gồm:**
- Phạm vi sử dụng
- Quyền sở hữu trí tuệ
- Giới hạn trách nhiệm
- Luật áp dụng

---

## 3. Navigation Structure

### 3.1 Header (desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo]          Nền tảng  │  Giải pháp ▼  │  Vì sao Qortex  │  Về chúng tôi     [Đặt lịch demo] │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Header (mobile)

```
┌─────────────────────────────────────────────────────┐
│ [Logo]                                    [Menu ☰]  │
└─────────────────────────────────────────────────────┘
```

### 3.3 Menu dropdown "Giải pháp"

```
┌────────────────────────────┐
│ Giải pháp theo ngành       │
├────────────────────────────┤
│ 🏨 Khách sạn               │
│ 🏭 Sản xuất                │
│ 🛒 Bán lẻ                  │
│ 📋 Dịch vụ theo HĐ         │
└────────────────────────────┘
```

### 3.4 Footer

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo]     │ Giải pháp          │ Nền tảng      │ Pháp lý        │
│  Mô tả ngắn │  • Khách sạn       │  • Tài chính   │  • Chính sách   │
│  công ty    │  • Sản xuất         │  • Bán hàng    │    bảo mật     │
│             │  • Bán lẻ           │  • Mua hàng    │  • Điều khoản   │
│  [Social]   │  • Dịch vụ HĐ       │  • Hợp đồng    │    sử dụng     │
│             │                     │  • Quản trị    │                │
├─────────────────────────────────────────────────────────────────────┤
│  © 2026 Công ty TNHH Giải pháp Qortex | Mã số: XXXXXX | Địa chỉ   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. Component Architecture

### 4.1 Shared Components

| Component | Mô tả | Variants |
|---|---|---|
| `<Header>` | Header chính | default, mobile |
| `<MobileMenu>` | Menu mobile (drawer) | - |
| `<Dropdown>` | Dropdown menu | - |
| `<Footer>` | Footer chính | - |
| `<DemoCTA>` | Nút CTA "Đặt lịch demo" | primary, secondary |
| `<PageCTA>` | Khối CTA cuối trang | default, industry |
| `<Button>` | Button cơ bản | primary, outline, ghost, cta, on-inverse |
| `<Card>` | Card cơ bản | default, inverse, spotlight, feature |
| `<Badge>` | Badge/trạng thái | neutral, brass, green, outline |
| `<Tag>` | Tag ngành (pill) | - |
| `<Eyebrow>` | Nhãn trên heading | - |
| `<Input>` | Text input | - |
| `<Select>` | Dropdown select | - |
| `<Section>` | Wrapper section | default, surface, inverse, alt |
| `<Container>` | Container max-width | default, narrow |
| `<ModuleCard>` | Card module trong trang Nền tảng | - |
| `<IndustryCard>` | Card ngành trong overview | - |
| `<ComparisonTable>` | Bảng so sánh | - |
| `<ProcessFlow>` | Sơ đồ quy trình | - |
| `<ValuePillar>` | Trụ giá trị | - |

### 4.2 Page-Specific Components

| Component | Trang | Mô tả |
|---|---|---|
| `<Hero>` | Trang chủ, Nền tảng, Industry | Hero với title, subtitle, CTA |
| `<PainPoints>` | Trang chủ | 3 thẻ bài toán doanh nghiệp |
| `<SolutionOverview>` | Trang chủ | Sơ đồ module kết nối |
| `<BusinessFlow>` | Trang chủ | Tab quy trình O2C, P2P, R2R |
| `<TrustSignals>` | Trang chủ | 3 ý xây lòng tin |
| `<ArchitectureSection>` | Nền tảng | Kiến trúc cho IT |
| `<IndustryTemplate>` | Trang ngành | Template dùng chung |
| `<DemoForm>` | Đặt lịch demo | Form thu thập lead |
| `<ThankYouPage>` | Sau khi gửi form | Trang cảm ơn |
| `<ComparisonSection>` | Vì sao Qortex | Bảng so sánh + roadmap |
| `<AboutStory>` | Về chúng tôi | Câu chuyện sáng lập |
| `<TeamSection>` | Về chúng tôi | Đội ngũ |

### 4.3 Data Structures (TypeScript)

```typescript
// src/data/industries.ts

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  heroTitle: string;
  painPoints: {
    title: string;
    description: string;
  }[];
  qortexSolution: {
    title: string;
    description: string;
    flow: string[];
  };
  modules: string[];
  ctaText: string;
}

export const industries: Industry[] = [
  {
    slug: 'khach-san',
    name: 'Khách sạn',
    icon: 'hotel',
    heroTitle: 'Kế toán khách sạn liền mạch từ đặt phòng đến sổ cái',
    painPoints: [
      {
        title: 'Doanh thu phân tán',
        description: 'Kênh đặt phòng, lễ tân, dịch vụ tách rời, cuối tháng đối chiếu mất nhiều ngày.'
      },
      // ...
    ],
    qortexSolution: {
      title: 'Một dòng tiền, một sổ sách',
      description: 'Từ đặt phòng đến night audit, mọi giao dịch nối thẳng vào sổ cái Qortex.',
      flow: [
        'Đặt phòng → Lễ tân check-in',
        'Sử dụng dịch vụ → Ghi nhận',
        'Night audit → Tự động sinh bút toán',
        'Xuất HĐĐT → Đối chiếu với kế toán'
      ]
    },
    modules: ['CRM', 'Bán hàng', 'Kho', 'Tài chính - Kế toán'],
    ctaText: 'Demo ngành Khách sạn'
  },
  // ... các ngành khác
];
```

```typescript
// src/data/modules.ts

export interface Module {
  group: string;
  name: string;
  description: string;
  features: string[];
}

export const moduleGroups: ModuleGroup[] = [
  {
    group: 'Tài chính – Kế toán',
    modules: [
      {
        name: 'Sổ cái',
        description: 'Hệ thống tài khoản theo TT99',
        features: ['Định khoản tự động', 'Audit trail', 'Khóa sổ']
      },
      // ...
    ]
  },
  // ...
];
```

```typescript
// src/data/comparison.ts

export interface ComparisonRow {
  criteria: string;
  erpInternational: string;
  erpLocal: string;
  qortex: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    criteria: 'Chi phí sở hữu',
    erpInternational: 'Cao (license + maintainance)',
    erpLocal: 'Thấp',
    qortex: '[Cần xác nhận]' // ⚠️ Cờ xác nhận
  },
  // ...
];
```

---

## 5. Content Flags

### 5.1 Đã xác nhận (Confirmed)
- ✅ Mạch kể chuyện: Bài toán → Lời giải → Giá trị → Tin tưởng → Demo
- ✅ 4 trụ giá trị (tên và mô tả)
- ✅ 3 quy trình nghiệp vụ (O2C, P2P, R2R)
- ✅ 6 nhóm module (tên và mô tả chung)
- ✅ 4 ngành và bài toán đặc thù
- ✅ Form demo (các trường)
- ✅ Màu sắc và typography (theo design-system.md)
- ✅ Nguyên tắc không dùng AI trong quảng cáo

### 5.2 Dự kiến (Planned) — Cần xác nhận
- ⏳ Chi tiết 4 trụ giá trị (số liệu cụ thể)
- ⏳ Chi tiết từng module (screenshots)
- ⏳ Copy chính thức cho Hero
- ⏳ Nội dung câu chuyện sáng lập
- ⏳ Số liệu đội ngũ (nếu có)
- ⏳ Options cho "Quy mô nhân sự" trong form

### 5.3 Cần xác minh trước khi công bố (Verify First) ⚠️

| Nội dung | Lý do | Người xác nhận |
|---|---|---|
| TT99 compliance | Yêu cầu pháp lý, cần xác minh chi tiết | Đội ngũ sản phẩm |
| Hóa đơn điện tử (HĐĐT) integration | Cần xác minh tích hợp thực tế | Đội ngũ sản phẩm |
| SSO implementation | Cần xác minh hỗ trợ thực tế | Đội ngũ sản phẩm |
| Audit trail details | Cần xác minh mức độ chi tiết | Đội ngũ sản phẩm |
| Bảo mật & kiến trúc | Cần tài liệu chính thức | Đội ngũ kỹ thuật |
| Đối chiếu 3 chiều | Cần xác minh tính năng thực tế | Đội ngũ sản phẩm |
| Chi phí và thời gian triển khai | Không nêu số liệu chưa đo được | Đội ngũ kinh doanh |
| Logo khách hàng | Không dùng khi chưa có đồng ý | Legal |

---

## 6. Open Questions (Cần xác nhận)

### 6.1 Cấu trúc website
1. **Trang `/giai-phap`**: Có cần trang overview không, hay chỉ cần menu dropdown dẫn thẳng đến 4 trang con?
2. **Trang Blog/Kiến thức**: Có làm trong đợt 1 không?

### 6.2 Nội dung
3. **Copy Hero**: Bản nháp trong brief có được duyệt không?
4. **Bài toán ngành**: Chi tiết hơn về từng ngành?
5. **Số liệu cụ thể**: Có số liệu thật nào để đưa vào không?

### 6.3 Pháp lý & định danh
6. **Mã số doanh nghiệp**: Đã đăng ký xong chưa?
7. **Địa chỉ trụ sở**: Địa chỉ chính thức?
8. **DPO/người đại diện**: Thông tin liên hệ pháp lý?

### 6.4 Kỹ thuật & tích hợp
9. **Email nhận lead**: Địa chỉ và người nhận?
10. **Captcha**: Loại nào (reCAPTCHA, hCaptcha)?
11. **CMS**: Yêu cầu CMS nào, hay dùng MDX?

### 6.5 Đa ngôn ngữ
12. **Tiếng Anh**: Có làm ngay từ đợt 1 không?

---

## 7. Legal Pages Checklist

| Trang | Route | Trạng thái |
|---|---|---|
| Chính sách bảo vệ dữ liệu cá nhân | `/chinh-sach-bao-mat` | Cần soạn nội dung |
| Điều khoản sử dụng website | `/dieu-khoan-su-dung` | Cần soạn nội dung |

**Footer phải hiển thị:**
- Tên công ty đầy đủ
- Mã số doanh nghiệp
- Địa chỉ trụ sở
- Links đến 2 trang pháp lý
