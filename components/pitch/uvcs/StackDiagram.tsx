import * as React from "react";

export type Layer = { title: string; body: string };

export function StackDiagram({
  layers,
  dark = false,
}: {
  layers: Layer[];
  dark?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[820px]">
      <div className="grid gap-3">
        {layers.map((l) => (
          <div
            key={l.title}
            className={`rounded-2xl p-4 ring-1 ${
              dark
                ? "bg-white/5 ring-white/10"
                : "bg-white/95 ring-ink/10"
            }`}
          >
            <div className={`text-sm font-medium ${dark ? "text-white" : "text-ink"}`}>
              {l.title}
            </div>
            <div className={`mt-1 text-sm leading-relaxed ${dark ? "text-white/70" : "text-sub"}`}>
              {l.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
