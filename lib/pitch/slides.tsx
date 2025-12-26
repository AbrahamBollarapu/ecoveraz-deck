import * as React from "react";

import { Slide1Cover } from "@/components/pitch/slides/Slide1Cover";
import { Slide2Problem } from "@/components/pitch/slides/Slide2Problem";
import { Slide3Solution } from "@/components/pitch/slides/Slide3Solution";
import { Slide4WhyNow } from "@/components/pitch/slides/Slide4WhyNow";
import { Slide5Product } from "@/components/pitch/slides/Slide5Product";
import { Slide6Market } from "@/components/pitch/slides/Slide6Market";
import { Slide7BusinessModel } from "@/components/pitch/slides/Slide7BusinessModel";
import { Slide8Arr } from "@/components/pitch/slides/Slide8Arr";
import { Slide9Traction } from "@/components/pitch/slides/Slide9Traction";
import { Slide10Competition } from "@/components/pitch/slides/Slide10Competition";
import { Slide11Moat } from "@/components/pitch/slides/Slide11Moat";
import { Slide12Team } from "@/components/pitch/slides/Slide12Team";

/* POST-TEAM (files currently named 13/14/15) */
import { Slide13Roadmap } from "@/components/pitch/slides/Slide13Roadmap";
import { Slide14Ask } from "@/components/pitch/slides/Slide14Ask";
import { Slide15Closing } from "@/components/pitch/slides/Slide15Closing";

export type DemoMode = "investor" | "regulator" | "developer";

export type SlideDef = {
  kicker: string;
  headline: string;
  subtitle?: string;
  theme?: "light" | "dark";
  Component: React.ComponentType<{ mode: DemoMode }>;
};

/* Deterministic guard: never hard-crash the deck */
function safeSlide(
  C: unknown,
  exportName: string
): React.ComponentType<{ mode: DemoMode }> {
  if (typeof C === "function") return C as React.ComponentType<{ mode: DemoMode }>;

  const Missing: React.FC<{ mode: DemoMode }> = () => (
    <div className="h-full w-full rounded-2xl border border-red-500 bg-white p-8">
      <div className="text-xs font-mono text-red-600">BUILD ERROR (runtime)</div>
      <div className="mt-2 text-2xl font-semibold text-black">
        Missing slide export
      </div>
      <div className="mt-3 text-sm text-black">
        The slide component import resolved to{" "}
        <span className="font-mono font-semibold">undefined</span>.
      </div>
      <div className="mt-3 text-sm text-black">
        Fix: ensure the file exports a <b>named export</b>{" "}
        <span className="font-mono">{exportName}</span>.
      </div>
      <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-black">
        <div className="font-semibold">Expected named export:</div>
        <div className="mt-1 font-mono">{exportName}</div>
      </div>
    </div>
  );

  return Missing;
}

/* Wrapped slides */
const S1 = safeSlide(Slide1Cover, "Slide1Cover");
const S2 = safeSlide(Slide2Problem, "Slide2Problem");
const S3 = safeSlide(Slide3Solution, "Slide3Solution");
const S4 = safeSlide(Slide4WhyNow, "Slide4WhyNow");
const S5 = safeSlide(Slide5Product, "Slide5Product");
const S6 = safeSlide(Slide6Market, "Slide6Market");
const S7 = safeSlide(Slide7BusinessModel, "Slide7BusinessModel");
const S8 = safeSlide(Slide8Arr, "Slide8Arr");
const S9 = safeSlide(Slide9Traction, "Slide9Traction");
const S10 = safeSlide(Slide10Competition, "Slide10Competition");
const S11 = safeSlide(Slide11Moat, "Slide11Moat");

/* TEAM (MERGED BOARD VARIANT) */
const S12 = safeSlide(Slide12Team, "Slide12Team");

/* END */
const S13 = safeSlide(Slide13Roadmap, "Slide13Roadmap");
const S14 = safeSlide(Slide14Ask, "Slide14Ask");
const S15 = safeSlide(Slide15Closing, "Slide15Closing");

export const slides: SlideDef[] = [
  { kicker: "COVER", headline: "AUDIT-GRADE ESG INFRASTRUCTURE", subtitle: "From Sensor Truth to Blockchain Verification", theme: "dark", Component: S1 },
  { kicker: "PROBLEM", headline: "THE $100B COMPLIANCE CRISIS", subtitle: "Manual, unverifiable ESG reporting has become a balance-sheet liability.", Component: S2 },
  { kicker: "SOLUTION", headline: "ENFORCEMENT-GRADE ESG INFRASTRUCTURE", subtitle: "SENSORS → ANALYTICS → COMPLIANCE → CERTIFICATION → BLOCKCHAIN", Component: S3 },
  { kicker: "WHY NOW", headline: "MARKET INFLEXION: FROM VOLUNTARY TO ENFORCED", subtitle: "The global enforcement tipping point.", Component: S4 },
  { kicker: "PRODUCT", headline: "THE ECOVERAZ STACK", subtitle: "Physical truth → intelligence → compliance → certification → trust.", Component: S5 },
  { kicker: "MARKET", headline: "$68B MANDATORY ESG INFRASTRUCTURE MARKET", subtitle: "TAM → SAM → SOM with expansion upside.", Component: S6 },
  { kicker: "BUSINESS MODEL", headline: "B2B SAAS + INFRASTRUCTURE", subtitle: "Per-site subscription + certifications + data.", Component: S7 },
  { kicker: "FINANCIALS", headline: "PATH TO $2M ARR (18 MONTHS)", subtitle: "Unit economics + Monte Carlo sensitivity.", Component: S8 },
  { kicker: "TRACTION", headline: "VALIDATED WITH ENTERPRISE & REGULATORS", subtitle: "Live PoC, pipeline, and audit readiness.", Component: S9 },
  { kicker: "COMPETITION", headline: "WHY WE WIN", subtitle: "End-to-end verifiable truth.", Component: S10 },
  { kicker: "MOAT", headline: "DEEPLY DEFENSIBLE", subtitle: "Five compounding layers.", Component: S11 },

  /* BOARD MERGE: TEAM + ORG + FOOTPRINT + HIRING + ADVISORS */
  { kicker: "TEAM", headline: "FOUNDER-LED EXECUTION", subtitle: "Team, structure, footprint, hiring, advisors — condensed for board.", Component: S12 },

  /* END */
  { kicker: "ROADMAP", headline: "18-MONTH ROADMAP", subtitle: "Evidence → certification → carbon markets.", Component: S13 },
  { kicker: "ASK", headline: "THE ASK", subtitle: "$2.1M for 15%", Component: S14 },
  { kicker: "CLOSING", headline: "THE PATH FORWARD", subtitle: "Next steps & contact.", theme: "dark", Component: S15 },
];
