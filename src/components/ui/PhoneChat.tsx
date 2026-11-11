import { cn } from "@/lib/cn";

export type ChatLine =
  | { from: "agent"; text: string }
  | { from: "user"; text: string }
  | { from: "voice"; duration: string; transcript?: string }
  | { from: "recording" };

const WAVE = [6, 12, 18, 9, 20, 14, 7, 16, 11, 6, 14, 10, 18, 8];

export function VoiceNote({ duration, compact }: { duration: string; compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl rounded-tr-sm bg-deep px-3 py-2.5">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime text-[9px] text-ink">▶</span>
      <span className="flex items-center gap-[2px]" aria-hidden>
        {(compact ? WAVE.slice(0, 9) : WAVE).map((h, i) => (
          <span key={i} className="w-[2px] rounded bg-lime" style={{ height: h }} />
        ))}
      </span>
      <span className="text-[10px] font-semibold text-white">{duration}</span>
      <span className="sr-only">Voice note, {duration}</span>
    </span>
  );
}

export function ChatBubbles({ lines, size = "md" }: { lines: ChatLine[]; size?: "sm" | "md" }) {
  const text = size === "sm" ? "text-[12px] leading-[17px]" : "text-[13px] leading-[18px]";
  return (
    <>
      {lines.map((l, i) => {
        if (l.from === "agent")
          return (
            <div key={i} className="flex">
              <p className={cn("max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3 py-2.5 text-ink", text)}>{l.text}</p>
            </div>
          );
        if (l.from === "user")
          return (
            <div key={i} className="flex justify-end">
              <p className={cn("max-w-[78%] rounded-2xl rounded-tr-sm bg-deep px-3 py-2.5 text-white", text)}>{l.text}</p>
            </div>
          );
        if (l.from === "voice")
          return (
            <div key={i} className="flex justify-end">
              <VoiceNote duration={l.duration} compact={size === "sm"} />
            </div>
          );
        return (
          <div key={i} className="flex">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[11px] font-medium text-muted">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e5484d]" />
              Recording a voice note…
            </span>
          </div>
        );
      })}
    </>
  );
}

/** A phone mock showing a WhatsApp-style conversation with Dotnot's AI advisor. */
export function PhoneChat({
  title = "Dotnot Growth Audit",
  subtitle = "your private link",
  lines,
  className,
  size = "md",
}: {
  title?: string;
  subtitle?: string;
  lines: ChatLine[];
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={cn(
        "rounded-[44px] border-2 border-white/20 bg-black p-3 shadow-[0_0_80px_rgba(134,204,89,0.18)]",
        className,
      )}
      role="img"
      aria-label="Sample WhatsApp conversation with Dotnot's AI advisor"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-[32px] bg-chat">
        <div className="flex items-center gap-2.5 bg-deep px-4 py-3.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-[13px] font-extrabold text-ink">D</span>
          <span className="flex flex-col leading-tight">
            <span className="text-[13px] font-bold text-white">{title}</span>
            <span className="text-[11px] text-white/70">{subtitle}</span>
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-2.5 px-3 py-4">
          <ChatBubbles lines={lines} size={size} />
        </div>
      </div>
    </div>
  );
}
