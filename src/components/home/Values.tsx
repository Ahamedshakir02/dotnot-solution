import type { ReactNode } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";

// 24px line icons, drawn with currentColor
const icon = {
  build: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  cause: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </>
  ),
  plain: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  numbers: (
    <>
      <path d="M3 3v18h18" />
      <path d="M8 17v-4M13 17V8M18 17V5" />
    </>
  ),
  people: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  handover: (
    <>
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3" />
    </>
  ),
  finish: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22v-7" />
    </>
  ),
  fit: (
    <>
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0z" />
      <path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2" />
    </>
  ),
  purpose: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  longrun: <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4z" />,
} satisfies Record<string, ReactNode>;

const values: [keyof typeof icon, string, string][] = [
  ["build", "Build, don’t just advise", "Our job ends when something works, not when a report is delivered."],
  ["cause", "Find the real cause", "We hear from the frontline as well as the owner before we conclude."],
  ["plain", "Say it plainly", "No jargon, no inflated claims; bad news early."],
  ["numbers", "Prove it in numbers", "Every finding carries a cost; every engagement shows a before and after."],
  ["people", "Respect the people doing the work", "Staff input fixes processes, never blames people."],
  ["handover", "Leave the team self-sufficient", "Success is a team that runs it without us."],
  ["finish", "Move fast, finish properly", "A working solution quickly, and the job finished properly."],
  ["fit", "Fit the business, not the template", "Processes and tools shaped around how you already work."],
  ["purpose", "Use technology with purpose", "Tech where it saves time or money, never for its own sake."],
  ["longrun", "Stay for the long run", "We stay through Sustain, so the gains keep growing."],
];

export function Values() {
  return (
    <Section id="values" tone="paper">
      <SectionHeader overline="Our values" title="Ten things we hold ourselves to." accent="we hold ourselves to." />

      <ul data-stagger className="mt-9 grid grid-cols-2 gap-x-5 gap-y-8 md:mt-14 md:grid-cols-3 md:gap-x-10 md:gap-y-12 lg:grid-cols-5">
        {values.map(([k, t, b]) => (
          <li key={t} className="flex flex-col gap-2.5 md:gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand ring-1 ring-tint2 md:h-14 md:w-14">
              <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {icon[k]}
              </svg>
            </span>
            <h3 className="text-[15px] leading-5 font-bold md:text-[17px] md:leading-6">{t}</h3>
            <p className="text-[13px] leading-[19px] text-muted md:text-sm md:leading-[21px]">{b}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
