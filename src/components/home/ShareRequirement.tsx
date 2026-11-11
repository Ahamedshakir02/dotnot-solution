import { ShareButton } from "@/components/ui/Button";
import { QrCode } from "@/components/ui/QrCode";
import { Ring, Section, SectionHeader } from "@/components/ui/Section";
import { requirementLink, site, whatsappLink } from "@/lib/site";
import { ChatDemo } from "./ChatDemo";

const next = [
  ["You share", "About five minutes, text or voice."],
  ["We review", "Our team checks the requirement and fit."],
  ["Next step", "A discovery call, a Growth Audit demo, or a note to stay in touch."],
];

export function ShareRequirement() {
  return (
    <Section id="share" tone="brand" className="md:py-[120px]" inner="grid items-center gap-12 lg:grid-cols-[1fr_520px] lg:gap-[72px]">
      <Ring size={460} className="bottom-[-160px] left-[-160px]" />
      <Ring size={700} color="white" className="top-[-260px] right-[-200px]" />

      <div className="flex flex-col gap-8">
        <SectionHeader
          dark
          overline="Share your requirement"
          title="Tell us what’s slowing your business down."
          accent="slowing your business down."
          lead="Our agent asks a few questions, by text or voice, in your own language. It takes about five minutes."
        />
        <ShareButton className="self-start" />

        <div className="flex flex-col gap-4">
          <p className="text-xs font-bold tracking-[0.1em] text-lime uppercase">What happens next</p>
          <ol data-stagger className="grid sm:grid-cols-3">
            {next.map(([t, b], i) => (
              <li key={t} className="relative flex gap-4 pb-6 last:pb-0 sm:flex-col sm:gap-2.5 sm:pb-0">
                {/* phone: steps joined by a vertical line */}
                {i < 2 && <span aria-hidden className="absolute top-[34px] bottom-0 left-4 w-0.5 bg-lime/45 sm:hidden" />}
                <span className="flex items-center">
                  <span
                    className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                      i === 2 ? "bg-lime text-ink" : "border-[1.5px] border-lime/60 bg-white/10 text-lime"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {i < 2 && <span className="hidden h-0.5 flex-1 bg-lime/45 sm:block" />}
                </span>
                <span className="pt-1.5 sm:pt-0 sm:pr-4">
                  <span className="block font-bold">{t}</span>
                  <span className="block text-[13px] leading-[19px] text-white/70">{b}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal className="flex items-center gap-4 rounded-[18px] border border-white/15 bg-white/[0.06] p-4">
          <span className="hidden sm:block">
            <QrCode value={requirementLink()} size={88} label="QR code that opens Dotnot's agent on WhatsApp" />
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-bold">
              <span className="sm:hidden">Prefer to talk?</span>
              <span className="hidden sm:inline">On a computer? Scan to continue on your phone.</span>
            </p>
            <ul className="flex flex-wrap gap-2 text-xs font-semibold">
              <li>
                <a href={whatsappLink(site.phones.india.wa)} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20">
                  WhatsApp {site.phones.india.label}
                </a>
              </li>
              <li>
                <a href={whatsappLink(site.phones.uae.wa)} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20">
                  WhatsApp {site.phones.uae.label}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="block rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/20">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ChatDemo />
    </Section>
  );
}
