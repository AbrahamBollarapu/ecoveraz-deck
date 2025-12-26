"use client";

import * as React from "react";
import { HeadlineBlock } from "@/components/pitch/uvcs/HeadlineBlock";
import { StepRow, Step } from "@/components/pitch/uvcs/StepRow";
import { KeyInsight } from "@/components/pitch/uvcs/KeyInsight";

type DemoMode = "investor" | "regulator" | "developer";

const steps: Step[] = [
  { title: "Measure", body: "Capture operational data directly from physical systems." },
  { title: "Normalize", body: "Clean, standardize, and contextualize measurements." },
  { title: "Analyze", body: "Derive ESG-relevant metrics with intelligence." },
  { title: "Certify", body: "Generate review-ready, regulation-aligned evidence." },
  { title: "Anchor", body: "Secure records for independent verification and audit defense." },
];

export function Slide3Solution({ mode }: { mode: DemoMode }) {
  return (
    <div className="h-full w-full">
      <HeadlineBlock title="Verified ESG Evidence, Built as Infrastructure" />

      {/* Mobile lock sentence */}
      <div className="block md:hidden mt-4 text-sm text-white/85 max-w-[520px]">
        EcoVeraZ converts operational measurements into audit-ready,
        regulator-grade ESG evidence.
      </div>

      {/* Tablet / desktop flow */}
      <div className="hidden md:block">
        <StepRow steps={steps} />
        <div className="mt-4">
          <KeyInsight>
            ESG compliance requires infrastructure, not reporting software.
          </KeyInsight>
        </div>
      </div>
    </div>
  );
}
