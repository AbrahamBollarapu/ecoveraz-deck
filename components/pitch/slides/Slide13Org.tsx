"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { TeamChipRow, Tile, MicroList } from "@/components/pitch/team/TeamMiniVisual";

type DemoMode = "investor" | "regulator" | "developer";

type Node = {
  title: string;
  owner: string;
  outputs: string[];
  status?: "NOW" | "NEXT";
};

const ORG: Node[] = [
  {
    title: "Product & Platform",
    owner: "Founder-led",
    outputs: ["Core platform", "APIs + UI", "Reliability + security"],
    status: "NOW",
  },
  {
    title: "Instrumentation & Data",
    owner: "Engineering",
    outputs: ["Device ingest", "Telemetry integrity", "Analytics pipelines"],
    status: "NOW",
  },
  {
    title: "Compliance & Audit",
    owner: "Compliance lead",
    outputs: ["CSRD/BRSR mapping", "Evidence packs", "Controls + review readiness"],
    status: "NEXT",
  },
  {
    title: "Contracts & Commercial",
    owner: "Chief Contracts Officer",
    outputs: ["Enterprise terms", "Delivery governance", "Partner contracts"],
    status: "NOW",
  },
  {
    title: "Operations & Delivery",
    owner: "Ops lead",
    outputs: ["Deployments", "Support + SLAs", "Site success playbooks"],
    status: "NEXT",
  },
];

export function Slide13Org({ mode }: { mode: DemoMode }) {
  return (
    <div className="grid gap-4 md:grid-cols-12 h-full min-w-0">
      <Card
        className="md:col-span-8 h-full min-w-0"
        title="Execution org (function-based)"
        desc="We scale delivery with clear owners, measurable outputs, and audit-ready interfaces."
      >
        <Tile tone="bg-bg">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <div className="text-xs font-mono text-sub">Operating model</div>
              <div className="mt-1 text-sm text-sub">
                Founder-led hub → functional pods with measurable outputs.
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2 min-w-0">
            {ORG.map((n) => (
              <Tile key={n.title} tone="bg-surface">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">{n.title}</div>
                    <div className="mt-1 text-sm text-sub">Owner: {n.owner}</div>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-mono ${n.status === "NOW" ? "border-evz-green bg-evz-green/10" : "border-line bg-bg"}`}>
                    {n.status === "NOW" ? "NOW" : "NEXT"}
                  </span>
                </div>

                <MicroList items={n.outputs} />
              </Tile>
            ))}
          </div>
        </Tile>

        <TeamChipRow
          items={[
            { tone: "neutral", label: "STRUCTURE" },
            { tone: mode === "regulator" ? "good" : "neutral", label: mode === "regulator" ? "AUDIT-LED VIEW" : "INVESTOR VIEW" },
          ]}
        />
      </Card>

      <Card
        className="md:col-span-4 h-full min-w-0"
        title="Scaling logic"
        desc="How structure maps to milestones."
      >
        <div className="mt-4 space-y-3">
          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Phase 1 — Prove</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Operational measurement + deterministic evidence packs.
            </div>
          </Tile>

          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Phase 2 — Standardize</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Controls, repeatable audits, and regulator-ready verification surfaces.
            </div>
          </Tile>

          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Phase 3 — Scale</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Deployments + partner delivery under contracts and SLAs.
            </div>
          </Tile>

          <Tile tone="bg-surface">
            <div className="text-xs font-mono text-sub">Hiring ties to outputs</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Each role is added only when it unlocks a measurable delivery milestone.
            </div>
          </Tile>
        </div>
      </Card>
    </div>
  );
}
