import Link from "next/link";
import { requirementLink, site, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { Ring } from "./Section";

const links = [
  { label: "What we offer", href: "/#offer" },
  { label: "How we differ", href: "/#differ" },
  { label: "Growth Audit", href: "/growth-audit" },
  { label: "Implementation", href: "/implementation" },
  { label: "Sustain", href: "/sustain" },
  { label: "Results", href: "/#results" },
  { label: "Team", href: "/#team" },
];

export function Footer() {
  return (
    <footer data-own-cta className="relative overflow-hidden border-t border-lime/25 bg-forest pt-16 pb-28 text-white md:pt-20 md:pb-10">
      <Ring size={420} className="-top-36 right-[-60px]" />
      <div className="container-x relative">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:gap-12">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-[22px] font-light text-lime">Grow forward.</p>
            <p className="max-w-[340px] text-[15px] leading-6 text-white/70">
              Business architecture for growing businesses. Growth Audit · Implementation · Sustain.
            </p>
            <a
              href={requirementLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit rounded-full bg-lime px-5 py-3 text-[15px] font-bold text-ink hover:bg-[#9ad873]"
            >
              Share your requirement →
            </a>
          </div>

          <FooterCol title="Links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] font-medium text-white/85 hover:text-lime">
                {l.label}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <a href={`mailto:${site.email}`} className="text-[15px] font-medium text-white/85 hover:text-lime">
              {site.email}
            </a>
            <a href={whatsappLink(site.phones.india.wa)} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white/85 hover:text-lime">
              {site.phones.india.label}
            </a>
            <a href={whatsappLink(site.phones.uae.wa)} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white/85 hover:text-lime">
              {site.phones.uae.label}
            </a>
          </FooterCol>

          <FooterCol title="Where we are">
            <address className="text-[15px] leading-6 font-medium not-italic text-white/85">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </FooterCol>
        </div>

        <p aria-hidden className="text-outline-lime mt-14 text-[56px] leading-[0.95] font-extrabold tracking-[-0.05em] whitespace-nowrap select-none sm:text-[110px] lg:text-[150px] xl:text-[178px]">
          Grow forward.
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/15 pt-5 text-[13px] text-white/60 md:flex-row">
          <p>
            © 2026 {site.legalName} · Wherever the work is
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-bold tracking-[0.1em] text-lime uppercase">{title}</p>
      {children}
    </div>
  );
}
