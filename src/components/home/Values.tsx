"use client";

import { useState } from "react";
import { Ring, Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const values = [
  ["Build, don’t just advise", "Our job ends when something works, not when a report is delivered."],
  ["Find the real cause", "We hear from the frontline as well as the owner before we conclude."],
  ["Say it plainly", "No jargon, no inflated claims; bad news early."],
  ["Prove it in numbers", "Every finding carries a cost; every engagement shows a before and after."],
  ["Respect the people doing the work", "Staff input fixes processes, never blames people."],
  ["Leave the team self-sufficient", "Success is a team that runs it without us."],
  ["Move fast, finish properly", "A working solution quickly, and the job finished properly."],
  ["Fit the business, not the template", "Processes and tools shaped around how you already work."],
  ["Use technology with purpose", "Tech where it saves time or money, never for its own sake."],
  ["Stay for the long run", "We stay through Sustain, so the gains keep growing."],
];

export function Values() {
  const [first, ...rest] = values;
  const [all, setAll] = useState(false);
  return (
    <Section id="values" tone="paper">
      <SectionHeader overline="Our values" title="Ten things we hold ourselves to." accent="we hold ourselves to." />

      <div className="mt-10 grid gap-4 md:mt-14 lg:grid-cols-[384px_1fr]">
        <div data-reveal className="bg-brand-gradient relative flex min-h-[230px] flex-col gap-3 overflow-hidden rounded-3xl p-6 text-white md:min-h-[320px] md:gap-4 md:p-9">
          <Ring size={320} className="right-[-80px] bottom-[-120px] border-lime/25" />
          <span aria-hidden className="text-outline-lime absolute top-[-20px] right-4 hidden text-[200px] md:block leading-none font-extrabold tracking-[-0.06em]">
            01
          </span>
          <div className="flex-1" />
          <p className="text-xs font-bold tracking-[0.1em] text-lime uppercase">The one we start with</p>
          <h3 className="text-[34px] leading-[38px] font-extrabold tracking-[-0.03em] md:text-[40px] md:leading-[44px]">{first[0]}</h3>
          <p className="text-[17px] leading-[26px] text-white/80">{first[1]}</p>
        </div>

        <ol data-stagger className="grid gap-3 sm:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {rest.map(([t, b], i) => (
            <li key={t} className={cn(!all && i >= 3 && "hidden md:flex", "lift flex flex-col gap-1.5 rounded-[20px] border border-line bg-white p-5 md:gap-2.5 md:p-6")}>
              <div className="flex items-baseline gap-2.5 md:flex-col md:gap-2.5">
                <span className="text-[13px] font-extrabold text-brand">{String(i + 2).padStart(2, "0")}</span>
                <h3 className="text-[17px] leading-6 font-bold md:text-lg">{t}</h3>
              </div>
              <p className="text-sm leading-[21px] text-muted">{b}</p>
            </li>
          ))}
        </ol>
      </div>
      {!all && (
        <button
          type="button"
          onClick={() => setAll(true)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink/15 bg-white px-5 py-3 text-[15px] font-bold text-ink md:hidden"
        >
          See all 10 values <span aria-hidden>↓</span>
        </button>
      )}
    </Section>
  );
}
