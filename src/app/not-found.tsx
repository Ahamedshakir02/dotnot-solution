import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "@/components/ui/Button";
import { Footer } from "@/components/ui/Footer";
import { Nav } from "@/components/ui/Nav";
import { Ring, SplitTitle } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <main>
        <section data-hero className="bg-brand-gradient relative overflow-hidden text-white">
          <Ring size={760} className="top-[-180px] right-[-140px] border-lime/10" />
          <Nav tone="dark" />
          <div className="container-x relative flex flex-col gap-6 pt-10 pb-20 md:pt-16 md:pb-32">
            <p className="text-[13px] font-semibold tracking-[0.12em] text-lime uppercase">404 · Page not found</p>
            <SplitTitle
              as="h1"
              dark
              title="This page doesn’t exist. The rest of the site does."
              accent="The rest of the site does."
              className="max-w-[900px] text-[40px] leading-[44px] md:text-[68px] md:leading-[72px]"
            />
            <p className="max-w-[520px] text-base leading-relaxed text-white/80 md:text-lg">
              The link may be old or mistyped. Start from the home page, or tell us what you were looking for.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-white/45 px-6 py-4 text-[15px] font-bold transition-colors hover:bg-white/10"
              >
                ← Back to home
              </Link>
              <ShareButton />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
