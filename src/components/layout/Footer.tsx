import Link from "next/link";
import { FOOTER_COLUMNS, NAV_CTA, INDUSTRIES } from "@/data/navigation";
import { Divider } from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-q-green-800 text-q-text-on-inverse" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer — Qortex
      </h2>

      {/* CTA band */}
      <div className="border-b border-q-border-on-inverse">
        <div className="q-container py-12 text-center">
          <p className="text-h4 font-semibold text-q-text-on-inverse mb-4">
            Sẵn sàng thử Qortex?
          </p>
          <p className="text-body text-q-text-on-inverse-muted max-w-xl mx-auto mb-6">
            Đặt lịch demo 30 phút với chuyên gia Qortex — không cam kết, không phí.
          </p>
          <Link
            href={NAV_CTA.href}
            className="q-btn q-btn-cta q-btn-lg inline-flex items-center justify-center"
          >
            {NAV_CTA.label}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="q-container py-14">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            {/* Logo — dùng đúng file từ Logo and brand */}
            <Link
              href="/"
              aria-label="Qortex — Trang chủ"
              className="inline-block mb-4"
            >
              <img
                src="/qortex-logo-horizontal-mono-white.svg"
                alt="Qortex"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-small text-q-text-on-inverse-muted mb-5 max-w-xs">
              Nền tảng ERP dành cho doanh nghiệp Việt Nam đang lớn. Dữ liệu thuộc
              về bạn, tuân thủ thuộc về Qortex.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <SocialLink href="https://facebook.com/qortexvn" label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/qortex" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com/@qortex" label="YouTube">
                <YouTubeIcon />
              </SocialLink>
            </div>
          </div>

          {/* Navigation columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-small font-semibold text-q-text-on-inverse uppercase tracking-wider mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-small text-q-text-on-inverse-muted hover:text-q-text-on-inverse transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Divider className="opacity-20" />

      {/* Bottom bar */}
      <div className="q-container py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-q-text-on-inverse-muted">
            © {currentYear} Công ty TNHH Giải pháp Qortex. Mọi quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/chinh-sach-bao-mat"
              className="text-caption text-q-text-on-inverse-muted hover:text-q-text-on-inverse transition-colors no-underline"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/dieu-khoan"
              className="text-caption text-q-text-on-inverse-muted hover:text-q-text-on-inverse transition-colors no-underline"
            >
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-8 h-8 rounded-full border border-q-border-on-inverse text-q-text-on-inverse-muted hover:text-q-text-on-inverse hover:border-q-text-on-inverse transition-colors"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0F3B2E" />
    </svg>
  );
}
