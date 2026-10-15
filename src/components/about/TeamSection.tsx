/**
 * TeamSection — Đội ngũ sáng lập / core team.
 *
 * ⚠️ Ảnh và thông tin cần xác nhận trước khi công bố.
 *    Placeholder với nhãn "[Cần xác nhận]" khi chưa có.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import { TEAM } from "@/data/about";

export function TeamSection() {
  return (
    <Section variant="surface" id="doi-ngu">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-q-h2 text-q-text-heading mb-4">
            Đội ngũ đứng sau Qortex
          </h2>
          <p className="q-lead text-q-text-secondary">{TEAM.subtitle}</p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TEAM.members.map((member) => (
            <div
              key={member.id}
              className="q-card p-6 flex flex-col gap-4 text-center"
            >
              {/* Avatar placeholder */}
              <div className="mx-auto">
                <div
                  className="w-24 h-24 rounded-full bg-q-bg-surface-alt border border-q-border flex items-center justify-center mx-auto overflow-hidden"
                  aria-hidden="true"
                >
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <PersonIcon />
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-h5 text-q-text-heading font-semibold">
                  {member.name}
                </h3>
                <p className="text-small text-q-accent-text font-medium">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-small text-q-text-muted leading-relaxed mt-1">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Placeholder flag */}
              {!member.imageUrl && (
                <p className="text-caption text-q-text-muted italic">
                  Ảnh &amp; thông tin cần xác nhận
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PersonIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-q-neutral-400"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
