/**
 * Vì sao Qortex — /vi-sao-qortex
 *
 * Mục đích: so sánh định vị với các nhóm giải pháp ERP khác.
 * CTA: Đặt lịch demo
 *
 * Sections:
 * 1. WhyHero — giới thiệu trang so sánh
 * 2. ComparisonTable — 3 cột, 6 tiêu chí
 * 3. ProductRoadmap — nguyên tắc AI + lộ trình
 * 4. WhyCTA — CTA cuối trang
 */
import type { Metadata } from "next";
import { WhyHero, ComparisonTable, ProductRoadmap, WhyCTA } from "@/components/why";

export const metadata: Metadata = {
  title: "Vì sao chọn Qortex",
  description:
    "So sánh Qortex với ERP quốc tế và phần mềm nội địa: chi phí, thời gian triển khai, chiều sâu nghiệp vụ, tuân thủ chuẩn mực Việt Nam, quyền sở hữu dữ liệu và khả năng mở rộng.",
};

export default function ViSaoQortexPage() {
  return (
    <main>
      {/* 1. Hero */}
      <WhyHero />

      {/* 2. Comparison table */}
      <ComparisonTable />

      {/* 3. Product roadmap */}
      <ProductRoadmap />

      {/* 4. CTA */}
      <WhyCTA />
    </main>
  );
}
