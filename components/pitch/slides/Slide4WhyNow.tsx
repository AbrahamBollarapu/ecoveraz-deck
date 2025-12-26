"use client";

import * as React from "react";
import { HeadlineBlock } from "@/components/pitch/uvcs/HeadlineBlock";
import { MetricBlock } from "@/components/pitch/uvcs/MetricBlock";
import { KeyInsight } from "@/components/pitch/uvcs/KeyInsight";

type DemoMode = "investor" | "regulator" | "developer";

export function Slide4WhyNow({ mode }: { mode: DemoMode }) {
  return (
    <div className="h-full w-full">
      <HeadlineBlock
        title="The ESG Mandate: From Voluntary to Enforced Globally"
        subtitle="Regulatory enforcement is accelerating — evidence is becoming mandatory."
      />

      {/* Mobile: skim-safe */}
      <div className="block md:hidden mt-4 space-y-4">
        <div className="rounded-2xl bg-white/95 p-4 ring-1 ring-ink/10">
          <div className="text-sm font-medium text-ink">Regulatory shift</div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-sub">
            <span>Voluntary</span>
            <span>Mandatory</span>
            <span className="font-medium text-ink">Enforced</span>
          </div>

          <div className="mt-2 h-1.5 w-full rounded-full bg-ink/5">
            <div className="h-1.5 w-4/5 rounded-full bg-evz-green" />
          </div>

          <ul className="mt-4 list-disc pl-5 text-sm text-sub space-y-2">
            <li>EU CSRD / ESRS expanding scope</li>
            <li>US SEC climate disclosure pressure</li>
            <li>ISSB alignment and global convergence</li>
            <li>GCC / APAC adoption and audits</li>
          </ul>
        </div>

        <MetricBlock
          value="$68B"
          label="Mandatory ESG infrastructure market (TAM)."
          tone="trust"
        />

        <KeyInsight>
          Compliance is moving from reporting to enforcement — organizations need verifiable evidence trails.
        </KeyInsight>
      </div>

      {/* Tablet/Desktop: existing structured layout */}
      <div className="hidden md:grid grid-cols-12 gap-4">
        <div className="col-span-7 rounded-2xl bg-white/95 p-5 ring-1 ring-ink/10">
          <div className="text-sm font-medium text-ink">Regulatory shift</div>

          <div className="mt-4 flex items-center justify-between text-xs text-sub">
            <span>Voluntary</span>
            <span>Mandatory</span>
            <span className="font-medium text-ink">Enforced</span>
          </div>

          <div className="mt-2 h-1.5 w-full rounded-full bg-ink/5">
            <div className="h-1.5 w-4/5 rounded-full bg-evz-green" />
          </div>

          <div className="mt-4 grid gap-2 text-sm text-sub md:grid-cols-2">
            <div className="rounded-xl bg-ink/[0.02] p-3 ring-1 ring-ink/10">
              EU CSRD / ESRS (expanding scope)
            </div>
            <div className="rounded-xl bg-ink/[0.02] p-3 ring-1 ring-ink/10">
              US SEC climate disclosure pressure
            </div>
            <div className="rounded-xl bg-ink/[0.02] p-3 ring-1 ring-ink/10">
              ISSB alignment and global convergence
            </div>
            <div className="rounded-xl bg-ink/[0.02] p-3 ring-1 ring-ink/10">
              GCC / APAC adoption and audits
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <MetricBlock
            value="$68B"
            label="Mandatory ESG infrastructure market (TAM)."
            tone="trust"
          />
        </div>

        <div className="col-span-12">
          <KeyInsight>
            Compliance is moving from reporting to enforcement — organizations need verifiable evidence trails.
          </KeyInsight>
        </div>
      </div>
    </div>
  );
}
