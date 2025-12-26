"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

type Example = { name: string; detail: string };
const EXAMPLES: Example[] = [
  { name: "DWS", detail: "Example: DWS → $25M fines for ESG misreporting" },
  { name: "BP", detail: "BP: $60B+ in environmental fines" },
  { name: "Wells Fargo", detail: "Wells Fargo: $10B+ in governance penalties" },
];

export function Slide2Problem() {
  const [rev, setRev] = React.useState(1000); // $M revenue
  const [pct, setPct] = React.useState(5);
  const penalty = Math.round(rev * (pct / 100) * 10) / 10;

  const [hover, setHover] = React.useState<Example | null>(null);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="1) Manual & Unverifiable" desc="Current ESG audits take 6–9 months.">
        <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
          <li>Rely on self-reported, spreadsheet data</li>
          <li>Impossible to verify in real-time</li>
          <li>Long audit cycles delay remediation</li>
        </ul>
        <div className="mt-4 flex gap-2 flex-wrap">
          <Pill tone="bad">High risk</Pill>
          <Pill tone="warn">Slow</Pill>
          <Pill tone="neutral">Unverifiable</Pill>
        </div>
      </Card>

      <Card
        title="2) Regulatory Penalties Skyrocket"
        desc="1–5% revenue penalties for data tampering; severe cases 10%+ + criminal liability."
      >
        <div className="mt-4 rounded-xl border border-line bg-bg p-4">
          <div className="text-sm font-semibold">Animated Penalty Calculator (scaffold)</div>
          <div className="mt-2 text-xs text-sub">Revenue (USD, millions)</div>
          <input
            className="mt-2 w-full accent-evz-orange"
            type="range"
            min={100}
            max={10000}
            step={50}
            value={rev}
            onChange={(e) => setRev(parseInt(e.target.value, 10))}
          />
          <div className="mt-1 text-sm text-sub font-mono">${rev}M</div>

          <div className="mt-3 text-xs text-sub">Penalty %</div>
          <input
            className="mt-2 w-full accent-evz-orange"
            type="range"
            min={1}
            max={10}
            step={1}
            value={pct}
            onChange={(e) => setPct(parseInt(e.target.value, 10))}
          />
          <div className="mt-1 text-sm text-sub font-mono">{pct}%</div>

          <div className="mt-4 flex items-end gap-2">
            <div className="text-3xl font-bold text-evz-orange">${penalty}M</div>
            <div className="text-sm text-sub pb-1">estimated exposure</div>
          </div>
        </div>
      </Card>

      <Card title="3) Financial Risk > Compliance Cost" desc="ESG failure is now a balance sheet liability.">
        <div className="mt-4 grid gap-2">
          {EXAMPLES.map((x) => (
            <button
              key={x.name}
              className="text-left rounded-xl border border-line bg-bg px-4 py-3 hover:bg-ink/5 transition"
              onMouseEnter={() => setHover(x)}
              onMouseLeave={() => setHover(null)}
              type="button"
            >
              <div className="text-sm font-semibold">{x.name}</div>
              <div className="text-sm text-sub">{x.detail}</div>
            </button>
          ))}
        </div>
        {hover ? (
          <div className="mt-3 text-xs text-sub">
            Hover detail: <span className="font-mono">{hover.detail}</span>
          </div>
        ) : (
          <div className="mt-3 text-xs text-sub">Hover over an example for detail.</div>
        )}
      </Card>

      <Card title="Split-Screen Visual" desc="Chaotic spreadsheets → clean verified dataflow (placeholder).">
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-line bg-bg p-4">
            <div className="text-xs font-semibold text-bad">Spreadsheets</div>
            <div className="mt-2 text-sm text-sub">Manual. Error-prone. Unverifiable.</div>
          </div>
          <div className="rounded-xl border border-line bg-bg p-4">
            <div className="text-xs font-semibold text-evz-green">Verified Flow</div>
            <div className="mt-2 text-sm text-sub">Instrumented. Checked. Anchored.</div>
          </div>
        </div>
      </Card>

      {/* Sources must be inside the returned JSX */}
      <div className="evz-sources md:col-span-2">
        Sources: SEC enforcement records; EU CSRD scope; public settlement databases (DWS), historical penalties (BP, Wells
        Fargo).
      </div>
    </div>
  );
}
