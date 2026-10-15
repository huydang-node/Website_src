/**
 * StorySection — Câu chuyện sáng lập.
 *
 * ⚠️ Content paragraphs cần xác nhận chi tiết từ đội sáng lập.
 *    Hiện tại dùng content từ brief §4.4 làm base.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import { STORY } from "@/data/about";

export function StorySection() {
  return (
    <Section variant="surface" id="cau-chuyen">
      <Container>
        <div className="max-w-3xl">
          {/* Section header */}
          <div className="mb-10">
          <h2 className="text-q-h2 text-q-text-heading mb-4">
            Khoảng trống giữa hai thế giới
          </h2>
            <p className="q-lead text-q-text-secondary">{STORY.subtitle}</p>
          </div>

          {/* Story paragraphs */}
          <div className="flex flex-col gap-6">
            {STORY.paragraphs.map((para, i) => (
              <p key={i} className="text-body text-q-text-secondary leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
