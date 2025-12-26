"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";

type Layer = {
  title: string;
  bullets: string[];
  detail: string;
};

const LAYERS: Layer[] = [
  {
    title: "Layer 1: Physical Truth",
    bullets: [
      "IoT sensors: Air quality, energy, water, waste",
      "Factory-calibrated, tamper-evident hardware",
      "Real-time telemetry at 1-minute intervals"
    ],
    detail: "Hardware specs shown in monospace; tamper-evident design is a core trust primitive."
  },
  {
    title: "Layer 2: Intelligence Layer",
    bullets: [
      "AI/ML anomaly detection",
      "Predictive compliance monitoring",
      "Benchmarking against 10,000+ facilities"
    ],
    detail: "Anomaly + benchmarking become a defensible ops loop, not a static report."
  },
  {
    title: "Layer 3: Compliance Automation",
    bullets: [
      "40+ global frameworks pre-built",
      "Automated evidence collection",
      "Regulator submission ready in 48 hours"
    ],
    detail: "“Review-ready” means evidence packs + traceability + mapped requirements."
  },
  {
    title: "Layer 4: Certification Engine",
    bullets: [
      "Automated certificate generation",
      "Third-party auditor integration portal",
      "Digital twin of physical assets"
    ],
    detail: "Certificates become verifiable outputs, not marketing PDFs."
  },
  {
    title: "Layer 5: Trust Layer",
    bullets: [
      "Ethereum/IPFS anchoring",
      "Zero-knowledge proof verification",
      "Public proof-of-audit explorer"
    ],
    detail: "Receipts enable independent verification and tamper-evident trails."
  }
];

export function Slide5Product() {
  const [open, setOpen] = React.useState(0);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="3D Layered Diagram" desc="Placeholder (Week 3 optional).">
        <div className="mt-4 rounded-xl border border-line bg-bg p-4">
          <div className="text-sm font-semibold">5-layer stack</div>
          <div className="mt-3 space-y-2">
            {LAYERS.map((l, i) => (
              <div key={l.title} className={`rounded-lg border px-3 py-2 ${i === open ? "border-evz-green bg-evz-green/10" : "border-line bg-surface"}`}>
                <div className="text-xs font-semibold">{l.title}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="Interactive Layer Explorer" desc="Click a layer to expand.">
        <div className="mt-4 space-y-2">
          {LAYERS.map((l, i) => (
            <button
              key={l.title}
              onClick={() => setOpen(i)}
              className={`w-full text-left rounded-xl border px-4 py-3 transition ${
                i === open ? "border-evz-green bg-bg" : "border-line bg-bg hover:bg-ink/5"
              }`}
            >
              <div className="text-sm font-semibold">{l.title}</div>
              <ul className="mt-2 space-y-1 text-sm text-sub list-disc pl-5">
                {l.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              {i === open ? <div className="mt-2 text-xs text-sub">{l.detail}</div> : null}
            </button>
          ))}
        </div>
      </Card>

      <Card title="Demo Area + Specs" desc="Live dashboard placeholder + monospace specs.">
        <div className="mt-4 rounded-xl border border-line bg-bg p-4">
          <div className="text-sm font-semibold">Live dashboard (scaffold)</div>
          <div className="mt-2 text-sm text-sub">Sensor stream cards + trend charts land in Week 3.</div>

          <div className="mt-4 text-xs text-sub">Technical specs</div>
          <pre className="mt-2 rounded-xl border border-line bg-surface p-3 text-xs font-mono overflow-auto">
{`Telemetry interval: 60s
Ingestion: contract-validated JSON
Storage: PostgreSQL time-series schema
Evidence: packs + manifest + SHA256
Anchoring: receipt (simulated)`}
          </pre>
        </div>
      </Card>
    </div>
  );
}
