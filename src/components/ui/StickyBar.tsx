import { requirementLink } from "@/lib/site";

export function StickyBar() {
  return (
    <a
      href={requirementLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-ink py-2.5 pr-2.5 pl-5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] md:hidden"
    >
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] font-medium text-white/70">5 minutes, text or voice</span>
        <span className="text-sm font-bold">Tell us what’s slowing you</span>
      </span>
      <span className="ml-auto rounded-full bg-lime px-4 py-3 text-sm font-bold text-ink">Share →</span>
    </a>
  );
}
