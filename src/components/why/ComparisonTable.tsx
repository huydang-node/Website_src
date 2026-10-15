/**
 * ComparisonTable — Bảng so sánh 3 cột cho trang Why Qortex.
 *
 * Cột: ERP quốc tế lớn | Phần mềm nội địa phổ thông | Qortex
 * 6 tiêu chí từ comparison.ts
 *
 * Mobile: horizontal scroll, first column sticky.
 * Unconfirmed fields: displayed with a warning dot.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import {
  COMPARISON_SECTIONS,
  ComparisonRow,
  ComparisonCellValue,
} from "@/data/comparison";

/* ─── Helpers ─── */
function isUnconfirmed(value: ComparisonCellValue): boolean {
  return typeof value === "object" && value.confirmed === false;
}

function cellText(value: ComparisonCellValue): string {
  return typeof value === "string" ? value : value.text;
}

function CellValue({ value }: { value: ComparisonCellValue }) {
  const text = cellText(value);
  const unconfirmed = isUnconfirmed(value);

  if (unconfirmed) {
    return (
      <span className="flex items-start gap-1.5">
        <span className="text-body text-q-text-secondary leading-relaxed flex-1">
          {text}
        </span>
        <UnconfirmedBadge />
      </span>
    );
  }

  return (
    <span className="text-body text-q-text-secondary leading-relaxed">{text}</span>
  );
}

function UnconfirmedBadge() {
  return (
    <span
      className="flex-shrink-0 inline-flex items-center gap-1 text-caption text-q-warning font-medium mt-0.5"
      title="Giá trị này cần xác nhận từ đội nghiệp vụ"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    </span>
  );
}

/* ─── Column header labels ─── */
const COLUMN_LABELS = [
  "ERP quốc tế lớn",
  "Phần mềm nội địa\nphổ thông",
  "Qortex",
];

const COLUMN_DESCRIPTIONS = [
  "License cao, tùy chỉnh nhiều, triển khai dài",
  "Giá rẻ, nhanh, nhưng chiều sâu nghiệp vụ hạn chế",
  "Chiều sâu nghiệp vụ cao, tuân thủ sẵn có, dữ liệu thuộc về bạn",
];

/* ─── Column header cell ─── */
function ColumnHeader({
  label,
  description,
  highlight,
  index,
}: {
  label: string;
  description: string;
  highlight?: boolean;
  index: number;
}) {
  return (
    <th
      scope="col"
      className={`px-6 py-5 text-left align-top ${highlight ? "bg-q-green-800 text-q-neutral-0" : "bg-q-bg-surface text-q-text-secondary"}`}
      style={{ minWidth: "180px" }}
    >
      <div className="flex flex-col gap-1">
        {highlight && (
          <span className="inline-block text-caption font-semibold tracking-wider uppercase mb-1 opacity-80">
            ▼ Đang so sánh
          </span>
        )}
        <span className="text-h5 font-semibold whitespace-pre-line leading-snug">
          {label}
        </span>
        <span className="text-small leading-snug opacity-80 font-normal">
          {description}
        </span>
      </div>
    </th>
  );
}

/* ─── Row ─── */
function ComparisonRowComponent({
  row,
}: {
  row: ComparisonRow;
}) {
  return (
    <tr className="border-b border-q-border hover:bg-q-bg-surface-alt transition-colors">
      {/* Criteria label — sticky first column */}
      <th
        scope="row"
        className="px-6 py-4 text-body font-semibold text-q-text-primary bg-q-bg-page align-top sticky left-0 z-10 min-w-[140px]"
      >
        {row.criteria}
      </th>

      {/* International ERP */}
      <td className="px-6 py-4 align-top bg-q-bg-surface">
        <CellValue value={row.international} />
      </td>

      {/* Local ERP */}
      <td className="px-6 py-4 align-top bg-q-bg-surface">
        <CellValue value={row.local} />
      </td>

      {/* Qortex — highlighted column */}
      <td className="px-6 py-4 align-top bg-q-green-800/5">
        <CellValue value={row.qortex} />
      </td>
    </tr>
  );
}

/* ─── Main component ─── */
export function ComparisonTable() {
  return (
    <Section variant="surface" id="bang-so-sanh">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-q-h2 text-q-text-heading">
            So sánh ERP — Qortex so với các lựa chọn phổ biến
          </h2>
          <p className="q-lead text-q-text-secondary mt-4">
            Ba nhóm giải pháp phổ biến trên thị trường Việt Nam — không phải tên cụ thể.
            Mỗi nhóm có điểm mạnh và giới hạn phù hợp với loại doanh nghiệp khác nhau.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-small text-q-text-muted">
            <UnconfirmedBadge />
            <span>Giá trị cần xác nhận từ đội nghiệp vụ</span>
          </div>
        </div>

        {/* Table wrapper — horizontal scroll on mobile */}
        <div className="overflow-x-auto rounded-q-lg border border-q-border shadow-q-sm">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              {/* Column headers */}
              <tr>
                {/* Empty corner cell */}
                <th
                  scope="col"
                  className="px-6 py-5 bg-q-bg-page text-left border-b border-q-border min-w-[140px] sticky left-0 z-20"
                >
                  <span className="text-small font-semibold text-q-text-muted uppercase tracking-wider">
                    Tiêu chí
                  </span>
                </th>

                {COLUMN_LABELS.map((label, i) => (
                  <ColumnHeader
                    key={i}
                    label={label}
                    description={COLUMN_DESCRIPTIONS[i]}
                    highlight={i === 2}
                    index={i}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_SECTIONS.flatMap((section) =>
                section.rows.map((row) => (
                  <ComparisonRowComponent key={row.id} row={row} />
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <p className="text-caption text-q-text-muted mt-4">
          Thông tin trên dựa trên đặc điểm chung của từng nhóm giải pháp, không phải
          đánh giá sản phẩm cụ thể. Chi tiết từng giải pháp vui lòng liên hệ trực tiếp
          nhà cung cấp.
        </p>
      </Container>
    </Section>
  );
}
