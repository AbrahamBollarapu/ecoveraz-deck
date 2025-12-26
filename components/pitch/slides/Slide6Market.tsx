"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Tile } from "@/components/pitch/team/TeamMiniVisual";

type DemoMode = "investor" | "regulator" | "developer";

export function Slide6Market({ mode }: { mode: DemoMode }) {
  return (
    <div className="h-full w-full min-w-0">
      {/* MOBILE: compress to 3 numbers + 2 proof lines */}
      <div className="block md:hidden space-y-4">
        <div className="rounded-2xl border border-line bg-bg p-4">
          <div className="text-xs font-mono text-sub">MARKET</div>
          <div className="mt-2 text-xl font-semibold text-ink">
            Mandatory ESG infrastructure is a non-discretionary spend category.
          </div>
          <div className="mt-2 text-sm text-sub leading-snug">
            Enforcement is shifting demand from reporting tools to evidence infrastructure.
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-line bg-bg p-4">
            <div className="text-xs font-mono text-sub">TAM</div>
            <div className="mt-2 text-3xl font-semibold text-ink">$68B</div>
            <div className="mt-1 text-sm text-sub leading-snug">
              Mandatory ESG, compliance, audit, and verification infrastructure.
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-bg p-4">
              <div className="text-xs font-mono text-sub">SAM</div>
              <div className="mt-2 text-2xl font-semibold text-ink">$18–22B</div>
              <div className="mt-1 text-sm text-sub leading-snug">
                Enterprises needing continuous measurement + evidence packs.
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-bg p-4">
              <div className="text-xs font-mono text-sub">SOM</div>
              <div className="mt-2 text-2xl font-semibold text-ink">$1.2–1.6B</div>
              <div className="mt-1 text-sm text-sub leading-snug">
                Facilities + energy + operational ESG with repeatable rollout.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-bg p-4">
          <div className="text-xs font-mono text-sub">PROOF HOOK</div>
          <div className="mt-2 text-sm text-sub leading-snug">
            This market maps to demonstrable workflows:
            <br />
            measurement → checks → evidence pack → verification.
          </div>
          <div className="mt-3 text-xs text-sub leading-snug">
            SIMULATED • CLIENT-SAFE • NO LIVE BLOCKCHAIN
          </div>
        </div>
      </div>

      {/* TABLET/DESKTOP: keep your existing 12-col board scan */}
      <div className="hidden md:grid h-full min-w-0 gap-4 md:grid-cols-12">
        {/* LEFT — MARKET SIZE (BOARD SCAN) */}
        <Card
          className="md:col-span-7 h-full min-w-0"
          title="$68B Mandatory ESG Infrastructure Market"
          desc="Infrastructure spend driven by enforcement — not voluntary reporting."
        >
          <div className="mt-6 space-y-4">
            {/* TAM */}
            <Tile tone="bg-bg">
              <div className="text-xs font-mono text-sub">TOTAL ADDRESSABLE MARKET (TAM)</div>
              <div className="mt-2 text-4xl font-semibold">$68B</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                Mandatory ESG, compliance, audit, and verification infrastructure across regulated
                enterprises.
              </div>
            </Tile>

            {/* SAM + SOM */}
            <div className="grid gap-3 md:grid-cols-2">
              <Tile tone="bg-bg">
                <div className="text-xs font-mono text-sub">SERVICEABLE MARKET (SAM)</div>
                <div className="mt-2 text-2xl font-semibold">$18–22B</div>
                <div className="mt-2 text-sm text-sub leading-snug">
                  Mid-to-large enterprises requiring continuous measurement, evidence packs, and
                  audit readiness.
                </div>
              </Tile>

              <Tile tone="bg-bg">
                <div className="text-xs font-mono text-sub">SERVICEABLE OBTAINABLE (SOM)</div>
                <div className="mt-2 text-2xl font-semibold">$1.2–1.6B</div>
                <div className="mt-2 text-sm text-sub leading-snug">
                  Initial focus on facilities, energy, and operational ESG with repeatable rollout.
                </div>
              </Tile>
            </div>
          </div>
        </Card>

        {/* RIGHT — WHY NOW + PROOF HOOK */}
        <div className="md:col-span-5 h-full min-w-0 grid gap-3">
          {/* WHY NOW */}
          <Card className="min-w-0" title="Why now" desc="The shift from reporting to enforcement.">
            <Tile tone="bg-bg">
              <div className="text-xs font-mono text-sub">Market inflection</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                ESG has moved from narrative reporting to regulator-enforced, audit-grade evidence
                requirements — creating demand for infrastructure, not consultants.
              </div>
            </Tile>

            <Tile tone="bg-bg">
              <div className="text-xs font-mono text-sub">Buyer pressure</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                Enterprises are accountable for continuous proof, not annual PDFs — pushing spend
                toward systems that generate verifiable artifacts.
              </div>
            </Tile>
          </Card>

          {/* VERIFY HOOK */}
          <Card className="min-w-0" title="Proof hook" desc="Market claims are demonstrable.">
            <Tile tone="bg-surface">
              <div className="text-xs font-mono text-sub">VERIFY MODE</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                This market size is tied to demonstrable workflows:
                <br />
                measurement → checks → evidence pack → verification.
              </div>
              <div className="mt-3 text-xs text-sub leading-snug">
                SIMULATED • CLIENT-SAFE • NO LIVE BLOCKCHAIN
              </div>
            </Tile>

            <Tile tone="bg-bg">
              <div className="text-xs font-mono text-sub">Board takeaway</div>
              <div className="mt-2 text-sm text-sub leading-snug">
                EcoVeraZ sells infrastructure that regulators implicitly require — not discretionary
                ESG tooling.
              </div>
            </Tile>
          </Card>
        </div>
      </div>
    </div>
  );
}
