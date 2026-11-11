"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { requirementLink } from "@/lib/site";

type Checklist = { score: number; active: boolean; title: string; message: string } | null;

function MiniGauge({ score }: { score: number }) {
  const r = 16;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden>
      <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="4" />
      <circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        stroke="#86CC59"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - score / 10)}
        transform="rotate(-90 20 20)"
        style={{ transition: "stroke-dashoffset 0.4s ease-out" }}
      />
      <text x="20" y="25" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">
        {score}
      </text>
    </svg>
  );
}

// One share bar for phones, on every page. It stays away while the page's hero
// (which has its own button) is on screen. Inside "Is this you?" it shows the score.
export function StickyBar() {
  const pathname = usePathname();
  const [heroOn, setHeroOn] = useState(true);
  const [check, setCheck] = useState<Checklist>(null);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) {
      const id = requestAnimationFrame(() => setHeroOn(false));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(([e]) => setHeroOn(e.isIntersecting));
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const on = (e: Event) => setCheck((e as CustomEvent<Checklist>).detail);
    window.addEventListener("dn:checklist", on);
    return () => window.removeEventListener("dn:checklist", on);
  }, []);

  const scoring = !!check?.active;
  const ticked = check && check.score > 0 ? check.score : 0;
  // after the checklist, keep the visitor's result: ring, "You ticked N of 10" and the verdict once it means something
  const remembered = !scoring && ticked > 0;
  const withRing = scoring || remembered;

  return (
    <a
      href={requirementLink(ticked ? check!.message : undefined)}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={heroOn}
      tabIndex={heroOn ? -1 : undefined}
      className={cn(
        "fixed inset-x-4 bottom-4 z-40 flex items-center gap-3 rounded-full py-2.5 pr-2.5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-[translate,opacity,background-color,padding] duration-300 md:hidden",
        scoring ? "bg-deep" : "bg-ink",
        withRing ? "pl-2.5" : "pl-5",
        heroOn ? "pointer-events-none translate-y-[140%] opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      {withRing && <MiniGauge score={check!.score} />}
      <span className="flex min-w-0 flex-col leading-tight">
        <span className={cn("text-[11px] font-medium", scoring ? "text-lime" : "text-white/70")}>
          {scoring ? `${check!.score} of 10 ticked` : ticked ? `You ticked ${ticked} of 10` : "5 minutes, text or voice"}
        </span>
        <span className="line-clamp-2 text-sm leading-[18px] font-bold">
          {scoring || (remembered && ticked >= 5) ? check!.title : "Tell us what’s slowing you"}
        </span>
      </span>
      <span className="ml-auto shrink-0 rounded-full bg-lime px-4 py-3 text-sm font-bold text-ink">Share →</span>
      <span className="sr-only" aria-live="polite">
        {scoring ? `${check!.score} of 10 ticked. ${check!.title}` : ""}
      </span>
    </a>
  );
}
