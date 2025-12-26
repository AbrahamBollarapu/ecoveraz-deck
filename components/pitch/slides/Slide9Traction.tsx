"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export function Slide9Traction() {
  return (
    <div className="h-full w-full">
      {/* Slide flags */}
      <div className="flex items-center gap-2 flex-wrap mb-4">
        <Pill tone="neutral">SIMULATED where noted</Pill>
        <Pill tone="neutral">PLACEHOLDER logos pending approval</Pill>
      </div>

      {/* MOBILE: compress to 3 proof blocks + 1 metric strip */}
      <div className="block md:hidden space-y-4">
        <Card title="Technical validation" desc="Live PoC + reliability metrics.">
          <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
            <li>Live PoC: Multi-site industrial facility</li>
            <li>End-to-end pipeline proven</li>
            <li>
              <b>99.9%</b> data uptime over <b>180</b> days
            </li>
            <li>
              Sub-<b>5-minute</b> alerting latency
            </li>
          </ul>
          <div className="mt-4 flex gap-2 flex-wrap">
            <Pill tone="good">PoC live</Pill>
            <Pill tone="neutral">Uptime</Pill>
          </div>
        </Card>

        <Card title="Market validation" desc="Pipeline + measurable audit savings.">
          <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
            <li>
              <b>12</b> enterprise LOIs in pipeline
            </li>
            <li>
              <b>3</b> auditor MoUs in negotiation
            </li>
            <li>
              <b>83%</b> reduction in audit preparation time
            </li>
            <li>
              <b>95%</b> cost reduction vs. traditional audits
            </li>
          </ul>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Patents Filed</div>
            <div className="mt-1 text-sm text-sub">
              <b>6</b> core patents in instrumentation & verification
            </div>
          </div>
        </Card>

        <Card title="Regulatory alignment" desc="Frameworks implemented + active conversations.">
          <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
            <li>CSRD, BRSR, SEC frameworks implemented</li>
            <li>Audit-ready evidence packs generated</li>
            <li>In conversations with EU, Indian, US regulators</li>
          </ul>
          <div className="mt-4 rounded-xl border border-line bg-bg p-4 text-sm text-sub">
            Visual spec: regulator mapping dashboard (Week 3 optional).
          </div>
        </Card>

        <div className="rounded-2xl border border-line bg-bg p-4">
          <div className="text-xs font-mono text-sub">POC METRICS (snapshot)</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Metric label="Uptime" value="99.9%" />
            <Metric label="Latency" value="< 5 min" />
            <Metric label="Sites" value="Multi-site" />
            <Metric label="Pipeline" value="12 LOIs" />
          </div>
        </div>

        <div className="evz-sources">
          SIMULATED/PoC metrics shown for demo unless marked LIVE. Evidence packs + uptime/latency
          align to internal PoC logs.
        </div>
      </div>

      {/* TABLET/DESKTOP: keep your existing layout */}
      <div className="hidden md:grid gap-4 md:grid-cols-3">
        <Card title="Technical Validation" desc="Live PoC + reliability metrics.">
          <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
            <li>Live PoC: Multi-site industrial facility</li>
            <li>End-to-end pipeline proven</li>
            <li>
              <b>99.9%</b> data uptime over <b>180</b> days
            </li>
            <li>
              Sub-<b>5-minute</b> alerting latency
            </li>
          </ul>
          <div className="mt-4 flex gap-2 flex-wrap">
            <Pill tone="good">PoC live</Pill>
            <Pill tone="neutral">Uptime</Pill>
          </div>
        </Card>

        <Card title="Regulatory Alignment" desc="Frameworks implemented + active conversations.">
          <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
            <li>CSRD, BRSR, SEC frameworks implemented</li>
            <li>Audit-ready evidence packs generated</li>
            <li>In conversations with EU, Indian, US regulators</li>
          </ul>
          <div className="mt-4 rounded-xl border border-line bg-bg p-4 text-sm text-sub">
            Visual spec: regulator mapping dashboard (Week 3 optional).
          </div>
        </Card>

        <Card title="Market Validation" desc="Pipeline + measurable audit savings.">
          <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
            <li>
              <b>12</b> enterprise LOIs in pipeline
            </li>
            <li>
              <b>3</b> auditor MoUs in negotiation
            </li>
            <li>
              <b>83%</b> reduction in audit preparation time
            </li>
            <li>
              <b>95%</b> cost reduction vs. traditional audits
            </li>
          </ul>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Patents Filed</div>
            <div className="mt-1 text-sm text-sub">
              <b>6</b> core patents in instrumentation & verification
            </div>
          </div>
        </Card>

        <Card title="PoC Metrics Dashboard" desc="Live metrics view (placeholder).">
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Metric label="Uptime" value="99.9%" />
            <Metric label="Latency" value="< 5 min" />
            <Metric label="Sites" value="Multi-site" />
            <Metric label="Pipeline" value="12 LOIs" />
          </div>
        </Card>

        <Card title="Milestones vs Roadmap" desc="Timeline scaffold.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4 text-sm text-sub">
            Week 1–2: narrative + model • Week 3: proof visuals • Week 4: team/ask • Week 5:
            polish/perf.
          </div>
        </Card>

        <Card title="Logos & Quotes" desc="Add when permissions are secured.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4 text-sm text-sub">
            Drop pilot logos and 1–2 short quotes here once approved.
          </div>
        </Card>

        <div className="evz-sources md:col-span-3">
          SIMULATED/PoC metrics shown for demo unless marked LIVE. Evidence packs + uptime/latency
          align to internal PoC logs.
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-bg p-4">
      <div className="text-xs text-sub">{label}</div>
      <div className="mt-1 text-lg font-bold">{value}</div>
    </div>
  );
}
