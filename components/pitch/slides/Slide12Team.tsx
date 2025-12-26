"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { TeamChipRow, AvatarTile, Tile, MicroList } from "@/components/pitch/team/TeamMiniVisual";

type DemoMode = "investor" | "regulator" | "developer";

type Person = {
  name: string;
  role: string;
  focus: string[];
  note?: string; // explicit placeholders live here
};

type Advisor = {
  name: string;
  role: string;
  focus: string[];
  note?: string;
};

/**
 * LOCK: Names + roles + order exactly as provided by user
 */
const EXEC_TEAM: Person[] = [
  {
    name: "Abraham Bollarapu",
    role: "Founder & CEO",
    focus: ["Strategy & Leadership", "Vision & Execution", "Governance"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Dr Evzen Thoendel",
    role: "Co-Founder & CTO",
    focus: ["Architecture + defensibility", "R&D + standards alignment", "Audit-grade evidence systems"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Avinash Nuthakki",
    role: "Chief Marketing Officer",
    focus: ["Positioning + narrative", "Enterprise go-to-market", "Category design (proof-first)"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Prabhu Devunivari",
    role: "Chief Operating Officer",
    focus: ["Delivery operations", "Multi-site rollout", "Customer success execution"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Rajinikanth Siddamshetty",
    role: "Chief Growth Officer",
    focus: ["Pipeline generation", "Partner-led growth", "Expansion playbooks"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Madhusudhana Rao Rachaputi",
    role: "Legal & Compliances Officer",
    focus: ["Contract risk", "Compliance posture", "Policy + governance readiness"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Raghuram Palirisetty",
    role: "Chief Contracts Officer",
    focus: ["Enterprise contracts", "Commercial terms", "Delivery governance"],
    note: "PLACEHOLDER — headshot",
  },
];

const ADVISORS: Advisor[] = [
  {
    name: "Fahmi Owaidah",
    role: "Advisor for Middle Eastern Marketing",
    focus: ["Market entry support", "Partner introductions", "Regional messaging"],
    note: "PLACEHOLDER — advisor activation scope",
  },
];

const ORG_FUNCTIONS = [
  "CEO Office (product + delivery)",
  "Engineering (ingest, analytics, trust)",
  "Compliance (controls, evidence packs)",
  "Customer Success (rollout + operations)",
  "Commercial (sales + partnerships)",
] as const;

// MOBILE FOOTPRINT: keep concise, still includes Middle East (asked)
const FOOTPRINT_MOBILE = ["USA", "EU", "India", "Middle East"] as const;
// DESKTOP FOOTPRINT: keep your original
const FOOTPRINT_DESKTOP = ["USA", "EU", "India"] as const;

const HIRING_MILESTONES = [
  { milestone: "Phase 1 — PoC → Multi-site", hires: ["Field Ops Lead", "QA/Telemetry Engineer"] },
  { milestone: "Phase 2 — Audit Pack at scale", hires: ["Compliance Engineer", "Data Engineer (timeseries)"] },
  { milestone: "Phase 3 — Enterprise rollout", hires: ["Customer Success Lead", "Solutions Architect"] },
] as const;

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("");
}

function PersonRow({ p }: { p: Person | Advisor }) {
  const initials = initialsFromName(p.name);

  return (
    <Tile tone="bg-bg">
      <div className="flex items-start gap-4 min-w-0">
        <AvatarTile initials={initials} note={p.note} />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold leading-snug whitespace-normal break-words">{p.name}</div>
          <div className="mt-1 text-sm text-sub leading-snug whitespace-normal break-words">{p.role}</div>
          <div className="mt-2">
            <MicroList items={p.focus} />
          </div>
        </div>
      </div>
    </Tile>
  );
}

export function Slide12Team({ mode }: { mode: DemoMode }) {
  const modeLabel =
    mode === "regulator" ? "REGULATOR MODE" : mode === "developer" ? "DEVELOPER MODE" : "INVESTOR MODE";

  return (
    <div className="h-full w-full min-w-0">
      {/* MOBILE: reduce density — exec list + advisor chip + footprint chips */}
      <div className="block md:hidden space-y-4">
        <Card
          title="Founder-led execution"
          desc="Exec team + advisor visible in one mobile-safe view."
        >
          <div className="mt-4 grid gap-3 min-w-0">
            {EXEC_TEAM.map((p) => (
              <PersonRow key={p.name} p={p} />
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-line bg-bg p-4">
            <div className="text-xs font-mono text-sub">ADVISOR</div>
            <div className="mt-2 grid gap-3 min-w-0">
              {ADVISORS.map((a) => (
                <PersonRow key={a.name} p={a} />
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-line bg-bg p-4">
            <div className="text-xs font-mono text-sub">FOOTPRINT</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {FOOTPRINT_MOBILE.map((x) => (
                <span key={x} className="rounded-full border border-border/60 px-2 py-1 text-xs font-medium">
                  {x}
                </span>
              ))}
            </div>
          </div>

          <TeamChipRow
            items={[
              { tone: "neutral", label: "BOARD VARIANT (15 SLIDES)" },
              { tone: "neutral", label: "PLACEHOLDERS LABELED" },
              { tone: mode === "regulator" ? "good" : "neutral", label: modeLabel },
            ]}
          />
        </Card>
      </div>

      {/* TABLET/DESKTOP: keep your original board-merged layout */}
      <div className="hidden md:grid h-full min-w-0 gap-4 md:grid-cols-12">
        <Card
          className="md:col-span-8 h-full min-w-0"
          title="Founder-led execution (board-merged)"
          desc="All leadership roles visible in one view; structure + footprint + hiring + advisors condensed for board."
        >
          <div className="mt-4 grid gap-3 min-w-0">
            {EXEC_TEAM.map((p) => (
              <PersonRow key={p.name} p={p} />
            ))}
          </div>

          <div className="mt-4">
            <div className="text-xs font-mono text-sub">ADVISOR (ACTIVATION)</div>
            <div className="mt-2 grid gap-3 min-w-0">
              {ADVISORS.map((a) => (
                <PersonRow key={a.name} p={a} />
              ))}
            </div>
          </div>

          <TeamChipRow
            items={[
              { tone: "neutral", label: "BOARD VARIANT (15 SLIDES)" },
              { tone: "neutral", label: "NO UNVERIFIED CLAIMS" },
              { tone: "neutral", label: "PLACEHOLDERS LABELED" },
              { tone: mode === "regulator" ? "good" : "neutral", label: modeLabel },
            ]}
          />
        </Card>

        <div className="md:col-span-4 h-full min-w-0 grid gap-3">
          <Card className="min-w-0" title="Org structure" desc="Function-based, founder-led, built to scale under audit pressure.">
            <Tile tone="bg-bg">
              <div className="text-xs font-mono text-sub">Operating model</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                Clear functional ownership across product, controls, and delivery — designed to ship evidence packs, not just dashboards.
              </div>
            </Tile>
            <div className="mt-3">
              <MicroList items={[...ORG_FUNCTIONS]} />
            </div>
          </Card>

          <Card className="min-w-0" title="Footprint" desc="Execution-ready coverage.">
            <Tile tone="bg-bg">
              <div className="text-xs font-mono text-sub">Regions</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {FOOTPRINT_DESKTOP.map((x) => (
                  <span key={x} className="rounded-full border border-border/60 px-2 py-1 text-xs font-medium">
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-xs text-sub leading-snug">
                PLACEHOLDER — city-level detail only after approval.
              </div>
            </Tile>
          </Card>

          <Card className="min-w-0" title="Hiring (milestone-tied)" desc="Capital → capability → delivery.">
            <div className="space-y-2">
              {HIRING_MILESTONES.map((m) => (
                <Tile key={m.milestone} tone="bg-bg">
                  <div className="text-sm font-semibold">{m.milestone}</div>
                  <div className="mt-2 text-sm text-sub leading-snug">{m.hires.join(" • ")}</div>
                </Tile>
              ))}
            </div>
          </Card>

          <Card className="min-w-0" title="Guardrails" desc="Investor-safe + regulator-safe.">
            <Tile tone="bg-surface">
              <div className="text-xs font-mono text-sub">Policy</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                No titles / institutions / logos without explicit approval. Advisors are framed as delivery accelerators only.
              </div>
            </Tile>
          </Card>
        </div>
      </div>
    </div>
  );
}
