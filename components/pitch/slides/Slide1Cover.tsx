"use client";

import * as React from "react";
import { motion } from "framer-motion";

type Kicker = { label: string; value: string };

export function Slide1Cover() {
  const mobileHeadline = "Operational measurements → audit-ready evidence";
  const tabletHeadline = "Audit-Grade ESG Infrastructure";

  const subline =
    "Turning real-world operational data into verifiable, regulator-grade proof.";

  const kickers: Kicker[] = [
    { label: "Deployment", value: "Enterprise-ready" },
    { label: "Scope", value: "Multi-site ESG" },
    { label: "Status", value: "Live telemetry + audit packs" },
  ];

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col justify-between">
        {/* Upper headline area */}
        <div className="mt-2">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-[980px]"
          >
            <div className="uppercase tracking-[0.22em] text-[11px] font-mono text-white/70">
              EcoVeraZ — Investor Pitch
            </div>

            {/* Mobile headline */}
            <div className="mt-3 block md:hidden text-[22px] font-semibold leading-snug text-white">
              {mobileHeadline}
            </div>

            {/* Tablet headline */}
            <div className="mt-3 hidden md:block text-5xl font-semibold leading-tight text-white">
              {tabletHeadline}
            </div>

            <div className="mt-2 text-sm md:text-base text-white/75 max-w-[720px]">
              {subline}
            </div>
          </motion.div>

          <div className="mt-6 h-px w-full bg-white/10" />
        </div>

        {/* Lower KPI bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="pb-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {kickers.map((k) => (
              <div
                key={k.label}
                className="evz-card px-4 py-3"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                  borderColor: "rgba(255,255,255,0.10)",
                }}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                  {k.label}
                </div>
                <div className="mt-1 text-sm md:text-base font-semibold text-white">
                  {k.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-white/55">
            <span className="font-mono">
              contact@ecoveraz.com • www.ecoveraz.com
            </span>
            <span className="font-mono">Deck v1</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
