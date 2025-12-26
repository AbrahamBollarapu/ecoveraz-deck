"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function AccessInner() {
  const router = useRouter();
  const sp = useSearchParams();
  const nextPath = sp.get("next") || "/pitch";

  const [key, setKey] = React.useState("");

  function grantAccess() {
    const isHttps = window.location.protocol === "https:";
    const maxAge = 60 * 60 * 24 * 30; // 30 days

    // ✅ Set cookie for middleware
    document.cookie = [
      "evz_deck_granted=true",
      "path=/",
      "SameSite=Lax",
      `Max-Age=${maxAge}`,
      isHttps ? "Secure" : "",
    ]
      .filter(Boolean)
      .join("; ");

    // ✅ Optional localStorage (UX only)
    localStorage.setItem("evz_deck_granted", "true");

    // ✅ Redirect
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
          Board-safe deck. Access is controlled server-side.
        </div>

        <input
          className="mt-4 w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none"
          placeholder="DECK_ACCESS_KEY"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && grantAccess()}
        />

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-xs text-sub">
            Redirect: <span className="font-mono">{nextPath}</span>
          </div>
          <Button onClick={grantAccess}>Continue →</Button>
        </div>

        <div className="mt-4 text-xs text-sub leading-relaxed">
          Note: Access is enforced server-side via middleware.
        </div>
      </div>
    </div>
  );
}
