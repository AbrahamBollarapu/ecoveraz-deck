import * as React from "react";

export function ComparisonTable({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
}: {
  leftTitle: string;
  rightTitle: string;
  leftItems: string[];
  rightItems: string[];
}) {
  return (
    <div className="rounded-2xl bg-white/95 p-5 ring-1 ring-ink/10">
      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-medium text-ink">{leftTitle}</div>
          <ul className="mt-3 space-y-2 text-sub">
            {leftItems.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/20" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-medium text-emerald-700">{rightTitle}</div>
          <ul className="mt-3 space-y-2 text-sub">
            {rightItems.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/70" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
