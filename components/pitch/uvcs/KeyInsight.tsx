import * as React from "react";

export function KeyInsight({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-ink/[0.03] p-4 ring-1 ring-ink/10">
      <div className="text-sm">
        <span className="font-medium text-ink">Key Insight:</span>{" "}
        <span className="text-sub">{children}</span>
      </div>
    </div>
  );
}
