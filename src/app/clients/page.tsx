import type { Metadata } from "next";
import Link from "next/link";
import { ClientLogo, LogoStack, NoLogo } from "@/components/clients/ClientLogo";
import { IndustryCards } from "@/components/clients/IndustryCards";
import { allClients, industries, stories } from "@/components/clients/data";
import { ShareButton } from "@/components/ui/Button";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { Footer } from "@/components/ui/Footer";
import { Nav } from "@/components/ui/Nav";
import { Ring, Section, SectionHeader, SplitTitle } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Clients",
  description: "15+ growing businesses across retail, manufacturing, restaurants, agencies, healthcare, education and travel, and what changed for them.",
};

export default function ClientsPage() {
  return (
    <>
      <main className="page-in">
        {/* 01 Hero */}
        <section data-hero className="bg-brand-gradient relative overflow-hidden text-white">
          <Ring size={760} className="top-[-180px] right-[-140px] border-lime/10" />
          <Nav tone="dark" />
          <div className="container-x relative grid items-end gap-10 pt-6 pb-14 lg:grid-cols-[1fr_440px] lg:pb-24">
            <div data-stagger className="flex flex-col gap-6">
              <p className="text-[13px] font-medium text-white/55">
                <Link href="/" className="-my-2 inline-block py-2 hover:text-white">
                  Home
                </Link>{" "}
                / Clients
              </p>
              <SplitTitle
                as="h1"
                dark
                title="Businesses we work with."
                accent="we work with."
                className="text-[42px] leading-[46px] md:text-[72px] md:leading-[75px]"
              />
              <p className="max-w-[540px] text-base leading-relaxed text-white/80 md:text-[19px] md:leading-[30px]">
                15+ growing businesses across six industries. Find yours below and see who we work with.
              </p>
              <ShareButton className="self-start" />
            </div>

            <div data-reveal className="flex flex-col gap-5 rounded-3xl border border-white/15 bg-white/[0.06] p-6 md:p-8">
              <LogoStack list={allClients} max={6} size="h-12 w-12 ring-deep" />
              <dl className="grid grid-cols-3 gap-4">
                {[
                  ["15+", "clients"],
                  [String(industries.length), "industries"],
                  [String(stories.length), "client stories"],
                ].map(([n, l]) => (
                  <div key={l} className="flex flex-col gap-1">
                    <dt className="order-2 text-xs font-medium text-white/65 md:text-sm">{l}</dt>
                    <dd className="text-[34px] leading-none font-light tracking-[-0.03em] md:text-[44px]">{n}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 02 Client stories */}
        <Section>
          <SectionHeader overline="Client stories" title="What changed for them." accent="changed for them." />
          <ul data-stagger className="mt-8 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
            {stories.map((s) => (
              <li key={s.client} className="flex flex-col gap-5 rounded-3xl border border-line bg-white p-6 md:p-7">
                <div className="flex items-center gap-3">
                  {s.logo ? (
                    <ClientLogo c={{ name: s.client, logo: s.logo }} size={56} className="h-12 w-12 rounded-xl ring-1 ring-black/5" />
                  ) : (
                    <NoLogo factory className="h-12 w-12 rounded-xl" />
                  )}
                  <span className="flex flex-col">
                    <span className="text-lg leading-6 font-bold">{s.client}</span>
                    <span className="text-[11px] font-semibold tracking-[0.06em] text-brand uppercase">{s.sector}</span>
                  </span>
                </div>
                <div className="rounded-2xl bg-tint p-5">
                  <p className="text-[56px] leading-none font-extrabold tracking-[-0.03em] text-brand">{s.number}</p>
                  <p className="mt-1.5 font-semibold">{s.label}</p>
                </div>
                <p className="text-[15px] leading-6 text-muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 03 By industry */}
        <Section tone="paper">
          <SectionHeader
            overline="By industry"
            title="Find businesses like yours."
            accent="like yours."
            lead="Tap an industry to see the clients in it."
          />
          <div className="mt-8 md:mt-14">
            <IndustryCards />
          </div>
          <p className="mt-5 text-[15px] font-semibold text-muted md:mt-6">…and more.</p>
        </Section>

        <ClosingCta
          title="Have a business like these?"
          accent="like these?"
          lead="Tell us what’s slowing it down. Five minutes on WhatsApp, by text or voice."
        />
      </main>
      <Footer />
    </>
  );
}
