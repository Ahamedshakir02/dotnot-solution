import Link from "next/link";
import { Section, SectionHeader, Tick } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const stages = [
  {
    over: "Stage 01 · Start here",
    name: "Growth Audit",
    href: "/growth-audit",
    what: "We hear from staff at every level and find what’s holding the business back.",
    get: "Findings with a money cost on each problem, in about 30 days.",
    pill: "bg-lime text-ink",
  },
  {
    over: "Stage 02",
    name: "Implementation",
    href: "/implementation",
    what: "We design the fix and build it with your team: roles, processes, numbers, tools.",
    get: "Working systems, at the level of involvement you choose.",
    pill: "bg-tint text-gtext",
    chips: [
      ["Design", "Build", "Adopt"],
      ["Advisory", "Partner", "Architect"],
    ],
  },
  {
    over: "Stage 03",
    name: "Sustain",
    href: "/sustain",
    what: "We stay through Sustain, so the gains keep growing.",
    get: "Tools that stay live, regular health reviews, support when something changes.",
    pill: "border-[1.5px] border-dashed border-brand text-gtext",
  },
];

function Join() {
  return (
    <span className="absolute top-1/2 right-[-16px] z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink ring-[3px] ring-white md:flex">
      <svg viewBox="0 0 12 9" className="w-3" fill="none" aria-hidden>
        <path d="M1 4.5l3.5 3.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function WhatWeOffer() {
  return (
    <Section id="offer">
      <SectionHeader
        overline="What we offer"
        title="One path, from finding the problem to keeping the fix working."
        accent="to keeping the fix working."
        lead="Every client starts with the Growth Audit. Implementation and Sustain follow, at the pace the business can take."
      />

      <ol data-stagger className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-0">
        {stages.map((s, i) => (
          <li key={s.name} className="flex flex-col gap-4">
            <p className={cn("text-[12px] font-semibold tracking-[0.1em] uppercase", i === 0 ? "text-brand" : "text-muted", i > 0 && "md:pl-10")}>
              {s.over}
            </p>
            <div className={cn("relative", i < 2 && "md:-mr-4")}>
              <Link
                href={s.href}
                className={cn("flex h-14 items-center rounded-full px-6 text-[21px] font-bold transition-transform hover:-translate-y-0.5", s.pill, i > 0 && "md:pl-10")}
              >
                {s.name}
              </Link>
              {i < 2 && <Join />}
            </div>
            <div className={cn("flex flex-1 flex-col gap-3 md:pr-6", i > 0 ? "md:pl-10" : "md:pl-6")}>
              <p className="text-base leading-6">{s.what}</p>
              {s.chips?.map((grp, gi) => (
                <ul key={gi} className="flex flex-wrap gap-1.5">
                  {grp.map((c) => (
                    <li key={c} className={cn("rounded-full px-3 py-1.5 text-[13px] font-semibold text-gtext", gi === 0 ? "bg-tint2" : "border border-line")}>
                      {c}
                    </li>
                  ))}
                </ul>
              ))}
              <div className="flex-1" />
              <p className={cn("flex items-start gap-2.5 rounded-[14px] px-4 py-3.5 text-sm font-semibold", i === 0 ? "bg-tint" : "bg-paper")}>
                <Tick size={20} />
                {s.get}
              </p>
              <Link href={s.href} className="text-sm font-bold text-brand hover:underline">
                Read more about {s.name} →
              </Link>
            </div>
          </li>
        ))}
      </ol>

      <p data-reveal className="bg-coal-gradient mt-10 flex flex-col gap-3 rounded-[24px] px-6 py-5 text-white sm:flex-row sm:items-center sm:gap-4 md:mt-14 md:rounded-full md:px-7">
        <span className="w-fit rounded-full bg-lime px-3.5 py-1.5 text-[13px] font-bold text-ink">Outcome</span>
        <span className="text-[17px] font-semibold md:text-[19px]">
          Work that runs faster and costs less, and stronger sales and growth.
        </span>
      </p>
    </Section>
  );
}
