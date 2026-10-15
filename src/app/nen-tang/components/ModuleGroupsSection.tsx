import { Section, Container } from "@/components/ui";
import { MODULE_GROUPS } from "@/data/platform";

export function ModuleGroupsSection() {
  return (
    <Section id="module-groups" variant="default">
      <Container>
        {/* Section heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-q-h2 text-q-text-heading">
            Nhiều nhóm module trên một lõi dữ liệu chung
          </h2>
          <p className="q-lead mt-4 text-q-text-secondary">
            Mỗi nhóm đảm nhận một mảng nghiệp vụ, cùng ghi nhận dữ liệu trên một
            sổ cái chung — không cần nhập lại giữa các phòng ban.
          </p>
        </div>

        {/* Groups grid */}
        <div className="space-y-12">
          {MODULE_GROUPS.map((group) => (
            <div key={group.id} aria-labelledby={`group-${group.id}`}>
              {/* Group header */}
              <div className="flex items-start gap-4 mb-6 pb-4 border-b border-q-border">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-q-md bg-q-bg-surface-alt flex items-center justify-center text-q-green-800"
                  aria-hidden="true"
                >
                  <GroupIcon groupId={group.id} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    id={`group-${group.id}`}
                    className="text-h3 text-q-text-heading mb-2"
                  >
                    {group.name}
                  </h3>
                  <p className="text-body text-q-text-secondary max-w-2xl">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Modules within group */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.modules.map((mod) => (
                  <article
                    key={mod.id}
                    className="q-card p-6 flex flex-col"
                  >
                    <h4 className="text-h5 text-q-text-primary mb-2">
                      {mod.name}
                    </h4>
                    <p className="text-small text-q-text-secondary mb-4 leading-relaxed">
                      {mod.description}
                    </p>
                    <ul className="mt-auto space-y-2 pt-4 border-t border-q-border">
                      {mod.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-small text-q-text-secondary"
                        >
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Helpers ─── */

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-q-green-600 mt-0.5"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ─── Group icons (inline SVG, stroke 1.8 theo brand) ─── */

function GroupIcon({ groupId }: { groupId: string }) {
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

  switch (groupId) {
    case "tai-chinh-ke-toan":
      // Ledger / accounting
      return (
        <svg {...common}>
          <path d="M4 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4Z" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "ban-hang":
      // Sales / cart
      return (
        <svg {...common}>
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
          <path d="M3 4h2l2.5 12h11l2-8H6.5" />
        </svg>
      );
    case "mua-hang-kho":
      // Box / inventory
      return (
        <svg {...common}>
          <path d="M21 8 12 3 3 8v8l9 5 9-5Z" />
          <path d="m3 8 9 5 9-5" />
          <path d="M12 13v8" />
        </svg>
      );
    case "hop-dong":
      // Contract / document
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6" />
          <path d="M9 14h6M9 18h4" />
        </svg>
      );
    case "quan-tri-phan-tich":
      // Analytics / chart
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="m7 14 4-4 4 4 5-5" />
        </svg>
      );
    case "nen-tang-chung":
      // Layered platform
      return (
        <svg {...common}>
          <path d="m12 2 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 17 9 5 9-5" />
        </svg>
      );
    default:
      return null;
  }
}
