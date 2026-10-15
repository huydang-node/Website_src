"use client";

import { useEffect } from "react";

/**
 * Motion layer — sets up IntersectionObserver for scroll reveals.
 * Runs once on mount, watches all [data-reveal] and [data-reveal-stagger]
 * elements and adds .is-visible when they enter the viewport.
 *
 * Based on taste skill §9 / motion.md recipe.
 */
export function MotionProvider() {
  useEffect(() => {
    // Guard: only run when html.js class is present (JS is available)
    if (!document.documentElement.classList.contains("js")) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            staggerObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
    );

    // Observe single reveal elements
    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((el) => revealObserver.observe(el));

    // Observe stagger containers
    document
      .querySelectorAll<HTMLElement>("[data-reveal-stagger]")
      .forEach((el) => staggerObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
    };
  }, []);

  return null;
}
