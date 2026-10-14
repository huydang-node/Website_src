import type { Metadata } from "next";
import {
  PlatformHero,
  ModuleGroupsSection,
  ArchitectureSection,
  PlatformPageCTA,
} from "./components";

export const metadata: Metadata = {
  title: "Nền tảng",
  description:
    "Sáu nhóm module trên một lõi ERP chung — sổ cái theo chế độ Việt Nam, bán hàng, mua hàng – kho, hợp đồng, quản trị – phân tích, nền tảng chung. Triển khai cloud dùng chung hoặc riêng, dữ liệu thuộc về doanh nghiệp.",
};

export default function PlatformPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <PlatformHero />

      {/* Section 2: Module Groups */}
      <ModuleGroupsSection />

      {/* Section 3: Architecture (dành cho IT) */}
      <ArchitectureSection />

      {/* Section 4: Page CTA */}
      <PlatformPageCTA />
    </main>
  );
}
