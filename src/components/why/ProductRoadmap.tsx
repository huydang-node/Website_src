/**
 * ProductRoadmap — Section "Định hướng sản phẩm" cho trang Why Qortex.
 *
 * Gồm:
 * - 2 nguyên tắc hiện tại
 * - 1 roadmap item (ghi rõ "lộ trình, không cam kết")
 *
 * ⚠️ Không quảng bá AI như tính năng hiện tại.
 *    AI chỉ xuất hiện ở roadmap, ghi rõ là lộ trình.
 */
import React from "react";
import { Section, Container, Badge } from "@/components/ui";
import { ROADMAP_ITEMS } from "@/data/comparison";

/* ─── Tag badge mapping ─── */
function RoadmapTag({ tag }: { tag: string }) {
  if (tag === "Lộ trình") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-q-sm bg-q-bg-surface-alt border border-q-border text-caption text-q-text-muted font-medium">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        Lộ trình
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-q-sm bg-q-green-800 text-q-neutral-0 text-caption font-medium">
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {tag}
    </span>
  );
}

/* ─── Roadmap item card ─── */
function RoadmapItem({
  item,
  isLast,
}: {
  item: (typeof ROADMAP_ITEMS)[number];
  isLast: boolean;
}) {
  return (
    <div className={`flex gap-5 ${!isLast ? "pb-8" : ""}`}>
      {/* Connector dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
            item.id === "roadmap-disclaimer"
              ? "bg-q-bg-surface-alt border border-q-border"
              : "bg-q-green-800"
          }`}
          aria-hidden="true"
        >
          {item.id === "roadmap-disclaimer" ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-q-text-muted"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-q-neutral-0"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>

        {/* Vertical line */}
        {!isLast && (
          <div className="w-px flex-1 min-h-[48px] bg-q-border mt-3" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1.5 pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <RoadmapTag tag={item.tag} />
        </div>
        <h3 className="text-h5 text-q-text-heading font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-body text-q-text-secondary leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export function ProductRoadmap() {
  return (
    <Section variant="default" id="dinh-huong">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-q-h2 text-q-text-heading mb-4">
              Nguyên tắc và lộ trình phát triển Qortex
            </h2>
            <p className="q-lead text-q-text-secondary">
              Qortex hiện tại là một lõi ERP mạnh mẽ. Chúng tôi chia sẻ rõ ràng
              đâu là tính năng thực tế, đâu là nguyên tắc đang áp dụng,
              và đâu là hướng phát triển trong tương lai.
            </p>
          </div>

          {/* Roadmap items */}
          <div className="space-y-0">
            {ROADMAP_ITEMS.map((item, index) => (
              <RoadmapItem
                key={item.id}
                item={item}
                isLast={index === ROADMAP_ITEMS.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
