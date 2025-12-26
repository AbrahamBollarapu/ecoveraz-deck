"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { PitchFrame } from "@/components/pitch/PitchFrame";
import { slides } from "@/lib/pitch/slides";
import { getModeFromSearchParams } from "@/lib/demo/modes";

export default function PitchPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const mode = getModeFromSearchParams(sp);

  const [index, setIndex] = React.useState(0);
  const total = slides.length;

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, total - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
      if (e.key === "Escape") router.push("/");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, total]);

  const current = slides[index];

  return (
    <AppShell>
      <PitchFrame
        mode={mode}
        index={index}
        total={total}
        kicker={current.kicker}
        headline={current.headline}
        subtitle={current.subtitle}
        theme={current.theme ?? "light"}
        onPrev={() => setIndex((i) => Math.max(i - 1, 0))}
        onNext={() => setIndex((i) => Math.min(i + 1, total - 1))}
      >
        <current.Component mode={mode} />
      </PitchFrame>
    </AppShell>
  );
}
