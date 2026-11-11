import Link from "next/link";
import { PhoneChat } from "@/components/ui/PhoneChat";
import { Ring, Section, SectionHeader } from "@/components/ui/Section";

const steps = [
  ["Personal WhatsApp link", "Each person gets their own link."],
  ["Voice answers", "In their own language, in their own time."],
  ["Findings from every level", "Owners, managers and frontline staff."],
  ["Report with a cost on each problem", "So you decide on numbers."],
];

export function GrowthAuditTeaser() {
  return (
    <Section id="growth-audit" tone="brand" inner="grid items-center gap-12 lg:grid-cols-[360px_1fr] lg:gap-20">
      <Ring size={600} className="-top-[220px] left-[-160px]" />
      <PhoneChat
        className="float mx-auto h-[470px] w-full max-w-[300px] sm:h-[600px] sm:max-w-[320px] lg:h-[680px] lg:max-w-none"
        lines={[
          { from: "agent", text: "Hi. What slows your work down most in a normal week?" },
          { from: "voice", duration: "0:31" },
          { from: "agent", text: "Thanks. Who do you wait on most?" },
          { from: "voice", duration: "0:22" },
          { from: "agent", text: "If you could change one thing tomorrow, what would it be?" },
          { from: "voice", duration: "0:44" },
          { from: "recording" },
        ]}
      />
      <div className="order-first flex flex-col gap-8 lg:order-none">
        <SectionHeader
          dark
          overline="The Growth Audit, up close"
          title="We start by listening to the people who do the work."
          accent="the people who do the work."
        />
        <ol data-stagger>
          {steps.map(([t, b], i) => (
            <li key={t} className="flex items-center gap-5 border-t border-white/12 py-4">
              <span className="text-[22px] font-extrabold text-lime">0{i + 1}</span>
              <span className="flex flex-col">
                <span className="text-[17px] font-bold md:text-lg">{t}</span>
                <span className="text-sm text-white/70">{b}</span>
              </span>
            </li>
          ))}
        </ol>
        <Link href="/growth-audit" className="-my-2 w-fit py-2 text-[15px] font-bold text-lime hover:underline">
          How the Growth Audit works →
        </Link>
      </div>
    </Section>
  );
}
