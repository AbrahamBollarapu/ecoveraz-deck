"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";

export function PitchFrame({
  mode,
  theme = "light",
  index,
  total,
  kicker,
  headline,
  subtitle,
  onPrev,
  onNext,
  children,
}: {
  mode: "investor" | "regulator" | "developer";
  theme?: "light" | "dark";
  index: number;
  total: number;
  kicker: string;
  headline: string;
  subtitle?: string;
  onPrev: () => void;
  onNext: () => void;
  children: React.ReactNode;
}) {
  const progress = Math.round(((index + 1) / total) * 100);

  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Keyboard navigation (avoid hijacking when user is typing/dragging inputs)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      const tag = el?.tagName?.toLowerCase();
      const isEditable =
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        el?.isContentEditable;

      if (isEditable) return;

      if (e.key === "ArrowLeft") {
        if (!isFirst) onPrev();
      }
      if (e.key === "ArrowRight") {
        if (!isLast) onNext();
      }
      if (e.key === "Escape") {
        // noop placeholder; keeps UX parity
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPrev, onNext, isFirst, isLast]);

  return (
    <div className="w-full px-6 py-8">
      {/* Top chrome: mode pills + nav */}
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Pill tone="neutral">PITCH</Pill>
          <Pill tone={mode === "investor" ? "good" : "neutral"}>
            {mode.toUpperCase()}
          </Pill>
          <Pill tone="neutral">{kicker}</Pill>
        </div>

        <div className="flex items-center gap-3">
          {/* Prev (no disabled prop; wrapper simulates disabled) */}
          <div className={isFirst ? "pointer-events-none opacity-40" : ""}>
            <Button
              variant="ghost"
              onClick={() => {
                if (isFirst) return;
                onPrev();
              }}
            >
              ← Prev
            </Button>
          </div>

          {/* Next (no disabled prop; wrapper simulates disabled) */}
          <div className={isLast ? "pointer-events-none opacity-40" : ""}>
            <Button
              onClick={() => {
                if (isLast) return;
                onNext();
              }}
            >
              Next →
            </Button>
          </div>
        </div>
      </div>

      {/* Slide stage */}
      <div className="mx-auto mt-6 w-full max-w-[1600px]">
        <div className="evz-stage-wrap">
          <div
            className={`evz-slide ${
              theme === "dark" ? "evz-dark" : "evz-light"
            }`}
          >
            {/* Header inside slide (ppt-like) */}
            <div className="evz-slide-top">
              <div className="flex items-start gap-3">
                <img
                  src="/assets/logo.png"
                  alt="EcoVeraZ"
                  className={`mt-0.5 h-7 w-auto ${
                    theme === "dark" ? "evz-logo-dark" : "evz-logo-light"
                  }`}
                />
                <div className="min-w-0">
                  <div className="text-xs font-mono text-sub">{kicker}</div>
                  <div className="mt-1 text-2xl font-semibold leading-tight text-ink md:text-3xl">
                    {headline}
                  </div>
                  {subtitle ? (
                    <div className="mt-1 text-sm text-sub md:text-base">
                      {subtitle}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-sub">Slide</div>
                <div className="mt-1 text-sm font-mono text-ink">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Content (bounded) */}
            <div className="evz-slide-body overflow-auto">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full w-full min-w-0"
              >
                {children}
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="evz-slide-bottom">
              <div
                className={`h-2 w-full overflow-hidden rounded-full ${
                  theme === "dark" ? "bg-white/10" : "bg-ink/5"
                }`}
              >
                <div
                  className="h-2 rounded-full bg-evz-green"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div
                className={`mt-2 flex justify-between text-xs ${
                  theme === "dark" ? "text-white/70" : "text-sub"
                }`}
              >
                <span className="font-mono">← / →</span>
                <span>{progress}%</span>
                <span className="font-mono">ESC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
