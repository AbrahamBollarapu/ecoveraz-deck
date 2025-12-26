"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";

const COOKIE_NAME = "evz_deck_key";

// 1 year
const MAX_AGE = 60 * 60 * 24 * 365;

function setCookie(name: string, value: string) {
  // HTTPS site -> Safe to set Secure.
  // SameSite=Lax is fine for normal navigation.
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax; Secure`;
}

function clearCookie(name: string) {
  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
}

export default function AccessInner() {
  const sp = useSearchParams();
  const next = sp.get("next") || "/pitch";

  const [key, setKey] = React.useState("");
  const [busy, setBusy] = React.useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);

    // Store the key locally; middleware validates it on the next request.
    setCookie(COOKIE_NAME, key.trim());

    // Hard redirect so middleware runs immediately.
    window.location.href = next;
  }

  function onClear() {
    clearCookie(COOKIE_NAME);
    setKey("");
    // stay on access page
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <div className="text-xs font-mono text-subtle">ACCESS</div>
        <div className="mt-2 text-xl font-semibold text-ink">Enter access key</div>
        <div className="mt-1 text-sm text-subtle">
          Board-safe deck. Access is controlled via <span className="font-mono">DECK_ACCESS_KEY</span>.
        </div>

        <form className="mt-5 space-y-4" onSubmit={onSubmit}>
          <input
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="DECK_ACCESS_KEY"
            className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none"
            autoFocus
          />

          <div className="flex items-center justify-between gap-3">
            <div className="text-xs text-subtle">
              Redirect: <span className="font-mono">{next}</span>
            </div>

            <button
              type="submit"
              disabled={busy || key.trim().length === 0}
              className="rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            >
              Continue →
            </button>
          </div>

          <div className="text-xs text-subtle leading-relaxed">
            Note: This stores a local key in your browser. If the key is wrong, you’ll be redirected back here.
          </div>

          <button
            type="button"
            onClick={onClear}
            className="text-xs text-subtle underline underline-offset-4 hover:text-ink"
          >
            Clear stored key
          </button>
        </form>
      </div>
    </div>
  );
}
