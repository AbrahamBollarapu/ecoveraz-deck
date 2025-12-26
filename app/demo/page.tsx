"use client";

import * as React from "react";
import { DemoPanel } from "@/components/demo/DemoPanel";
import { Pill } from "@/components/ui/Pill";
import { generateReading } from "@/lib/demo/simulator";

export default function DemoPage() {
  const [anomaly, setAnomaly] = React.useState(false);
  const [tamper, setTamper] = React.useState(false);

  const siteId = "SITE-001";
  const deviceId = "TYPE-A-001";
  const seed = 42;
  const period = "2025-12";

  const [now, setNow] = React.useState<number>(() => Date.now());

  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const latest = React.useMemo(
    () =>
      generateReading(now, {
        siteId,
        deviceId,
        seed,
        anomaly,
        tamper,
      }),
    [now, siteId, deviceId, seed, anomaly, tamper]
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs font-mono text-sub">DEMO (Track A)</div>
          <div className="mt-1 text-2xl font-semibold">EcoVeraZ Proof Interface</div>
          <div className="mt-2 text-sm text-sub">
            Deterministic, regulator-safe simulation — no real transactions, no marketing inflation.
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            className={`rounded-full border px-3 py-1 text-sm transition ${
              anomaly ? "border-evz-orange bg-evz-orange/10" : "border-line bg-bg hover:bg-ink/5"
            }`}
            onClick={() => setAnomaly((v) => !v)}
            type="button"
          >
            Toggle anomalies
          </button>
          <button
            className={`rounded-full border px-3 py-1 text-sm transition ${
              tamper ? "border-red-500 bg-red-500/10" : "border-line bg-bg hover:bg-ink/5"
            }`}
            onClick={() => setTamper((v) => !v)}
            type="button"
          >
            Toggle tamper
          </button>
          <Pill tone="neutral">SIMULATED</Pill>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-white p-4">
        <div className="grid gap-3 md:grid-cols-6">
          <Metric k="CO₂" v={`${latest.co2ppm} ppm`} />
          <Metric k="PM2.5" v={`${latest.pm25} µg/m³`} />
          <Metric k="PM10" v={`${latest.pm10} µg/m³`} />
          <Metric k="Temp" v={`${latest.tempC} °C`} />
          <Metric k="RH" v={`${latest.rh} %`} />
          <Metric k="Energy" v={`${latest.energyKw} kW`} />
        </div>
        <div className="mt-2 text-xs font-mono text-sub">
          {siteId} • {deviceId} • {new Date(latest.ts).toLocaleTimeString()}
        </div>
      </div>

      <div className="mt-6">
        <DemoPanel latest={latest} siteId={siteId} period={period} seed={seed} />
      </div>
    </div>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-line bg-bg p-3">
      <div className="text-xs font-mono text-sub">{k}</div>
      <div className="mt-1 text-lg font-semibold">{v}</div>
    </div>
  );
}
