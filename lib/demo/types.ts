export type DemoMode = "investor" | "regulator" | "developer";

export type SensorReading = {
  ts: number; // epoch ms
  siteId: string;
  deviceId: string;
  co2ppm: number;
  pm25: number;
  pm10: number;
  tempC: number;
  rh: number;
  energyKw: number;
  flags?: {
    anomaly?: boolean;
    tamperSuspected?: boolean;
  };
};

export type ComplianceCheckResult = {
  id: string;
  framework: "EU-CSRD" | "IN-BRSR";
  check: string;
  status: "PASS" | "WARN" | "FAIL";
  evidenceHint: string;
};

export type EvidencePack = {
  packId: string;
  createdAt: string;
  siteId: string;
  period: string; // e.g. "2025-12"
  files: { name: string; type: "CSV" | "JSON" | "PDF" | "MANIFEST"; bytes: number }[];
  sha256: string;
  label: "SIMULATED" | "MODELLED";
};

export type AnchorReceipt = {
  status: "SIMULATED" | "PENDING" | "ANCHORED";
  network: "Polygon" | "Ethereum" | "Testnet" | "SIMULATED";
  txHash: string | null;
  blockNumber: number | null;
  anchoredAt: string | null;
};
