import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const onDark = tone === "light";
  return (
    <Link href="/" aria-label="Dotnot home" className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className={cn(
          "flex h-[22px] w-10 items-center justify-center rounded-full",
          onDark ? "bg-white" : "bg-ink",
        )}
      >
        <span className={cn("h-2.5 w-7 rounded-full", onDark ? "bg-deep" : "bg-lime")} />
      </span>
      <span
        className={cn(
          "text-[22px] font-bold tracking-[-0.02em] md:text-[26px]",
          onDark ? "text-white" : "text-ink",
        )}
      >
        Dotnot
      </span>
    </Link>
  );
}
