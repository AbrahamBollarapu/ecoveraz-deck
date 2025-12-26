"use client";

import * as React from "react";
import { HeadlineBlock } from "@/components/pitch/uvcs/HeadlineBlock";
import { ComparisonTable } from "@/components/pitch/uvcs/ComparisonTable";
import { MetricBlock } from "@/components/pitch/uvcs/MetricBlock";
import { KeyInsight } from "@/components/pitch/uvcs/KeyInsight";

type DemoMode = "investor" | "regulator" | "developer";

export function Slide2Problem({ mode }: { mode: DemoMode }) {
  return (
    <div className="h-full w-full">
      <HeadlineBlock
        title="ESG Reporting Failures Now Carry Material Financial Risk"
        subtitle="Manual, unverifiable ESG reporting has become a balance-sheet liability."
      />

      {/* Mobile summary */}
      <div className="block md:hidden space-y-3 mt-4">
        <ul className="text-sm text-white/85 list-disc pl-5 space-y-2">
          <li>Most ESG data cannot be independently verified</li>
          <li>Audits are manual, late, and disputed</li>
          <li>Regulators now demand evidence, not narratives</li>
        </ul>

        <KeyInsight>
          ESG failure is no longer reputational — it is financial.
        </KeyInsight>
      </div>

      {/* Tablet / desktop layout */}
      <div className="hidden md:grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <ComparisonTable
            leftTitle="Manual / Traditional"
            rightTitle="Verifiable / Enforcement-Grade"
            leftItems={[
              "Spreadsheet-driven reporting",
              "Point-in-time snapshots",
              "Unverifiable attestations",
              "High audit friction",
              "Regulatory exposure",
            ]}
            rightItems={[
              "Continuous operational measurement",
              "Evidence-linked datasets",
              "Machine-verifiable audit trails",
              "Reduced audit latency",
              "Defensible regulatory posture",
            ]}
          />
        </div>

        <div className="col-span-5">
          <MetricBlock
            value="$100B+"
            label="Estimated global ESG-related compliance exposure (fines, restatements, capital loss)."
            tone="risk"
          />
        </div>

        <div className="col-span-12">
          <KeyInsight>
            ESG failure is no longer reputational — it is balance-sheet risk.
          </KeyInsight>
        </div>
      </div>
    </div>
  );
}
