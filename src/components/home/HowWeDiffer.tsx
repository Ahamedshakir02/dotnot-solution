import { Section, SectionHeader, Tick } from "@/components/ui/Section";
import { comparison } from "./comparison";
import { CompareTabs } from "./CompareTabs";

const five: { t: string; b: string; p?: string }[] = [
  { t: "We hear from everyone, not just the top.", b: "Staff answer our WhatsApp AI advisor by voice, in their own language.", p: "The Growth Audit platform" },
  { t: "Every problem has a price.", b: "Findings come with a time and money cost, so you decide on numbers.", p: "A sample finding card" },
  { t: "We build; we don’t just advise.", b: "SOPs, CRMs, dashboards and custom tools, built with the team.", p: "“What we built” in each case" },
  { t: "Technology fitted to the business.", b: "Tools built for your real workflow, not the other way round.", },
  { t: "We leave a team that runs it.", b: "Success means your team runs the new way of working without us." },
];

export function HowWeDiffer() {
  return (
    <Section id="differ" tone="paper">
      <SectionHeader
        overline="How we’re different"
        title="We find it, price it, build it, and hand it over."
        accent="and hand it over."
        lead="A growing business usually picks between a consultant who leaves a report and a software vendor who leaves a tool nobody uses. We do the thinking and the building, and stay until the team runs it."
      />

      {/* Desktop: full grid */}
      <div data-reveal className="mt-14 hidden rounded-3xl border border-line bg-white p-2 md:block" role="table" aria-label="Comparison">
        <div role="row" className="grid grid-cols-[220px_1fr_1fr_1.3fr]">
          <span role="columnheader" />
          {comparison.heads.map((h, j) => (
            <span
              role="columnheader"
              key={h}
              className={j === 2 ? "rounded-t-[18px] bg-deep px-6 pt-6 pb-4 text-[21px] font-bold text-lime" : "px-6 pt-6 pb-4 text-[15px] font-semibold text-muted"}
            >
              {h}
            </span>
          ))}
        </div>
        {comparison.rows.map((r, i) => {
          const last = i === comparison.rows.length - 1;
          return (
            <div role="row" key={r[0]} className="grid grid-cols-[220px_1fr_1fr_1.3fr]">
              {r.map((cell, j) => (
                <span
                  role="cell"
                  key={j}
                  className={
                    j === 3
                      ? `flex gap-2.5 bg-deep px-6 py-5 text-[15px] font-semibold text-white ${last ? "rounded-b-[18px]" : "border-b border-white/10"}`
                      : `px-6 py-5 ${j === 0 ? "text-[15px] font-semibold" : "text-[15px] text-muted"} ${last ? "" : "border-b border-line"}`
                  }
                >
                  {j === 3 && <Tick size={20} />}
                  {cell}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      {/* Phone: tabs */}
      <CompareTabs />

      <ol data-stagger className="no-scrollbar -mx-5 mt-8 flex snap-x scroll-px-5 gap-3 overflow-x-auto px-5 md:mx-0 md:mt-10 md:grid md:grid-cols-5 md:gap-4 md:px-0">
        {five.map((f, i) => (
          <li key={f.t} className="lift flex w-[280px] shrink-0 snap-start flex-col gap-3 rounded-[20px] border border-line bg-white p-6 md:w-auto">
            <span className="w-fit rounded-lg bg-tint px-2.5 py-1 text-sm font-semibold text-gtext">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-[19px] leading-[26px] font-semibold">{f.t}</h3>
            <p className="text-[15px] leading-6 text-muted">{f.b}</p>
            {f.p && (
              <>
                <div className="flex-1" />
                <div className="border-t border-line pt-3">
                  <p className="text-xs font-semibold tracking-[0.1em] text-brand uppercase">Proof</p>
                  <p className="text-sm font-semibold">{f.p}</p>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
