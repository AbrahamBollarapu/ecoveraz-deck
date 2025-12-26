"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

type PhaseKey = "p1" | "p2" | "p3" | "p4";

const PHASES: { key: PhaseKey; title: string; when: string; bullets: string[]; status: "done" | "next" | "later" }[] =
  [
    { key: "p1", title: "Phase 1: Foundation (Complete)", when: "Now", status: "done", bullets: ["✅ Enterprise PoC delivered", "✅ Core platform built", "✅ Initial patent filings"] },
    { key: "p2", title: "Phase 2: Scale (Next 6 Months)", when: "0–6 months", status: "next", bullets: ["CSRD/BRSR/SEC compliance automation", "Blockchain anchoring production rollout", "First 10 paying enterprise customers"] },
    { key: "p3", title: "Phase 3: Expansion (Months 7–12)", when: "7–12 months", status: "later", bullets: ["Real estate & industrial park deployments", "Multi-region regulatory certification", "Auditor partnership network launch"] },
    { key: "p4", title: "Phase 4: Ecosystem (Months 13–18)", when: "13–18 months", status: "later", bullets: ["Carbon market integration", "Financial product enablement", "Platform open APIs & marketplace"] },
  ];

export function Slide13Roadmap() {
  const [active, setActive] = React.useState<PhaseKey>("p2");
  const current = PHASES.find((p) => p.key === active)!;

  return (
    <div className="h-full w-full">
      {/* MOBILE: no click targets; show full plan in one scrollable-safe list */}
      <div className="block md:hidden space-y-4">
        <Card title="18-month execution plan" desc="Phases are explicit and reviewable.">
          <div className="mt-4 space-y-3">
            {PHASES.map((p) => (
              <div key={p.key} className="rounded-xl border border-line bg-bg p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold">{p.title}</div>
                  <div className="text-xs font-mono text-sub">{p.when}</div>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <Pill tone={p.status === "done" ? "good" : p.status === "next" ? "warn" : "neutral"}>
                    {p.status === "done" ? "COMPLETE" : p.status === "next" ? "NEXT" : "PLANNED"}
                  </Pill>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-sub list-disc pl-5">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-line bg-surface p-4">
            <div className="text-sm font-semibold">Roadmap thesis</div>
            <div className="mt-2 text-sm text-sub">
              Build the evidence layer first, then scale certifications, then plug into carbon markets and financing.
            </div>
          </div>
        </Card>
      </div>

      {/* TABLET/DESKTOP: keep your interactive 3-col */}
      <div className="hidden md:grid gap-4 md:grid-cols-3">
        <Card title="Gantt / Progress" desc="18-month execution plan.">
          <div className="mt-4 space-y-3">
            {PHASES.map((p) => (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className={`w-full text-left rounded-xl border px-4 py-3 transition ${
                  p.key === active ? "border-evz-green bg-evz-green/10" : "border-line bg-bg hover:bg-ink/5"
                }`}
                type="button"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{p.title}</div>
                  <div className="text-xs font-mono text-sub">{p.when}</div>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  <Pill tone={p.status === "done" ? "good" : p.status === "next" ? "warn" : "neutral"}>
                    {p.status === "done" ? "COMPLETE" : p.status === "next" ? "NEXT" : "PLANNED"}
                  </Pill>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Execution risk heatmap (scaffold)</div>
            <div className="mt-2 text-sm text-sub">
              Week 5: add a simple risk grid (tech / regulatory / GTM) with green/yellow/red coding.
            </div>
          </div>
        </Card>

        <Card title="Phase Detail" desc="Click phases to expand deliverables.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-base font-semibold">{current.title}</div>
            <div className="mt-1 text-xs font-mono text-sub">{current.when}</div>
            <ul className="mt-3 space-y-2 text-sm text-sub list-disc pl-5">
              {current.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-3 text-xs text-sub">Animation spec: timeline scroll with milestone markers (optional).</div>
          </div>
        </Card>

        <Card title="Outcome" desc="Evidence → certification → carbon markets.">
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-line bg-bg p-4">
              <div className="text-sm font-semibold">Roadmap thesis</div>
              <div className="mt-2 text-sm text-sub">
                Build the evidence layer first, then scale certifications, then plug into carbon markets and financing.
              </div>
            </div>
            <div className="rounded-xl border border-line bg-bg p-4">
              <div className="text-sm font-semibold">Milestone clicks (placeholder)</div>
              <div className="mt-2 text-sm text-sub">
                Each phase can open a “deliverables drawer” with testable proof artifacts.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
