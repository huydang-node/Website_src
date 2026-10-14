# Qortex — Bộ nhận diện thương hiệu cho developer

Phương án **B — Sổ cái**: vòng chữ Q bao ba cột tăng trưởng, đuôi Q là nét gạch chân của sổ cái. Màu chính xanh rêu `#0F3B2E`, điểm nhấn đồng thau `#B8891F`. Đây là phương án trang chủ Qortex Solutions đang dùng.

Nguồn: canvas "Qortex Brand Identity" (01/10/2026) và trang chủ Qortex Solutions (08/10/2026). Xuất ngày 13/10/2026.

## Cấu trúc thư mục

| Thư mục | Nội dung | Dùng cho |
|---|---|---|
| `logo/` | SVG gốc: logo ngang, biểu tượng, chữ, biểu tượng ứng dụng; chữ đã chuyển thành đường nét, không cần cài font | Header, footer, mọi chỗ hiển thị logo trên web |
| `logo/png/` | PNG nền trong suốt: logo ngang rộng 480/960/1920 px, biểu tượng 256/512/1024 px | Email, tài liệu, nơi không dùng được SVG |
| `favicon/` | `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, icon 192/512, icon maskable, `site.webmanifest` | Thả vào thư mục gốc web (`/public`) |
| `social/` | Ảnh chia sẻ mạng xã hội 1200×630 | Thẻ `og:image`, `twitter:image` |
| `tokens/` | `tokens.css` (biến CSS `--q-*` + lớp nền tảng), `_tokens.scss`, `tailwind.preset.js`, `tokens.json` (chuẩn W3C Design Tokens) | Theme website |
| `fonts/` | Be Vietnam Pro 400–700, IBM Plex Mono 400/500, IBM Plex Sans 600 dạng woff2, đủ bộ chữ tiếng Việt; `fonts.css` | Tự host font, không phụ thuộc Google Fonts |
| `brand-guide.html` | Trang xem nhanh toàn bộ bộ nhận diện | Mở trong trình duyệt để tra cứu |

## Cài đặt nhanh

```html
<link rel="stylesheet" href="/fonts/fonts.css">
<link rel="stylesheet" href="/tokens/tokens.css">

<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0F3B2E">
<meta property="og:image" content="https://<tên-miền>/social/qortex-og-1200x630.png">
```

Dùng Tailwind thì thêm `presets: [require('./tokens/tailwind.preset.js')]`, vẫn nạp `tokens.css` để có biến màu theo vai trò. Ví dụ lớp: `bg-q-green-800`, `text-q-text-muted`, `rounded-q-sm`, `max-w-q-container`, `text-display`.

Muốn dùng Google Fonts thay vì tự host:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap">
```

## Logo

| File | Khi nào dùng |
|---|---|
| `qortex-logo-horizontal-color.svg` | Mặc định, trên nền sáng (`#FFFFFF`, `#F4F6F2`) |
| `qortex-logo-horizontal-reverse.svg` | Trên nền xanh rêu `#0F3B2E` (header, hero, footer) |
| `qortex-logo-horizontal-mono-dark.svg` / `-mono-white.svg` | In một màu, nền ảnh, đóng dấu |
| `qortex-symbol-*.svg` | Chỗ hẹp: avatar mạng xã hội, thanh điều hướng thu gọn trên di động |
| `qortex-wordmark-*.svg` | Chỉ chữ, khi biểu tượng đã xuất hiện gần đó |
| `qortex-app-icon.svg` | Biểu tượng ứng dụng, favicon |

Quy tắc:
- **Vùng trống:** quanh logo chừa tối thiểu bằng chiều cao chữ hoa của QORTEX (khoảng 0,55 lần chiều cao biểu tượng).
- **Cỡ tối thiểu:** logo ngang cao 24 px trên màn hình; biểu tượng đứng riêng 16 px (dùng favicon). Trang chủ đang dùng header cao 30 px.
- **Tỉ lệ dựng hình:** cỡ chữ F; biểu tượng 1,25F; khoảng cách 0,275F; chữ IBM Plex Sans 600, viết hoa, giãn chữ 0,14em.
- **Không được:** đổi màu ngoài các biến thể đã có; kéo méo; xoay; thêm bóng hoặc gradient; đặt logo màu lên nền xanh rêu (dùng bản reverse); đặt lên ảnh rối mà không có lớp nền.
- Thẻ `<img>` logo luôn có `alt="Qortex"`; logo dẫn về trang chủ thì bọc trong `<a href="/" aria-label="Qortex — trang chủ">`.

## Màu

Màu gốc dùng tên `--q-<nhóm>-<cấp>`; trong code nên dùng **biến theo vai trò** để sau này đổi theme không phải sửa từng chỗ.

| Vai trò | Biến | Giá trị |
|---|---|---|
| Màu chính, nền tối | `--q-bg-inverse` | `#0F3B2E` |
| Hover nút chính | `--q-bg-inverse-hover` | `#0A2E23` |
| Nền trang | `--q-bg-page` | `#F4F6F2` |
| Thẻ, khối | `--q-bg-surface` | `#FFFFFF` |
| Chữ thân | `--q-text-primary` | `#1B2420` |
| Tiêu đề | `--q-text-heading` | `#0F3B2E` |
| Chữ phụ | `--q-text-secondary` | `#3D4A43` |
| Chú thích | `--q-text-muted` | `#55625B` |
| Liên kết hover, chữ nhấn | `--q-link-hover`, `--q-accent-text` | `#8A6614` |
| Điểm nhấn đồ họa, viền focus | `--q-accent`, `--q-focus` | `#B8891F` |
| Nút CTA trên nền tối | `--q-cta-on-inverse-bg` | `#E3C27A` (chữ `#0F3B2E`) |
| Viền | `--q-border`, `--q-border-strong` | `#D9DED9`, `#B9C3BD` |
| Thành công | `--q-success` | `#2F6B4E` |

Đồng thau `#B8891F` chỉ dùng cho đồ họa (logo, icon, viền focus, đường kẻ) hoặc chữ từ 24 px; chữ nhỏ màu đồng dùng `#8A6614`.

### Độ tương phản (WCAG 2.1)

| Cặp màu | Chữ / nền | Tỉ lệ | Kết luận |
|---|---|---|---|
| Chữ thân trên nền trang | `#1B2420` / `#F4F6F2` | 14.63:1 | Đạt AA mọi cỡ chữ |
| Tiêu đề xanh rêu trên trắng | `#0F3B2E` / `#FFFFFF` | 12.46:1 | Đạt AA mọi cỡ chữ |
| Chữ phụ trên nền trang | `#3D4A43` / `#F4F6F2` | 8.55:1 | Đạt AA mọi cỡ chữ |
| Chú thích trên trắng | `#55625B` / `#FFFFFF` | 6.39:1 | Đạt AA mọi cỡ chữ |
| Chữ trắng trên xanh rêu | `#FFFFFF` / `#0F3B2E` | 12.46:1 | Đạt AA mọi cỡ chữ |
| CTA: xanh rêu trên đồng nhạt | `#0F3B2E` / `#E3C27A` | 7.28:1 | Đạt AA mọi cỡ chữ |
| Chữ đồng đậm trên trắng | `#8A6614` / `#FFFFFF` | 5.26:1 | Đạt AA mọi cỡ chữ |
| Đồng thau logo trên trắng (chỉ đồ họa) | `#B8891F` / `#FFFFFF` | 3.16:1 | Chỉ đồ họa, chữ ≥ 24px (≥ 3:1) |
| Đồng thau trên xanh rêu (chỉ đồ họa) | `#B8891F` / `#0F3B2E` | 3.94:1 | Chỉ đồ họa, chữ ≥ 24px (≥ 3:1) |

## Chữ

| Vai trò | Font | Cỡ / dòng / độ đậm |
|---|---|---|
| Tiêu đề lớn (hero) | Be Vietnam Pro | `clamp(38px, 5.4vw, 68px)` / 1.08 / 600, giãn −0.01em |
| Tiêu đề mục | Be Vietnam Pro | `clamp(30px, 3.4vw, 44px)` / 1.15 / 600 |
| Tiêu đề thẻ | Be Vietnam Pro | 18–22 px / 1.3 / 600 |
| Đoạn dẫn | Be Vietnam Pro | 20 px / 1.6 / 400 |
| Chữ thân | Be Vietnam Pro | 16 px / 1.6 / 400 |
| Nhỏ, chú thích | Be Vietnam Pro | 13–14 px / 1.5 / 400 |
| Nhãn nhỏ (eyebrow) | Be Vietnam Pro | 12 px / 600, viết hoa, giãn 0.12em |
| Mã chứng từ, số bước, số liệu | IBM Plex Mono | 12 px / 500 |
| Chữ logo | IBM Plex Sans | 600, viết hoa, giãn 0.14em; chỉ dùng cho logo, đã nằm sẵn trong SVG |

Không dùng Inter, Roboto, Arial. Be Vietnam Pro hiển thị đủ dấu tiếng Việt; khi tự host phải nạp cả phần `vietnamese` (đã có trong `fonts.css`).

## Khoảng cách, bố cục, thành phần

- Khung nội dung rộng tối đa 1240 px, lề hai bên 24 px; khoảng cách trên dưới mỗi mục 96 px (hero: 88 px trên, 56 px dưới).
- Thang khoảng cách 4 px: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 88, 96.
- Bo góc: nút và input 6 px, thẻ 8 px, khối lớn 10–16 px.
- Bóng: chỉ dùng cho ảnh minh họa nổi, `0 24px 60px rgba(15,59,46,0.16)`; thẻ dùng viền 1 px, không dùng bóng.
- Nút: cao tối thiểu 48 px (vùng bấm tối thiểu 44 px). `.q-btn-primary` (xanh rêu, chữ trắng) trên nền sáng; `.q-btn-cta` (đồng nhạt, chữ xanh rêu) trên nền tối; `.q-btn-outline` cho hành động phụ.
- Focus bàn phím: viền 2 px `#B8891F`, cách 2 px (đã có trong `tokens.css`).
- Icon: nét mảnh (stroke) 1,8 px, đầu tròn, cùng màu chữ; không dùng emoji.

## Nội dung trang chủ

Trang chủ không nêu tên nền tảng ERP lõi; mô tả là "lõi ERP mạnh mẽ" và các thế mạnh của nó.

## Giấy phép font

Be Vietnam Pro, IBM Plex Sans, IBM Plex Mono đều theo SIL Open Font License 1.1 (file `fonts/OFL-*.txt`): được dùng, nhúng và tự host cho mục đích thương mại.
