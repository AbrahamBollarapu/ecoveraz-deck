import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export function SlideSolution({ mode }: { mode: "investor" | "regulator" | "developer" }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="1) Instrument" desc="Operational measurements, continuously.">
        <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
          <li>IAQ + energy + future sensors</li>
          <li>Deterministic ingestion contracts</li>
          <li>Quality gates</li>
        </ul>
      </Card>

      <Card title="2) Verify" desc="Automated checks produce review-ready evidence.">
        <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
          <li>Consistency + anomaly checks</li>
          <li>Policy mapping (CSRD/BRSR/SEC)</li>
          <li>Stress/failure scenarios</li>
        </ul>
      </Card>

      <Card title="3) Anchor" desc="Tamper-evident receipts for trust.">
        <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
          <li>Hashing + manifests</li>
          <li>Blockchain receipt (simulated)</li>
          <li>Public verify page (Week 3–4)</li>
        </ul>
        <div className="mt-4 flex gap-2 flex-wrap">
          <Pill tone="good">Compliant</Pill>
          <Pill tone="warn">{mode === "regulator" ? "Enforcement-ready" : "Audit-ready"}</Pill>
        </div>
      </Card>
    </div>
  );
}
