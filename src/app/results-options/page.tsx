import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ClientLogo } from "@/components/clients/ClientLogo";
import { stories } from "@/components/clients/data";
import { Section, SectionHeader } from "@/components/ui/Section";

// Temporary review page: three ways to show the Results section. Removed once one is picked.
export const metadata: Metadata = { title: "Results options", robots: { index: false, follow: false } };

const [cl, sm, ff] = stories;

// Option B pairs what was found (or done) with what changed. Only facts from the stories.
const paths = [
  { s: cl, first: { k: "We rebuilt", v: "The sales process and customer experience." }, result: { big: "2x", v: "off-season sales. Monthly retainer revenue up 50%." } },
  { s: sm, first: { k: "The audit found", v: "Misalignment and poor communication between departments." }, result: { big: "80%", v: "of the issues resolved." } },
  { s: ff, first: { k: "The audit found", big: "₹3 Cr", v: "in revenue the business was losing." }, result: { k: "Started", v: "Growth Audit, August 2026." } },
];

function Label({ id, name, note }: { id: string; name: string; note: string }) {
  return (
    <div className="sticky top-0 z-20 border-b border-line bg-ink px-5 py-3 text-white">
      <p className="text-[15px] font-bold">
        <span className="text-lime">Option {id}</span> · {name}
      </p>
      <p className="text-[13px] text-white/70">{note}</p>
    </div>
  );
}

function Header() {
  return <SectionHeader overline="Results" title="What changes when the business is diagnosed first." accent="is diagnosed first." />;
}

function Who({ s, dark }: { s: (typeof stories)[number]; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <ClientLogo c={{ name: s.client, logo: s.logo }} size={48} className="h-11 w-11 shrink-0 rounded-full" />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="text-[16px] font-bold">{s.client}</span>
        <span className={dark ? "text-[13px] text-white/65" : "text-[13px] text-muted"}>{s.sector}</span>
      </span>
    </div>
  );
}

function Block({ children }: { children: ReactNode }) {
  return <div className="border-b-8 border-paper">{children}</div>;
}

export default function ResultsOptions() {
  return (
    <main className="bg-white text-ink">
      <div className="bg-brand-gradient px-5 py-8 text-white">
        <p className="text-[13px] font-semibold tracking-[0.1em] text-lime uppercase">For review</p>
        <h1 className="mt-1 text-[28px] leading-tight font-bold">Results section: 3 options</h1>
        <p className="mt-2 max-w-[560px] text-[15px] text-white/75">
          Same three stories, same facts. All three are visible without sideways scrolling. Scroll down to compare.
        </p>
      </div>

      {/* A: one compact list */}
      <Block>
        <Label id="A" name="Quick list" note="Short. All three fit on one phone screen." />
        <Section>
          <Header />
          <ul className="mt-10 border-t border-line md:mt-14">
            {stories.map((s) => (
              <li key={s.client} className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 border-b border-line py-5 md:grid-cols-[300px_1fr_auto] md:gap-x-10 md:py-7">
                <Who s={s} />
                <p className="col-span-2 row-start-2 text-[14px] leading-[21px] text-muted md:col-span-1 md:row-start-auto md:text-[15px]">{s.text}</p>
                <span className="col-start-2 row-start-1 flex flex-col items-end text-right md:col-start-auto md:row-start-auto">
                  <span className="text-[30px] leading-none font-extrabold tracking-[-0.03em] text-brand md:text-[40px]">{s.number}</span>
                  <span className="mt-1 max-w-[150px] text-[12px] leading-4 font-medium md:max-w-[170px] md:text-[13px]">{s.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </Block>

      {/* B: what was found or done, then what changed */}
      <Block>
        <Label id="B" name="Found, then changed" note="Ties each result to the diagnosis. Matches the heading." />
        <Section tone="paper">
          <Header />
          <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
            {paths.map(({ s, first, result }) => (
              <li key={s.client} className="flex flex-col gap-6 rounded-3xl bg-white p-6 md:p-7">
                <Who s={s} />
                <ol className="relative flex flex-col gap-6 pl-7">
                  <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-0.5 rounded bg-tint2" />
                  {[first, result].map((step, k) => (
                    <li key={k} className="relative flex flex-col gap-1">
                      <span aria-hidden className={`absolute top-1 -left-7 h-4 w-4 rounded-full border-2 ${k ? "border-brand bg-brand" : "border-brand bg-white"}`} />
                      <span className="text-[12px] font-bold tracking-[0.1em] text-brand uppercase">{step.k ?? "Result"}</span>
                      {"big" in step && step.big && (
                        <span className="text-[40px] leading-none font-extrabold tracking-[-0.03em] text-brand">{step.big}</span>
                      )}
                      <span className="text-[15px] leading-[22px] font-medium">{step.v}</span>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </Section>
      </Block>

      {/* C: the number leads */}
      <Block>
        <Label id="C" name="Big numbers" note="Bold and quick. The number does the talking." />
        <Section>
          <Header />
          <ul className="mt-10 grid gap-3 md:mt-14 md:grid-cols-3 md:gap-6">
            {stories.map((s, k) => {
              const dark = k === 0;
              return (
                <li key={s.client} className={`flex flex-col gap-5 rounded-3xl p-6 md:p-8 ${dark ? "bg-brand-gradient text-white" : "bg-tint"}`}>
                  <span className="flex flex-col">
                    <span className={`text-[64px] leading-none font-extrabold tracking-[-0.04em] md:text-[80px] ${dark ? "text-lime" : "text-brand"}`}>{s.number}</span>
                    <span className="mt-2 text-[17px] font-bold">{s.label}</span>
                  </span>
                  <p className={`text-[14px] leading-[21px] ${dark ? "text-white/75" : "text-muted"}`}>{s.text}</p>
                  <div className={`mt-auto border-t pt-5 ${dark ? "border-white/15" : "border-tint2"}`}>
                    <Who s={s} dark={dark} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>
      </Block>
    </main>
  );
}
