import { cn } from "@/lib/cn";

export function Redacted({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-1 font-extrabold", dark ? "text-white" : "text-brand", className)}>
      ₹
      <span aria-hidden className={cn("inline-block h-[0.55em] w-[2.2em] rounded-full", dark ? "bg-white/30" : "bg-tint2")} />
      <span className="sr-only">amount</span>
    </span>
  );
}
