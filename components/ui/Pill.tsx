import clsx from "clsx";

type Tone = "good" | "warn" | "bad" | "neutral";

export function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: Tone }) {
  const c = clsx(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide border",
    tone === "good" && "bg-evz-green/10 border-evz-green/20 text-ink",
    tone === "warn" && "bg-evz-orange/10 border-evz-orange/25 text-ink",
    tone === "bad" && "bg-bad/10 border-bad/25 text-ink",
    tone === "neutral" && "bg-ink/4 border-line text-ink/80"
  );
  return <span className={c}>{children}</span>;
}
