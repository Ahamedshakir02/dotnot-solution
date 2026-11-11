"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll motion for the whole site, with no animation library.
 * - [data-reveal]   fades up when it scrolls into view
 * - [data-stagger]  its children fade up one after another
 * - [data-draw]     paths with class "draw" draw themselves; ".pop" and ".fade" follow
 * Styles live in globals.css and only apply when the visitor allows motion.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-on");

    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((el) => {
      Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty("--d", String(i)));
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    document.querySelectorAll("[data-reveal], [data-stagger], [data-draw]").forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
