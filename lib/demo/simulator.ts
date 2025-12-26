import type { SensorReading, ComplianceCheckResult, EvidencePack, AnchorReceipt } from "./types";

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

function hashLike(input: string) {
  // Deterministic “hash-like” string (NOT cryptographic) — demo safe.
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const hex = (h >>> 0).toString(16).padStart(8, "0");
  return `sha256:${hex}${hex}${hex}${hex}${hex}${hex}${hex}${hex}`;
}

export type StreamConfig = {
  siteId: string;
  deviceId: string;
  seed: number;
  anomaly: boolean;
  tamper: boolean;
};

export function generateReading(now: number, cfg: StreamConfig): SensorReading {
  const t = now / 1000;
  const wave = Math.sin((t + cfg.seed) / 7) * 0.5 + Math.sin((t + cfg.seed) / 19) * 0.3;

  let co2 = 560 + wave * 180;
  let pm25 = 8 + (wave + 0.2) * 6;
  let pm10 = 18 + (wave + 0.3) * 10;
  let temp = 24 + wave * 1.8;
  let rh = 52 + wave * 6;
  let kw = 1.2 + (wave + 0.1) * 0.6;

  if (cfg.anomaly) {
    // deterministic spikes
    const spike = Math.sin((t + cfg.seed) / 2) > 0.96;
    if (spike) {
      co2 += 900;
      pm25 += 60;
      pm10 += 120;
      kw += 1.8;
    }
  }

  if (cfg.tamper) {
    // tamper = “too clean” + repeating pattern (audit suspicion)
    pm25 = 3.2;
    pm10 = 6.1;
    rh = 49.0;
    co2 = 520.0;
  }

  return {
    ts: now,
    siteId: cfg.siteId,
    deviceId: cfg.deviceId,
    co2ppm: Math.round(clamp(co2, 400, 2200)),
    pm25: Math.round(clamp(pm25, 1, 250) * 10) / 10,
    pm10: Math.round(clamp(pm10, 2, 400) * 10) / 10,
    tempC: Math.round(clamp(temp, 16, 34) * 10) / 10,
    rh: Math.round(clamp(rh, 20, 80) * 10) / 10,
    energyKw: Math.round(clamp(kw, 0, 8) * 100) / 100,
    flags: {
      anomaly: cfg.anomaly,
      tamperSuspected: cfg.tamper,
    },
  };
}

export function runComplianceChecks(latest: SensorReading): ComplianceCheckResult[] {
  // Deterministic + explainable; “regulator-safe scaffold”
  const csrd: ComplianceCheckResult[] = [
    {
      id: "csrd-1",
      framework: "EU-CSRD",
      check: "Evidence completeness (raw + derived + manifest)",
      status: "PASS",
      evidenceHint: "CSV + JSON + MANIFEST present",
    },
    {
      id: "csrd-2",
      framework: "EU-CSRD",
      check: "Anomaly disclosure readiness",
      status: latest.flags?.anomaly ? "WARN" : "PASS",
      evidenceHint: latest.flags?.anomaly ? "Spike detected → disclose incident window" : "No incidents flagged",
    },
    {
      id: "csrd-3",
      framework: "EU-CSRD",
      check: "Tamper risk heuristic",
      status: latest.flags?.tamperSuspected ? "FAIL" : "PASS",
      evidenceHint: latest.flags?.tamperSuspected ? "Pattern too clean / repeated → investigate device" : "No tamper indicators",
    },
  ];

  const brsr: ComplianceCheckResult[] = [
    {
      id: "brsr-1",
      framework: "IN-BRSR",
      check: "Operational measurement traceability",
      status: "PASS",
      evidenceHint: "DeviceId + siteId + timestamps present",
    },
    {
      id: "brsr-2",
      framework: "IN-BRSR",
      check: "Energy reporting plausibility",
      status: latest.energyKw > 6 ? "WARN" : "PASS",
      evidenceHint: latest.energyKw > 6 ? "High load window → confirm equipment schedule" : "Within expected band",
    },
  ];

  return [...csrd, ...brsr];
}

export function buildEvidencePack(siteId: string, period: string, seed: number): EvidencePack {
  const packId = `EVZ-PACK-${siteId}-${period}`;
  const createdAt = new Date().toISOString();
  const files = [
    { name: `raw_telemetry_${period}.csv`, type: "CSV" as const, bytes: 248_120 },
    { name: `derived_metrics_${period}.json`, type: "JSON" as const, bytes: 52_340 },
    { name: `evidence_report_${period}.pdf`, type: "PDF" as const, bytes: 186_900 },
    { name: `manifest_${period}.json`, type: "MANIFEST" as const, bytes: 4_820 },
  ];
  const sha256 = hashLike(`${packId}:${createdAt}:${seed}`);
  return { packId, createdAt, siteId, period, files, sha256, label: "SIMULATED" };
}

export function simulateAnchor(pack: EvidencePack): AnchorReceipt {
  const txHash = hashLike(pack.sha256).replace("sha256:", "0x").slice(0, 66);
  return {
    status: "SIMULATED",
    network: "SIMULATED",
    txHash,
    blockNumber: null,
    anchoredAt: null,
  };
}
