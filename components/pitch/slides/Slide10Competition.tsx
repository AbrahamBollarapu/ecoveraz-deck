"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export function Slide10Competition() {
  const [focus, setFocus] = React.useState<string>("EcoVeraZ");

  return (
    <div className="grid gap-4 md:grid-cols-12 h-full">
      <Card
        className="md:col-span-7 h-full"
        title="Why we win: end-to-end verifiable truth"
        desc="Positioning: measurement depth × legal defensibility."
      >
        <div className="mt-4 rounded-2xl border border-line bg-bg p-4 h-[420px]">
          <Matrix2x2 focus={focus} />
        </div>
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <Pill tone="good">EcoVeraZ = top-right</Pill>
          <div className="text-sm text-sub">Others optimize reporting. EcoVeraZ verifies reality.</div>
        </div>
      </Card>

      <Card className="md:col-span-5 h-full" title="Capability comparison" desc="High-level view (click to focus).">
        <div className="mt-4 space-y-2">
          {[
            { name: "EcoVeraZ", note: "Physical measurement + cryptographic proof in one system." },
            { name: "ESG Software", note: "Dashboards + reporting (little measurement depth)." },
            { name: "Auditors", note: "Assurance after-the-fact; not real-time." },
            { name: "IoT Platforms", note: "Measurement but not compliance + evidence + proof." },
          ].map((x) => (
            <button
              key={x.name}
              onClick={() => setFocus(x.name)}
              className={`w-full text-left rounded-2xl border px-4 py-3 transition ${
                focus === x.name
                  ? "border-evz-green bg-evz-green/10"
                  : "border-line bg-surface hover:bg-inksurface/60"
              }`}
              type="button"
            >
              <div className="text-sm font-semibold">{x.name}</div>
              <div className="mt-1 text-sm text-sub">{x.note}</div>
            </button>
          ))}
        </div>

        <div className="mt-3 rounded-2xl border border-line bg-surface p-4">
          <div className="text-xs font-mono text-sub">Axes</div>
          <div className="mt-2 text-sm text-sub">
            <div>
              <span className="font-semibold text-ink">X:</span> Physical measurement depth
            </div>
            <div className="mt-1">
              <span className="font-semibold text-ink">Y:</span> Verification & legal defensibility
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Matrix2x2({ focus }: { focus: string }) {
  const items = [
    { name: "ESG Software", x: 22, y: 28 },
    { name: "Auditors", x: 28, y: 72 },
    { name: "IoT Platforms", x: 72, y: 32 },
    { name: "EcoVeraZ", x: 78, y: 80 },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className="border-r border-b border-line" />
        <div className="border-b border-line" />
        <div className="border-r border-line" />
        <div />
      </div>

      {/* Axis labels */}
      <div className="absolute left-3 top-3 text-xs font-mono text-sub">High verification</div>
      <div className="absolute left-3 bottom-3 text-xs font-mono text-sub">Low verification</div>
      <div className="absolute right-3 bottom-3 text-xs font-mono text-sub">High measurement</div>
      <div className="absolute left-3 bottom-3 translate-y-[-18px] text-xs font-mono text-sub">Low measurement</div>

      {/* Quadrant notes */}
      <div className="absolute left-4 top-10 text-xs text-sub">Assurance only</div>
      <div className="absolute left-4 bottom-10 text-xs text-sub">Reporting</div>
      <div className="absolute right-4 bottom-10 text-xs text-sub text-right">Sensors only</div>
      <div className="absolute right-4 top-10 text-xs text-sub text-right">Verified truth</div>

      {items.map((it) => {
        const active = it.name === focus;
        return (
          <div
            key={it.name}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-3 py-2 text-sm ${
              active ? "border-evz-green bg-evz-green/15" : "border-line bg-surface"
            }`}
            style={{ left: `${it.x}%`, top: `${100 - it.y}%` }}
          >
            <div className="font-semibold">{it.name}</div>
          </div>
        );
      })}
    </div>
  );
}
