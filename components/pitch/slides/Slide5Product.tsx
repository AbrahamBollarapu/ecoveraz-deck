"use client";

import * as React from "react";
import { HeadlineBlock } from "@/components/pitch/uvcs/HeadlineBlock";
import { StackDiagram, Layer } from "@/components/pitch/uvcs/StackDiagram";

type DemoMode = "investor" | "regulator" | "developer";

const layers: Layer[] = [
  {
    title: "Trust Layer",
    body: "Independent verification, integrity controls, blockchain anchoring.",
  },
  {
    title: "Certification Layer",
    body: "Review-ready outputs: audit packs, manifests, evidence PDFs.",
  },
  {
    title: "Compliance Layer",
    body: "Regulation mapping: CSRD, BRSR, SEC, GCC — policy gates.",
  },
  {
    title: "Intelligence Layer",
    body: "Signal→metric transformation, anomaly detection, ESG scoring.",
  },
  {
    title: "Physical Layer",
    body: "Direct operational measurements from sensors and systems.",
  },
];

export function Slide5Product({ mode }: { mode: DemoMode }) {
  return (
    <div className="h-full w-full">
      <HeadlineBlock
        title="From Physical Truth to Verifiable Trust: Our 5-Layer Infrastructure"
        subtitle="A clean stack from measurement → intelligence → compliance → certification → trust."
      />

      {/* Mobile: readable list (avoid dense diagram squeeze) */}
      <div className="block md:hidden mt-4 space-y-4">
        <div className="text-sm text-white/85 max-w-[560px]">
          EcoVeraZ is built as a 5-layer evidence stack: measurement → intelligence → compliance → certification → trust.
        </div>

        <ul className="text-sm text-white/80 list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium text-white/90">Physical:</span> direct operational measurements
          </li>
          <li>
            <span className="font-medium text-white/90">Intelligence:</span> metrics, anomalies, ESG scoring
          </li>
          <li>
            <span className="font-medium text-white/90">Compliance:</span> policy gates (CSRD/BRSR/SEC/GCC)
          </li>
          <li>
            <span className="font-medium text-white/90">Certification:</span> audit packs, manifests, evidence PDFs
          </li>
          <li>
            <span className="font-medium text-white/90">Trust:</span> integrity controls & blockchain anchoring
          </li>
        </ul>
      </div>

      {/* Tablet/Desktop: keep your diagram */}
      <div className="hidden md:block">
        <StackDiagram layers={layers} dark={false} />
      </div>
    </div>
  );
}
