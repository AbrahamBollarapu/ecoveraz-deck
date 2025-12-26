"use client";

import * as React from "react";
import { Pill } from "@/components/ui/Pill";
import { Card } from "@/components/ui/Card";

export function Slide1Hero() {
  const [count, setCount] = React.useState(37); // deterministic baseline
  React.useEffect(() => {
    const t = setInterval(() => setCount((c) => c + 1), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-line bg-bg shadow-card">
      <div className="evz-hero-bg" />
      <div className="evz-dots" />

      <div className="relative p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="good">EcoVeraZ</Pill>
          <Pill tone="neutral">Regulator-proof ESG truth</Pill>
          <Pill tone="warn">Blockchain-verified</Pill>
        </div>

        <div className="mt-6">
          <div className="text-4xl md:text-5xl font-bold tracking-tight">
            AUDIT-GRADE ESG INFRASTRUCTURE
          </div>
          <div className="mt-3 text-lg md:text-xl text-sub max-w-3xl">
            From Real-Time Sensors to Blockchain-Verified Certifications
          </div>
          <div className="mt-4 text-base text-sub max-w-3xl">
            EcoVeraZ turns environmental data into regulator-proof ESG truth.
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="Founder" desc="Abraham Bollarapu | Founder & CEO">
            <div className="mt-3 text-sm text-sub">
              <div>info@ecoveraz.com</div>
              <div>www.ecoveraz.com</div>
              <div className="mt-2">A Delaware Corporation | EcoVeraZ, Inc.</div>
            </div>
          </Card>

          <Card title="Live Counter" desc="ESG Audits Verified Today (simulated)">
            <div className="mt-3 flex items-end gap-2">
              <div className="text-4xl font-bold text-evz-green">{count}</div>
              <div className="text-sm text-sub pb-1">verifications</div>
            </div>
            <div className="mt-2 text-xs text-sub">
              Demo-safe: deterministic baseline + paced increments.
            </div>
          </Card>

          <Card title="Visual" desc="3D dataflow placeholder (Week 3 optional)">
            <div className="mt-3 text-sm text-sub">
              We replace this safe CSS background with optional Three.js / R3F only after
              performance budget is stable.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
