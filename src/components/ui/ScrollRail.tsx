"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Phone card rows: when the row reaches the middle of the screen it holds still
// and the cards slide across as the page scrolls. Swiping by hand still works.
export function ScrollRail({ as: Tag = "ul", className, children }: { as?: "ul" | "ol"; className?: string; children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLUListElement & HTMLOListElement>(null);

  useEffect(() => {
    const box = outer.current;
    const sticky = pin.current;
    const el = rail.current;
    if (!box || !sticky || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let travel = 0; // how far the cards slide
    let top = 0; // sticky offset that centres the row
    let offset = 0; // what the visitor swiped by hand
    let last = 0;
    let frame = 0;
    let width = 0;

    const layout = () => {
      width = window.innerWidth;
      box.style.height = "";
      sticky.style.position = "";
      sticky.style.top = "";
      travel = el.scrollWidth - el.clientWidth;
      if (travel <= 0) return; // desktop grid: nothing to slide
      const mt = parseFloat(getComputedStyle(el).marginTop) || 0;
      const h = el.offsetHeight;
      top = Math.max(16, (window.innerHeight - h) / 2 - mt);
      box.style.height = `${mt + h + travel}px`;
      sticky.style.position = "sticky";
      sticky.style.top = `${top}px`;
    };

    const update = () => {
      frame = 0;
      if (travel <= 0) return;
      const p = Math.min(1, Math.max(0, (top - box.getBoundingClientRect().top) / travel));
      last = Math.round(Math.min(travel, Math.max(0, p * travel + offset)));
      el.scrollLeft = last;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // phone address bars change the height while scrolling; only re-measure when the width changes
    const onResize = () => {
      if (window.innerWidth !== width) {
        layout();
        onScroll();
      }
    };
    const onRowScroll = () => {
      const d = el.scrollLeft - last;
      if (Math.abs(d) > 2) {
        offset += d;
        last = el.scrollLeft;
      }
    };

    layout();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    el.addEventListener("scroll", onRowScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("scroll", onRowScroll);
    };
  }, []);

  return (
    <div ref={outer}>
      <div ref={pin} className="flow-root">
        <Tag ref={rail} data-stagger className={className}>
          {children}
        </Tag>
      </div>
    </div>
  );
}
