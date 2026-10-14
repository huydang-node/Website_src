import { Section, Container, Eyebrow, LinkButton } from "@/components/ui";
import { ARCHITECTURE_HIGHLIGHTS } from "@/data/platform";

export function ArchitectureSection() {
  return (
    <Section id="architecture" variant="alt">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left: Heading + intro */}
          <div className="lg:sticky lg:top-24">
            <Eyebrow className="mb-3">Kiến trúc</Eyebrow>
            <h2 className="text-q-h2 text-q-text-heading">
              Cho trưởng IT — dành riêng cho người cần chi tiết kỹ thuật
            </h2>
            <p className="q-lead mt-5 text-q-text-secondary">
              Triển khai cloud dùng chung hoặc riêng, dữ liệu mở, mở rộng bằng
              plugin mà không phải sửa lõi. Không nêu tên công nghệ lõi ở đây —
              chúng tôi dành phần đó cho buổi demo chuyên sâu.
            </p>
            <div className="mt-8">
              <LinkButton href="/dat-lich-demo" variant="outline">
                Đặt lịch demo kỹ thuật
              </LinkButton>
            </div>
          </div>

          {/* Right: Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {ARCHITECTURE_HIGHLIGHTS.map((item) => (
              <article
                key={item.id}
                className="q-card p-7 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-q-md bg-q-bg-surface-alt flex items-center justify-center text-q-green-800 mb-5"
                  aria-hidden="true"
                >
                  <ArchitectureIcon iconId={item.icon} />
                </div>
                <h3 className="text-h5 text-q-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-small text-q-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── Architecture icons ─── */

function ArchitectureIcon({ iconId }: { iconId: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (iconId) {
    case "cloud":
      return (
        <svg {...common}>
          <path d="M17.5 19a4.5 4.5 0 1 0-1.6-8.74 6 6 0 0 0-11.4 2.74A4 4 0 0 0 6 19h11.5Z" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      );
    case "puzzle":
      return (
        <svg {...common}>
          <path d="M19.5 12.5a2 2 0 1 1 0-4h.5V5h-3.5a2 2 0 1 1-4 0H5.5v3.5a2 2 0 1 1 0 4H5v3.5h3.5a2 2 0 1 1 4 0H19v-3.5Z" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
          <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
        </svg>
      );
    default:
      return null;
  }
}
