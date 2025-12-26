"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";

type Exit = 200 | 500 | 1000; // $M

export function Slide14Ask() {
  const [exit, setExit] = React.useState<Exit>(500);
  const investment = 2.1; // $M
  const equity = 15; // %
  const post = 14; // $M post-money
  const ret = ((equity / 100) * exit) / investment;

  return (
    <div className="h-full w-full">
      {/* MOBILE: remove slider interactions; show crisp terms + allocation */}
      <div className="block md:hidden space-y-4">
        <Card title="The Ask" desc="Investment opportunity.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-5">
            <div className="text-sm text-sub">INVESTMENT OPPORTUNITY</div>
            <div className="mt-2 text-2xl font-bold">$2.1M for 15%</div>
            <div className="mt-3 text-sm text-sub">
              Valuation: <b>$14M post-money</b>
            </div>
            <div className="mt-3 rounded-xl border border-line bg-surface p-4 text-sm text-sub">
              Exit Potential: <b>$500M+</b> in 5–7 years (30–50× current regulated ESG SaaS multiples)
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Milestones with $2.1M</div>
            <ul className="mt-2 space-y-1 text-sm text-sub list-disc pl-5">
              <li>50 enterprise sites deployed</li>
              <li>$2M ARR by June 2027</li>
              <li>Phase 4 roadmap completion</li>
              <li>Global partner network established</li>
              <li>18-month runway to profitability</li>
            </ul>
          </div>
        </Card>

        <Card title="Use of Funds" desc="Allocation + milestones.">
          <div className="mt-4 space-y-3 text-sm text-sub">
            <FundRow label="Product & Engineering" pct={40} amt="$840k" bullets={["Platform scaling & security","Additional framework integrations","Mobile & API development"]} />
            <FundRow label="Go-to-Market" pct={35} amt="$735k" bullets={["Sales team: 3 enterprise AEs","Marketing: content & case studies","Pilot-to-paid conversion programs"]} />
            <FundRow label="Operations & Compliance" pct={15} amt="$315k" bullets={["Regulatory certifications","Auditor partnership development","Legal & patent expansion"]} />
            <FundRow label="Contingency" pct={10} amt="$210k" bullets={[]} />
          </div>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Return Calculator</div>
            <div className="mt-2 text-sm text-sub">
              Interactive sensitivity is available on tablet/desktop.
            </div>
          </div>
        </Card>
      </div>

      {/* TABLET/DESKTOP: keep your original 3-col with calculator */}
      <div className="hidden md:grid gap-4 md:grid-cols-3">
        <Card title="The Ask" desc="Investment opportunity.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-5">
            <div className="text-sm text-sub">INVESTMENT OPPORTUNITY</div>
            <div className="mt-2 text-2xl font-bold">$2.1M for 15%</div>
            <div className="mt-3 text-sm text-sub">
              Valuation: <b>$14M post-money</b>
            </div>
            <div className="mt-3 rounded-xl border border-line bg-surface p-4 text-sm text-sub">
              Exit Potential: <b>$500M+</b> in 5–7 years (30–50× current regulated ESG SaaS multiples)
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Comparable exits (placeholder)</div>
            <div className="mt-2 text-sm text-sub">Add 3–5 comps + multiples once curated.</div>
          </div>
        </Card>

        <Card title="Use of Funds" desc="Allocation + milestones.">
          <div className="mt-4 space-y-3 text-sm text-sub">
            <FundRow label="Product & Engineering" pct={40} amt="$840k" bullets={["Platform scaling & security","Additional framework integrations","Mobile & API development"]} />
            <FundRow label="Go-to-Market" pct={35} amt="$735k" bullets={["Sales team: 3 enterprise AEs","Marketing: content & case studies","Pilot-to-paid conversion programs"]} />
            <FundRow label="Operations & Compliance" pct={15} amt="$315k" bullets={["Regulatory certifications","Auditor partnership development","Legal & patent expansion"]} />
            <FundRow label="Contingency" pct={10} amt="$210k" bullets={[]} />
          </div>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Milestones with $2.1M</div>
            <ul className="mt-2 space-y-1 text-sm text-sub list-disc pl-5">
              <li>50 enterprise sites deployed</li>
              <li>$2M ARR by June 2027</li>
              <li>Phase 4 roadmap completion</li>
              <li>Global partner network established</li>
              <li>18-month runway to profitability</li>
            </ul>
          </div>
        </Card>

        <Card title="Return Calculator (interactive)" desc="Exit scenario sensitivity.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-xs text-sub">Exit value (USD, millions)</div>
            <input
              className="mt-2 w-full accent-evz-green"
              type="range"
              min={200}
              max={1000}
              step={50}
              value={exit}
              onChange={(e) => setExit(parseInt(e.target.value, 10) as Exit)}
            />
            <div className="mt-2 text-sm font-mono text-sub">${exit}M</div>

            <div className="mt-4 rounded-xl border border-line bg-surface p-4">
              <div className="text-xs text-sub">Assumptions</div>
              <div className="mt-1 text-sm text-sub font-mono">
                Invest: ${investment}M • Equity: {equity}% • Post: ${post}M
              </div>
              <div className="mt-3 text-xs text-sub">Gross multiple (simple)</div>
              <div className="mt-1 text-3xl font-bold text-evz-green">{ret.toFixed(1)}×</div>
              <div className="mt-2 text-xs text-sub">
                Simplified sensitivity for pitch; refine later with dilution + follow-on modeling.
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold">Capital deployment timeline (placeholder)</div>
            <div className="mt-2 text-sm text-sub">Week 5: add a simple burn/runway strip aligned to milestones.</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function FundRow({ label, pct, amt, bullets }: { label: string; pct: number; amt: string; bullets: string[] }) {
  return (
    <div className="rounded-xl border border-line bg-bg p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-ink">{label}</div>
        <div className="text-xs font-mono text-sub">
          {pct}% • {amt}
        </div>
      </div>
      {bullets.length ? (
        <ul className="mt-2 space-y-1 list-disc pl-5 text-sm text-sub">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      <div className="mt-3 h-2 w-full rounded-full bg-ink/5 overflow-hidden">
        <div className="h-2 rounded-full bg-evz-green" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
