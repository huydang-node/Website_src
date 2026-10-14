# Implementation Plan — Qortex Website

> **Phiên bản:** 1.0  
> **Ngày:** 14/10/2026  
> **Dựa trên:** `project-brief.md`, `design-system.md`, `page-structure.md`

---

## 1. Tổng quan

Website đợt 1 gồm:
- **6 trang chính:** Trang chủ, Nền tảng, Vì sao Qortex, Về chúng tôi, Đặt lịch demo, Giải pháp (overview)
- **4 trang ngành:** Khách sạn, Sản xuất, Bán lẻ, Dịch vụ HĐ
- **2 trang pháp lý:** Chính sách bảo mật, Điều khoản sử dụng

### Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4 (với custom preset từ `tokens/tailwind.preset.js`)
- Server Components (ưu tiên)
- Responsive: mobile → tablet → desktop

---

## 2. Task Dependency Graph

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          TASK DEPENDENCIES                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [1. Foundation]                                                       │
│       │                                                                │
│       ├── [2. Design Tokens]                                           │
│       │        │                                                       │
│       │        ▼                                                       │
│       │    [3. Core UI Components]                                     │
│       │        │                                                       │
│       │        ├── [4. Layout]                                         │
│       │        │        │                                              │
│       │        │        ├── [5. Homepage]                              │
│       │        │        │        │                                      │
│       │        │        │        ▼                                      │
│       │        │        │    [6. Platform Page]                        │
│       │        │        │        │                                      │
│       │        │        │        ▼                                      │
│       │        │        │    [7. Industry Template + Pages]            │
│       │        │        │        │                                      │
│       │        │        │        ▼                                      │
│       │        │        │    [8. Why Qortex]                          │
│       │        │        │        │                                      │
│       │        │        │        ▼                                      │
│       │        │        │    [9. About Us]                             │
│       │        │        │        │                                      │
│       │        │        │        ▼                                      │
│       │        │        │    [10. Demo Form Page]                      │
│       │        │        │        │                                      │
│       │        │        │        ▼                                      │
│       │        │        │    [11. Legal Pages]                         │
│       │        │        │        │                                      │
│       │        │        │        ▼                                      │
│       │        │        │    [12. SEO, A11y & Polish]                  │
│       │        │        │        │                                      │
│       │        │        │        ▼                                      │
│       │        │        │    [13. Testing & QA]                        │
│       │        │        │                                               │
│       │        ▼                                                        │
│       └── [3b. Icons & Assets] ──────────────► [tất cả các task sau]   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Task Details

---

### Task 1: Foundation Setup

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 1 |
| **Tên** | Foundation Setup |
| **Phụ thuộc** | — |
| **Ưu tiên** | **P0 - Không thể bắt đầu task khác** |

#### Phạm vi:
- [ ] Khởi tạo/verify Next.js project với App Router
- [ ] Cấu hình TypeScript (`tsconfig.json`)
- [ ] Cấu hình Tailwind CSS với preset từ `tokens/tailwind.preset.js`
- [ ] Import và verify design tokens từ `design-system.md`
- [ ] Cấu hình font: Be Vietnam Pro + IBM Plex Mono (self-hosted hoặc Google Fonts fallback)
- [ ] Cấu hình path aliases (`@/`, `~/`)

#### Files dự kiến:
```
src/
├── app/
│   └── layout.tsx          # Root layout với font và metadata
├── lib/
│   └── utils.ts            # cn() helper cho Tailwind
├── tokens/
│   └── tailwind.preset.js  # Import từ logo and brand/
├── tailwind.config.ts       # Mở rộng preset
└── package.json
```

#### Tiêu chí nghiệm thu:
- [ ] `npm run dev` chạy thành công
- [ ] Font Be Vietnam Pro hiển thị đúng
- [ ] Tailwind có access đến tất cả design tokens

#### Open Questions cần giải trước:
- [ ] Xác nhận cấu trúc folder dự án (có thể đã khởi tạo)

---

### Task 2: Design Tokens Integration

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 2 |
| **Tên** | Design Tokens Integration |
| **Phụ thuộc** | 1 |
| **Ưu tiên** | **P0 - Nền tảng design** |

#### Phạm vi:
- [ ] Tạo CSS custom properties từ `design-system.md` (mục 2-6)
- [ ] Map tokens vào Tailwind config
- [ ] Verify tất cả color combinations đạt WCAG AA

#### Files dự kiến:
```
src/
├── styles/
│   ├── tokens.css          # CSS custom properties
│   └── globals.css         # Global styles, reset
```

#### Tiêu chí nghiệm thu:
- [ ] Tất cả semantic tokens (--q-bg-*, --q-text-*, etc.) hoạt động
- [ ] Color contrast pass WCAG AA
- [ ] Typography scale chính xác

#### Ghi chú:
- Token definitions đã có trong `design-system.md` (mục 2.1, 2.2, 3, 4, 5, 6)
- Cần import và mở rộng từ `logo and brand/tokens/tokens.css`

---

### Task 3: Core UI Components

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 3 |
| **Tên** | Core UI Components |
| **Phụ thuộc** | 2 |
| **Ưu tiên** | **P0 - Mọi trang dùng** |

#### Phạm vi:
- [ ] Button (`<QButton>`) - tất cả variants
- [ ] Card (`<QCard>`) - tất cả variants
- [ ] Input (`<QInput>`) - text, email, tel
- [ ] Select (`<QSelect>`) - dropdown
- [ ] Badge (`<QBadge>`) - status badges
- [ ] Tag (`<QTag>`) - industry pills
- [ ] Eyebrow (`<QEyebrow>`)
- [ ] Section (`<QSection>`) - wrapper với variants
- [ ] Container (`<QContainer>`) - max-width wrapper
- [ ] Divider (`<QDivider>`)

#### Files dự kiến:
```
src/
├── components/
│   └── ui/
│       ├── QButton.tsx
│       ├── QButton.module.css
│       ├── QCard.tsx
│       ├── QInput.tsx
│       ├── QSelect.tsx
│       ├── QBadge.tsx
│       ├── QTag.tsx
│       ├── QEyebrow.tsx
│       ├── QSection.tsx
│       ├── QContainer.tsx
│       └── index.ts
```

#### Tiêu chí nghiệm thu:
- [ ] Tất cả button variants đúng style (primary, outline, ghost, cta, on-inverse)
- [ ] Input states hoạt động (default, hover, focus, error, disabled)
- [ ] Badge variants đúng (neutral, brass, green, outline)
- [ ] Responsive trên mobile/tablet/desktop
- [ ] Focus ring hiển thị đúng (2px brass, offset 2px)

#### Ghi chú:
- Component naming convention: `Q` prefix (QButton, QCard, etc.)
- Dùng CSS modules hoặc Tailwind @apply
- Không dùng external UI library

---

### Task 3b: Icons & Assets Setup

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 3b |
| **Tên** | Icons & Assets Setup |
| **Phụ thuộc** | 1 |
| **Ưu tiên** | **P1 - Cần cho visual** |

#### Phạm vi:
- [ ] Cài đặt Lucide React
- [ ] Tạo icon wrapper hoặc dùng trực tiếp
- [ ] Copy/logo assets từ `logo and brand/`
- [ ] Favicon setup

#### Files dự kiến:
```
public/
├── logo/
│   ├── qortex-logo-horizontal-color.svg
│   ├── qortex-logo-horizontal-reverse.svg
│   └── qortex-symbol-color.svg
└── favicon.ico
src/
├── components/
│   └── icons/
│       └── index.ts          # Lucide icon exports
```

#### Tiêu chí nghiệm thu:
- [ ] Logo hiển thị đúng trên nền sáng và tối
- [ ] Icons có đúng stroke (1.8px)
- [ ] Favicon hoạt động

---

### Task 4: Layout Components (Header & Footer)

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 4 |
| **Tên** | Layout Components |
| **Phụ thuộc** | 3, 3b |
| **Ưu tiên** | **P0 - Mọi trang dùng** |

#### Phạm vi:
- [ ] `<Header>` - desktop header với navigation
- [ ] `<MobileMenu>` - drawer cho mobile
- [ ] `<Footer>` - footer với links và legal info
- [ ] Root layout integration
- [ ] Sticky header behavior

#### Header Structure:
```
Logo | Nền tảng | Giải pháp (dropdown) | Vì sao Qortex | Về chúng tôi | [Đặt lịch demo]
```

#### Footer Structure:
```
[Logo + mô tả] | [Giải pháp links] | [Nền tảng links] | [Pháp lý links]
─────────────────────────────────────────────────────────────────────
© 2026 Công ty TNHH Giải pháp Qortex | Mã số: XXXXXX | Địa chỉ
```

#### Files dự kiến:
```
src/
├── components/
│   └── layout/
│       ├── Header.tsx
│       ├── Header.module.css
│       ├── MobileMenu.tsx
│       ├── MobileMenu.module.css
│       ├── Footer.tsx
│       ├── Footer.module.css
│       └── index.ts
├── app/
│   └── layout.tsx            # Thêm Header/Footer
```

#### Tiêu chí nghiệm thu:
- [ ] Header sticky và hiển thị đúng trên mọi trang
- [ ] Navigation links hoạt động
- [ ] Dropdown "Giải pháp" mở đúng
- [ ] Mobile menu (hamburger) hoạt động với drawer
- [ ] Footer hiển thị thông tin pháp lý (sau khi xác nhận)
- [ ] Nút "Đặt lịch demo" luôn visible trên header

#### Open Questions:
- [ ] Mobile menu: slide-in từ phải hay full-screen overlay?

---

### Task 5: Homepage (Trang chủ)

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 5 |
| **Tên** | Homepage |
| **Phụ thuộc** | 3, 3b, 4 |
| **Ưu tiên** | **P0 - Trang quan trọng nhất** |

#### Phạm vi:
- [ ] Hero section với title, subtitle, screenshot
- [ ] Pain Points section (3 thẻ bài toán)
- [ ] Solution Overview section (sơ đồ module)
- [ ] Value Pillars section (4 trụ giá trị)
- [ ] Business Flow section (tab O2C, P2P, R2R)
- [ ] Industry Preview section (4 thẻ ngành)
- [ ] Trust Signals section (3 ý)
- [ ] Page CTA section (form + CTA)

#### Page Structure:
```
src/app/
└── page.tsx                    # Homepage
    └── components/
        └── home/
            ├── HeroSection.tsx
            ├── PainPointsSection.tsx
            ├── SolutionOverviewSection.tsx
            ├── ValuePillarsSection.tsx
            ├── BusinessFlowSection.tsx
            ├── IndustryPreviewSection.tsx
            ├── TrustSignalsSection.tsx
            └── PageCTASection.tsx
```

#### Tiêu chí nghiệm thu:
- [ ] Tất cả 8 sections hiển thị đúng thứ tự
- [ ] Hero: title, subtitle, screenshot mockup (HTML/CSS)
- [ ] Pain Points: 3 thẻ với hover state
- [ ] Business Flow: tab switching hoạt động
- [ ] Industry Preview: 4 cards với links
- [ ] Page CTA: headline + form hoặc inline CTA
- [ ] Responsive trên mobile/tablet/desktop
- [ ] Scroll animation nhẹ (fade-in, 250ms max)

#### Content Flags:
- ⚠️ Hero copy cần xác nhận (hiện là bản nháp)
- ⚠️ Screenshot mockup: dùng HTML/CSS render, không PNG

---

### Task 6: Platform Page (Nền tảng)

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 6 |
| **Tên** | Platform Page |
| **Phụ thuộc** | 3, 3b, 4 |
| **Ưu tiên** | **P1** |

#### Phạm vi:
- [ ] Hero section
- [ ] Module Groups section (6 nhóm module)
- [ ] Architecture section (dành cho IT)

#### Page Structure:
```
src/app/
└── nen-tang/
    └── page.tsx               # Platform page
        └── components/
            └── platform/
                ├── PlatformHero.tsx
                ├── ModuleGroupsSection.tsx
                └── ArchitectureSection.tsx
```

#### Tiêu chí nghiệm thu:
- [ ] Hero với title phù hợp
- [ ] 6 module groups hiển thị dạng grid
- [ ] Module cards có name, description, features
- [ ] Architecture section cho IT (không nêu tên công nghệ lõi)
- [ ] Responsive grid

---

### Task 7: Industry Template & Pages

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 7 |
| **Tên** | Industry Template & Pages |
| **Phụ thuộc** | 3, 3b, 4, 6 |
| **Ưu tiên** | **P1** |

#### Phạm vi:
- [ ] Tạo shared industry template component
- [ ] 4 trang ngành: Khách sạn, Sản xuất, Bán lẻ, Dịch vụ HĐ
- [ ] Dữ liệu ngành từ `src/data/industries.ts`

#### Template Structure (shared):
```
1. Hero (tên ngành + bài toán đặc thù)
2. Pain Points (chi tiết bài toán ngành)
3. Qortex Flow (quy trình xử lý)
4. Modules Used (grid module liên quan)
5. Page CTA (Demo theo ngành)
```

#### Data Structure:
```typescript
// src/data/industries.ts
export interface Industry {
  slug: string;
  name: string;
  heroTitle: string;
  painPoints: PainPoint[];
  qortexSolution: QortexSolution;
  modules: string[];
  ctaText: string;
}
```

#### Files dự kiến:
```
src/
├── app/
│   └── giai-phap/
│       ├── page.tsx                 # Overview page
│       ├── [nganh]/
│       │   └── page.tsx            # Dynamic industry page
│       └── components/
│           ├── IndustryOverview.tsx
│           └── IndustryTemplate.tsx  # Shared template
├── components/
│   └── industry/
│       ├── IndustryHero.tsx
│       ├── IndustryPainPoints.tsx
│       ├── IndustryFlow.tsx
│       ├── IndustryModules.tsx
│       └── IndustryCTA.tsx
└── data/
    └── industries.ts
```

#### Tiêu chí nghiệm thu:
- [ ] Template nhất quán cho cả 4 ngành
- [ ] Mỗi trang có nội dung riêng theo ngành
- [ ] Navigation từ overview page hoạt động
- [ ] CTA "Demo theo ngành" có tracking riêng

---

### Task 8: Why Qortex Page (Vì sao Qortex)

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 8 |
| **Tên** | Why Qortex Page |
| **Phụ thuộc** | 3, 3b, 4 |
| **Ưu tiên** | **P1** |

#### Phạm vi:
- [ ] Hero section
- [ ] Comparison table (3 cột)
- [ ] Product roadmap section (AI principles)

#### Page Structure:
```
src/app/
└── vi-sao-qortex/
    └── page.tsx
        └── components/
            ├── WhyHero.tsx
            ├── ComparisonTable.tsx
            └── ProductRoadmap.tsx
```

#### Tiêu chí nghiệm thu:
- [ ] Bảng so sánh hiển thị đúng 3 cột
- [ ] Tiêu chí so sánh đầy đủ (6 tiêu chí)
- [ ] Không có tên đối thủ cụ thể
- [ ] Roadmap section ghi rõ "lộ trình"

#### ⚠️ Content Flags:
- Chi phí và thời gian triển khai Qortex cần xác nhận

---

### Task 9: About Us Page (Về chúng tôi)

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 9 |
| **Tên** | About Us Page |
| **Phụ thuộc** | 3, 3b, 4 |
| **Ưu tiên** | **P2** |

#### Phạm vi:
- [ ] Hero section
- [ ] Story section (câu chuyện sáng lập)
- [ ] Philosophy section
- [ ] Team section
- [ ] Legal info section

#### Page Structure:
```
src/app/
└── ve-chung-toi/
    └── page.tsx
        └── components/
            ├── AboutHero.tsx
            ├── StorySection.tsx
            ├── PhilosophySection.tsx
            ├── TeamSection.tsx
            └── LegalInfo.tsx
```

#### Tiêu chí nghiệm thu:
- [ ] Nội dung câu chuyện sáng lập (cần xác nhận)
- [ ] Team section với ảnh thật (cần xác nhận)
- [ ] Legal info hiển thị đúng thông tin công ty

#### ⚠️ Open Questions:
- [ ] Nội dung câu chuyện sáng lập
- [ ] Ảnh và thông tin đội ngũ
- [ ] Mã số doanh nghiệp và địa chỉ

---

### Task 10: Demo Form Page

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 10 |
| **Tên** | Demo Form Page |
| **Phụ thuộc** | 3, 3b, 4 |
| **Ưu tiên** | **P1** |

#### Phạm vi:
- [ ] Hero section
- [ ] Demo form (7 fields)
- [ ] Thank you page

#### Form Fields:
| Field | Type | Required |
|---|---|---|
| Họ tên | text | ✅ |
| Chức vụ | text | ✅ |
| Tên công ty | text | ✅ |
| Ngành | select | ✅ |
| Quy mô nhân sự | select | ✅ |
| Email | email | ✅ |
| Số điện thoại | tel | ✅ |
| Hệ thống đang dùng | text | ❌ |
| Nhu cầu chính | textarea | ❌ |
| Đồng ý xử lý dữ liệu | checkbox | ✅ |

#### Page Structure:
```
src/app/
├── dat-lich-demo/
│   ├── page.tsx                 # Form page
│   └── cảm-ơn/
│       └── page.tsx             # Thank you page
└── actions/
    └── submit-demo.ts           # Server action
```

#### Tiêu chí nghiệm thu:
- [ ] Form validation hoạt động (required fields)
- [ ] Submit button disabled khi form invalid
- [ ] Success state hiển thị thank you page
- [ ] Error handling cho submit fail
- [ ] Honeypot/spam protection

#### ⚠️ Open Questions:
- [ ] Email nhận lead
- [ ] Captcha provider
- [ ] Lead storage (email, CRM placeholder, etc.)

---

### Task 11: Legal Pages

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 11 |
| **Tên** | Legal Pages |
| **Phụ thuộc** | 3, 3b, 4 |
| **Ưu tiên** | **P2** |

#### Phạm vi:
- [ ] Chính sách bảo vệ dữ liệu cá nhân
- [ ] Điều khoản sử dụng website

#### Page Structure:
```
src/app/
├── chinh-sach-bao-mat/
│   └── page.tsx
└── dieu-khoan-su-dung/
    └── page.tsx
```

#### Tiêu chí nghiệm thu:
- [ ] Legal pages có nội dung đầy đủ (cần legal review)
- [ ] Navigation từ footer hoạt động
- [ ] Responsive layout

#### ⚠️ Important Notes:
- **Nội dung cần được soạn bởi đội ngũ pháp lý hoặc tư vấn**
- Không tự viết nội dung pháp lý
- Có thể dùng placeholder để layout trước

---

### Task 12: SEO, Accessibility & Polish

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 12 |
| **Tên** | SEO, Accessibility & Polish |
| **Phụ thuộc** | 5, 6, 7, 8, 9, 10, 11 |
| **Ưu tiên** | **P1** |

#### Phạm vi:

**SEO:**
- [ ] Meta title và description riêng cho từng trang
- [ ] Open Graph tags cho social sharing
- [ ] JSON-LD structured data (Organization, SoftwareApplication)
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] Canonical URLs

**Accessibility (WCAG 2.1 AA):**
- [ ] Skip link "Đi đến nội dung chính"
- [ ] ARIA labels cho navigation
- [ ] Alt text cho tất cả images
- [ ] Focus management trong modals/drawers
- [ ] Keyboard navigation hoàn chỉnh
- [ ] Color không phải cách duy nhất truyền thông tin

**Performance:**
- [ ] Lighthouse score ≥ 90 trên mobile
- [ ] Image optimization (WebP, lazy-load)
- [ ] Font preloading
- [ ] Bundle size optimization

#### Files dự kiến:
```
src/app/
├── sitemap.ts
├── robots.ts
└── metadata.ts              # Shared metadata utilities
public/
├── og-image.png             # Social sharing image
```

#### Tiêu chí nghiệm thu:
- [ ] Google Lighthouse mobile ≥ 90
- [ ] WCAG 2.1 AA compliance
- [ ] Social sharing previews hoạt động

---

### Task 13: Testing & QA

| Thuộc tính | Giá trị |
|---|---|
| **ID** | 13 |
| **Tên** | Testing & QA |
| **Phụ thuộc** | 12 |
| **Ưu tiên** | **P1** |

#### Phạm vi:

**Functional Testing:**
- [ ] Navigation links hoạt động
- [ ] Form validation
- [ ] Mobile menu
- [ ] Dropdown menus
- [ ] Responsive breakpoints

**Cross-browser:**
- [ ] Chrome, Firefox, Safari, Edge (desktop)
- [ ] Safari iOS, Chrome Android (mobile)

**Accessibility Testing:**
- [ ] Screen reader compatibility
- [ ] Keyboard-only navigation
- [ ] Screen magnifier compatibility

**Content QA:**
- [ ] Tất cả copy đúng
- [ ] Không có placeholder text
- [ ] Links đúng destination

#### Tiêu chí nghiệm thu:
- [ ] Tất cả critical paths hoạt động
- [ ] Không có console errors
- [ ] Lighthouse accessibility ≥ 90

---

## 4. Task Summary Table

| ID | Task | Phụ thuộc | Ưu tiên | Ghi chú |
|---|---|---|---|---|
| 1 | Foundation Setup | — | P0 | Không block được |
| 2 | Design Tokens | 1 | P0 | |
| 3 | Core UI Components | 2 | P0 | |
| 3b | Icons & Assets | 1 | P1 | Có thể song song với 3 |
| 4 | Header & Footer | 3, 3b | P0 | |
| 5 | Homepage | 3, 3b, 4 | P0 | |
| 6 | Platform Page | 3, 3b, 4 | P1 | |
| 7 | Industry Template + Pages | 3, 3b, 4, 6 | P1 | |
| 8 | Why Qortex Page | 3, 3b, 4 | P1 | |
| 9 | About Us Page | 3, 3b, 4 | P2 | |
| 10 | Demo Form Page | 3, 3b, 4 | P1 | |
| 11 | Legal Pages | 3, 3b, 4 | P2 | |
| 12 | SEO, A11y & Polish | 5-11 | P1 | |
| 13 | Testing & QA | 12 | P1 | |

---

## 5. Content Dependencies

Một số content cần được xác nhận trước khi implement:

| Content | Task sử dụng | Độ ưu tiên |
|---|---|---|
| Hero copy chính thức | 5 | Cao |
| Screenshot sản phẩm (dùng mockup) | 5, 6 | Cao |
| Mã số doanh nghiệp | 4, 9, 11 | Cao |
| Địa chỉ công ty | 4, 9, 11 | Cao |
| Câu chuyện sáng lập | 9 | Trung |
| Ảnh đội ngũ | 9 | Trung |
| Chi phí/thời gian triển khai | 8 | Thấp |

---

## 6. Recommended Development Order

### Phase 1: Foundation (Tasks 1-4)
1. Foundation Setup
2. Design Tokens Integration
3. Core UI Components
4. Icons & Assets
5. Header & Footer

**Deliverable:** Header, Footer, UI components sẵn sàng cho tất cả pages.

### Phase 2: Core Pages (Tasks 5-7)
6. Homepage
7. Platform Page
8. Industry Template + Pages

**Deliverable:** 6 trang chính + 4 trang ngành với nội dung cơ bản.

### Phase 3: Supporting Pages (Tasks 8-11)
9. Why Qortex Page
10. About Us Page
11. Demo Form Page
12. Legal Pages

**Deliverable:** Toàn bộ 10 trang (6 + 4 ngành) hoàn chỉnh.

### Phase 4: Polish (Tasks 12-13)
13. SEO & Accessibility
14. Testing & QA

**Deliverable:** Website production-ready.

---

## 7. First Actionable Task

**Task 1: Foundation Setup** có thể bắt đầu ngay với:

1. Verify/check cấu trúc Next.js project hiện có
2. Cấu hình Tailwind với preset từ `tokens/tailwind.preset.js`
3. Import design tokens từ `design-system.md`
4. Setup font (Be Vietnam Pro + IBM Plex Mono)

### Pre-work checklist:
- [ ] Verify Next.js project structure
- [ ] Confirm Tailwind version compatibility
- [ ] Confirm font hosting approach (self-hosted vs Google Fonts)
