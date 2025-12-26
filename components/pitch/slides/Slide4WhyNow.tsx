"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

type Year = 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 2027;
const YEARS: Year[] = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];

export function Slide4WhyNow() {
  const [year, setYear] = React.useState<Year>(2024);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="2023–2024: The Enforcement Tipping Point" desc="From voluntary to mandated.">
        <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
          <li>CSRD (EU): 50,000+ companies now mandated</li>
          <li>BRSR (India): Top 1,000 listed companies</li>
          <li>SEC Climate Rules (US): Public company disclosure</li>
          <li>ISSB Standards: Global harmonization</li>
        </ul>
        <div className="mt-4 flex gap-2 flex-wrap">
          <Pill tone="warn">Enforced</Pill>
          <Pill tone="neutral">Global</Pill>
        </div>
      </Card>

      <Card title="Timeline (2020–2027)" desc="Scroll/drag to see enforcement ramp (scaffold).">
        <div className="mt-4 rounded-xl border border-line bg-bg p-4">
          <div className="text-xs text-sub">
            Year: <span className="font-mono">{year}</span>
          </div>
          <input
            className="mt-2 w-full accent-evz-orange"
            type="range"
            min={2020}
            max={2027}
            step={1}
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value, 10) as Year)}
          />
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs font-mono text-sub">
            {YEARS.map((y) => (
              <div
                key={y}
                className={`rounded-lg border px-2 py-1 text-center ${
                  y === year ? "border-evz-orange bg-evz-orange/10" : "border-line bg-surface"
                }`}
              >
                {y}
              </div>
            ))}
          </div>
          <div className="mt-3 text-sm text-sub">
            {year <= 2022
              ? "Voluntary reporting dominates."
              : year <= 2024
              ? "Mandates expand rapidly; enforcement posture hardens."
              : "Audit infrastructure becomes non-optional for most sectors."}
          </div>
        </div>
      </Card>

      <Card title="Investor Pressure Multiplier" desc="Market pull accelerates adoption.">
        <ul className="mt-4 space-y-2 text-sm text-sub list-disc pl-5">
          <li>83% of institutional investors now mandate ESG compliance</li>
          <li>ESG-linked financing reached $1.2T in 2023</li>
          <li>Carbon markets: $950B by 2030 (BloombergNEF)</li>
        </ul>
        <div className="mt-4 rounded-xl border border-line bg-bg p-4">
          <div className="text-xs text-sub">Timing Advantage</div>
          <div className="mt-2 text-sm text-sub">
            Companies must build infrastructure <b>before</b> enforcement peaks.
          </div>
          <div className="mt-2 text-sm text-sub">
            Early adopters gain <b>3–5x valuation premium</b> (McKinsey).
          </div>
        </div>
      </Card>

      {/* Sources must be inside the returned JSX */}
      <div className="evz-sources md:col-span-3">
        Sources: EU CSRD; SEBI BRSR; SEC climate disclosure rules; ISSB; BloombergNEF (ESG-linked finance, carbon markets);
        McKinsey (valuation studies).
      </div>
    </div>
  );
}
