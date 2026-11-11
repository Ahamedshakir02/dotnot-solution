"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Phone card rows: the cards slide sideways while the page scrolls, starting once the
// whole row is on screen and finishing before it reaches the top. Swiping by hand still works.
export function ScrollRail({ as: Tag = "ul", className, children }: { as?: "ul" | "ol"; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLUListElement & HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let offset = 0; // what the visitor swiped by hand
    let last = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return; // desktop grid: nothing to slide
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh - r.height; // row fully on screen
      const end = vh * 0.1; // row near the top
      const t = Math.min(1, Math.max(0, (start - r.top) / Math.max(1, start - end)));
      const eased = t * t * (3 - 2 * t);
      last = Math.round(Math.min(max, Math.max(0, eased * max + offset)));
      el.scrollLeft = last;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onRowScroll = () => {
      const d = el.scrollLeft - last;
      if (Math.abs(d) > 2) {
        offset += d;
        last = el.scrollLeft;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    el.addEventListener("scroll", onRowScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      el.removeEventListener("scroll", onRowScroll);
    };
  }, []);

  return (
    <Tag ref={ref} data-stagger className={className}>
      {children}
    </Tag>
  );
}
