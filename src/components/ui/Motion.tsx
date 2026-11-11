"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// data-reveal, data-stagger, data-draw (styles in globals.css, first run in motion-boot.ts)
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    // one frame after React has started, so line drawings get a free main thread
    const id = requestAnimationFrame(() => (window as Window & { __dnMotion?: () => void }).__dnMotion?.());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
