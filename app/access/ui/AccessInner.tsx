"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

const LS_KEY = "EVZ_DECK_ACCESS_KEY";
const COOKIE_NAME = "evz_deck_key";
const MAX_AGE_DAYS = 30;

function setCookie(name: string, value: string) {
  const maxAge = MAX_AGE_DAYS * 24 * 60 * 60; // seconds
  // SameSite=Lax works well for typical navigation
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; samesite=lax; max-age=${maxAge}`;
}

function clearCookie(name: string) {
  document.cookie = `${name}=; path=/; samesite=lax; max-age=0`;
}

export default function AccessInner() {
  const router = useRouter();
  const sp = useSearchParams();

  const nextPath = sp.get("next") || "/pitch";

  const [key, setKey] = React.useState("");
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect(() => {
    // If user already tried a key before and still got redirected here,
    // show a friendly hint (no server info needed).
    const prev = typeof window !== "undefined" ? localStorage.getItem(LS_KEY) : null;
    if (prev && !err) {
      setErr("Access key was not accepted (or deployment not updated). Please re-enter the key.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function submit() {
    const trimmed = key.trim();
    setErr(null);

    if (!trimmed) {
      setErr("Please enter the access key.");
      return;
    }

    // 1) Store locally (your UI pattern)
    localStorage.setItem(LS_KEY, trimmed);

    // 2) ✅ Store cookie for middleware (this is the missing piece)
    setCookie(COOKIE_NAME, trimmed);

    // 3) Navigate
    router.push(nextPath);
  }

  function reset() {
    setKey("");
    setErr(null);
    localStorage.removeItem(LS_KEY);
    clearCookie(COOKIE_NAME);
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <div className="text-xs font-mono text-sub">ACCESS</div>
        <div className="mt-2 text-xl font-semibold text-ink">Enter access key</div>
        <div className="mt-1 text-sm text-sub">
          Board-safe deck. Access is controlled via <span className="font-mono">DECK_ACCESS_KEY</span>.
        </div>

        <input
          className="mt-4 w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none"
          placeholder="DECK_ACCESS_KEY"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
        />

        {err ? <div className="mt-2 text-sm text-red-600">{err}</div> : null}

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-xs text-sub">
            Redirect: <span className="font-mono">{nextPath}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={reset}
              className="text-xs text-sub underline underline-offset-4"
            >
              Reset
            </button>
            <Button onClick={submit}>Continue →</Button>
          </div>
        </div>

        <div className="mt-4 text-xs text-sub leading-relaxed">
          Note: This stores a local key and a cookie in your browser. Middleware uses the cookie to
          allow protected routes.
        </div>
      </div>
    </div>
  );
}
