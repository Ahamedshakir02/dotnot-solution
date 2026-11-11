import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { requirementLink } from "@/lib/site";

type Variant = "lime" | "green" | "ghost-light" | "ghost-dark";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-[#9ad873]",
  green: "bg-brand text-white hover:bg-gtext",
  "ghost-light": "border-[1.5px] border-white/45 text-white hover:bg-white/10",
  "ghost-dark": "border-[1.5px] border-ink/20 text-ink hover:bg-ink/5",
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[15px] font-bold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime md:text-base";

export function ButtonLink({
  href,
  variant = "lime",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

/** The page's one action. Opens WhatsApp in a new tab. */
export function ShareButton({
  label = "Share your requirement",
  variant = "lime",
  message,
  tag = true,
  className,
}: {
  label?: string;
  variant?: Variant;
  message?: string;
  tag?: boolean;
  className?: string;
}) {
  const onLime = variant === "lime";
  return (
    <a
      href={requirementLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {label}
      <span aria-hidden>→</span>
      {tag && (
        <span
          className={cn(
            "rounded-full px-2 py-1 text-[10px] font-bold",
            onLime ? "bg-deep text-lime" : "bg-white/20 text-white",
            variant === "ghost-dark" && "bg-tint text-gtext",
          )}
        >
          WhatsApp
        </span>
      )}
    </a>
  );
}
