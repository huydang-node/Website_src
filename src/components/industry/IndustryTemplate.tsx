/**
 * IndustryTemplate — Shared layout template cho 4 trang ngành.
 *
 * Sử dụng industry data để render tất cả sections theo đúng thứ tự:
 * 1. Hero (detail variant)
 * 2. Pain Points
 * 3. Qortex Flow
 * 4. Modules Used
 * 5. Page CTA
 */
import { Industry } from "@/data/industries";
import { IndustryHeroDetail } from "./IndustryHero";
import { IndustryPainPoints } from "./IndustryPainPoints";
import { IndustryFlow } from "./IndustryFlow";
import { IndustryModules } from "./IndustryModules";
import { IndustryCTA } from "./IndustryCTA";

interface IndustryTemplateProps {
  industry: Industry;
}

export function IndustryTemplate({ industry }: IndustryTemplateProps) {
  return (
    <main>
      {/* 1. Hero — tên ngành + bài toán đặc thù */}
      <IndustryHeroDetail
        eyebrow={industry.eyebrow}
        title={industry.heroTitle}
        subtitle={industry.heroSubtitle}
        ctaText={industry.ctaText}
      />

      {/* 2. Pain Points — 3 bài toán đặc thù */}
      <IndustryPainPoints painPoints={industry.painPoints} />

      {/* 3. Qortex Flow — quy trình xử lý */}
      <IndustryFlow solution={industry.qortexSolution} />

      {/* 4. Modules Used — grid module liên quan */}
      <IndustryModules relatedModuleIds={industry.relatedModules} />

      {/* 5. CTA — Demo theo ngành */}
      <IndustryCTA industryName={industry.name} ctaText={industry.ctaText} />
    </main>
  );
}
