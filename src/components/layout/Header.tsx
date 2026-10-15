"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, NAV_CTA, INDUSTRIES, type NavItem } from "@/data/navigation";
import { LinkButton } from "@/components/ui";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on resize
  useEffect(() => {
    const handleClose = () => {
      setMobileOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener("resize", handleClose);
    return () => window.removeEventListener("resize", handleClose);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-q-neutral-0 border-b border-q-border shadow-q-xs">
        <div className="q-container h-[72px] flex items-center justify-between gap-8">
          {/* Logo — dùng đúng file từ Logo and brand */}
          <Link href="/" aria-label="Qortex — Trang chủ" className="flex-shrink-0 h-8">
            <img
              src="/qortex-logo-horizontal-color.svg"
              alt="Qortex"
              width={120}
              height={32}
              className="h-full w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) =>
              item.children || item.type === "industries" ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 h-12 px-4 rounded-q-sm text-body font-medium",
                      "text-q-text-secondary hover:text-q-text-primary",
                      "transition-colors duration-q-base ease-q-ease",
                      "focus-visible:outline-2 focus-visible:outline-q-focus focus-visible:outline-offset-1",
                      openDropdown === item.label && "text-q-text-primary"
                    )}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn(
                        "transition-transform duration-q-base",
                        openDropdown === item.label && "rotate-180"
                      )}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {openDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-q-neutral-0 border border-q-border rounded-q-md shadow-q-lg p-2 min-w-[200px]">
                        {item.type === "industries" ? (
                          /* Industries list dropdown */
                          <div className="flex flex-col gap-0">
                            {INDUSTRIES.map((ind) => (
                              <Link
                                key={ind.id}
                                href={ind.href}
                                className="flex items-center px-3 py-2.5 rounded-q-sm hover:bg-q-bg-surface-alt transition-colors no-underline text-small font-medium text-q-text-primary"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {ind.label}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          /* Default dropdown — list of children */
                          <div className="flex flex-col gap-1">
                            {item.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex flex-col px-3 py-2 rounded-q-sm hover:bg-q-bg-surface-alt transition-colors no-underline"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <span className="text-small font-semibold text-q-text-primary">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-caption text-q-text-muted">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center h-12 px-4 rounded-q-sm text-body font-medium",
                    "text-q-text-secondary hover:text-q-text-primary",
                    "transition-colors duration-q-base ease-q-ease",
                    "focus-visible:outline-2 focus-visible:outline-q-focus focus-visible:outline-offset-1"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LinkButton href={NAV_CTA.href} variant={NAV_CTA.variant} size="sm">
              {NAV_CTA.label}
            </LinkButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "lg:hidden flex flex-col justify-center items-center gap-1.5",
              "w-10 h-10 rounded-q-sm",
              "text-q-text-secondary hover:text-q-text-primary",
              "focus-visible:outline-2 focus-visible:outline-q-focus focus-visible:outline-offset-2"
            )}
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileDrawer
        id="mobile-menu"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  );
}

/* ─── Helpers ─── */

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <>
      <span
        className={cn(
          "block w-5 h-0.5 bg-current transition-all duration-q-base",
          open ? "translate-y-[9px] rotate-45" : ""
        )}
      />
      <span
        className={cn(
          "block w-5 h-0.5 bg-current transition-all duration-q-base",
          open ? "opacity-0 scale-x-0" : ""
        )}
      />
      <span
        className={cn(
          "block w-5 h-0.5 bg-current transition-all duration-q-base",
          open ? "-translate-y-[9px] -rotate-45" : ""
        )}
      />
    </>
  );
}

function IndustryDot({ industry }: { industry?: string }) {
  const colors: Record<string, string> = {
    green: "bg-q-green-500",
    brass: "bg-q-brass-500",
    dark: "bg-q-green-800",
    accent: "bg-q-green-600",
  };
  return (
    <span
      className={cn(
        "mt-1 w-2 h-2 rounded-full flex-shrink-0",
        colors[industry ?? "green"]
      )}
      aria-hidden="true"
    />
  );
}

/* ─── Mobile Drawer ─── */

interface MobileDrawerProps {
  id: string;
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}

function MobileDrawer({ id, open, onClose, items }: MobileDrawerProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-q-neutral-900/40 backdrop-blur-sm",
          "transition-opacity duration-q-fade ease-q-ease",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        id={id}
        ref={navRef}
        role="dialog"
        aria-label="Menu"
        aria-modal="true"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[min(320px,90vw)]",
          "bg-q-neutral-0 shadow-q-xl",
          "transition-transform duration-q-fade ease-q-ease",
          "flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-[72px] px-5 border-b border-q-border">
          <img
            src="/qortex-logo-horizontal-color.svg"
            alt="Qortex"
            width={100}
            height={26}
            className="h-7 w-auto"
          />
          <button
            className="flex items-center justify-center w-10 h-10 rounded-q-sm text-q-text-secondary hover:text-q-text-primary transition-colors"
            aria-label="Đóng menu"
            onClick={onClose}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile navigation">
          <p className="q-eyebrow mb-2">Giải pháp theo ngành</p>
          <div className="flex flex-col gap-1 mb-4">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                href={ind.href}
                className="flex items-center gap-2 py-2.5 text-small font-medium text-q-text-primary no-underline hover:text-q-link transition-colors"
                onClick={onClose}
              >
                <IndustryDot industry={ind.dot} />
                {ind.label}
              </Link>
            ))}
          </div>

          <hr className="q-divider mb-4" />

          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <p className="text-small font-semibold text-q-text-muted py-1">
                      {item.label}
                    </p>
                    <div className="flex flex-col pl-3 border-l border-q-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-small text-q-text-primary no-underline hover:text-q-link transition-colors"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex py-2.5 text-body font-medium text-q-text-primary no-underline hover:text-q-link transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="p-5 border-t border-q-border">
          <LinkButton
            href={NAV_CTA.href}
            variant={NAV_CTA.variant}
            size="lg"
            className="w-full justify-center"
          >
            {NAV_CTA.label}
          </LinkButton>
        </div>
      </div>
    </>
  );
}
