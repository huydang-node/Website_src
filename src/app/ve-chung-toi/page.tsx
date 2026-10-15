/**
 * Về chúng tôi — /ve-chung-toi
 *
 * Mục đích: câu chuyện sáng lập, triết lý, đội ngũ, pháp lý.
 * CTA chính: Liên hệ
 *
 * Sections:
 * 1. AboutHero — tổng quan
 * 2. StorySection — câu chuyện sáng lập
 * 3. PhilosophySection — 4 trụ triết lý
 * 4. TeamSection — đội ngũ (placeholder)
 * 5. LegalInfo — thông tin pháp lý (placeholder)
 *
 * ⚠️ Open Questions cần xác nhận trước khi công bố:
 *   - Nội dung câu chuyện sáng lập chi tiết
 *   - Ảnh và thông tin đội ngũ
 *   - Mã số doanh nghiệp
 *   - Địa chỉ trụ sở
 */
import type { Metadata } from "next";
import {
  AboutHero,
  StorySection,
  PhilosophySection,
  TeamSection,
  LegalInfo,
} from "@/components/about";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Câu chuyện sáng lập Qortex: khoảng trống giữa ERP ngoại đắt đỏ và phần mềm nội nông. Triết lý tuân thủ vững vàng, dữ liệu thuộc về doanh nghiệp.",
};

export default function VeChungToiPage() {
  return (
    <main>
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Câu chuyện sáng lập */}
      <StorySection />

      {/* 3. Triết lý */}
      <PhilosophySection />

      {/* 4. Đội ngũ */}
      <TeamSection />

      {/* 5. Thông tin pháp lý */}
      <LegalInfo />
    </main>
  );
}
