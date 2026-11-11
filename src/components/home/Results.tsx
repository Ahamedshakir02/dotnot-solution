import { Section, SectionHeader } from "@/components/ui/Section";

const cases = [
  {
    client: "Colors and Looms",
    sector: "Bespoke apparel · UAE",
    number: "2x",
    label: "off-season sales",
    bars: [44, 88],
    did: "Rebuilt the sales process and customer experience. Monthly retainer revenue up 50%.",
  },
  {
    client: "Safari Mall Leasing",
    sector: "Leasing · UAE",
    number: "80%",
    label: "of the issues resolved",
    bars: [88, 18],
    did: "The Growth Audit found misalignment and poor communication between departments.",
  },
  {
    client: "Apparel manufacturer",
    sector: "Manufacturing · India",
    number: "₹3 Cr",
    label: "about, from the Growth Audit",
    bars: [26, 88],
    did: "Growth Audit, started August 2026.",
  },
];

const inProgress = [
  { name: "Lead management system · Safari Mall Leasing", text: "Building the fix the audit pointed to. We diagnose before we build.", status: "In progress" },
  { name: "Evergreen Furniture", text: "Ongoing work.", status: "Ongoing" },
];

export function Results() {
  return (
    <Section id="results">
      <span aria-hidden className="text-outline-green absolute top-0 right-12 hidden xl:right-[110px] text-[220px] leading-[200px] font-extrabold tracking-[-0.06em] lg:block">
        05
      </span>
      <SectionHeader overline="Results" title="What changes when the business is diagnosed first." accent="is diagnosed first." />

      <ul data-stagger className="no-scrollbar -mx-5 mt-10 flex snap-x scroll-px-5 gap-4 overflow-x-auto px-5 md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-6 md:px-0">
        {cases.map((c) => (
          <li key={c.client} className="flex w-[300px] shrink-0 snap-start flex-col gap-5 rounded-3xl border border-line p-6 md:w-auto md:p-7">
            <div>
              <p className="text-xs font-semibold tracking-[0.1em] text-brand uppercase">{c.sector}</p>
              <h3 className="mt-1 text-[22px] font-bold">{c.client}</h3>
            </div>
            <div className="flex items-end gap-3 rounded-2xl bg-tint p-5">
              {c.bars.map((h, k) => (
                <span key={k} className="flex flex-col items-center gap-1.5">
                  <span className="block w-8 rounded-lg" style={{ height: h, background: k ? "#218A43" : "#DADFDA" }} />
                  <span className="text-[11px] font-medium text-muted">{k ? "After" : "Before"}</span>
                </span>
              ))}
              <span className="ml-auto flex flex-col items-end text-right">
                <span className="text-[38px] leading-none font-extrabold tracking-[-0.03em] text-brand">{c.number}</span>
                <span className="mt-1 max-w-[130px] text-[13px] font-medium">{c.label}</span>
              </span>
            </div>
            <p className="text-[15px] leading-6 text-muted">{c.did}</p>
          </li>
        ))}
      </ul>

      <ul data-stagger className="mt-6 grid gap-4 md:grid-cols-2">
        {inProgress.map((p) => (
          <li key={p.name} className="flex items-center gap-4 rounded-2xl bg-paper px-6 py-5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-lime" />
            <span className="flex flex-col">
              <span className="text-[15px] font-semibold">{p.name}</span>
              <span className="text-sm text-muted">{p.text}</span>
            </span>
            <span className="ml-auto shrink-0 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold text-gtext">{p.status}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
