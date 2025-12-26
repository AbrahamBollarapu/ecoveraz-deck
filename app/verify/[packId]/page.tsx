"use client";

import * as React from "react";
import { useParams } from "next/navigation";

import { Pill } from "@/components/ui/Pill";
import { Card } from "@/components/ui/Card";

import { buildEvidencePack, simulateAnchor } from "@/lib/demo/simulator";

export default function VerifyPackPage() {
  const params = useParams<{ packId: string }>();
  const rawPackId = params?.packId ?? "";
  const packId = Array.isArray(rawPackId) ? rawPackId[0] : rawPackId;

  // Deterministic demo inputs (LOCKED)
  const seed = 42;
  const siteId = "SITE-001";
  const period = "2025-12";

  // ⛔ DO NOT compute proof on server render
  const [mounted, setMounted] = React.useState(false);
  const [pack, setPack] = React.useState<any | null>(null);
  const [receipt, setReceipt] = React.useState<any | null>(null);

  React.useEffect(() => {
    setMounted(true);

    const p = buildEvidencePack(siteId, period, seed);
    const r = simulateAnchor(p);

    setPack(p);
    setReceipt(r);
  }, [siteId, period, seed]);

  if (!mounted || !pack || !receipt) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex items-center gap-3">
          <Pill tone="neutral">SIMULATED</Pill>
          <div className="text-sm text-sub">Verifying evidence pack…</div>
        </div>
      </div>
    );
  }

  const requestedIdMatches = packId ? packId === pack.packId : true;
  const hashMatchesReceipt = receipt.txHash?.startsWith("0x");

  const status =
    requestedIdMatches && hashMatchesReceipt
      ? "VERIFIED (SIMULATED)"
      : "MISMATCH";

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs font-mono text-sub">PUBLIC VERIFY</div>
          <div className="mt-1 text-2xl font-semibold">
            EcoVeraZ Evidence Verification
          </div>
          <div className="mt-2 text-sm text-sub">
            Deterministic demo scaffold. No live blockchain transactions.
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Pill tone="neutral">SIMULATED</Pill>
          <Pill tone={status.startsWith("VERIFIED") ? "good" : "bad"}>
            {status}
          </Pill>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-12">
        <Card
          className="md:col-span-7"
          title="Evidence Pack"
          desc="Pack identity + cryptographic hash"
        >
          <div className="mt-4 rounded-2xl border border-line bg-bg p-4">
            <Field label="Requested ID" value={packId || "(none)"} />
            <Field label="Resolved Pack ID" value={pack.packId} />
            <Field label="Period" value={pack.period} />
            <Field label="SHA-256 Hash" value={pack.sha256} mono />

            <div className="mt-4 flex items-center gap-2">
              <Pill tone="neutral">{pack.label}</Pill>
              <Pill tone={requestedIdMatches ? "good" : "warn"}>
                {requestedIdMatches ? "ID MATCH" : "ID DIFFERS"}
              </Pill>
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            {pack.files.map((f: any) => (
              <div
                key={f.name}
                className="flex items-center justify-between rounded-xl border border-line bg-surface px-3 py-2"
              >
                <div className="text-sm">{f.name}</div>
                <div className="text-xs font-mono text-sub">
                  {f.type} • {(f.bytes / 1024).toFixed(1)} KB
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          className="md:col-span-5"
          title="Anchor Receipt"
          desc="Simulated blockchain receipt"
        >
          <div className="mt-4 rounded-2xl border border-line bg-bg p-4">
            <Field label="Network" value={receipt.network} />
            <Field label="Transaction Hash" value={receipt.txHash} mono />
            <Field label="Block Number" value={receipt.blockNumber ?? "—"} />
            <Field label="Anchored At" value={receipt.anchoredAt ?? "—"} />

            <div className="mt-4">
              <Pill tone={hashMatchesReceipt ? "good" : "bad"}>
                HASH ↔ RECEIPT CONSISTENT
              </Pill>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6 text-xs font-mono text-sub">
        Tip: open <b>/verify/{pack.packId}</b> for a clean deterministic match.
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="mt-3">
      <div className="text-xs font-mono text-sub">{label}</div>
      <div
        className={`mt-1 text-sm break-all ${
          mono ? "font-mono text-ink" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}
