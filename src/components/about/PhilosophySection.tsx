/**
 * PhilosophySection — 4 trụ triết lý của Qortex.
 *
 * Content dựa trên brief §4.4 và page-structure.md §2.6.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import { PHILOSOPHY } from "@/data/about";

/* ─── Pillar icons ─── */
function PillarIcon({ id }: { id: string }) {
  const cls = "w-8 h-8 text-q-neutral-0 flex-shrink-0";
  switch (id) {
    case "tt99":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "audit-trail":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case "hddt":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "doi-chieu":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      );
    default:
      return null;
  }
}

export function PhilosophySection() {
  return (
    <Section variant="default" id="triet-ly">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-q-h2 text-q-text-heading mb-4">
            Triết lý của Qortex: Luôn xây trên nền tảng tuân thủ vững vàng
          </h2>
          <p className="q-lead text-q-text-secondary">{PHILOSOPHY.subtitle}</p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PHILOSOPHY.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="q-card p-7 flex gap-5 hover:border-q-border-strong transition-colors duration-200"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-q-lg bg-q-green-800 flex items-center justify-center flex-shrink-0">
                <PillarIcon id={pillar.id} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <h3 className="text-h5 text-q-text-heading font-semibold">
                  {pillar.title}
                </h3>
                <p className="text-body text-q-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
