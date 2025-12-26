import * as React from "react";

export type Step = { title: string; body: string };

export function StepRow({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map((s) => (
        <div key={s.title} className="rounded-2xl bg-white/95 p-4 ring-1 ring-ink/10">
          <div className="text-sm font-medium text-ink">{s.title}</div>
          <div className="mt-2 text-sm leading-relaxed text-sub">{s.body}</div>
        </div>
      ))}
    </div>
  );
}
