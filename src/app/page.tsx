import type { Metadata } from "next";
import {
  HeroSection,
  PainPointsSection,
  SolutionOverviewSection,
  ValuePillarsSection,
  BusinessFlowSection,
  IndustryPreviewSection,
  TrustSignalsSection,
  PageCTASection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Qortex — Nền tảng ERP cho doanh nghiệp Việt Nam",
  description:
    "Hệ thống quản trị chuẩn doanh nghiệp lớn, vừa vặn với doanh nghiệp đang lớn. Nền tảng ERP xây trên nền tuân thủ vững chắc, dữ liệu thuộc về doanh nghiệp.",
};

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Pain Points */}
      <PainPointsSection />

      {/* Section 3: Solution Overview */}
      <SolutionOverviewSection />

      {/* Section 4: Value Pillars */}
      <ValuePillarsSection />

      {/* Section 5: Business Flow */}
      <BusinessFlowSection />

      {/* Section 6: Industry Preview */}
      <IndustryPreviewSection />

      {/* Section 7: Trust Signals */}
      <TrustSignalsSection />

      {/* Section 8: Page CTA */}
      <PageCTASection />
    </main>
  );
}
