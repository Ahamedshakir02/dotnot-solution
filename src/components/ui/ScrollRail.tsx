"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Phone card rows: slide sideways as the page scrolls down, and still swipe by hand.
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
      if (max <= 0) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // starts when the row comes up from the bottom, ends while it is still on screen
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.75)));
      last = Math.round(Math.min(max, Math.max(0, p * max + offset)));
      el.scrollLeft = last;
    };
    const onPageScroll = () => {
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
    window.addEventListener("scroll", onPageScroll, { passive: true });
    window.addEventListener("resize", onPageScroll);
    el.addEventListener("scroll", onRowScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onPageScroll);
      window.removeEventListener("resize", onPageScroll);
      el.removeEventListener("scroll", onRowScroll);
    };
  }, []);

  return (
    <Tag ref={ref} data-stagger className={className}>
      {children}
    </Tag>
  );
}
