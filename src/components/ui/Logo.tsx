import Link from "next/link";
import { cn } from "@/lib/cn";
import { LOGO } from "./logo-paths";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const onDark = tone === "light";
  return (
    <Link href="/" aria-label="Dotnot home" className={cn("inline-flex items-center", className)}>
      <svg viewBox={`0 0 ${LOGO.width} ${LOGO.height}`} className="h-7 w-auto md:h-8" aria-hidden>
        <path fill={onDark ? "#a0a0a0" : "#c9cfcb"} fillRule="evenodd" d={LOGO.back} />
        <path fill={onDark ? "#ffffff" : "#218a43"} fillRule="evenodd" d={LOGO.front} />
        <path transform={`translate(${LOGO.markWidth} 0)`} fill={onDark ? "#ffffff" : "#101010"} fillRule="evenodd" d={LOGO.word} />
      </svg>
    </Link>
  );
}
