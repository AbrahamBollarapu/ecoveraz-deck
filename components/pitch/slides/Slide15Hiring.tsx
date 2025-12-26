"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { TeamChipRow, Tile, MicroList } from "@/components/pitch/team/TeamMiniVisual";

type DemoMode = "investor" | "regulator" | "developer";

type Phase = {
  window: string;
  hires: string[];
  outcome: string;
};

const PHASES: Phase[] = [
  {
    window: "0–6 months",
    hires: ["Compliance Lead", "Platform Engineer"],
    outcome: "Audit-ready deployments + repeatable evidence packs",
  },
  {
    window: "6–12 months",
    hires: ["Field Ops Lead", "Data QA / Integrity"],
    outcome: "Scale deployments under SLAs + defensible data quality",
  },
  {
    window: "12–18 months",
    hires: ["Sales Engineer", "Partner Ops"],
    outcome: "Repeatable go-to-market + partner delivery expansion",
  },
];

export function Slide15Hiring({ mode }: { mode: DemoMode }) {
  return (
    <div className="grid gap-4 md:grid-cols-12 h-full min-w-0">
      <Card
        className="md:col-span-8 h-full min-w-0"
        title="Hiring roadmap (12–18 months)"
        desc="Roles are added only when they unlock measurable milestones."
      >
        <TeamChipRow
          items={[
            { tone: "neutral", label: "EXECUTION-ALIGNED" },
            { tone: "neutral", label: "NO VANITY HIRING" },
            { tone: mode === "developer" ? "good" : "neutral", label: mode === "developer" ? "DEV MODE" : "DELIVERY MODE" },
          ]}
        />

        <div className="mt-4 grid gap-3 md:grid-cols-3 min-w-0">
          {PHASES.map((p) => (
            <Tile key={p.window} tone="bg-bg">
              <div className="text-xs font-mono text-sub">{p.window}</div>
              <div className="mt-2 text-sm font-semibold">Key hires</div>
              <MicroList items={p.hires} />

              <div className="mt-3 rounded-xl border border-line bg-surface p-3">
                <div className="text-xs font-mono text-sub">Outcome</div>
                <div className="mt-1 text-sm text-sub leading-relaxed">{p.outcome}</div>
              </div>
            </Tile>
          ))}
        </div>
      </Card>

      <Card
        className="md:col-span-4 h-full min-w-0"
        title="Milestone discipline"
        desc="Capital converts to capability only if it moves the proof loop."
      >
        <div className="mt-4 space-y-3">
          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Proof loop</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Measurement → checks → evidence pack → verification.
            </div>
          </Tile>
          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Delivery loop</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Deploy → stabilize → audit → renew → expand.
            </div>
          </Tile>
          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Commercial loop</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Contract clarity → SLAs → repeatable rollout.
            </div>
          </Tile>

          <Tile tone="bg-surface">
            <div className="text-xs font-mono text-sub">Hiring guardrail</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Each role is tied to a concrete milestone — not a job title list.
            </div>
          </Tile>
        </div>
      </Card>
    </div>
  );
}
