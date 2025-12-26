import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export function SlideHero({ mode }: { mode: "investor" | "regulator" | "developer" }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Live Metrics (mock)" desc="Deterministic counters (demo-safe).">
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <Metric label="CO₂ Avoided" value="12,450" unit="tons" />
          <Metric label="Audits Automated" value="387" unit="runs" />
          <Metric label="Sites Monitored" value="18" unit="sites" />
          <Metric label="Sensors Streaming" value="642" unit="nodes" />
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          <Pill tone="good">Compliant</Pill>
          <Pill tone="neutral">{mode === "investor" ? "Investor-safe" : mode === "regulator" ? "Stress-ready" : "Dev-first"}</Pill>
        </div>
      </Card>

      <Card title="What this is" desc="Not a slide deck — a proof interface.">
        <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
          <li>Keyboard-driven narrative flow</li>
          <li>Deterministic demo modes</li>
          <li>Evidence-chain is the product story</li>
        </ul>
      </Card>

      <Card title="Week 1 scope" desc="Hero / Problem / Solution, locked design system.">
        <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
          <li>Strict typography + spacing</li>
          <li>Purposeful motion (300ms)</li>
          <li>Export hooks scaffold (Week 3–5)</li>
        </ul>
      </Card>
    </div>
  );
}

function Metric({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-1 text-lg font-bold">
        {value} <span className="text-xs font-mono text-white/55">{unit}</span>
      </div>
    </div>
  );
}
