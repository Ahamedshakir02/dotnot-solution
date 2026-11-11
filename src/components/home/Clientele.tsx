"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

// logo: square tile in /public/clients (96px webp)
const L = (slug: string) => `/clients/${slug}.webp`;
const industries: { name: string; clients: { name: string; logo?: string }[] }[] = [
  {
    name: "Retail",
    clients: [
      { name: "Colors and Looms", logo: L("colors-and-looms") },
      { name: "Zeenath Textile", logo: L("zeenath") },
      { name: "Eyenation", logo: L("eyenation") },
      { name: "Safari Furniture", logo: L("safari-furniture") },
      { name: "Al Rams", logo: L("al-rams") },
    ],
  },
  {
    name: "Manufacturing",
    clients: [{ name: "Pearl City", logo: L("pearl-city") }, { name: "Evergreen Furniture", logo: L("evergreen") }, { name: "An apparel manufacturer" }],
  },
  { name: "Restaurants", clients: [{ name: "Aslee Hindi", logo: L("aslee-hindi") }, { name: "Shawook" }, { name: "Mr. Eggy", logo: L("mr-eggy") }] },
  { name: "Agencies", clients: [{ name: "Tale8", logo: L("tale8") }, { name: "Beyo", logo: L("beyo") }] },
  { name: "Healthcare", clients: [{ name: "Sravana Hearing Aid", logo: L("sravana") }] },
  { name: "Education and travel", clients: [{ name: "Edu Wisdom", logo: L("edu-wisdom") }, { name: "Europe Travels", logo: L("europe-travels") }] },
];

// one ring segment per industry, sized by how many clients it has
const COLORS = ["#218A43", "#0E3B1D", "#86CC59", "#17652F", "#4FAE5F", "#B5DD95"];
const SLOTS = industries.reduce((n, i) => n + i.clients.length, 0);
const STEP = 360 / SLOTS;
const C = 200;
const R = 150;
const pt = (deg: number, r = R) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
};
const arc = (from: number, to: number) => {
  const [x1, y1] = pt(from);
  const [x2, y2] = pt(to);
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} A${R} ${R} 0 ${to - from > 180 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
};
const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

let slot = 0;
const ring = industries.map((ind, i) => {
  const from = slot * STEP;
  const clients = ind.clients.map((c) => ({ ...c, deg: (slot++ + 0.5) * STEP }));
  return { ...ind, i, color: COLORS[i], from, to: slot * STEP, clients };
});

export function Clientele() {
  const [active, setActive] = useState<number | null>(null);
  const [touched, setTouched] = useState(false);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const listId = useId();

  // until someone picks an industry, walk through them while the dial is on screen
  useEffect(() => {
    const el = box.current;
    if (!el || touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(timer);
      if (e.isIntersecting) timer = window.setInterval(() => setActive((a) => (a === null ? 0 : (a + 1) % ring.length)), 2400);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, [touched]);

  const pick = (i: number) => {
    setTouched(true);
    setActive((a) => (a === i ? null : i));
  };
  const cur = active === null ? null : ring[active];

  return (
    <Section id="clientele" tone="paper">
      <SectionHeader
        overline="Clientele"
        title="Trusted by growing businesses across six industries."
        accent="across six industries."
      />

      <div className="mt-8 grid items-center gap-8 md:mt-14 lg:grid-cols-[460px_1fr] lg:gap-16">
        {/* the dial */}
        <div ref={box} data-draw className="relative mx-auto aspect-square w-full max-w-[460px]">
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
            <circle cx={C} cy={C} r={R} fill="none" stroke="#E4EAE3" strokeWidth="46" />
            {ring.map((ind) => (
              <path
                key={ind.name}
                className="draw"
                pathLength={1}
                d={arc(ind.from + 1.2, ind.to - 1.2)}
                fill="none"
                stroke={ind.color}
                strokeWidth="46"
                style={{ ["--dd" as string]: `${ind.i * 120}ms`, opacity: cur && cur.i !== ind.i ? 0.25 : 1, transition: "opacity .35s, stroke-dashoffset 1.6s cubic-bezier(.65,0,.35,1) var(--dd)" }}
              />
            ))}
            <circle cx={C} cy={C} r="104" fill="#fff" />
          </svg>

          {ring.flatMap((ind) =>
            ind.clients.map((c) => {
              const [x, y] = pt(c.deg);
              const dim = cur && cur.i !== ind.i;
              return (
                <span
                  key={c.name}
                  title={c.name}
                  className={cn(
                    "absolute flex h-[9.5%] w-[9.5%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white transition-[opacity,scale,filter] duration-300",
                    dim ? "scale-90 opacity-35 grayscale" : "opacity-100",
                    cur && !dim && "scale-110 shadow-[0_6px_16px_rgba(13,51,26,0.25)]",
                  )}
                  style={{ left: `${(x / 400) * 100}%`, top: `${(y / 400) * 100}%` }}
                >
                  {c.logo ? (
                    <Image src={c.logo} alt={c.name} width={48} height={48} unoptimized className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-[10px] font-extrabold text-gtext md:text-xs">{initials(c.name)}</span>
                  )}
                </span>
              );
            }),
          )}

          <div aria-live="polite" className="absolute inset-[26%] flex flex-col items-center justify-center text-center">
            {cur ? (
              <>
                <span className="text-[12px] font-bold tracking-[0.1em] uppercase md:text-[13px]" style={{ color: cur.color === "#B5DD95" ? "#4FAE5F" : cur.color }}>
                  {cur.name}
                </span>
                <span className="text-[40px] leading-none font-extrabold tracking-[-0.03em] md:text-[56px]">{cur.clients.length}</span>
                <span className="text-xs font-medium text-muted md:text-sm">{cur.clients.length > 1 ? "clients" : "client"}</span>
              </>
            ) : (
              <>
                <span className="text-[56px] leading-none font-light tracking-[-0.04em] md:text-[76px]">
                  15<span className="font-extrabold text-brand">+</span>
                </span>
                <span className="mt-1 text-sm font-bold md:text-base">clients</span>
                <span className="text-xs font-medium text-muted md:text-sm">6 industries</span>
              </>
            )}
          </div>
        </div>

        {/* industries */}
        <div className="flex flex-col gap-5">
          <ul className="grid grid-cols-2 gap-2 md:gap-3">
            {ring.map((ind) => (
              <li key={ind.name}>
                <button
                  type="button"
                  aria-pressed={active === ind.i}
                  onClick={() => pick(ind.i)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-2xl border px-3.5 py-3 text-left transition-colors md:px-4 md:py-3.5",
                    active === ind.i ? "border-ink bg-white" : "border-line bg-white/60 hover:bg-white",
                  )}
                >
                  <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: ind.color }} />
                  <span className="min-w-0 flex-1 text-[14px] leading-tight font-semibold md:text-[15px]">{ind.name}</span>
                  <span className="text-[13px] font-bold text-muted">{ind.clients.length}</span>
                </button>
              </li>
            ))}
          </ul>

          <p className="min-h-[3em] text-[15px] leading-6 text-muted md:text-base">
            {cur ? (
              <>
                <span className="font-semibold text-ink">{cur.name}: </span>
                {cur.clients.map((c) => c.name).join(", ")}.
              </>
            ) : (
              "Tap an industry to see who we work with."
            )}
          </p>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex w-fit items-center gap-2 rounded-full border-[1.5px] border-ink/15 bg-white px-5 py-3 text-[15px] font-bold text-ink transition-colors hover:border-brand/50"
          >
            {open ? "Show less" : "And more · See all clients"}
            <span aria-hidden className={cn("transition-transform duration-300", open && "rotate-180")}>
              ↓
            </span>
          </button>
        </div>
      </div>

      <div id={listId} className={cn("grid transition-[grid-template-rows] duration-500 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden" inert={!open}>
          <ul className={cn("grid gap-3 pt-6 transition-opacity duration-500 md:grid-cols-2 md:gap-6 md:pt-10 lg:grid-cols-3", open ? "opacity-100" : "opacity-0")}>
            {ring.map((ind) => (
              <li key={ind.name} className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-5 md:gap-5 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: ind.color }} />
                  <h3 className="text-[19px] font-semibold">{ind.name}</h3>
                  <span className="ml-auto text-[13px] font-medium text-muted">
                    {ind.clients.length} {ind.clients.length > 1 ? "clients" : "client"}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-1.5 md:gap-2">
                  {ind.clients.map((c) => (
                    <li
                      key={c.name}
                      className={cn(
                        "flex min-h-9 items-center gap-2 rounded-full border border-line bg-paper py-1 pr-3 text-[13px] font-medium md:min-h-10 md:pr-3.5 md:text-sm",
                        c.logo ? "pl-1" : "pl-3 md:pl-3.5",
                      )}
                    >
                      {c.logo && (
                        <Image src={c.logo} alt="" width={32} height={32} unoptimized className="h-7 w-7 shrink-0 rounded-[7px] object-cover ring-1 ring-black/5 md:h-8 md:w-8 md:rounded-lg" />
                      )}
                      {c.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="pt-5 text-[15px] font-semibold text-muted md:pt-6">…and more.</p>
        </div>
      </div>
    </Section>
  );
}
