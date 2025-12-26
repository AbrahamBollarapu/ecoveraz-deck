"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

type LayerKey = "integration" | "regulatory" | "network" | "switching" | "trust";

const LAYERS: { key: LayerKey; title: string; bullets: string[] }[] = [
  {
    key: "integration",
    title: "1) Physical-Digital Integration Moat",
    bullets: ["Proprietary sensor stack patents", "Hardware-software integration IP", "18-month hardware lead time"]
  },
  {
    key: "regulatory",
    title: "2) Regulatory Compliance Moat",
    bullets: ["Built-in 40+ global frameworks", "Regulator relationships & alignment", "Continuous compliance updates"]
  },
  {
    key: "network",
    title: "3) Data Network Effects",
    bullets: ["10,000+ facility benchmarking data", "Industry-specific AI models", "Carbon credit pricing intelligence"]
  },
  {
    key: "switching",
    title: "4) Switching Cost Moat",
    bullets: ["Hardware deployment investment", "2+ years of compliance data history", "Auditor retraining costs"]
  },
  {
    key: "trust",
    title: "5) Verification Trust Moat",
    bullets: ["Blockchain anchoring infrastructure", "Public proof-of-audit system", "Cryptographic trust framework"]
  }
];

export function Slide11Moat() {
  const [active, setActive] = React.useState<LayerKey>("integration");

  const idx = LAYERS.findIndex((l) => l.key === active);
  const current = LAYERS[idx];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Moat Rings" desc="Concentric layers (outer → inner).">
        <div className="mt-4 rounded-2xl border border-line bg-bg p-5">
          <div className="relative mx-auto h-56 w-56">
            <Ring inset={0} tone={idx <= 4 ? "neutral" : "neutral"} />
            <Ring inset={18} tone={idx <= 3 ? "neutral" : "neutral"} />
            <Ring inset={36} tone={idx <= 2 ? "neutral" : "neutral"} />
            <Ring inset={54} tone={idx <= 1 ? "neutral" : "neutral"} />
            <Ring inset={72} tone={idx <= 0 ? "good" : "neutral"} />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="space-y-2">
                <div className="text-xs text-sub">Moat</div>
                <div className="text-xl font-bold">5 Layers</div>
                <div className="text-xs text-sub">Defensibility deepens over time</div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 flex-wrap">
            <Pill tone="good">IP + Hardware</Pill>
            <Pill tone="neutral">Data</Pill>
            <Pill tone="warn">Trust</Pill>
          </div>
        </div>
      </Card>

      <Card title="Layers (click to inspect)" desc="Competitors must breach all layers.">
        <div className="mt-4 space-y-2">
          {LAYERS.map((l) => (
            <button
              key={l.key}
              onClick={() => setActive(l.key)}
              className={`w-full text-left rounded-xl border px-4 py-3 transition ${
                l.key === active ? "border-evz-green bg-evz-green/10" : "border-line bg-bg hover:bg-ink/5"
              }`}
            >
              <div className="text-sm font-semibold">{l.title}</div>
              <div className="mt-2 text-sm text-sub">{l.bullets.join(" • ")}</div>
            </button>
          ))}
        </div>
      </Card>

      <Card title="IP / Timeline / Breach (scaffolds)" desc="Optional enhancements without breaking perf.">
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">IP visualization (placeholder)</div>
            <div className="mt-2 text-sm text-sub">Patent diagrams + claims cards land when logos/diagrams are ready.</div>
          </div>
          <div className="rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Moat deepening over 5 years (placeholder)</div>
            <div className="mt-2 text-sm text-sub">Timeline chart: defensibility accumulation vs competitors.</div>
          </div>
          <div className="rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Competitor breach animation (placeholder)</div>
            <div className="mt-2 text-sm text-sub">Week 5 polish: subtle attempt/fail animation with 300ms transitions.</div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-4">
            <div className="text-xs text-sub">Active layer</div>
            <div className="mt-1 text-base font-semibold">{current.title}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Ring({ inset, tone }: { inset: number; tone: "good" | "neutral" }) {
  const pad = `${inset}%`;
  return (
    <div
      className={`absolute rounded-full border-2 ${tone === "good" ? "border-evz-green/40" : "border-ink/10"}`}
      style={{ inset: pad }}
    />
  );
}
