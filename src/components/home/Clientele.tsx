"use client";

import Image from "next/image";
import { useState } from "react";
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
    clients: [{ name: "Pearl City", logo: L("pearl-city") }, { name: "Evergreen Furniture", logo: L("evergreen") }, { name: "Apparel manufacturer" }],
  },
  { name: "Restaurants", clients: [{ name: "Aslee Hindi", logo: L("aslee-hindi") }, { name: "Shawook" }, { name: "Mr. Eggy", logo: L("mr-eggy") }] },
  { name: "Agencies", clients: [{ name: "Tale8", logo: L("tale8") }, { name: "Beyo", logo: L("beyo") }] },
  { name: "Healthcare", clients: [{ name: "Sravana Hearing Aid", logo: L("sravana") }] },
  { name: "Education and travel", clients: [{ name: "Edu Wisdom", logo: L("edu-wisdom") }, { name: "Europe Travels", logo: L("europe-travels") }] },
];

const all = industries.flatMap((ind, i) => ind.clients.map((c) => ({ ...c, industry: i })));

export function Clientele() {
  // null = everyone; otherwise the index of the industry the visitor tapped
  const [only, setOnly] = useState<number | null>(null);
  const shown = only === null ? all : all.filter((c) => c.industry === only);

  return (
    <Section id="clientele" tone="paper">
      <SectionHeader
        overline="Clientele"
        title="Trusted by growing businesses across six industries."
        accent="across six industries."
        lead="15+ clients so far. Tap your industry to see businesses like yours."
      />

      <ul aria-label="Filter by industry" className="no-scrollbar -mx-5 mt-7 flex gap-2 overflow-x-auto px-5 md:mx-0 md:mt-10 md:flex-wrap md:px-0">
        {[{ name: "All", count: "15+", i: null as number | null }, ...industries.map((ind, i) => ({ name: ind.name, count: String(ind.clients.length), i }))].map((f) => {
          const on = only === f.i;
          return (
            <li key={f.name} className="shrink-0">
              <button
                type="button"
                aria-pressed={on}
                onClick={() => setOnly(f.i)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2.5 text-[14px] font-semibold whitespace-nowrap transition-colors",
                  on ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-brand/50",
                )}
              >
                {f.name}
                <span className={cn("text-[12px] font-bold", on ? "text-lime" : "text-muted")}>{f.count}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <ul aria-live="polite" className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-5 md:mt-6 md:grid-cols-6 md:gap-3 lg:grid-cols-8">
        {shown.map((c) => (
          <li key={c.name} className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-white px-1.5 pt-3 pb-2.5 text-center md:px-3 md:pt-4 md:pb-3.5">
            {c.logo ? (
              <Image src={c.logo} alt="" width={64} height={64} unoptimized className="h-12 w-12 rounded-xl object-cover ring-1 ring-black/5 md:h-16 md:w-16 md:rounded-2xl" />
            ) : (
              <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-gtext md:h-16 md:w-16 md:rounded-2xl">
                <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
                  {industries[c.industry].name === "Manufacturing" ? (
                    <>
                      <path d="M3 21V9l6 4V9l6 4V5h6v16H3z" />
                      <path d="M7 17h2M12 17h2M17 17h1" />
                    </>
                  ) : (
                    <>
                      <path d="M4 10v10h16V10" />
                      <path d="M3 10l2-6h14l2 6c0 1.5-1.3 2.5-2.7 2.5S16 11.5 16 10c0 1.5-1.3 2.5-2.7 2.5S10.7 11.5 10.7 10c0 1.5-1.3 2.5-2.7 2.5S5.3 11.5 5.3 10 3 11.5 3 10z" />
                      <path d="M10 20v-4h4v4" />
                    </>
                  )}
                </svg>
              </span>
            )}
            <span className="text-[11px] leading-[14px] font-semibold md:text-[13px] md:leading-4">{c.name}</span>
          </li>
        ))}
      </ul>
      {only === null && <p className="mt-4 text-[15px] font-semibold text-muted md:mt-5">…and more.</p>}
    </Section>
  );
}
