"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { requirementLink } from "@/lib/site";

// Phone-only share bar. It stays away while a section with its own share button
// ([data-own-cta]: heroes, the checklist, the share section, footer) is on screen.
export function StickyBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-own-cta]"));
    const onScreen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target);
        else onScreen.delete(e.target);
      }
      setShow(onScreen.size === 0);
    });
    els.forEach((el) => io.observe(el));
    const id = els.length ? 0 : requestAnimationFrame(() => setShow(true));
    return () => {
      io.disconnect();
      cancelAnimationFrame(id);
    };
  }, [pathname]);

  return (
    <a
      href={requirementLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!show}
      tabIndex={show ? undefined : -1}
      className={cn(
        "fixed inset-x-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-ink py-2.5 pr-2.5 pl-5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-[translate,opacity] duration-300 md:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0",
      )}
    >
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] font-medium text-white/70">5 minutes, text or voice</span>
        <span className="text-sm font-bold">Tell us what’s slowing you</span>
      </span>
      <span className="ml-auto rounded-full bg-lime px-4 py-3 text-sm font-bold text-ink">Share →</span>
    </a>
  );
}
