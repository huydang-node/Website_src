/**
 * Dynamic industry detail page — /giai-phap/[slug]
 *
 * Params:
 * - slug: "khach-san" | "san-xuat" | "ban-le" | "dich-vu-hop-dong"
 *
 * Render shared IndustryTemplate với data từ industries.ts.
 * Nếu slug không hợp lệ → 404.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug, INDUSTRIES } from "@/data/industries";
import { IndustryTemplate } from "@/components/industry";

interface IndustryPageProps {
  params: { slug: string };
}

/* ─── Static params (build-time) ─── */
export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

/* ─── Metadata per industry ─── */
export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};

  return {
    title: industry.name,
    description: industry.metaDescription,
  };
}

/* ─── Page component ─── */
export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  return <IndustryTemplate industry={industry} />;
}
