"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// data-reveal, data-stagger, data-draw (styles in globals.css)
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
