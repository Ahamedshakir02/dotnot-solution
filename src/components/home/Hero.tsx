import { Nav } from "@/components/ui/Nav";
import { ShareButton } from "@/components/ui/Button";
import { Ring } from "@/components/ui/Section";
import { GrowthCurve } from "./GrowthCurve";

const stats = [
  { value: "15+", label: "clients" },
  { value: "10M+", label: "profit impact" },
  { value: "6", label: "industries" },
  { value: "Any language", label: "voice or text" },
];

export function Hero() {
  return (
    <section data-hero className="bg-brand-gradient relative overflow-hidden text-white">
      <Ring size={640} className="top-10 right-[-80px]" />
      <Ring size={300} color="white" className="top-[560px] left-[45%]" />
      <Nav tone="dark" />

      <div className="container-x relative grid items-center gap-12 pt-6 pb-12 md:pt-10 lg:grid-cols-[1fr_520px] lg:gap-14">
        <div data-stagger className="flex flex-col gap-6 md:gap-7">
          <h1 className="text-[42px] leading-[46px] font-light tracking-[-0.035em] md:text-[74px] md:leading-[76px]">
            Build a business that <span className="font-extrabold text-lime">works better</span>{" "}
            <span className="font-extrabold">as it grows.</span>
          </h1>
          <p className="max-w-[470px] text-base leading-[25px] text-white/80 md:text-lg md:leading-7">
            We find what’s slowing your business down, put a cost on it, and build the fix with your team.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ShareButton />
            <a
              href="#share"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-white/45 px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              <span aria-hidden className="text-[11px]">▶</span> See how our agent works
            </a>
          </div>
        </div>

        <GrowthCurve />
      </div>

      <div className="container-x relative pb-12 md:pb-16">
        <dl data-stagger className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6 md:grid-cols-4 md:pt-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-[26px] font-light tracking-[-0.04em] md:text-[30px]">{s.value}</dd>
              <dd className="text-[12px] font-medium text-white/65 md:text-[13px]">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
