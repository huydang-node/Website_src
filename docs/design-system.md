# DESIGN_SYSTEM.md — Qortex ERP Landing Page

> Hệ thống thiết kế cho landing page giới thiệu ERP của **Công ty TNHH Giải pháp Qortex (Qortex Solutions Co., Ltd)**.
> Kế thừa trực tiếp bộ nhận diện tại `logo and brand/` (phương án B "Sổ cái"). Mọi giá trị logo, màu thương hiệu, font thương hiệu đều **giữ y hệt** — không tự ý thay đổi.
> Art direction đã chọn: **B — Modern SaaS (có điều chỉnh)**: giao diện sản phẩm làm chứng cứ chính, khoảng trắng dồi dào, tone "điềm tĩnh, chuyên nghiệp", không dùng illustration hoạt hình, không dùng hình ảnh AI/chatbot.

---

## 0. Nguyên tắc bất di bất dịch

| # | Nguyên tắc | Lý do |
|---|---|---|
| 1 | **Logo và màu thương hiệu (`--q-green-*`, `--q-brass-*`) là bất biến.** | Đã được khách hàng duyệt và công bố trong Brand Guide. |
| 2 | **Font Be Vietnam Pro + IBM Plex Mono là bất biến.** | Đã tự host, đầy đủ tiếng Việt, đã có OFL. |
| 3 | **Không dùng illustration hoạt hình, emoji, mascot, hình ảnh AI/chatbot/robot.** | Nguyên tắc nội dung bắt buộc của Qortex. |
| 4 | **Không bịa số liệu, không logo khách hàng, không testimonial giả.** | Yêu cầu pháp lý + uy tín. |
| 5 | **Dùng "bài toán" thay cho "nỗi đau".** | Giọng văn yêu cầu. |
| 6 | **Tránh từ sáo rỗng**: "hàng đầu", "đột phá", "toàn diện nhất", "tối ưu", "vượt trội". | Giọng văn yêu cầu. |
| 7 | **Mọi khẳng định đi kèm một bằng chứng cụ thể**: ảnh chụp màn hình, mô tả quy trình, tình huống nghiệp vụ. | Nguyên tắc nội dung. |
| 8 | **AI chỉ xuất hiện ở mục "Định hướng sản phẩm", ghi rõ là lộ trình.** | Nguyên tắc nội dung. |
| 9 | **Tương thích ngược với `tokens/tokens.css` hiện có.** | Tránh phá vỡ các trang đã dùng hệ token cũ (trang chủ Qortex Solutions). |

---

## 1. Art Direction tổng hợp (B — Modern SaaS, có điều chỉnh)

### Tinh thần
- **Sản phẩm làm bằng chứng chính** — dashboard Qortex Books chiếm vai trò hero, không có logo khách hàng nên phải dùng chính sản phẩm để tạo trust.
- **Khoảng trắng là thành phần thiết kế**, không phải khoảng trống thừa.
- **Tone "điềm tĩnh"** — không hype, không cường điệu, không gradient rẻ tiền, không animation khoe khoang.
- **Phù hợp 4 ngành mục tiêu** (Khách sạn, Sản xuất, Bán lẻ, Dịch vụ HĐ) bằng cách dùng hình ảnh nghiệp vụ đa dạng và tag ngành rõ ràng.
- **Tránh 2 cực**: không trông như SAP/Oracle (cũ, nặng), không trông như app nội địa giá rẻ (nhiều màu, lộn xộn).

### Điều chỉnh so với hướng B thuần
- Giữ **xanh rêu Sổ cái** làm primary (theo brand) thay vì đổi sang indigo.
- **Bo góc giữ ở mức vừa phải** (8–16px), không bo quá tròn (không trông consumer).
- **Bóng rất tiết chế** — chỉ dùng cho ảnh minh họa nổi, không dùng cho card (theo brand guide).
- **Animation dưới 250ms**, không parallax, không scroll-jacking.

---

## 2. Color Tokens

### 2.1. Màu gốc (raw — đã có trong brand, giữ nguyên)

| Token | Giá trị | Vai trò |
|---|---|---|
| `--q-green-900` | `#0A2E23` | Xanh rêu đậm — hover nút chính |
| `--q-green-800` | `#0F3B2E` | **Xanh Sổ cái** — màu chính, nền tối, tiêu đề |
| `--q-green-600` | `#2F6B4E` | Xanh trung — semantic success |
| `--q-green-500` | `#3E7C5A` | Xanh Lá — biểu đồ, minh họa |
| `--q-brass-300` | `#E3C27A` | Đồng nhạt — nút CTA trên nền tối |
| `--q-brass-500` | `#B8891F` | **Đồng thau** — điểm nhấn đồ họa, focus ring |
| `--q-brass-700` | `#8A6614` | Đồng đậm — chữ nhấn, link hover |
| `--q-neutral-0` | `#FFFFFF` | Trắng — surface, text on dark |
| `--q-neutral-50` | `#F4F6F2` | Nền trang |
| `--q-neutral-100` | `#F3F4EF` | Nền phụ (brand guide) |
| `--q-neutral-200` | `#D9DED9` | Viền thường |
| `--q-neutral-300` | `#CDD3CB` | Đá — phân lớp nhẹ |
| `--q-neutral-400` | `#B9C3BD` | Viền đậm, input |
| `--q-neutral-600` | `#55625B` | Chú thích |
| `--q-neutral-700` | `#3D4A43` | Chữ phụ |
| `--q-neutral-900` | `#1B2420` | Mực — chữ thân |

### 2.2. Màu theo vai trò (semantic — dùng trong code)

| Token | Tham chiếu | Dùng cho |
|---|---|---|
| `--q-bg-page` | `--q-neutral-50` | Nền trang |
| `--q-bg-surface` | `--q-neutral-0` | Card, modal, khối nội dung |
| `--q-bg-surface-alt` | `--q-neutral-100` | Nền phụ khi cần tách lớp nhẹ |
| `--q-bg-inverse` | `--q-green-800` | Header, hero tối, footer, khối nhấn |
| `--q-bg-inverse-hover` | `--q-green-900` | Hover nút chính |
| `--q-bg-overlay` | `rgba(15, 59, 46, 0.48)` | Lớp phủ khi mở modal/drawer |
| `--q-text-primary` | `--q-neutral-900` | Chữ thân trên nền sáng |
| `--q-text-heading` | `--q-green-800` | Tiêu đề trên nền sáng |
| `--q-text-secondary` | `--q-neutral-700` | Đoạn mô tả phụ |
| `--q-text-muted` | `--q-neutral-600` | Caption, helper, mã chứng từ |
| `--q-text-on-inverse` | `--q-neutral-0` | Chữ trên nền xanh rêu |
| `--q-text-on-inverse-muted` | `rgba(255,255,255,0.82)` | Chữ phụ trên nền tối |
| `--q-link` | `--q-green-800` | Liên kết mặc định |
| `--q-link-hover` | `--q-brass-700` | Liên kết khi hover |
| `--q-accent` | `--q-brass-500` | Điểm nhấn đồ họa, focus, **không dùng cho chữ nhỏ trên nền sáng** |
| `--q-accent-text` | `--q-brass-700` | Chữ nhấn màu đồng trên nền sáng (≥ 18px hoặc ≥ 5.26:1) |
| `--q-cta-on-inverse-bg` | `--q-brass-300` | Nền CTA trên nền tối (chữ xanh rêu) |
| `--q-cta-on-inverse-bg-hover` | `#EBCF92` | Hover CTA trên nền tối |
| `--q-border` | `--q-neutral-200` | Viền thường |
| `--q-border-strong` | `--q-neutral-400` | Viền input, phân chia rõ |
| `--q-border-on-inverse` | `rgba(255,255,255,0.08)` | Viền trên nền tối |
| `--q-focus` | `--q-brass-500` | Focus ring 2px offset 2px |
| `--q-success` | `--q-green-600` | Trạng thái thành công |
| `--q-warning` | `#B45309` | Cảnh báo (amber-700, có độ tương phản ≥ 4.5:1 với nền sáng) |
| `--q-danger` | `#991B1B` | Lỗi (red-800, có độ tương phản ≥ 7:1 với nền sáng) |
| `--q-info` | `--q-green-500` | Thông tin (tái dùng xanh Lá) |

### 2.3. Quy tắc sử dụng màu

| Quy tắc | Lý do |
|---|---|
| Trên nền sáng, **chữ màu đồng chỉ dùng `--q-brass-700`**, không dùng `--q-brass-500` (contrast 3.16:1 — không đạt AA cho body text). | WCAG 2.1 AA. |
| `--q-brass-500` chỉ dùng cho: **logo, icon, viền focus, đường kẻ trang trí, chữ ≥ 24px**. | Theo brand guide. |
| **Mọi CTA chính trên nền sáng** dùng `--q-green-800`. Mọi CTA chính trên nền tối dùng `--q-brass-300`. | Tương phản đạt chuẩn. |
| **Không dùng gradient cho background section.** Nếu cần phân lớp, dùng `--q-bg-surface-alt` hoặc `--q-bg-inverse`. | Tone "điềm tĩnh", tránh rẻ tiền. |
| **Không dùng màu xanh lá (`--q-green-500`) cho chữ** — chỉ dùng trong biểu đồ/minh họa. | Contrast không đạt AA. |

### 2.4. Độ tương phản (WCAG 2.1) — đã kiểm chứng

| Cặp màu | Tỉ lệ | Kết luận |
|---|---|---|
| Chữ thân `#1B2420` / nền `#F4F6F2` | 14.63:1 | AA mọi cỡ |
| Heading `#0F3B2E` / trắng | 12.46:1 | AA mọi cỡ |
| Chữ phụ `#3D4A43` / nền `#F4F6F2` | 8.55:1 | AA mọi cỡ |
| Caption `#55625B` / trắng | 6.39:1 | AA mọi cỡ |
| Trắng / `#0F3B2E` | 12.46:1 | AA mọi cỡ |
| CTA `#0F3B2E` / `#E3C27A` | 7.28:1 | AA mọi cỡ |
| Đồng đậm `#8A6614` / trắng | 5.26:1 | AA mọi cỡ |
| Đồng thau `#B8891F` / trắng | 3.16:1 | **Chỉ đồ họa / chữ ≥ 24px** |

---

## 3. Typography

### 3.1. Font family

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--q-font-sans` | `'Be Vietnam Pro', 'Segoe UI', system-ui, sans-serif` | Toàn bộ UI, body, heading |
| `--q-font-mono` | `'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace` | Mã chứng từ, số liệu, version |
| `--q-font-brand` | `'IBM Plex Sans', 'Be Vietnam Pro', sans-serif` | **Chỉ dùng cho chữ trong logo** (đã có sẵn trong SVG) |

### 3.2. Type scale (đã có — giữ nguyên từ brand)

| Token | Cỡ / dòng / độ đậm / tracking | Dùng cho |
|---|---|---|
| `--q-text-display` | `clamp(38px, 5.4vw, 68px)` / 1.08 / 600 / -0.01em | Hero h1 |
| `--q-text-h2` | `clamp(30px, 3.4vw, 44px)` / 1.15 / 600 / 0 | Section heading |
| `--q-text-h3` | `22px` / 1.3 / 600 / 0 | Subsection heading |
| `--q-text-h4` | `20px` / 1.35 / 600 / 0 | Card heading |
| `--q-text-h5` | `18px` / 1.4 / 600 / 0 | Small card heading |
| `--q-text-lead` | `20px` / 1.6 / 400 / 0 | Đoạn dẫn dưới hero |
| `--q-text-body` | `16px` / 1.6 / 400 / 0 | Body mặc định |
| `--q-text-small` | `14px` / 1.55 / 400 / 0 | Chữ phụ trong card |
| `--q-text-caption` | `13px` / 1.5 / 400 / 0 | Caption, helper |
| `--q-text-eyebrow` | `12px` / 1.4 / 600 / 0.12em, uppercase | Nhãn nhỏ trên heading |
| `--q-text-mono` | `12px` / 1.5 / 500 / 0 | Mã, số bước |

### 3.3. Quy tắc typography

| Quy tắc | Lý do |
|---|---|
| Heading dùng weight 600, không dùng 700. | Be Vietnam Pro 600 đã đủ đậm, 700 trông nặng. |
| `h1, h2, h3` dùng `text-wrap: balance`. | Tránh 1 dòng bị quá ngắn. |
| **Không dùng `Inter`, `Roboto`, `Arial`, `system-ui` thuần** — luôn fallback qua Be Vietnam Pro. | Brand yêu cầu. |
| Eyebrow viết hoa, giãn chữ 0.12em, màu `--q-accent-text` (hoặc `--q-cta-on-inverse-bg` trên nền tối). | Tone chuyên nghiệp. |
| Số liệu dùng `--q-font-mono` để canh cột khi hiển thị dạng bảng/danh sách. | Tăng khả năng đọc. |
| Không in nghiêng (`italic`) cho UI text. | Tránh cảm giác "blog cá nhân". |

### 3.4. Đoạn văn & danh sách
- Cỡ chữ tối thiểu cho body: **16px** (theo brand).
- Cỡ chữ tối thiểu cho caption: **13px**.
- Giãn dòng body: 1.6, heading: 1.08–1.4 (giảm dần theo cỡ).
- List item: dùng `padding-block: 4px`, marker dấu chấm đơn giản hoặc icon stroke.

---

## 4. Container & Grid

### 4.1. Container

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--q-container` | `1240px` | Max-width nội dung chính |
| `--q-container-narrow` | `960px` | Bài viết dài, FAQ, đoạn văn bản tập trung |
| `--q-gutter` | `24px` | Padding-inline mặc định cho mọi section |
| `--q-section-y` | `96px` | Padding-block cho section mặc định |
| `--q-section-y-tight` | `64px` | Section phụ, ngắn |
| `--q-section-y-hero` | `88px` trên / `56px` dưới | Hero riêng |

### 4.2. Grid

| Đặc tính | Giá trị |
|---|---|
| Số cột | **12 cột** |
| Gutter | 24px |
| Margin ngoài | 24px (mỗi bên, mobile) → tự căn giữa (desktop) |
| Breakpoint mobile | 1 cột, full-width, padding-inline 20px |
| Breakpoint tablet | 2–4 cột tùy component |
| Breakpoint desktop | 6 hoặc 12 cột tùy component |

### 4.3. Breakpoints

| Tên | Min-width | Dùng cho |
|---|---|---|
| `sm` | 640px | Mobile ngang, tablet nhỏ |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop rộng |

### 4.4. Tailwind config (tham khảo)

```js
// tailwind.config.js — mở rộng từ tokens/tailwind.preset.js hiện có
screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
maxWidth: {
  'q-container': '1240px',
  'q-container-narrow': '960px',
},
spacing: {
  'gutter': '24px',
  'section': '96px',
  'section-tight': '64px',
}
```

---

## 5. Spacing Scale

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--q-space-0` | `0` | Reset |
| `--q-space-1` | `4px` | Khoảng cách sát icon-text |
| `--q-space-2` | `8px` | Stack nhỏ trong button |
| `--q-space-3` | `12px` | Padding input |
| `--q-space-4` | `16px` | Padding card nhỏ, gap giữa element |
| `--q-space-5` | `20px` | Lead paragraph gap |
| `--q-space-6` | `24px` | Card padding, gutter |
| `--q-space-7` | `28px` | Card padding rộng |
| `--q-space-8` | `32px` | Card lớn, section phụ |
| `--q-space-10` | `40px` | Khoảng cách giữa block trong section |
| `--q-space-12` | `48px` | Giữa heading và content |
| `--q-space-14` | `56px` | Section break |
| `--q-space-16` | `64px` | Khoảng trống giữa các nhóm lớn |
| `--q-space-22` | `88px` | Padding hero top |
| `--q-space-24` | `96px` | Padding section dọc |

**Quy tắc:** spacing scale tăng theo bội số 4. Không dùng giá trị ngoài scale (trừ 1px cho border).

---

## 6. Border, Radius, Shadow

### 6.1. Border

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--q-border-w` | `1px` | Mọi border mặc định |
| `--q-border-w-strong` | `2px` | Input focus, divider đậm |
| Màu | `--q-border` (`#D9DED9`) | Card, divider |
| Màu (mạnh) | `--q-border-strong` (`#B9C3BD`) | Input, separator nặng |
| Màu (trên nền tối) | `--q-border-on-inverse` (`rgba(255,255,255,0.08)`) | Card trên hero tối |

### 6.2. Radius

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--q-radius-xs` | `3px` | Tag nhỏ, code chip |
| `--q-radius-sm` | `6px` | **Button, input, tag, badge** |
| `--q-radius-md` | `8px` | **Card mặc định** |
| `--q-radius-lg` | `10px` | Khối nổi bật, modal |
| `--q-radius-xl` | `16px` | Hero card lớn, ảnh dashboard mockup |
| `--q-radius-pill` | `999px` | Pill badge (eyebrow, tag ngành) |

**Quy tắc radius (Modern SaaS — điều chỉnh):**
- Button, input: `6px` (giữ brand, không bo quá tròn).
- Card: `8px` chuẩn, `16px` cho card đặc biệt (hero dashboard, feature spotlight).
- **Không bo tròn hơn `16px`** ở bất kỳ element nào — tránh cảm giác consumer app.
- Avatar/logo box: bo `8px` (vuông vức, theo brand) thay vì bo tròn 50%.

### 6.3. Shadow

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--q-shadow-xs` | `0 1px 2px rgba(15, 59, 46, 0.04)` | Card hover nhẹ |
| `--q-shadow-sm` | `0 2px 8px rgba(15, 59, 46, 0.06)` | Dropdown, popover |
| `--q-shadow-md` | `0 8px 24px rgba(15, 59, 46, 0.10)` | Card nổi (CTA box, pricing) |
| `--q-shadow-lg` | `0 24px 60px rgba(15, 59, 46, 0.16)` | **Ảnh minh họa nổi, hero dashboard mockup** |
| `--q-shadow-xl` | `0 32px 80px rgba(15, 59, 46, 0.20)` | Modal |

**Quy tắc shadow (theo brand + điều chỉnh Modern SaaS):**
- **Mặc định card KHÔNG dùng shadow** — chỉ dùng border 1px `--q-border`. Đây là nguyên tắc brand.
- Shadow chỉ dùng cho: ảnh minh họa nổi, hero dashboard mockup, modal, popover, hover state mạnh.
- Khi card có hover, **KHÔNG** thêm shadow — chỉ đổi border sang `--q-border-strong` và nền sang `--q-bg-surface-alt`.

---

## 7. Buttons

### 7.1. Kích thước

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--q-button-h` | `48px` | Button mặc định |
| `--q-button-h-sm` | `40px` | Button phụ trong card (compact) |
| `--q-button-h-lg` | `56px` | Button hero (CTA lớn) |
| `--q-tap-min` | `44px` | Vùng bấm tối thiểu (touch target) |

### 7.2. Variants

| Variant | Nền | Chữ | Border | Dùng khi |
|---|---|---|---|---|
| `q-btn-primary` | `--q-green-800` | `--q-neutral-0` | 0 | **CTA chính trên nền sáng** |
| `q-btn-cta` | `--q-brass-300` | `--q-green-800` | 0 | **CTA chính trên nền tối** |
| `q-btn-outline` | transparent | `--q-green-800` | 1px `--q-border-strong` | CTA phụ trên nền sáng |
| `q-btn-ghost` | transparent | `--q-text-primary` | 0 | Hành động phụ (link, tertiary) |
| `q-btn-on-inverse` | transparent | `--q-text-on-inverse` | 1px `--q-border-on-inverse` | CTA phụ trên nền tối |

### 7.3. States (áp dụng cho mọi variant)

| State | Quy tắc |
|---|---|
| **Default** | Theo variant |
| **Hover** | Primary → `--q-bg-inverse-hover`; CTA → `#EBCF92`; Outline → border `--q-green-800`; Ghost → nền `--q-bg-surface-alt`; On-inverse → nền `rgba(255,255,255,0.08)` |
| **Active / Pressed** | translateY(1px), giữ màu hover |
| **Focus-visible** | Viền focus 2px `--q-focus` (đồng thau), offset 2px bên ngoài button |
| **Disabled** | Nền `--q-neutral-200`, chữ `--q-text-muted`, cursor `not-allowed`, không hover |
| **Loading** | Spinner thay icon, giữ kích thước, disable click |

### 7.4. Cấu trúc
- Padding: `14px 24px` (mặc định), `10px 16px` (sm), `16px 28px` (lg).
- Gap giữa icon và text: 8px.
- Font: inherit, weight 600, line-height 1.
- Border-radius: `--q-radius-sm` (6px).
- Có thể là `<button>`, `<a>`, hoặc `<Link>` — phải có `type="button"` khi không phải submit.

### 7.5. Quy tắc button
- **Mỗi section chỉ có 1 primary CTA**. CTA phụ dùng outline hoặc ghost.
- **Icon trong button**: chỉ dùng khi thật sự cần (mũi tên, download). Không dùng icon trang trí.
- **Không viết hoa toàn button** — giữ chữ thường, đúng như tiếng Việt ("Đặt lịch demo" chứ không phải "ĐẶT LỊCH DEMO").
- Button không được rộng hơn `max-width: 320px` trên desktop.

---

## 8. Cards

### 8.1. Card mặc định

| Thuộc tính | Giá trị |
|---|---|
| Nền | `--q-bg-surface` |
| Border | 1px `--q-border` |
| Border-radius | `--q-radius-md` (8px) |
| Padding | `--q-space-7` (28px) cho desktop, `--q-space-5` (20px) cho mobile |
| Shadow | **Không dùng** — theo brand |
| Hover | Border đổi sang `--q-border-strong`, nền `--q-bg-surface-alt`, transition 200ms |

### 8.2. Card variants

| Variant | Khác biệt | Dùng cho |
|---|---|---|
| Card mặc định | Như trên | Feature, module |
| Card inverse | Nền `--q-bg-inverse`, chữ `--q-text-on-inverse`, border `transparent` | Block trên hero tối, CTA cuối trang |
| Card spotlight | Border-radius `16px`, shadow `--q-shadow-lg` | Hero dashboard mockup |
| Card feature | Padding 32px, có icon đầu + heading + body + tag ngành | Section "Giải pháp / Modules" |
| Card stat | Border-top 2px `--q-brass-500`, padding 24px | Khối "Bằng chứng" (chỉ dùng khi có số liệu thật) |
| Card process | Số thứ tự mono ở góc, border trái `--q-green-800` 2px | Section "Quy trình triển khai" |

### 8.3. Quy tắc card
- **Không dùng shadow cho card thường** — chỉ dùng cho hero mockup và modal.
- Hover chỉ đổi border + nền nhẹ, **không translateY** (giữ brand "điềm tĩnh").
- **Không dùng gradient background** trên card.
- Mỗi card có **một eyebrow hoặc icon** ở trên cùng để phân loại.

---

## 9. Inputs & Forms

### 9.1. Input mặc định

| Thuộc tính | Giá trị |
|---|---|
| Nền | `--q-neutral-0` |
| Border | 1px `--q-border-strong` |
| Border-radius | `--q-radius-sm` (6px) |
| Padding | `12px 14px` |
| Min-height | 48px (`--q-button-h`) |
| Font | inherit, 16px |
| Màu chữ | `--q-text-primary` |
| Placeholder | `--q-text-muted` |

### 9.2. Input states

| State | Quy tắc |
|---|---|
| Default | Border `--q-border-strong` |
| Hover | Border `--q-green-800` |
| Focus | Border 2px `--q-focus` (đồng thau), offset 0 (border thay vì ring) |
| Error | Border 2px `--q-danger`, helper text màu `--q-danger` |
| Disabled | Nền `--q-bg-surface-alt`, chữ `--q-text-muted`, cursor `not-allowed` |

### 9.3. Label & helper
- Label: 14px, weight 600, màu `--q-text-heading`, đặt **phía trên** input.
- Helper: 13px, màu `--q-text-muted`, đặt dưới input.
- Error message: 13px, màu `--q-danger`, kèm icon warning.

### 9.4. Form layout
- Một cột trên mobile, có thể 2 cột trên desktop với field ngắn (tên, sđt).
- Gap giữa field: 20px.
- Nút submit căn trái, full-width trên mobile.

---

## 10. Badges, Tags, Eyebrow

### 10.1. Badge (trạng thái)

| Variant | Nền | Chữ | Border | Dùng cho |
|---|---|---|---|---|
| Neutral | `--q-bg-surface-alt` | `--q-text-secondary` | 0 | Tag mặc định |
| Brass | `--q-brass-300` | `--q-green-800` | 0 | "Sắp ra mắt", "Lộ trình" |
| Green | `--q-green-500` | `--q-neutral-0` | 0 | "Đã có", trạng thái tích cực |
| Outline | transparent | `--q-text-secondary` | 1px `--q-border-strong` | Tag phụ |

**Quy tắc badge:**
- Height: 24px, padding `0 10px`.
- Border-radius: `--q-radius-sm` (6px) hoặc `--q-radius-pill` (nếu là tag ngành).
- Font: 12px, weight 500, line-height 1.
- Có thể chứa icon 12px ở đầu.

### 10.2. Eyebrow (nhãn trên heading)

| Thuộc tính | Giá trị |
|---|---|
| Font | Be Vietnam Pro 12px / weight 600 |
| Transform | uppercase |
| Letter-spacing | 0.12em |
| Màu trên nền sáng | `--q-accent-text` (`--q-brass-700`) |
| Màu trên nền tối | `--q-cta-on-inverse-bg` (`--q-brass-300`) |
| Margin-bottom | 12px (cách heading) |

### 10.3. Tag ngành (Khách sạn / Sản xuất / Bán lẻ / Dịch vụ HĐ)
- Dùng pill (`--q-radius-pill`), height 28px, padding `0 12px`.
- Nền `--q-bg-surface-alt`, chữ `--q-text-secondary`, border 1px `--q-border`.
- Dùng để đánh dấu mỗi tính năng thuộc ngành nào.

---

## 11. Section styles

### 11.1. Section mặc định

| Thuộc tính | Giá trị |
|---|---|
| Padding-block | `--q-section-y` (96px) |
| Nền | `--q-bg-page` (mặc định) hoặc `--q-bg-surface` (khi cần tách lớp) |
| Container | `.q-container` (max-width 1240px, padding-inline 24px) |

### 11.2. Section variants

| Variant | Nền | Heading màu | Dùng cho |
|---|---|---|---|
| Default | `--q-bg-page` | `--q-text-heading` | Hầu hết section |
| Surface | `--q-bg-surface` | `--q-text-heading` | Section cần "nổi" hơn (ví dụ: Giải pháp / Modules) |
| Inverse | `--q-bg-inverse` | `--q-text-on-inverse` | Hero, CTA cuối, footer |
| Alt | `--q-bg-surface-alt` | `--q-text-heading` | Section xen kẽ nhẹ |

### 11.3. Section heading pattern
```
[eyebrow uppercase 12px brass-700/300]
[H2 30–44px / 600 / heading color]
[Lead 20px / 1.6 / text-secondary, max-width 720px]
[→ 48px gap]
[nội dung section]
```

### 11.4. Quy tắc section
- **Mỗi section có 1 H2 duy nhất** — không có H2 trùng lặp.
- Eyebrow **không bắt buộc** nhưng nên có ở section quan trọng.
- Lead paragraph max-width 720px để tránh dòng quá dài.
- Mobile: padding-block giảm còn 64px.

---

## 12. Iconography

### 12.1. Quy tắc icon
- **Library**: dùng **Lucide** (open source, MIT, phong cách stroke hiện đại, dễ tùy chỉnh).
- **Stroke**: 1.8px (theo brand), `stroke-linecap="round"`, `stroke-linejoin="round"`.
- **Cỡ mặc định**: 20px trong UI, 24px trong feature card, 16px trong input.
- **Màu**: cùng màu chữ (`currentColor`).
- **Không dùng emoji** làm icon — đã nêu trong nguyên tắc.
- **Không dùng icon màu** (filled) — luôn stroke.
- **Không dùng icon có chữ** (ví dụ icon chứa "AI", "NEW") — tránh cảm giác quảng cáo.

### 12.2. Icon trong ngữ cảnh
- **Trong feature card**: icon 24px, màu `--q-green-800`, đặt trong box 40×40 nền `--q-bg-surface-alt`.
- **Trong button**: 16px, canh giữa dọc với text.
- **Trong input**: 16px, đặt bên trái, màu `--q-text-muted`.
- **Trong badge**: 12px, cùng dòng với text.

### 12.3. Logo (từ `logo and brand/`)
- File: `qortex-logo-horizontal-color.svg` (mặc định trên nền sáng).
- File: `qortex-logo-horizontal-reverse.svg` (trên nền `--q-bg-inverse`).
- File: `qortex-symbol-color.svg` (avatar, favicon).
- Height header: 30px. Height footer: 24px. Min-height: 24px.
- Vùng trống: tối thiểu bằng chiều cao chữ hoa (0.55× symbol height).
- **Không**: đổi màu ngoài biến thể có sẵn, kéo méo, xoay, thêm bóng, thêm gradient.

---

## 13. Illustration & Imagery

### 13.1. Nguyên tắc
- **Không dùng illustration hoạt hình** (cartoon, mascot, 3D blob, gradient shape).
- **Không dùng stock photo người cười** — đặc biệt là ảnh đa sắc tố và "diversity" giả tạo.
- **Không dùng hình minh họa AI/chatbot/robot** — nguyên tắc nội dung.
- **Không dùng abstract gradient** làm background section.

### 13.2. Ảnh được phép
- **Screenshot sản phẩm thật** (Qortex Books) — đây là bằng chứng chính.
- **Ảnh nghiệp vụ thực tế** theo ngành: phòng kế toán, kho hàng, quầy lễ tân khách sạn, dây chuyền sản xuất. Tone trung tính, không posed.
- **Diagram đơn giản** dạng stroke (flow chart, sơ đồ luồng dữ liệu) — dùng Lucide + đường kẻ 1px `--q-green-800`.
- **Mockup UI** trong card spotlight: dùng HTML/CSS render dashboard, không dùng PNG giả.

### 13.3. Xử lý ảnh
- Border-radius `16px` cho ảnh dashboard mockup.
- Có thể thêm viền 1px `--q-border` nhẹ.
- Không dùng filter nặng (noir, vintage). Nếu cần, chỉ giảm saturation -10%.
- Alt text **bắt buộc** cho mọi ảnh, mô tả chính xác nội dung.

### 13.4. Dashboard mockup
- Dùng **HTML/CSS render** thay vì ảnh chụp — linh hoạt, responsive, dễ update.
- Mockup đặt trong card với shadow `--q-shadow-lg` (ngoại lệ duy nhất).
- Mỗi mockup nên có 1 KPI/value nổi bật dùng `--q-font-mono` để nhấn "sản phẩm thật".
- **Chỉ hiển thị dữ liệu thật hoặc dữ liệu giả rõ ràng là ví dụ** — không bịa KPI "tăng 40%".

---

## 14. Motion Principles

### 14.1. Nguyên tắc chung
- **Tất cả transition ≤ 250ms** — nhanh nhưng không giật.
- Easing mặc định: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out mượt).
- **Không parallax**, không scroll-jacking, không video autoplay có tiếng.
- **Tôn trọng `prefers-reduced-motion: reduce`** — tắt tất cả animation không cần thiết.

### 14.2. Motion scale

| Hiệu ứng | Duration | Easing | Dùng cho |
|---|---|---|---|
| Color/opacity change | 150ms | ease-out | Hover, focus |
| Border/background swap | 200ms | ease-out | Card hover, button state |
| Translate nhỏ (4–8px) | 250ms | ease-out | Reveal khi vào viewport |
| Fade in | 300ms | ease-out | Section reveal |
| Modal/drawer | 250ms | ease-in-out | Mở/đóng |
| Stagger delay | 60–100ms mỗi item | — | List reveal |

### 14.3. Hover pattern
- **Button**: đổi màu nền, **không scale**.
- **Card**: đổi border + nền, **không translateY** (giữ "điềm tĩnh").
- **Link**: đổi màu sang `--q-link-hover`.
- **Icon trong card**: stroke-width 1.8 → 2.2 khi hover.

### 14.4. Scroll-triggered
- Dùng `IntersectionObserver` để reveal nhẹ khi section vào viewport.
- Chỉ fade + translateY 8px, **không scale, không rotate**.
- **Stagger** cho grid (3–6 item), delay 80ms.

### 14.5. Không dùng
- ❌ Auto-playing video với âm thanh.
- ❌ Loading spinner quay toàn trang > 3s.
- ❌ Modal popup ngay khi vào trang.
- ❌ Animation bounce/elastic.
- ❌ Text typing effect.
- ❌ Cursor effect (spotlight theo chuột).
- ❌ Marquee/chạy chữ.

---

## 15. Accessibility (WCAG 2.1 AA)

### 15.1. Tương phản (đã kiểm chứng ở mục 2.4)
- Mọi cặp text/background đạt AA.
- Đồng thau `--q-brass-500` chỉ dùng cho đồ họa hoặc chữ ≥ 24px.

### 15.2. Focus
- **Focus ring 2px `--q-focus` (đồng thau)**, offset 2px, **áp dụng cho mọi element focusable**.
- Không bao giờ `outline: none` mà không có ring thay thế.
- Skip link "Đi đến nội dung chính" ở đầu trang.

### 15.3. Bàn phím
- Mọi chức năng phải dùng được bằng bàn phím.
- Tab order đi theo DOM tự nhiên.
- Modal/drawer: trap focus, ESC đóng, focus trả về trigger.
- Menu mobile: ESC đóng, arrow keys điều hướng.

### 15.4. Vùng bấm (touch target)
- Tối thiểu 44×44px (`--q-tap-min`).
- Button mặc định 48px.

### 15.5. Semantic HTML
- Dùng đúng thẻ: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Mỗi section có 1 heading duy nhất theo cấp.
- List dùng `<ul>`/`<ol>`, không dùng `<div>` giả lập.
- Form có `<label>` liên kết với input qua `for`/`id`.

### 15.6. Hình ảnh
- `<img>` luôn có `alt` mô tả nội dung (hoặc `alt=""` nếu là trang trí).
- Icon đơn lẻ: `<svg aria-hidden="true">` + text kèm.
- Icon mang nghĩa: `<svg role="img" aria-label="...">`.

### 15.7. Motion
- `@media (prefers-reduced-motion: reduce)`: tắt transition, animation, scroll-smooth.

### 15.8. Ngôn ngữ
- `<html lang="vi">`.
- Icon/viết tắt có `aria-label` khi cần.

### 15.9. Màu không phải cách duy nhất truyền tải thông tin
- Trạng thái lỗi: chữ + icon + màu (không chỉ màu đỏ).
- Trạng thái thành công: chữ + icon + màu.

---

## 16. Component inventory (tóm tắt)

| Component | Mô tả | Sử dụng token chính |
|---|---|---|
| `.q-container` | Wrapper max-width 1240px | `--q-container`, `--q-gutter` |
| `.q-section` | Padding block 96px | `--q-section-y` |
| `.q-inverse` | Nền tối cho section/header/footer | `--q-bg-inverse`, `--q-text-on-inverse` |
| `.q-card` | Card mặc định | `--q-bg-surface`, `--q-border`, `--q-radius-md` |
| `.q-eyebrow` | Nhãn uppercase 12px | `--q-text-eyebrow` |
| `.q-mono` | Text mono | `--q-font-mono`, `--q-text-mono` |
| `.q-btn` | Button base | `--q-button-h`, `--q-radius-sm` |
| `.q-btn-primary` | CTA chính nền sáng | `--q-green-800` |
| `.q-btn-cta` | CTA chính nền tối | `--q-brass-300` |
| `.q-btn-outline` | CTA phụ nền sáng | `--q-border-strong` |
| `.q-btn-ghost` | Hành động phụ | — |
| `.q-btn-on-inverse` | CTA phụ nền tối | `--q-border-on-inverse` |
| `.q-input` | Text input | `--q-border-strong`, `--q-radius-sm` |
| `.q-badge` | Badge trạng thái | `--q-bg-surface-alt`, `--q-radius-sm` |
| `.q-tag` | Tag ngành (pill) | `--q-radius-pill`, `--q-bg-surface-alt` |
| `.q-stat-card` | Card số liệu | border-top `--q-brass-500` |
| `.q-process-card` | Card quy trình | border-left `--q-green-800` |
| `.q-mockup` | Dashboard mockup wrapper | `--q-shadow-lg`, `--q-radius-xl` |
| `.q-divider` | Đường kẻ ngang | 1px `--q-border` |

---

## 17. File triển khai

Khi build landing page, các file token nên ở vị trí:

```
Website_src/
├── logo and brand/             # Bộ nhận diện (đã có)
│   ├── tokens/tokens.css       # Tokens gốc (giữ nguyên)
│   └── ...
├── design-system/              # Mở rộng cho landing page
│   ├── tokens.css              # Import + mở rộng tokens (mục 2–6, 9, 11)
│   ├── components.css          # Button, card, input, badge (mục 7–10)
│   ├── motion.css              # Animation utilities (mục 14)
│   ├── a11y.css                # Reduced motion, focus, skip link (mục 15)
│   └── README.md               # Cách sử dụng
└── ...
```

**Lưu ý:** Khi viết code, **luôn dùng biến theo vai trò** (semantic tokens), không hardcode giá trị màu/spacing. Nếu cần thêm token mới, cập nhật cả `tokens.css` và `tokens.json`.

---

## 18. Mapping Tailwind (cho code)

| Token CSS | Class Tailwind (gợi ý) |
|---|---|
| `--q-bg-page` | `bg-q-bg-page` |
| `--q-bg-surface` | `bg-q-bg-surface` |
| `--q-bg-inverse` | `bg-q-bg-inverse` |
| `--q-text-primary` | `text-q-text-primary` |
| `--q-text-heading` | `text-q-text-heading` |
| `--q-text-muted` | `text-q-text-muted` |
| `--q-text-on-inverse` | `text-q-text-on-inverse` |
| `--q-border` | `border-q-border` |
| `--q-radius-sm` | `rounded-q-sm` |
| `--q-radius-md` | `rounded-q-md` |
| `--q-radius-xl` | `rounded-q-xl` |
| `--q-container` | `max-w-q-container` |
| `--q-section-y` | `py-q-section` |
| `--q-shadow-lg` | `shadow-q-lg` |
| `--q-text-display` | `text-q-display` |
| `--q-text-h2` | `text-q-h2` |
| `--q-text-h3` | `text-q-h3` |
| `--q-text-body` | `text-q-body` |
| `--q-text-eyebrow` | `text-q-eyebrow uppercase tracking-q-eyebrow` |
| `--q-font-sans` | `font-q-sans` |
| `--q-font-mono` | `font-q-mono` |
| `--q-green-800` | `bg-q-green-800` / `text-q-green-800` |
| `--q-brass-300` | `bg-q-brass-300` |
| `--q-brass-700` | `text-q-brass-700` |

Mở rộng `tailwind.preset.js` hiện có (`logo and brand/tokens/tailwind.preset.js`) với các token mới ở trên khi bắt đầu code.

---

## 19. Bảo trì & mở rộng

| Khi nào | Hành động |
|---|---|
| Thêm màu mới | Thêm vào `tokens.json` → chạy script sinh → cập nhật `tokens.css` + Tailwind preset. |
| Thêm component | Thêm class `.q-*` vào `components.css`, cập nhật mục 16. |
| Thêm breakpoint | Cập nhật cả Tailwind config và CSS custom media. |
| Thay đổi art direction | **Dừng và xin phê duyệt** — đây là thay đổi hệ thống, không tự ý. |
| Thêm token ngữ cảnh (ví dụ `--q-text-link-footer`) | Thêm vào mục 2.2 với giải thích rõ ràng. |

---

## 20. Checklist trước khi build section

Mỗi section khi code phải pass:

- [ ] Dùng semantic tokens, không hardcode giá trị.
- [ ] Heading duy nhất, đúng cấp (h1 cho hero, h2 cho section, h3 cho subsection).
- [ ] Có eyebrow + lead paragraph (trừ hero).
- [ ] Có 1 primary CTA rõ ràng.
- [ ] Spacing tuân theo scale (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96).
- [ ] Border chỉ dùng khi cần, shadow chỉ dùng cho mockup/modal.
- [ ] Logo dùng đúng biến thể (color trên nền sáng, reverse trên nền tối).
- [ ] Không có illustration hoạt hình, AI, robot.
- [ ] Không bịa số liệu, testimonial, logo khách hàng.
- [ ] Responsive: test ở 375 / 768 / 1024 / 1280.
- [ ] Focus ring hiển thị đúng trên mọi element focusable.
- [ ] Tương phản đạt WCAG AA.
- [ ] Alt text đầy đủ cho ảnh, aria-label cho icon.

---

**Phiên bản:** 1.0
**Ngày tạo:** 13/10/2026
**Cập nhật lần cuối:** 13/10/2026
**Dựa trên:** `PROJECT BRIEF.md` + `logo and brand/` (phương án B "Sổ cái") + Art direction B (Modern SaaS, có điều chỉnh).
