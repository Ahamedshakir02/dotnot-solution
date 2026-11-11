import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Client } from "./data";

export function NoLogo({ factory, className }: { factory?: boolean; className?: string }) {
  return (
    <span aria-hidden className={cn("flex items-center justify-center bg-tint text-gtext", className)}>
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        {factory ? (
          <>
            <path d="M3 21V9l6 4V9l6 4V5h6v16H3z" />
            <path d="M7 17h2M12 17h2M17 17h1" />
          </>
        ) : (
          <>
            <path d="M4 10v10h16V10" />
            <path d="M3 10l2-6h14l2 6c0 1.5-1.3 2.5-2.7 2.5S16 11.5 16 10c0 1.5-1.3 2.5-2.7 2.5S10.7 11.5 10.7 10c0 1.5-1.3 2.5-2.7 2.5S5.3 11.5 5.3 10 3 11.5 3 10z" />
            <path d="M10 20v-4h4v4" />
          </>
        )}
      </svg>
    </span>
  );
}

export function ClientLogo({ c, size, className }: { c: Client; size: number; className?: string }) {
  return c.logo ? (
    <Image src={c.logo} alt="" width={size} height={size} unoptimized className={cn("object-cover", className)} />
  ) : (
    <NoLogo factory={c.factory} className={className} />
  );
}

/** Overlapping round logos, like an avatar stack. */
export function LogoStack({ list, max, size = "h-9 w-9" }: { list: Client[]; max: number; size?: string }) {
  const shown = list.length > max + 1 ? list.slice(0, max) : list;
  const rest = list.length - shown.length;
  return (
    <span className="flex -space-x-2.5">
      {shown.map((c) => (
        <ClientLogo key={c.name} c={c} size={48} className={cn(size, "shrink-0 rounded-full ring-2 ring-white")} />
      ))}
      {rest > 0 && (
        <span className={cn(size, "flex shrink-0 items-center justify-center rounded-full bg-ink text-xs font-extrabold text-white ring-2 ring-white")}>+{rest}</span>
      )}
    </span>
  );
}
