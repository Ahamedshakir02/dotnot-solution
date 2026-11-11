"use client";

import Image from "next/image";
import { useId, useState } from "react";
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

// shown up front; the rest open with "And more"
const featured = [
  ["Colors and Looms", "Retail"],
  ["Zeenath Textile", "Retail"],
  ["Al Rams", "Retail"],
  ["Evergreen Furniture", "Manufacturing"],
  ["Mr. Eggy", "Restaurants"],
  ["Beyo", "Agency"],
  ["Sravana Hearing Aid", "Healthcare"],
  ["Edu Wisdom", "Education"],
].map(([name, tag]) => ({ name, tag, logo: industries.flatMap((i) => i.clients).find((c) => c.name === name)?.logo }));


export function Clientele() {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <Section id="clientele" tone="paper">
      <SectionHeader
        overline="Clientele"
        title="Trusted by growing businesses across six industries."
        accent="across six industries."
      />

      <div className="mt-8 grid gap-3 md:mt-14 md:gap-4 lg:grid-cols-[300px_1fr]">
        <div data-reveal className="bg-brand-gradient flex items-center gap-5 rounded-3xl p-6 text-white lg:flex-col lg:items-start lg:justify-end lg:gap-3 lg:p-8">
          <span className="text-[56px] leading-none font-light tracking-[-0.04em] lg:text-[96px]">
            15<span className="font-extrabold text-lime">+</span>
          </span>
          <span className="flex flex-col gap-1">
            <span className="text-lg font-bold lg:text-xl">clients</span>
            <span className="text-sm leading-5 text-white/75">across retail, manufacturing, restaurants, agencies, healthcare, education and travel.</span>
          </span>
        </div>

        <ul data-stagger className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {featured.map((c) => (
            <li key={c.name} className="lift flex items-center gap-3 rounded-[18px] border border-line bg-white p-3 md:flex-col md:items-start md:gap-4 md:p-5">
              {c.logo && (
                <Image src={c.logo} alt="" width={64} height={64} unoptimized className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-black/5 md:h-16 md:w-16 md:rounded-2xl" />
              )}
              <span className="flex min-w-0 flex-col">
                <span className="text-[13px] leading-[17px] font-bold md:text-base md:leading-5">{c.name}</span>
                <span className="text-[11px] font-medium text-muted md:text-[13px]">{c.tag}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        className="mt-5 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink/15 bg-white px-5 py-3 text-[15px] font-bold text-ink transition-colors hover:border-brand/50 md:mt-6"
      >
        {open ? "Show less" : "And more · See all clients"}
        <span aria-hidden className={cn("transition-transform duration-300", open && "rotate-180")}>
          ↓
        </span>
      </button>

      <div id={listId} className={cn("grid transition-[grid-template-rows] duration-500 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden" inert={!open}>
          <ul className={cn("grid gap-3 pt-5 transition-opacity duration-500 md:grid-cols-2 md:gap-6 md:pt-6 lg:grid-cols-3", open ? "opacity-100" : "opacity-0")}>
            {industries.map((ind, i) => (
              <li key={ind.name} className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-5 md:gap-5 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-tint text-[13px] font-semibold text-gtext md:h-9 md:w-9 md:text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
