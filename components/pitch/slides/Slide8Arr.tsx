"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Tile } from "@/components/pitch/team/TeamMiniVisual";

type DemoMode = "investor" | "regulator" | "developer";

export function Slide8Arr({ mode }: { mode: DemoMode }) {
  return (
    <div className="grid h-full min-w-0 gap-4 md:grid-cols-12">
      {/* LEFT — ARR OUTCOME */}
      <Card
        className="md:col-span-7 h-full min-w-0"
        title="Path to $2M ARR (18 months)"
        desc="Infrastructure-style revenue with repeatable deployment."
      >
        <div className="mt-6 space-y-4">
          {/* BASE CASE */}
          <Tile tone="bg-bg">
            <div className="text-xs font-mono text-sub">BASE CASE</div>
            <div className="mt-2 text-3xl font-semibold">$2.0M ARR</div>
            <div className="mt-2 text-sm text-sub leading-snug">
              Achieved through multi-site expansion within early enterprise customers using a
              standard rollout playbook.
            </div>
          </Tile>

          {/* BANDS */}
          <div className="grid gap-3 md:grid-cols-2">
            <Tile tone="bg-bg">
              <div className="text-xs font-mono text-sub">DOWNSIDE</div>
              <div className="mt-2 text-2xl font-semibold">$1.2–1.4M ARR</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                Slower enterprise rollout or delayed compliance adoption; still viable due to
                subscription + certification revenue mix.
              </div>
            </Tile>

            <Tile tone="bg-bg">
              <div className="text-xs font-mono text-sub">UPSIDE</div>
              <div className="mt-2 text-2xl font-semibold">$2.8–3.2M ARR</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                Faster multi-site expansion and pull-through from compliance and certification
                demand.
              </div>
            </Tile>
          </div>
        </div>
      </Card>

      {/* RIGHT — ASSUMPTIONS + PROOF */}
      <div className="md:col-span-5 h-full min-w-0 grid gap-3">
        {/* ASSUMPTIONS */}
        <Card
          className="min-w-0"
          title="Core assumptions"
          desc="Explicit and reviewable."
        >
          <Tile tone="bg-bg">
            <div className="text-xs font-mono text-sub">Commercial model</div>
            <div className="mt-2 text-sm text-sub leading-snug">
              Per-site subscription + compliance artifacts (certification / evidence packs).
            </div>
          </Tile>

          <Tile tone="bg-bg">
            <div className="text-xs font-mono text-sub">Deployment</div>
            <div className="mt-2 text-sm text-sub leading-snug">
              Standardized rollout across facilities with repeatable instrumentation and analytics.
            </div>
          </Tile>

          <Tile tone="bg-bg">
            <div className="text-xs font-mono text-sub">Expansion</div>
            <div className="mt-2 text-sm text-sub leading-snug">
              Land-and-expand driven by regulatory scope increase and audit frequency.
            </div>
          </Tile>
        </Card>

        {/* PROOF / MONTE CARLO */}
        <Card
          className="min-w-0"
          title="Model integrity"
          desc="Why this is not a vanity projection."
        >
          <Tile tone="bg-surface">
            <div className="text-xs font-mono text-sub">MONTE CARLO MODEL</div>
            <div className="mt-2 text-sm text-sub leading-snug">
              ARR bands are derived from sensitivity analysis across customer count, site expansion,
              and deployment timing.
            </div>
            <div className="mt-3 text-xs text-sub leading-snug">
              SIMULATED • ASSUMPTION-DRIVEN • BOARD-REVIEWABLE
            </div>
          </Tile>

          <Tile tone="bg-bg">
            <div className="text-xs font-mono text-sub">Board takeaway</div>
            <div className="mt-2 text-sm text-sub leading-snug">
              This is an infrastructure growth curve with downside protection and asymmetric
              upside — not a single-deal revenue bet.
            </div>
          </Tile>
        </Card>
      </div>
    </div>
  );
}
