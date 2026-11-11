"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// data-reveal, data-stagger, data-draw (styles in globals.css, first run in motion-boot.ts)
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    (window as Window & { __dnMotion?: () => void }).__dnMotion?.();
  }, [pathname]);

  return null;
}
