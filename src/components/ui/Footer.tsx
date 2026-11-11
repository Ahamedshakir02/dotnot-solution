import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { Ring } from "./Section";

const links = [
  { label: "What we offer", href: "/#offer" },
  { label: "How we differ", href: "/#differ" },
  { label: "Growth Audit", href: "/growth-audit" },
  { label: "Implementation", href: "/implementation" },
  { label: "Sustain", href: "/sustain" },
  { label: "Clients", href: "/clients" },
  { label: "Results", href: "/#results" },
  { label: "Team", href: "/#team" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-lime/25 bg-forest pt-12 pb-28 md:pb-8 text-white md:pt-16 md:pb-8">
      <Ring size={420} className="-top-36 right-[-60px]" />
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-[1.4fr_1.2fr_1fr_1.2fr] md:gap-10">
          <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <Logo />
            <p className="max-w-[300px] text-[15px] leading-6 text-white/70">
              Business architecture for growing businesses. Growth Audit · Implementation · Sustain.
            </p>
          </div>

          <FooterCol title="Links" className="col-span-2 md:col-span-1">
            <div className="grid grid-cols-2 gap-x-6">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="py-1.5 text-[15px] font-medium text-white/85 hover:text-lime">
                  {l.label}
                </Link>
              ))}
            </div>
          </FooterCol>

          <FooterCol title="Contact">
            <a href={`mailto:${site.email}`} className="py-1 text-[14px] font-medium break-all text-white/85 hover:text-lime md:text-[15px]">
              {site.email}
            </a>
            <a href={whatsappLink(site.phones.india.wa)} target="_blank" rel="noopener noreferrer" className="py-1 text-[14px] font-medium text-white/85 hover:text-lime md:text-[15px]">
              {site.phones.india.label}
            </a>
            <a href={whatsappLink(site.phones.uae.wa)} target="_blank" rel="noopener noreferrer" className="py-1 text-[14px] font-medium text-white/85 hover:text-lime md:text-[15px]">
              {site.phones.uae.label}
            </a>
          </FooterCol>

          <FooterCol title="Where we are">
            <address className="text-[14px] leading-[22px] font-medium not-italic text-white/85 md:text-[15px] md:leading-6">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </FooterCol>
        </div>

        <p aria-hidden className="text-outline-lime mt-10 text-[44px] leading-[0.95] font-extrabold tracking-[-0.05em] whitespace-nowrap select-none sm:text-[80px] lg:text-[112px] xl:text-[128px]">
          Grow forward.
        </p>

        <p className="mt-5 border-t border-white/15 pt-4 text-[13px] text-white/60">© 2026 {site.legalName} · Wherever the work is</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`flex flex-col gap-1 ${className ?? ""}`}>
      <p className="text-xs font-bold tracking-[0.1em] text-lime uppercase">{title}</p>
      {children}
    </div>
  );
}
