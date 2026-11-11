import type { Metadata } from "next";
import Link from "next/link";
import { ListeningMap } from "@/components/growth-audit/ListeningMap";
import { ShareButton } from "@/components/ui/Button";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { Footer } from "@/components/ui/Footer";
import { Nav } from "@/components/ui/Nav";
import { PhoneChat, VoiceNote } from "@/components/ui/PhoneChat";
import { Redacted } from "@/components/ui/Redacted";
import { Ring, Section, SectionHeader, SplitTitle } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Growth Audit",
  description:
    "We hear from staff at every level, by voice on WhatsApp, and find what's holding the business back. Every finding comes with a money cost. Findings in about 30 days.",
};

const steps = [
  { t: "A private WhatsApp link", b: "Each person gets their own link. No app, no login." },
  { t: "Answers by voice", b: "In their own language, in their own time." },
  { t: "Findings from every level", b: "Owners, managers and frontline staff, side by side." },
  { t: "A report with a cost on each problem", b: "So you decide what to fix first, on numbers." },
];

export default function GrowthAuditPage() {
  return (
    <>
      <main className="page-in">
        {/* 01 Hero */}
        <section className="bg-brand-gradient relative overflow-hidden text-white">
          <Ring size={760} className="top-[-180px] right-[-140px] border-lime/10" />
          <Nav tone="dark" />
          <div className="container-x relative grid items-center gap-10 pt-6 pb-16 lg:grid-cols-[1fr_600px] lg:gap-8 lg:pb-24">
            <div data-stagger className="flex flex-col gap-6">
              <p className="text-[13px] font-medium text-white/55">
                <Link href="/" className="hover:text-white">Home</Link> / Growth Audit
              </p>
              <SplitTitle
                as="h1"
                dark
                title="We start by listening to the people who do the work."
                accent="the people who do the work."
                className="text-[42px] leading-[46px] md:text-[72px] md:leading-[75px]"
              />
              <p className="max-w-[540px] text-base leading-relaxed text-white/80 md:text-[19px] md:leading-[30px]">
                We hear from staff at every level and find what’s holding the business back. Every finding comes with a money cost.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ShareButton />
                <a href="#interview" className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-white/45 px-6 py-4 text-[15px] font-bold hover:bg-white/10">
                  <span aria-hidden className="text-[11px]">▶</span> See how it works
                </a>
              </div>
              <dl className="mt-2 flex flex-wrap gap-3">
                {[
                  ["Findings in", "about 30 days"],
                  ["We hear", "every level"],
                  ["Answers by", "voice, on WhatsApp"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3">
                    <dt className="text-[11px] font-bold tracking-[0.08em] text-lime uppercase">{k}</dt>
                    <dd className="font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ListeningMap />
          </div>
        </section>

        {/* 02 Everyone, not just the top */}
        <Section tone="paper">
          <SectionHeader
            overline="Why it works"
            title="Most audits hear the top. We hear everyone."
            accent="We hear everyone."
            lead="The people who do the work every day see problems the owner never hears about."
          />
          <div data-stagger className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
            <Pyramid title="A typical audit hears" sub="The top of the business." note="The owner and senior managers." lit={5} />
            <Pyramid dark title="The Growth Audit hears" sub="Every level, through a WhatsApp AI interview." note="Owners, managers and frontline staff alike." lit={15} />
          </div>
        </Section>

        {/* 03 How it works */}
        <Section>
          <SectionHeader overline="How it works" title="Four steps. Nobody fills a form." accent="Nobody fills a form." />
          <ol data-stagger className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
                <div className="flex h-[190px] flex-col justify-center gap-2 bg-paper p-5">
                  <StepVisual i={i} />
                </div>
                <div className="flex flex-col gap-1.5 p-6 pt-5">
                  <span className="text-[13px] font-extrabold text-brand">0{i + 1}</span>
                  <h3 className="text-[19px] leading-6 font-bold">{s.t}</h3>
                  <p className="text-sm leading-[21px] text-muted">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* 04 The interview */}
        <Section id="interview" tone="ink" inner="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-24">
          <Ring size={700} className="top-[-200px] right-[-200px] border-lime/10" />
          <div className="flex flex-col gap-8">
            <SectionHeader
              dark
              overline="The interview"
              title="Our AI advisor asks. Your team talks."
              accent="Your team talks."
              lead="Each person answers on WhatsApp, by voice, in their own language. No meeting room, no forms."
            />
            <ul data-stagger>
              {[
                ["Private link", "Each person answers on their own."],
                ["Voice first", "Talking is easier than typing."],
                ["Own language", "No one has to translate their thoughts."],
                ["Own time", "Answer between work, not instead of it."],
              ].map(([a, b]) => (
                <li key={a} className="flex flex-col gap-1 border-t border-white/12 py-4 sm:flex-row sm:items-center">
                  <span className="flex items-center gap-3.5 text-[17px] font-bold">
                    <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                    {a}
                  </span>
                  <span className="pl-6 text-sm text-white/60 sm:ml-auto sm:pl-0">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <PhoneChat
            title="Dotnot AI advisor"
            subtitle="Growth Audit · private"
            className="float mx-auto h-[640px] w-full max-w-[340px] lg:h-[740px] lg:max-w-none"
            lines={[
              { from: "agent", text: "What slows your work down most in a normal week?" },
              { from: "voice", duration: "0:38" },
              { from: "agent", text: "Thanks. Who do you wait on most to get things done?" },
              { from: "voice", duration: "0:22" },
              { from: "agent", text: "If you could change one thing tomorrow, what would it be?" },
              { from: "recording" },
            ]}
          />
        </Section>

        {/* 05 Every problem has a price */}
        <Section tone="paper" inner="grid items-center gap-12 lg:grid-cols-[440px_1fr] lg:gap-[72px]">
          <div className="flex flex-col gap-6">
            <SectionHeader
              overline="What you get"
              title="Every problem has a price."
              accent="has a price."
              lead="Findings come with a time and money cost, so the owner decides on numbers."
            />
            <div className="flex flex-col gap-2.5 rounded-[20px] border border-line bg-white p-5">
              <p className="text-xs font-bold tracking-[0.08em] text-brand uppercase">What to fix first</p>
              {[100, 73, 46, 27].map((w, i) => (
                <div key={w} className="flex items-center gap-3">
                  <span className="w-3 text-[13px] font-extrabold text-muted">{i + 1}</span>
                  <span className="h-3 rounded-full" style={{ width: `${w * 0.7}%`, background: i ? "#DCEFD0" : "#218A43" }} />
                  <Redacted className="ml-auto text-[13px]" />
                </div>
              ))}
              <p className="text-[11px] font-medium text-muted">Sorted by cost a month. Illustrative.</p>
            </div>
          </div>
          <div data-reveal className="relative mx-auto w-full max-w-[520px] lg:h-[440px]">
            <FindingCard className="absolute top-8 left-6 hidden -rotate-6 opacity-90 lg:flex" />
            <FindingCard className="absolute top-2 left-16 hidden rotate-[4deg] opacity-90 lg:flex" />
            <FindingCard front className="relative lg:absolute lg:top-6 lg:left-10" />
          </div>
        </Section>

        {/* 06 About 30 days */}
        <Section>
          <SectionHeader
            overline="Timing"
            title="Findings in about 30 days."
            accent="about 30 days."
            lead="Indicative. The exact plan depends on team size and branches."
          />
          <ol data-stagger className="relative mt-12 grid gap-8 md:mt-16 md:grid-cols-4 md:gap-0">
            <span aria-hidden style={{ opacity: 1, transform: "none" }} className="absolute top-[13px] left-[13px] hidden h-2.5 w-[calc(100%-26px)] rounded-full bg-gradient-to-r from-lime to-brand md:block" />
            <span aria-hidden style={{ opacity: 1, transform: "none" }} className="absolute top-0 bottom-0 left-[13px] w-0.5 bg-gradient-to-b from-lime to-brand md:hidden" />
            {[
              ["Day 1", "Links go out"],
              ["", "Voice answers come in"],
              ["", "Findings from every level"],
              ["About day 30", "Report with a cost on each problem"],
            ].map(([d, t], i) => (
              <li key={t} className={cn("relative flex gap-4 md:flex-col md:gap-3", i === 3 && "md:items-end md:text-right")}>
                <span
                  className={cn(
                    "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-brand text-[13px] font-extrabold",
                    i === 3 ? "bg-lime text-ink" : "bg-white text-brand",
                  )}
                >
                  {i + 1}
                </span>
                <span className="flex flex-col gap-1">
                  {d && <span className="text-xs font-bold tracking-[0.08em] text-brand uppercase">{d}</span>}
                  <span className="text-base font-bold md:max-w-[220px]">{t}</span>
                </span>
              </li>
            ))}
          </ol>
        </Section>

        {/* 07 Where it leads */}
        <Section tone="paper">
          <SectionHeader overline="After the audit" title="The findings are yours. Then we build." accent="Then we build." />
          <ol data-stagger className="mt-10 grid items-stretch gap-4 md:mt-14 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <li className="bg-brand-gradient flex h-full flex-col gap-2 rounded-3xl p-7 text-white">
              <span className="w-fit rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">● You are here</span>
              <span className="text-[28px] font-extrabold tracking-[-0.03em]">Growth Audit</span>
              <span className="text-[15px] text-white/80">Findings with a money cost on each problem.</span>
            </li>
            <Arrow />
            <PathCard href="/implementation" name="Implementation" text="We design and build the fix with your team." />
            <Arrow />
            <PathCard href="/sustain" name="Sustain" text="We stay, so the gains keep growing." />
          </ol>
        </Section>

        <ClosingCta
          title="Start with the Growth Audit."
          accent="the Growth Audit."
          lead="Tell us what’s slowing your business down. Five minutes on WhatsApp, by text or voice."
        />
      </main>
      <Footer />
    </>
  );
}

function Pyramid({ title, sub, note, lit, dark }: { title: string; sub: string; note: string; lit: number; dark?: boolean }) {
  const levels = [1, 4, 10];
  let k = 0;
  return (
    <div className={cn("flex flex-col gap-4 rounded-[28px] p-7 md:p-9", dark ? "bg-brand-gradient text-white" : "border border-line bg-white")}>
      <p className={cn("text-[13px] font-bold tracking-[0.08em] uppercase", dark ? "text-lime" : "text-muted")}>{title}</p>
      <p className={cn("text-[22px] font-bold tracking-[-0.01em] md:text-2xl", dark ? "text-white" : "text-ink")}>{sub}</p>
      <div className="flex flex-col items-center gap-6 py-6" aria-hidden>
        {levels.map((n, li) => (
          <div key={li} className="flex gap-3 md:gap-4">
            {Array.from({ length: n }).map((_, i) => {
              const on = k++ < lit;
              const size = li === 0 ? 30 : li === 1 ? 24 : 18;
              return (
                <span
                  key={i}
                  className="rounded-full"
                  style={{ width: size, height: size, background: on ? (dark ? "#86CC59" : "#218A43") : "#DADFDA" }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <p className={cn("text-[15px] font-semibold", dark ? "text-white/85" : "text-muted")}>{note}</p>
    </div>
  );
}

function StepVisual({ i }: { i: number }) {
  if (i === 0)
    return (
      <div className="flex flex-col gap-1.5 rounded-2xl rounded-tl-sm bg-white p-3.5">
        <span className="text-[11px] font-bold text-brand">Dotnot · Growth Audit</span>
        <span className="text-xs leading-[17px]">Hi, your team is improving how work runs. Your answers help. Tap to start:</span>
        <span className="w-fit rounded-lg bg-tint px-2.5 py-1 text-[11px] font-bold text-gtext">Your private link</span>
      </div>
    );
  if (i === 1)
    return (
      <div className="flex flex-col items-end gap-2">
        <VoiceNote duration="0:31" compact />
        <VoiceNote duration="0:18" compact />
        <VoiceNote duration="0:47" compact />
      </div>
    );
  if (i === 2)
    return (
      <div className="flex flex-col gap-2.5">
        {[
          ["Owners", 20],
          ["Managers", 45],
          ["Frontline", 100],
        ].map(([l, w]) => (
          <div key={l} className="flex items-center gap-2.5">
            <span className="w-[70px] text-[11px] font-bold text-muted">{l}</span>
            <span className="h-3.5 rounded-full" style={{ width: `${(w as number) * 0.55}%`, background: l === "Frontline" ? "#218A43" : "#DCEFD0" }} />
          </div>
        ))}
        <span className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Illustrative</span>
      </div>
    );
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-line bg-white p-3.5">
      {["Follow-ups by branch", "Month-end numbers", "Unused software"].map((t) => (
        <div key={t} className="flex items-center gap-2">
          <span className="truncate text-[11px] font-medium">{t}</span>
          <Redacted className="ml-auto shrink-0 text-xs" />
        </div>
      ))}
    </div>
  );
}

function FindingCard({ front, className }: { front?: boolean; className?: string }) {
  return (
    <div
      aria-hidden={!front || undefined}
      className={cn(
        "w-full max-w-[500px] flex-col gap-4 rounded-3xl border border-line bg-white p-6 md:p-7",
        front ? "flex shadow-[0_24px_50px_rgba(13,51,26,0.14)]" : "shadow-[0_10px_24px_rgba(13,51,26,0.06)]",
        className,
      )}
    >
      <div className="flex items-center">
        <span className="text-xs font-bold tracking-[0.08em] text-brand uppercase">Example finding</span>
      </div>
      <p className="text-[22px] font-extrabold tracking-[-0.02em] md:text-[26px]">Every branch follows up enquiries its own way.</p>
      {[
        ["Where it shows up", "Sales, across branches"],
        ["Heard from", "Sales staff and branch managers"],
      ].map(([k, v]) => (
        <div key={k} className="flex border-t border-line pt-2.5 text-sm">
          <span className="text-muted">{k}</span>
          <span className="ml-auto font-bold">{v}</span>
        </div>
      ))}
      <div className="flex items-center rounded-2xl bg-deep px-5 py-4">
        <span className="text-xs font-bold tracking-[0.06em] text-lime uppercase">What it costs a month</span>
        <span className="ml-auto text-base font-bold text-white">Priced in the report</span>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <li aria-hidden className="flex justify-center text-[28px] font-bold text-brand md:px-1">
      <span className="rotate-90 md:rotate-0">→</span>
    </li>
  );
}

function PathCard({ href, name, text }: { href: string; name: string; text: string }) {
  return (
    <li className="h-full">
      <Link href={href} className="flex h-full flex-col gap-2 rounded-3xl border border-line bg-white p-7 transition-colors hover:border-brand">
        <span className="text-[28px] font-extrabold tracking-[-0.03em]">{name}</span>
        <span className="text-[15px] text-muted">{text}</span>
        <span className="mt-auto text-sm font-bold text-brand">Read more →</span>
      </Link>
    </li>
  );
}
