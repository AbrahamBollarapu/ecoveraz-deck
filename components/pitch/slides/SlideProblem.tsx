import * as React from "react";
import { Card } from "@/components/ui/Card";

export function SlideProblem({ mode }: { mode: "investor" | "regulator" | "developer" }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="Why now" desc="Regulatory tipping point + operational reality.">
        <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
          <li>Evidence scattered across teams, vendors, and spreadsheets</li>
          <li>Audit windows compress → risk grows</li>
          <li>Weak provenance → low trust, high verification cost</li>
        </ul>
        <div className="mt-4 text-xs text-white/50">
          Mode hint: {mode === "regulator" ? "Highlight enforcement + failure cases." : "Highlight cost + time + credibility."}
        </div>
      </Card>

      <Card title="What breaks in audits" desc="Common failure modes EcoVeraZ is built to prevent.">
        <div className="mt-4 grid gap-3">
          <Failure title="Data gaps" body="Missing intervals invalidate conclusions." />
          <Failure title="No chain-of-custody" body="Cannot prove integrity from source to report." />
          <Failure title="Slow remediation" body="Findings arrive too late to matter operationally." />
        </div>
      </Card>
    </div>
  );
}

function Failure({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/65 leading-relaxed">{body}</div>
    </div>
  );
}
