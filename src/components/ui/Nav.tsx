"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { navLinks, requirementLink } from "@/lib/site";
import { Logo } from "./Logo";

export function Nav({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  const dark = tone === "dark";

  // A modal <dialog>: Esc closes it, focus stays inside, and returns to the menu button after.
  useEffect(() => {
    const d = menu.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="container-x relative z-30 flex items-center gap-6 py-5 md:py-7">
      <Logo tone={dark ? "light" : "dark"} />

      <nav aria-label="Main" className="mx-auto hidden items-center gap-7 lg:flex">
        {navLinks.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative text-[15px] transition-opacity hover:opacity-100",
                dark ? "text-white" : "text-ink",
                active ? "font-bold opacity-100" : "font-medium opacity-75",
                active && (dark ? "text-lime" : "text-brand"),
              )}
            >
              {l.label}
              {active && (
                <span className={cn("absolute -bottom-1.5 left-1/2 h-0.5 w-[18px] -translate-x-1/2 rounded", dark ? "bg-lime" : "bg-brand")} />
              )}
            </Link>
          );
        })}
      </nav>

      <a
        href={requirementLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "ml-auto hidden rounded-full px-5 py-3 text-sm font-bold transition-colors sm:inline-flex lg:ml-0",
          dark ? "bg-lime text-ink hover:bg-[#9ad873]" : "bg-brand text-white hover:bg-gtext",
        )}
      >
        Share your requirement
      </a>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="site-menu"
        className={cn("ml-auto flex h-11 w-11 items-center justify-center rounded-full border sm:ml-0 lg:hidden", dark ? "border-white/30 text-white" : "border-ink/20 text-ink")}
      >
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
          <path d="M1 1h16M1 6h16M1 11h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      <dialog
        ref={menu}
        id="site-menu"
        aria-label="Menu"
        onClose={() => setOpen(false)}
        // any link inside (logo included) closes the menu, even if it points to this page
        onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
        className="bg-brand-gradient m-0 h-dvh max-h-none w-full max-w-none p-0 text-white backdrop:bg-transparent open:flex lg:hidden"
      >
        <div className="flex w-full flex-col px-5 py-5">
          <div className="flex items-center">
            <Logo />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl">
              ×
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-12 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={cn("border-b border-white/10 py-4 text-[28px] font-light tracking-tight", pathname === l.href && "font-bold text-lime")}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={requirementLink()} target="_blank" rel="noopener noreferrer" className="mt-auto rounded-full bg-lime py-4 text-center font-bold text-ink">
            Share your requirement →
          </a>
        </div>
      </dialog>
    </header>
  );
}
