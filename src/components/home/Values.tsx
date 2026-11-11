import { Section, SectionHeader } from "@/components/ui/Section";

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
  return (
    <Section id="values" tone="paper">
      <SectionHeader overline="Our values" title="Ten things we hold ourselves to." accent="we hold ourselves to." />

      <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-[384px_1fr] lg:gap-14">
        <div data-reveal className="bg-brand-gradient relative flex min-h-[320px] flex-col gap-4 overflow-hidden rounded-3xl p-8 text-white md:p-9">
          <div className="flex-1" />
          <p className="text-xs font-bold tracking-[0.1em] text-lime uppercase">The one we start with</p>
          <h3 className="text-[34px] leading-[38px] font-extrabold tracking-[-0.03em] md:text-[40px] md:leading-[44px]">{first[0]}</h3>
          <p className="text-[17px] leading-[26px] text-white/80">{first[1]}</p>
        </div>

        <ul data-stagger className="grid gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
          {rest.map(([t, b]) => (
            <li key={t} className="flex flex-col gap-1.5 border-t border-ink/15 py-5">
              <h3 className="text-lg leading-6 font-bold">{t}</h3>
              <p className="text-sm leading-[21px] text-muted">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
