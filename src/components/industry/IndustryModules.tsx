/**
 * IndustryModules — Section hiển thị các module liên quan đến ngành.
 * Cross-reference với platform.ts module data.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import { MODULE_GROUPS } from "@/data/platform";
import Link from "next/link";

interface IndustryModulesProps {
  /** Các module id cần highlight */
  relatedModuleIds: string[];
}

/**
 * IndustryModules section — grid các module được sử dụng trong ngành.
 * Highlight các module cần thiết, show tên module + mô tả ngắn.
 */
export function IndustryModules({ relatedModuleIds }: IndustryModulesProps) {
  // Collect matching modules from all groups
  const matchingModules: Array<{ module: (typeof MODULE_GROUPS)[0]["modules"][0]; groupName: string }> = [];

  for (const group of MODULE_GROUPS) {
    for (const mod of group.modules) {
      if (relatedModuleIds.includes(mod.id)) {
        matchingModules.push({ module: mod, groupName: group.name });
      }
    }
  }

  return (
    <Section variant="surface" id="module">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-q-h2 text-q-text-heading">
            Những module Qortex xử lý bài toán này
          </h2>
          <p className="q-lead text-q-text-secondary mt-4">
            Các module bên dưới là những thành phần cốt lõi giúp giải quyết bài toán đặc thù của ngành.
            Tìm hiểu thêm về{" "}
            <Link href="/nen-tang" className="text-q-link hover:text-q-brass-700 transition-colors">
              toàn bộ nền tảng Qortex
            </Link>
            .
          </p>
        </div>

        {/* Module grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {matchingModules.map(({ module, groupName }) => (
            <div key={module.id} className="q-card p-6 flex flex-col gap-3 hover:border-q-border-strong transition-colors duration-200">
              {/* Group label */}
              <p className="text-caption text-q-text-muted">{groupName}</p>

              {/* Module name */}
              <h3 className="text-h5 text-q-text-heading font-semibold">
                {module.name}
              </h3>

              {/* Description */}
              <p className="text-small text-q-text-secondary leading-relaxed flex-1">
                {module.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-1.5 mt-1" role="list">
                {module.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-small text-q-text-secondary">
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform link */}
        <div className="mt-8 text-center">
          <Link
            href="/nen-tang"
            className="inline-flex items-center gap-2 text-small text-q-text-muted hover:text-q-link transition-colors no-underline"
          >
            Xem tất cả module trên nền tảng
            <ArrowRight />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5 text-q-success" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
