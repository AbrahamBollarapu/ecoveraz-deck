"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

import type { SensorReading } from "@/lib/demo/types";
import { runComplianceChecks, buildEvidencePack, simulateAnchor } from "@/lib/demo/simulator";

export function DemoPanel({
  latest,
  siteId,
  period,
  seed,
  variant = "full",
}: {
  latest: SensorReading;
  siteId: string;
  period: string;
  seed: number;
  variant?: "compact" | "full";
}) {
  const checks = React.useMemo(() => runComplianceChecks(latest), [latest]);
  const pack = React.useMemo(() => buildEvidencePack(siteId, period, seed), [siteId, period, seed]);
  const receipt = React.useMemo(() => simulateAnchor(pack), [pack]);

  if (variant === "compact") {
    const keyChecks = checks.slice(0, 4); // show top items; deterministic + readable
    return (
      <div className="grid gap-3">
        <div className="rounded-2xl border border-line bg-bg p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-xs font-mono text-sub">Compliance Engine</div>
              <div className="mt-1 text-sm font-semibold">CSRD/BRSR checks (scaffold)</div>
            </div>
            <Pill tone="neutral">SIMULATED</Pill>
          </div>

          <div className="mt-3 grid gap-2">
            {keyChecks.map((c) => (
              <div key={c.id} className="rounded-xl border border-line bg-surface px-3 py-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs font-mono text-sub">{c.framework}</div>
                  <StatusPill status={c.status} />
                </div>
                <div className="mt-1 text-sm font-semibold">{c.check}</div>
                <div className="mt-1 text-sm text-sub">{c.evidenceHint}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-bg p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-xs font-mono text-sub">Evidence Pack</div>
              <div className="mt-1 text-sm font-semibold">{pack.packId}</div>
            </div>
            <Pill tone="neutral">{pack.label}</Pill>
          </div>

          <div className="mt-2 text-sm text-sub">Period: {pack.period}</div>
          <div className="mt-2 text-sm text-sub">Hash preview:</div>
          <div className="mt-1 text-xs font-mono text-ink break-all">{pack.sha256}</div>

          <div className="mt-3 grid gap-2">
            {pack.files.slice(0, 3).map((f) => (
              <div
                key={f.name}
                className="flex items-center justify-between rounded-xl border border-line bg-surface px-3 py-2"
              >
                <div className="text-sm">{f.name}</div>
                <div className="text-xs font-mono text-sub">
                  {f.type} • {(f.bytes / 1024).toFixed(1)} KB
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 text-xs font-mono text-sub">
            Demo-safe: “Generate PDF” intentionally simulated (no export polish yet).
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-bg p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-xs font-mono text-sub">Anchor Viewer</div>
              <div className="mt-1 text-sm font-semibold">Receipt (simulated)</div>
            </div>
            <Pill tone="neutral">NO REAL TX</Pill>
          </div>

          <div className="mt-2 text-sm text-sub">Status: {receipt.status}</div>
          <div className="mt-2 text-sm text-sub">Network: {receipt.network}</div>

          <div className="mt-2 text-sm text-sub">Tx hash</div>
          <div className="mt-1 text-xs font-mono text-ink break-all">{receipt.txHash}</div>

          <div className="mt-3 rounded-xl border border-line bg-surface p-3 text-sm text-sub">
            Next step: public verify screen checks {`{pack hash ↔ tx receipt}`}.
          </div>
        </div>
      </div>
    );
  }

  // full variant (original 3-column)
  return (
    <div className="grid gap-4 md:grid-cols-12">
      <Card className="md:col-span-4" title="Compliance Engine (scaffold)" desc="Deterministic checks mapped to CSRD/BRSR.">
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <Pill tone="neutral">SIMULATED</Pill>
          <Pill tone="neutral">REGULATOR-SAFE</Pill>
        </div>
        <div className="mt-4 space-y-2">
          {checks.map((c) => (
            <div key={c.id} className="rounded-xl border border-line bg-bg p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-mono text-sub">{c.framework}</div>
                <StatusPill status={c.status} />
              </div>
              <div className="mt-1 text-sm font-semibold">{c.check}</div>
              <div className="mt-1 text-sm text-sub">{c.evidenceHint}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="md:col-span-4" title="Evidence Pack Generator" desc="One-click audit-ready pack (demo safe).">
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <Pill tone="neutral">SIMULATED</Pill>
        </div>
        <div className="mt-4 rounded-xl border border-line bg-bg p-4">
          <div className="text-xs font-mono text-sub">Pack</div>
          <div className="mt-1 text-sm font-semibold">{pack.packId}</div>
          <div className="mt-2 text-sm text-sub">Period: {pack.period}</div>
          <div className="mt-2 text-sm text-sub">Hash preview:</div>
          <div className="mt-1 text-xs font-mono text-ink break-all">{pack.sha256}</div>
        </div>

        <div className="mt-3 space-y-2">
          {pack.files.map((f) => (
            <div
              key={f.name}
              className="flex items-center justify-between rounded-xl border border-line bg-surface px-3 py-2"
            >
              <div className="text-sm">{f.name}</div>
              <div className="text-xs font-mono text-sub">
                {f.type} • {(f.bytes / 1024).toFixed(1)} KB
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-line bg-surface p-4 text-sm text-sub">
          Demo action: “Generate PDF” is intentionally simulated (no export polish yet).
        </div>
      </Card>

      <Card className="md:col-span-4" title="Blockchain Anchor Viewer" desc="Transaction receipt (simulated).">
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          <Pill tone="neutral">SIMULATED</Pill>
          <Pill tone="neutral">NO REAL TX</Pill>
        </div>

        <div className="mt-4 rounded-xl border border-line bg-bg p-4">
          <div className="text-xs font-mono text-sub">Receipt status</div>
          <div className="mt-1 text-sm font-semibold">{receipt.status}</div>
          <div className="mt-3 text-xs font-mono text-sub">Network</div>
          <div className="mt-1 text-sm">{receipt.network}</div>

          <div className="mt-3 text-xs font-mono text-sub">Tx hash</div>
          <div className="mt-1 text-xs font-mono text-ink break-all">{receipt.txHash}</div>

          <div className="mt-4 rounded-xl border border-line bg-surface p-3 text-sm text-sub">
            Public verification screen will show this receipt + pack hash match (next step).
          </div>
        </div>
      </Card>
    </div>
  );
}

function StatusPill({ status }: { status: "PASS" | "WARN" | "FAIL" }) {
  const tone = status === "PASS" ? "good" : status === "WARN" ? "warn" : "bad";
  return <Pill tone={tone}>{status}</Pill>;
}
