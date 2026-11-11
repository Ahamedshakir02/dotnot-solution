import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "@/components/ui/Button";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { Footer } from "@/components/ui/Footer";
import { Nav } from "@/components/ui/Nav";
import { Ring, Section, SectionHeader, SplitTitle } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Implementation",
  description:
    "We design the fix and build it with your team: roles, processes, numbers and tools. Working systems your team uses every day, at the level of involvement you choose.",
};

const layers = [
  { n: "04", name: "Tools", text: "CRMs, dashboards, custom tools", tone: "bg-lime", status: "Building" },
  { n: "03", name: "Numbers", text: "Weekly numbers, not month-end", tone: "bg-tint2", status: "Built" },
  { n: "02", name: "Processes", text: "SOPs your team follows", tone: "bg-tint", status: "Built" },
  { n: "01", name: "Roles", text: "Clear owners for every job", tone: "bg-white", status: "Built" },
];

const phases = [
  { name: "Design", text: "We design the fix from the Growth Audit findings.", tone: "bg-tint" },
  { name: "Build", text: "We build it with your team, not for them.", tone: "bg-tint2" },
  { name: "Adopt", text: "We stay until your team uses it daily.", tone: "bg-lime/35" },
];

export default function ImplementationPage() {
  return (
    <>
      <main className="page-in">
        {/* 01 Hero */}
        <section
          className="relative overflow-hidden bg-[#0a2614] text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(134,204,89,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(134,204,89,0.05) 1px, transparent 1px), linear-gradient(rgba(134,204,89,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(134,204,89,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px, 40px 40px, 200px 200px, 200px 200px",
          }}
        >
          <Nav tone="dark" />
          <div className="container-x relative grid items-center gap-12 pt-6 pb-16 lg:grid-cols-[1fr_560px] lg:pb-24">
            <div data-stagger className="flex flex-col gap-6">
              <p className="text-[13px] font-medium text-white/55">
                <Link href="/" className="hover:text-white">Home</Link> / Implementation
              </p>
              <SplitTitle
                as="h1"
                dark
                title="We design the fix and build it with your team."
                accent="build it with your team."
                className="text-[42px] leading-[46px] md:text-[72px] md:leading-[75px]"
              />
              <p className="max-w-[520px] text-base leading-relaxed text-white/80 md:text-[19px] md:leading-[30px]">
                Roles, processes, numbers and tools. Working systems your team uses every day, at the level of involvement you choose.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ShareButton />
                <a href="#build" className="inline-flex items-center justify-center rounded-full border-[1.5px] border-white/45 px-6 py-4 text-[15px] font-bold hover:bg-white/10">
                  See what we build
                </a>
              </div>
            </div>

            <div className="relative">
              <span aria-hidden className="absolute top-2 bottom-12 left-0 hidden border-l border-dashed border-lime/50 sm:block" />
              <ol data-stagger className="flex flex-col gap-4 sm:pl-8">
                {layers.map((l, i) => (
                  <li
                    key={l.name}
                    className={cn("flex items-center gap-4 rounded-[20px] px-5 py-4 text-ink shadow-[0_16px_30px_-4px_rgba(0,0,0,0.35)] sm:px-6 sm:py-5", l.tone)}
                    style={{ marginLeft: `min(${i * 28}px, ${i * 3}vw)`, marginRight: `min(${(3 - i) * 28}px, ${(3 - i) * 3}vw)` }}
                  >
                    <span className="text-sm font-extrabold text-gtext">{l.n}</span>
                    <span className="flex flex-col">
                      <span className="text-xl font-extrabold tracking-[-0.02em] sm:text-2xl">{l.name}</span>
                      <span className="text-[13px] font-medium text-muted">{l.text}</span>
                    </span>
                    <span className={cn("ml-auto rounded-full px-2.5 py-1 text-[11px] font-bold", i === 0 ? "bg-deep text-lime" : "bg-white/70 text-gtext")}>
                      {l.status}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 flex justify-between text-xs sm:pl-8">
                <span className="font-bold tracking-[0.12em] text-lime">YOUR BUSINESS</span>
                <span className="text-white/55">Built in layers, from the ground up</span>
              </p>
            </div>
          </div>
        </section>

        {/* 02 Design, build, adopt */}
        <Section>
          <SectionHeader
            overline="How it runs"
            title="Design. Build. Adopt. Then it’s yours."
            accent="Then it’s yours."
            lead="Our role shrinks as your team takes over. Success means your team runs it without us."
          />
          <div data-draw className="relative mt-10 md:mt-14">
            <div className="relative overflow-hidden rounded-3xl">
            <ol data-stagger className="grid md:grid-cols-3">
              {phases.map((p, i) => (
                <li key={p.name} className={cn("flex flex-col gap-2 p-6 md:min-h-[300px] md:p-7", p.tone)}>
                  <span className="text-sm font-extrabold text-gtext">0{i + 1}</span>
                  <span className="text-[28px] font-extrabold tracking-[-0.03em] md:text-[32px]">{p.name}</span>
                  <span className="max-w-[320px] text-[15px] text-ink/75">{p.text}</span>
                </li>
              ))}
            </ol>
            <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="wipe pointer-events-none absolute inset-0 hidden h-full w-full md:block" style={{ ["--dd" as string]: "600ms" }} aria-hidden>
              <path d="M0 170 C400 182 800 240 1200 262" fill="none" stroke="#0E3B1D" strokeWidth="3" vectorEffect="non-scaling-stroke" />
              <path d="M0 262 C400 250 800 192 1200 170" fill="none" stroke="#218A43" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>
            </div>
            <div className="mt-4 hidden flex-wrap gap-x-6 gap-y-2 text-[13px] font-bold md:flex">
              <span className="flex items-center gap-2 text-brand">
                <span className="h-[3px] w-6 rounded bg-brand" /> Your team’s ownership
              </span>
              <span className="flex items-center gap-2 text-deep">
                <span className="h-[3px] w-6 rounded bg-deep" /> Dotnot’s role
              </span>
              <span className="text-xs font-bold tracking-[0.08em] text-muted uppercase md:ml-auto">Illustrative</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-bold md:hidden">
              <span className="text-brand">▲ Your team’s ownership grows</span>
              <span className="text-deep">▼ Dotnot’s role shrinks</span>
            </div>
          </div>
        </Section>

        {/* 03 What we build */}
        <Section id="build" tone="paper">
          <SectionHeader
            overline="What we build"
            title="SOPs, CRMs, dashboards and custom tools."
            accent="dashboards and custom tools."
            lead="Built with your team, so they actually use it."
          />
          <ul data-stagger className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
            {[
              { name: "SOPs", text: "How the work gets done, written down." },
              { name: "CRMs", text: "Enquiries and follow-ups in one place." },
              { name: "Dashboards", text: "Numbers every week, not at month-end." },
              { name: "Custom tools", text: "Built for how you already work." },
            ].map((b, i) => (
              <li key={b.name} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
                <div className="flex h-[200px] flex-col justify-center bg-tint p-5" aria-hidden>
                  <BuildMock i={i} />
                </div>
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="text-[22px] font-bold">{b.name}</h3>
                  <p className="text-sm leading-[21px] text-muted">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* 04 Fitted to the business */}
        <Section tone="brand">
          <Ring size={700} className="top-[-250px] right-[-200px] border-lime/10" />
          <SectionHeader
            dark
            overline="Technology fitted to the business"
            title="You don’t adapt to the software. It adapts to you."
            accent="It adapts to you."
          />
          <div data-stagger className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
            <ExampleCard client="Apparel retailer" title="Sales-target planning">
              <p className="text-xs font-bold">Target vs actual · this month</p>
              {[
                ["Branch A", 82],
                ["Branch B", 96],
                ["Branch C", 64],
              ].map(([b, a]) => (
                <div key={b} className="flex flex-col gap-1">
                  <div className="flex text-[11px] font-semibold">
                    {b}
                    <span className={cn("ml-auto font-bold", (a as number) > 90 ? "text-brand" : "text-muted")}>{a}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-paper">
                    <div className="h-full rounded-full" style={{ width: `${a}%`, background: (a as number) > 90 ? "#218A43" : "#DCEFD0" }} />
                  </div>
                </div>
              ))}
            </ExampleCard>
            <ExampleCard client="Furniture retailer" title="Complaint and delivery tracking">
              {[
                ["Order", "Out for delivery", "bg-lime"],
                ["Complaint", "Assigned to service team", "bg-tint2"],
                ["Order", "Delivered", "bg-tint"],
              ].map(([o, st, c], i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2.5">
                  <span className="text-xs font-bold">{o}</span>
                  <span className={cn("ml-auto rounded-full px-2.5 py-1 text-[11px] font-bold", c)}>{st}</span>
                </div>
              ))}
            </ExampleCard>
          </div>
        </Section>

        {/* 05 Involvement */}
        <Section>
          <SectionHeader
            overline="Your choice"
            title="Pick how involved we are."
            accent="how involved we are."
            lead="Three levels of involvement, the same method underneath. We agree the level with you after the Growth Audit."
          />
          <ul data-stagger className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
            {["Advisory", "Partner", "Architect"].map((l, i) => (
              <li key={l} className={cn("flex items-center gap-4 rounded-3xl border p-7", i === 1 ? "border-brand bg-tint" : "border-line bg-white")}>
                <span className="flex gap-1" aria-hidden>
                  {[0, 1, 2].map((d) => (
                    <span key={d} className={cn("h-3 w-3 rounded-full", d <= i ? "bg-brand" : "bg-tint2")} />
                  ))}
                </span>
                <span className="text-[26px] font-extrabold tracking-[-0.03em]">{l}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 06 Diagnose first */}
        <Section tone="ink" inner="grid items-center gap-10 lg:grid-cols-[480px_1fr] lg:gap-16">
          <SectionHeader
            dark
            overline="Why the audit comes first"
            title="We diagnose before we build."
            accent="before we build."
            lead="A lead system on top of an undiagnosed problem rarely works. So the Growth Audit comes first."
          />
          <div data-stagger className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
            <div className="flex flex-col gap-2 rounded-[20px] border border-white/15 bg-white/[0.07] p-6">
              <span className="text-xs font-bold tracking-[0.08em] text-lime uppercase">Growth Audit found</span>
              <span className="text-lg leading-[25px] font-bold">Misalignment and poor communication between departments.</span>
            </div>
            <span aria-hidden className="text-center text-[30px] font-bold text-lime">
              <span className="inline-block rotate-90 md:rotate-0">→</span>
            </span>
            <div className="flex flex-col gap-2 rounded-[20px] bg-lime p-6 text-ink">
              <span className="text-xs font-bold tracking-[0.08em] text-deep uppercase">We’re building</span>
              <span className="text-lg leading-[25px] font-bold">A lead management system for Safari Mall Leasing.</span>
            </div>
          </div>
        </Section>

        <ClosingCta
          title="Every build starts with a diagnosis."
          accent="a diagnosis."
          lead="Tell us what’s slowing your business down. Five minutes on WhatsApp."
        />
      </main>
      <Footer />
    </>
  );
}

function ExampleCard({ client, title, children }: { client: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/[0.06] p-6 md:p-7">
      <p className="text-xs font-bold tracking-[0.08em] text-lime uppercase">{client}</p>
      <h3 className="text-2xl font-bold tracking-[-0.01em] md:text-[26px]">{title}</h3>
      <div className="flex flex-col gap-3 rounded-2xl bg-white p-5 text-ink" aria-hidden>
        {children}
      </div>
      <p className="text-xs font-medium text-white/55">Illustrative. Real screenshots once the client approves.</p>
    </div>
  );
}

function BuildMock({ i }: { i: number }) {
  if (i === 0)
    return (
      <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
        <span className="text-xs font-bold">SOP · Handling an enquiry</span>
        {["Log it in the CRM", "Assign an owner", "Follow up in two days", "Close or hand over"].map((t, k) => (
          <span key={t} className="flex items-center gap-2">
            <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-tint2 text-[9px] font-bold text-gtext">{k + 1}</span>
            <span className="truncate text-[11px] text-muted">{t}</span>
          </span>
        ))}
      </div>
    );
  if (i === 1)
    return (
      <div className="flex gap-2">
        {[
          ["New", ["Sofa", "Bed", "Table"]],
          ["Follow-up", ["Chairs", "Desk"]],
          ["Won", ["Sofa"]],
        ].map(([c, items]) => (
          <div key={c as string} className="flex min-w-0 flex-1 flex-col gap-1.5 rounded-lg bg-white p-2">
            <span className="text-[9px] font-bold tracking-[0.06em] text-muted uppercase">{c}</span>
            {(items as string[]).map((t, k) => (
              <span key={k} className={cn("block truncate rounded-md px-2 py-1.5 text-[10px] font-medium", c === "Won" ? "bg-tint2" : "bg-paper")}>
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  if (i === 2)
    return (
      <div className="flex flex-col gap-2 rounded-xl bg-white p-3.5">
        <span className="flex text-[11px] font-bold text-muted">
          This week<span className="ml-auto text-[10px] text-brand">Updated Monday</span>
        </span>
        <span className="flex h-[90px] items-end gap-1.5">
          {[30, 42, 38, 55, 61, 70, 84].map((h, k) => (
            <span key={k} className="flex-1 rounded" style={{ height: `${h}%`, background: k === 6 ? "#218A43" : "#DCEFD0" }} />
          ))}
        </span>
      </div>
    );
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-white p-3.5">
      <span className="text-xs font-bold">New delivery</span>
      {["Customer", "Branch", "Delivery date"].map((l) => (
        <span key={l} className="rounded-lg border border-line bg-paper px-2.5 py-1.5 text-[11px] text-muted">
          {l}
        </span>
      ))}
      <span className="w-fit rounded-full bg-brand px-3 py-1 text-[11px] font-bold text-white">Save</span>
    </div>
  );
}
