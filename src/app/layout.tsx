import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, IBM_Plex_Mono } from "next/font/google";
import { Layout } from "@/components/layout";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qortex.vn"),
  title: {
    default: "Qortex — Nền tảng ERP cho doanh nghiệp Việt Nam",
    template: "%s | Qortex",
  },
  description:
    "Nền tảng ERP xây trên nền tuân thủ vững chắc, dữ liệu thuộc về doanh nghiệp. Phù hợp doanh nghiệp vừa đang lớn: Khách sạn, Sản xuất, Bán lẻ, Dịch vụ theo hợp đồng.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  applicationName: "Qortex",
  authors: [{ name: "Công ty TNHH Giải pháp Qortex" }],
  generator: "Next.js",
  keywords: [
    "ERP Việt Nam",
    "phần mềm quản trị doanh nghiệp",
    "TT99",
    "hóa đơn điện tử",
    "ERP khách sạn",
    "ERP sản xuất",
    "ERP bán lẻ",
    "dịch vụ hợp đồng",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://qortex.vn",
    siteName: "Qortex",
    title: "Qortex — Nền tảng ERP cho doanh nghiệp Việt Nam",
    description:
      "Nền tảng ERP xây trên nền tuân thủ vững chắc, dữ liệu thuộc về doanh nghiệp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F3B2E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
