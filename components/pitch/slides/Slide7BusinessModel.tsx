"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";

export function Slide7BusinessModel() {
  const [sites, setSites] = React.useState(50);
  const [price, setPrice] = React.useState(30); // $k per site per year
  const estArr = Math.round((sites * price) / 10) / 100; // $M (sites*pricek) /1000

  return (
    <div className="h-full w-full">
      {/* MOBILE: stack cards + remove sliders */}
      <div className="block md:hidden space-y-4">
        <Card title="Revenue Streams" desc="B2B SaaS + infrastructure.">
          <div className="mt-4 space-y-3 text-sm text-sub">
            <div className="rounded-xl border border-line bg-bg p-4">
              <div className="font-semibold text-ink">1) Per-Site Subscription</div>
              <div className="mt-1 text-xs font-mono">$30,000 – $250,000 / year</div>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Sensor hardware + data platform</li>
                <li>Compliance automation</li>
                <li>Real-time monitoring</li>
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-bg p-4">
              <div className="font-semibold text-ink">2) Certification Fees</div>
              <div className="mt-1 text-xs font-mono">$5,000 – $50,000 / certificate</div>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>ESG compliance certificates</li>
                <li>Net-zero verification</li>
                <li>Supply chain attestations</li>
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-bg p-4">
              <div className="font-semibold text-ink">3) Marketplace & Data</div>
              <div className="mt-1 text-xs font-mono">20% of transaction value</div>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Carbon credit enablement</li>
                <li>ESG data marketplace</li>
                <li>Insurance & financing integrations</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="ARR Impact" desc="Subscription ARR scales with sites × price.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold text-ink">Example scenarios (annual)</div>
            <div className="mt-2 text-sm text-sub leading-snug">
              • 50 sites × $30k = <span className="font-mono">$1.5M</span>
              <br />
              • 100 sites × $50k = <span className="font-mono">$5.0M</span>
              <br />
              • 200 sites × $75k = <span className="font-mono">$15.0M</span>
            </div>
            <div className="mt-3 text-xs text-sub">
              (Interactive estimator is available on tablet/desktop.)
            </div>
          </div>
        </Card>

        <Card title="Gross margins (targets)" desc="Infrastructure economics.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="grid grid-cols-2 gap-2 text-sm text-sub">
              <div className="rounded-lg border border-line bg-surface px-3 py-2">
                Software: <b>85%</b>
              </div>
              <div className="rounded-lg border border-line bg-surface px-3 py-2">
                Hardware: <b>45%</b>
              </div>
              <div className="rounded-lg border border-line bg-surface px-3 py-2">
                Services: <b>70%</b>
              </div>
              <div className="rounded-lg border border-line bg-surface px-3 py-2">
                Overall: <b>68%</b>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Cost Comparison" desc="Traditional audits vs EcoVeraZ. (placeholder)">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold text-ink">Traditional audit</div>
            <div className="mt-2 text-sm text-sub">
              6–9 months • manual evidence • high verification cost
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold text-ink">EcoVeraZ</div>
            <div className="mt-2 text-sm text-sub">
              Continuous measurement • automated evidence • receipt-based verification
            </div>
          </div>
        </Card>
      </div>

      {/* TABLET/DESKTOP: keep your original 3-col layout with sliders */}
      <div className="hidden md:grid grid gap-4 md:grid-cols-3">
        <Card title="Revenue Streams" desc="B2B SaaS + infrastructure.">
          <div className="mt-4 space-y-3 text-sm text-sub">
            <div className="rounded-xl border border-line bg-bg p-4">
              <div className="font-semibold text-ink">1) Per-Site Subscription</div>
              <div className="mt-1 text-xs font-mono">$30,000 – $250,000 / year</div>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Sensor hardware + data platform</li>
                <li>Compliance automation</li>
                <li>Real-time monitoring</li>
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-bg p-4">
              <div className="font-semibold text-ink">2) Certification Fees</div>
              <div className="mt-1 text-xs font-mono">$5,000 – $50,000 / certificate</div>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>ESG compliance certificates</li>
                <li>Net-zero verification</li>
                <li>Supply chain attestations</li>
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-bg p-4">
              <div className="font-semibold text-ink">3) Marketplace & Data</div>
              <div className="mt-1 text-xs font-mono">20% of transaction value</div>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Carbon credit enablement</li>
                <li>ESG data marketplace</li>
                <li>Insurance & financing integrations</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="ARR Impact (interactive)" desc="Adjust assumptions to see subscription ARR.">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold text-ink">Subscription ARR estimator</div>

            <div className="mt-3 text-xs text-sub">Sites</div>
            <input
              className="mt-2 w-full accent-evz-green"
              type="range"
              min={10}
              max={500}
              step={10}
              value={sites}
              onChange={(e) => setSites(parseInt(e.target.value, 10))}
            />
            <div className="mt-1 text-sm font-mono text-sub">{sites} sites</div>

            <div className="mt-3 text-xs text-sub">Price per site (USD, thousands/year)</div>
            <input
              className="mt-2 w-full accent-evz-green"
              type="range"
              min={30}
              max={250}
              step={5}
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value, 10))}
            />
            <div className="mt-1 text-sm font-mono text-sub">${price}k / year</div>

            <div className="mt-4 flex items-end gap-2">
              <div className="text-3xl font-bold text-evz-green">${estArr}M</div>
              <div className="text-sm text-sub pb-1">subscription ARR</div>
            </div>

            <div className="mt-3 text-xs text-sub">
              Visual spec: revenue waterfall + streams into ARR bucket (Week 3 with Recharts optional).
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold text-ink">Gross margins (targets)</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-sub">
              <div className="rounded-lg border border-line bg-surface px-3 py-2">
                Software: <b>85%</b>
              </div>
              <div className="rounded-lg border border-line bg-surface px-3 py-2">
                Hardware: <b>45%</b>
              </div>
              <div className="rounded-lg border border-line bg-surface px-3 py-2">
                Services: <b>70%</b>
              </div>
              <div className="rounded-lg border border-line bg-surface px-3 py-2">
                Overall: <b>68%</b>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Cost Comparison" desc="Traditional audits vs EcoVeraZ. (placeholder)">
          <div className="mt-4 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold text-ink">Traditional audit</div>
            <div className="mt-2 text-sm text-sub">
              6–9 months • manual evidence • high verification cost
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-line bg-bg p-4">
            <div className="text-sm font-semibold text-ink">EcoVeraZ</div>
            <div className="mt-2 text-sm text-sub">
              Continuous measurement • automated evidence • receipt-based verification
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
