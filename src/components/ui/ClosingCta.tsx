import { ShareButton } from "./Button";
import { Ring, SplitTitle } from "./Section";

export function ClosingCta({ title, accent, lead }: { title: string; accent: string; lead: string }) {
  return (
    <section className="bg-brand-gradient relative overflow-hidden py-20 text-white md:py-[120px]">
      <Ring size={900} className="top-[-300px] left-1/2 -translate-x-1/2 border-lime/10" />
      <div data-stagger className="container-x relative flex flex-col items-center gap-6 text-center">
        <SplitTitle
          dark
          title={title}
          accent={accent}
          className="max-w-[900px] text-[36px] leading-[42px] md:text-[60px] md:leading-[66px]"
        />
        <p className="max-w-[620px] text-base text-white/80 md:text-lg">{lead}</p>
        <ShareButton />
      </div>
    </section>
  );
}
