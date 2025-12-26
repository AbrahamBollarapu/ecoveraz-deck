"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { TeamChipRow, Tile, MicroList } from "@/components/pitch/team/TeamMiniVisual";

type DemoMode = "investor" | "regulator" | "developer";

type Hub = {
  city: string;
  region: string;
  purpose: string[];
};

const HUBS: Hub[] = [
  {
    city: "Delaware",
    region: "USA",
    purpose: ["Corporate HQ", "Investor + governance readiness", "US market entry"],
  },
  {
    city: "Berlin",
    region: "Germany",
    purpose: ["R&D + architecture", "EU CSRD alignment", "Standards + defensibility"],
  },
  {
    city: "Hyderabad",
    region: "India",
    purpose: ["Operations + deployments", "Integration delivery", "Cost-efficient scale"],
  },
];

export function Slide14Geo({ mode }: { mode: DemoMode }) {
  return (
    <div className="grid gap-4 md:grid-cols-12 h-full min-w-0">
      <Card
        className="md:col-span-8 h-full min-w-0"
        title="Global execution footprint"
        desc="Each location exists for delivery and defensibility — not a vanity map."
      >
        <div className="mt-4 rounded-2xl border border-line bg-bg p-4 h-[420px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_35%,#0A7C72,transparent_60%),radial-gradient(circle_at_70%_65%,#1A365D,transparent_60%),radial-gradient(circle_at_55%_80%,#DD6B20,transparent_60%)]" />
          <div className="absolute inset-0 p-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <div className="text-xs font-mono text-sub">Map panel</div>
                <div className="mt-1 text-sm text-sub">
                  PLACEHOLDER — replace with geo pins + region overlays when final assets are approved.
                </div>
              </div>
              <TeamChipRow
                items={[
                  { tone: "neutral", label: "PLACEHOLDER" },
                  { tone: mode === "regulator" ? "good" : "neutral", label: mode === "regulator" ? "REGULATOR CONTEXT" : "INVESTOR CONTEXT" },
                ]}
              />
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3 min-w-0">
              {HUBS.map((h) => (
                <Tile key={h.city} tone="bg-surface">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">
                        {h.city}, {h.region}
                      </div>
                      <div className="mt-1 text-xs font-mono text-sub">Execution hub</div>
                    </div>
                    <div className="h-8 w-8 rounded-xl border border-line bg-bg flex items-center justify-center">
                      <span className="text-xs font-mono">●</span>
                    </div>
                  </div>

                  <MicroList items={h.purpose} />
                </Tile>
              ))}
            </div>

            <div className="absolute right-4 bottom-4 text-xs font-mono text-sub">
              PLACEHOLDER — map visualization pending approval
            </div>
          </div>
        </div>
      </Card>

      <Card
        className="md:col-span-4 h-full min-w-0"
        title="Why it matters"
        desc="Footprint supports adoption and audit confidence."
      >
        <div className="mt-4 space-y-3">
          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Regulatory proximity</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              EU and US readiness reduces adoption friction and improves audit confidence.
            </div>
          </Tile>

          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">R&D defensibility</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Standards-aligned engineering strengthens verification claims.
            </div>
          </Tile>

          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Operational scale</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Deployments and integration playbooks become repeatable.
            </div>
          </Tile>

          <Tile tone="bg-surface">
            <div className="text-xs font-mono text-sub">Policy</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              We do not claim logos, customers, or regulators without explicit approval.
            </div>
          </Tile>
        </div>
      </Card>
    </div>
  );
}
