import * as React from "react";

type Tone = "neutral" | "risk" | "trust";

export function MetricBlock({
  value,
  label,
  tone = "neutral",
}: {
  value: string;
  label: string;
  tone?: Tone;
}) {
  const ring =
    tone === "risk"
      ? "ring-orange-500/60"
      : tone === "trust"
      ? "ring-emerald-600/50"
      : "ring-ink/10";

  const valueCls =
    tone === "risk"
      ? "text-orange-600"
      : tone === "trust"
      ? "text-emerald-600"
      : "text-ink";

  return (
    <div className={`rounded-2xl bg-white/95 p-5 ring-1 ${ring}`}>
      <div className={`text-3xl font-semibold ${valueCls}`}>{value}</div>
      <div className="mt-2 text-sm leading-relaxed text-sub">{label}</div>
    </div>
  );
}
