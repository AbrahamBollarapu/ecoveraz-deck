"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AccessPage() {
  const sp = useSearchParams();
  const router = useRouter();

  const next = sp.get("next") || "/pitch";
  const [key, setKey] = React.useState("");
  const [err, setErr] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);

    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });

      if (!res.ok) {
        setErr("Invalid access key.");
        setBusy(false);
        return;
      }

      router.replace(next);
      router.refresh();
    } catch {
      setErr("Unable to verify key. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-xs font-mono text-slate-500">EcoVeraZ • Private Deck</div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
          Access required
        </h1>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Enter the access key to view this deck. This environment is investor-safe and
          regulator-safe (placeholders labeled; no live blockchain).
        </p>

        <form onSubmit={submit} className="mt-5 space-y-3">
          <label className="block">
            <span className="text-xs font-mono text-slate-500">DECK_ACCESS_KEY</span>
            <input
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="Enter key"
              autoComplete="off"
            />
          </label>

          {err ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {err}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={busy || !key.trim()}
            className="w-full rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {busy ? "Verifying…" : "Continue"}
          </button>

          <div className="text-xs text-slate-500 leading-relaxed">
            Tip: You can share a link; access is still enforced for viewers without a valid key.
          </div>
        </form>
      </div>
    </div>
  );
}
