"use client";

import * as React from "react";
import { motion } from "framer-motion";

type Kicker = { label: string; value: string };

export function Slide1Cover() {
  const baseSensorTruth = "From Sensor Truth to Blockchain Verification";

  const kickers: Kicker[] = [
    { label: "PoC", value: "Ramky Tech Park" },
    { label: "Site", value: "SITE-001" },
    { label: "Status", value: "Live telemetry + audit pack" },
  ];

  return (
    <div className="h-full w-full">
      {/* HERO */}
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

            <div className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-white">
              Audit-Grade ESG Infrastructure
            </div>

            <div className="mt-2 text-sm md:text-base text-white/75">
              {baseSensorTruth}
            </div>
          </motion.div>

          {/* Divider */}
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

          {/* Tiny footer note */}
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
