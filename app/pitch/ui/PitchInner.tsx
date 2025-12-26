"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

// ✅ Update this import to whatever you currently render for the deck UI:
import { PitchApp } from "@/components/pitch/PitchApp";

export default function PitchInner() {
  const router = useRouter();
  const sp = useSearchParams();

  // mode is optional: ?mode=investor|regulator|developer
  const modeParam = sp.get("mode");
  const mode =
    modeParam === "regulator" || modeParam === "developer" ? modeParam : "investor";

  // Client-side access key check (matches your DECK gate pattern)
  React.useEffect(() => {
    const key = localStorage.getItem("EVZ_DECK_ACCESS_KEY");
    if (!key) {
      router.replace(`/access?next=${encodeURIComponent("/pitch")}`);
    }
  }, [router]);

  return <PitchApp mode={mode} />;
}

