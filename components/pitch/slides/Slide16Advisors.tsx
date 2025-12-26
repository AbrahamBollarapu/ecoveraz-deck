"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { TeamChipRow, Tile, MicroList } from "@/components/pitch/team/TeamMiniVisual";

type DemoMode = "investor" | "regulator" | "developer";

type Bucket = {
  title: string;
  purpose: string;
  activations: string[];
  note: string;
};

const BUCKETS: Bucket[] = [
  {
    title: "Regulatory credibility",
    purpose: "Reduce adoption friction and ensure interpretation is defensible.",
    activations: ["Review evidence pack templates", "Stress-test disclosure mapping", "Pre-audit readiness checks"],
    note: "PLACEHOLDER — advisors added only with written approval",
  },
  {
    title: "Audit defensibility",
    purpose: "Make verification withstand scrutiny from auditors and regulators.",
    activations: ["Evidence chain reviews", "Control design validation", "Verification surface feedback"],
    note: "LOCKED — no unapproved past titles",
  },
  {
    title: "Market access",
    purpose: "Open channels only where product is ready to deliver.",
    activations: ["Pilot introductions", "Partner contract review", "Deployment playbook alignment"],
    note: "LOCKED — no logos without approval",
  },
];

export function Slide16Advisors({ mode }: { mode: DemoMode }) {
  return (
    <div className="grid gap-4 md:grid-cols-12 h-full min-w-0">
      <Card
        className="md:col-span-8 h-full min-w-0"
        title="Advisor activation model"
        desc="Advisors are used for execution — not displayed for optics."
      >
        <TeamChipRow
          items={[
            { tone: "neutral", label: "LOCKED SAFETY" },
            { tone: "neutral", label: "NO UNAPPROVED TITLES" },
            { tone: mode === "investor" ? "good" : "neutral", label: mode === "investor" ? "INVESTOR-READY" : "REVIEW-READY" },
          ]}
        />

        <div className="mt-4 grid gap-3 md:grid-cols-3 min-w-0">
          {BUCKETS.map((b) => (
            <Tile key={b.title} tone="bg-bg">
              <div className="text-sm font-semibold">{b.title}</div>
              <div className="mt-2 text-sm text-sub leading-relaxed">{b.purpose}</div>

              <div className="mt-3 rounded-xl border border-line bg-surface p-3">
                <div className="text-xs font-mono text-sub">Activations</div>
                <MicroList items={b.activations} />
              </div>

              <div className="mt-3 text-xs font-mono text-sub">{b.note}</div>
            </Tile>
          ))}
        </div>
      </Card>

      <Card
        className="md:col-span-4 h-full min-w-0"
        title="Governance rules"
        desc="Keeps deck and company audit-safe."
      >
        <div className="mt-4 space-y-3">
          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">No logos</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Customer, partner, or regulator logos only with written permission.
            </div>
          </Tile>
          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">No unverified titles</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Past roles are not used unless documented and approved.
            </div>
          </Tile>
          <Tile tone="bg-bg">
            <div className="text-sm font-semibold">Activation &gt; optics</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              Advisors must have explicit scope and measurable outputs.
            </div>
          </Tile>

          <Tile tone="bg-surface">
            <div className="text-xs font-mono text-sub">Outcome</div>
            <div className="mt-2 text-sm text-sub leading-relaxed">
              The deck remains defensible under diligence — and upgrades cleanly when approvals arrive.
            </div>
          </Tile>
        </div>
      </Card>
    </div>
  );
}
