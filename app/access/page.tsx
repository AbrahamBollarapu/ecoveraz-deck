import * as React from "react";
import { Suspense } from "react";
import AccessInner from "./ui/AccessInner";

export default function AccessPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-sub">Loading…</div>}>
      <AccessInner />
    </Suspense>
  );
}
