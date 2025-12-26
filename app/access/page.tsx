import * as React from "react";
import { Suspense } from "react";
import AccessInner from "./ui/AccessInner";

export const dynamic = "force-dynamic"; // important for env-based gating

export default function AccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-sm text-subtle">Loading secure deck…</div>
        </div>
      }
    >
      <AccessInner />
    </Suspense>
  );
}
