import * as React from "react";
import { Suspense } from "react";
import PitchInner from "./ui/PitchInner";

export default function PitchPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-sub">Loading…</div>}>
      <PitchInner />
    </Suspense>
  );
}
