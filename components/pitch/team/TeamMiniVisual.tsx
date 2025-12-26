"use client";

import * as React from "react";
import { Pill } from "@/components/ui/Pill";

/**
 * Team mini-visual language (shared atoms)
 * - Consistent "avatar tile" placeholder
 * - Consistent section chips (Pills) row
 * - Consistent item tiles
 *
 * Notes:
 * - Keeps strict Datadog-like spacing and bounded content.
 * - PLACEHOLDER markers are explicit and audit-safe.
 */

export function TeamChipRow({
  items,
}: {
  items: Array<{ tone: "neutral" | "good" | "warn" | "bad"; label: string }>;
}) {
  return (
    <div className="mt-4 flex items-center gap-2 flex-wrap">
      {items.map((x) => (
        <Pill key={x.label} tone={x.tone}>
          {x.label}
        </Pill>
      ))}
    </div>
  );
}

export function AvatarTile({
  initials,
  note,
}: {
  initials: string;
  note?: string;
}) {
  return (
    <div className="shrink-0">
      <div className="h-10 w-10 rounded-xl border border-line bg-surface flex items-center justify-center">
        <span className="text-xs font-mono">{initials}</span>
      </div>
      {note ? <div className="mt-2 text-[11px] font-mono text-sub">{note}</div> : null}
    </div>
  );
}

export function Tile({
  children,
  tone = "bg-bg",
}: {
  children: React.ReactNode;
  tone?: string;
}) {
  return <div className={`rounded-2xl border border-line ${tone} p-4 min-w-0`}>{children}</div>;
}

export function MicroList({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="mt-3 space-y-2">
      {items.map((x) => (
        <div key={x} className="rounded-xl border border-line bg-surface px-3 py-2 text-sm text-sub">
          {x}
        </div>
      ))}
    </div>
  );
}

export function MetaLabel({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-xs font-mono text-sub">{label}</div>
      <div className="mt-1 text-sm text-sub">{value}</div>
    </div>
  );
}
