"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

type StageKey = "instrument" | "analytics" | "compliance" | "certification" | "blockchain";

const STAGES: { key: StageKey; title: string; bullets: string[] }[] = [
  { key: "instrument", title: "1) Smart ESG Instrumentation", bullets: ["Calibrated sector-specific sensors", "Real-time environmental telemetry"] },
  { key: "analytics", title: "2) Real-Time Analytics Platform", bullets: ["Live dashboards with anomaly detection", "Automated alerting & diagnostics"] },
  { key: "compliance", title: "3) Regulator-Aligned Compliance Engine", bullets: ["CSRD, BRSR, SEC frameworks built-in", "Audit-ready scoring & reporting"] },
  { key: "certification", title: "4) Evidence & Certification Suite", bullets: ["Automated evidence packs", "ESG & Net-Zero certificates"] },
  { key: "blockchain", title: "5) Blockchain Verification Layer", bullets: ["Immutable data anchoring", "Tamper-proof audit trails"] }
];

export function Slide3Solution() {
  const [active, setActive] = React.useState<StageKey>("instrument");
  const current = STAGES.find((s) => s.key === active)!;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Pipeline" desc="Click a stage to expand details.">
        <div className="mt-4 space-y-2">
          {STAGES.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`w-full text-left rounded-xl border px-4 py-3 transition ${
                s.key === active ? "border-evz-green bg-evz-green/10" : "border-line bg-bg hover:bg-ink/5"
              }`}
            >
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="text-xs text-sub mt-1">
                {s.key === "compliance" ? "CSRD / BRSR / SEC" : s.key === "blockchain" ? "Receipts + verify" : "Operational layer"}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          <Pill tone="good">Verified</Pill>
          <Pill tone="neutral">Evidence chain</Pill>
          <Pill tone="warn">Enforcement-grade</Pill>
        </div>
      </Card>

      <Card title="Stage Detail" desc="Deterministic explanation block.">
        <div className="mt-4">
          <div className="text-base font-semibold">{current.title}</div>
          <ul className="mt-3 space-y-2 text-sm text-sub list-disc pl-5">
            {current.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <div className="mt-4 text-xs text-sub">
            Visual spec: animated dataflow + verification checks (Week 3 optional).
          </div>
        </div>
      </Card>

      <Card title="Tech Stack Visualization" desc="Microservices + DB + blockchain nodes (placeholder).">
        <div className="mt-4 rounded-xl border border-line bg-bg p-4">
          <div className="text-xs text-sub">Microservices</div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
            <Chip>device-ingest</Chip>
            <Chip>analytics</Chip>
            <Chip>compliance</Chip>
            <Chip>certification</Chip>
            <Chip>audit-packs</Chip>
            <Chip>blockchain</Chip>
          </div>
          <div className="mt-3 text-xs text-sub">Data store</div>
          <div className="mt-2 text-sm font-mono">PostgreSQL (time-series schema)</div>
          <div className="mt-3 text-xs text-sub">Blockchain</div>
          <div className="mt-2 text-sm font-mono">Receipt anchoring (simulated)</div>
        </div>
      </Card>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border border-line bg-surface px-2 py-1">{children}</div>;
}
