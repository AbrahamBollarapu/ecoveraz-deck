"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PitchFrame } from "@/components/pitch/PitchFrame";
import { slides } from "@/lib/pitch/slides";

type DemoMode = "investor" | "regulator" | "developer";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function renderSlideContent(slide: unknown, mode: DemoMode): React.ReactNode {
  if (!slide) return null;

  // We intentionally use a tolerant shape here because SlideDef differs across iterations.
  const s = slide as any;

  // 1) render({mode}) style
  if (typeof s.render === "function") {
    return s.render({ mode });
  }

  // 2) Component prop style
  if (typeof s.Component === "function") {
    const C = s.Component as React.ComponentType<{ mode: DemoMode }>;
    return <C mode={mode} />;
  }

  // 3) component prop style
  if (typeof s.component === "function") {
    const C = s.component as React.ComponentType<{ mode: DemoMode }>;
    return <C mode={mode} />;
  }

  // 4) element/content node style
  if (React.isValidElement(s.element)) return s.element;
  if (React.isValidElement(s.content)) return s.content;

  return null;
}

function PitchInnerImpl() {
  const router = useRouter();
  const sp = useSearchParams();

  const modeParam = sp.get("mode") as DemoMode | null;
  const mode: DemoMode =
    modeParam === "regulator" || modeParam === "developer" ? modeParam : "investor";

  const sParam = sp.get("s");
  const initialIndex = sParam ? clamp(parseInt(sParam, 10) - 1, 0, slides.length - 1) : 0;

  const [index, setIndex] = React.useState<number>(
    Number.isFinite(initialIndex) ? initialIndex : 0
  );

  // Client-side access check (simple gate)
  React.useEffect(() => {
    const key = localStorage.getItem("EVZ_DECK_ACCESS_KEY");
    if (!key) {
      router.replace(`/access?next=${encodeURIComponent("/pitch")}`);
    }
  }, [router]);

  const slide = slides[index] as any;

  const onPrev = React.useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const onNext = React.useCallback(
    () => setIndex((i) => Math.min(slides.length - 1, i + 1)),
    []
  );

  // Keep URL in sync (board-friendly)
  React.useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("s", String(index + 1));
    url.searchParams.set("mode", mode);
    window.history.replaceState({}, "", url.toString());
  }, [index, mode]);

  return (
    <PitchFrame
      mode={mode}
      theme={slide?.theme ?? "light"}
      index={index}
      total={slides.length}
      kicker={slide?.kicker ?? "PITCH"}
      headline={slide?.headline ?? "EcoVeraZ"}
      subtitle={slide?.subtitle}
      onPrev={onPrev}
      onNext={onNext}
    >
      {renderSlideContent(slide, mode)}
    </PitchFrame>
  );
}

/**
 * Export-safe wrapper:
 * Next.js requires useSearchParams() callers to be under a Suspense boundary.
 * This keeps the contract local to PitchInner and avoids page-level regressions.
 */
export default function PitchInner() {
  return (
    <React.Suspense fallback={null}>
      <PitchInnerImpl />
    </React.Suspense>
  );
}
