"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function AccessInner() {
  const router = useRouter();
  const sp = useSearchParams();

  // Canonical protected route
  const nextPath = sp.get("next") || "/pitch";

  const [key, setKey] = React.useState("");
  const [err, setErr] = React.useState<string | null>(null);

  function submit() {
    setErr(null);

    const expected =
      process.env.NEXT_PUBLIC_DECK_ACCESS_KEY ||
      process.env.DECK_ACCESS_KEY;

    if (!expected || key.trim() !== expected) {
      setErr("Invalid access key");
      return;
    }

    // ✅ Store boolean flag (NOT the raw key)
    localStorage.setItem("evz_deck_granted", "true");

    // ✅ Sync flag to cookie for middleware
    document.cookie = "evz_deck_granted=true; path=/; SameSite=Lax";

    // ✅ Hard redirect to canonical protected route
    router.replace(nextPath);
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <div className="text-xs font-mono text-sub">ACCESS</div>
        <div className="mt-2 text-xl font-semibold text-ink">
          Enter access key
        </div>
        <div className="mt-1 text-sm text-sub">
          Board-safe deck. Access is controlled via{" "}
          <span className="font-mono">DECK_ACCESS_KEY</span>.
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
          <Button onClick={submit}>Continue →</Button>
        </div>

        <div className="mt-4 text-xs text-sub leading-relaxed">
          Note: A secure session flag is stored locally and in a cookie to
          enable server-side protection.
        </div>
      </div>
    </div>
  );
}
