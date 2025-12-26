"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";

export function Slide15Closing() {
  const year = new Date().getFullYear();
  const viewerId = React.useMemo(() => {
    // demo-safe viewer id
    const id = Math.random().toString(16).slice(2, 10).toUpperCase();
    return id;
  }, []);

  const qrUrl = `https://data.ecoveraz.com/access/${viewerId}`;

  function copy(text: string) {
    navigator.clipboard?.writeText(text).catch(() => {});
  }

  function requestAccess() {
    const subject = encodeURIComponent("EcoVeraZ — Request Info / Data Room Access");
    const body = encodeURIComponent(
      `Hi EcoVeraZ team,\n\nPlease share secure data room access.\n\nViewer ID: ${viewerId}\n\nThanks,\n`
    );
    window.open(`mailto:ab@ecoveraz.com?subject=${subject}&body=${body}`, "_self");
    console.log("trackSlideAction", { action: "request_access", viewerId });
  }

  return (
    <div className="relative rounded-2xl overflow-hidden evz-dark">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #000814 0%, #0A1A2F 100%)" }} />
      <div className="evz-gridlines" />
      <div className="absolute inset-0 opacity-70" style={{
        background:
          "radial-gradient(900px 520px at 20% 10%, rgba(0,224,162,0.14), transparent 55%)," +
          "radial-gradient(900px 520px at 90% 40%, rgba(14,165,233,0.12), transparent 55%)"
      }} />

      <div className="relative p-6 md:p-10">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Top zone */}
          <div className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold">THE PATH FORWARD</div>
                <p className="mt-3 text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
                  EcoVeraZ is building the trust infrastructure for the <span style={{ color: "#F59E0B" }}>$68B ESG enforcement market</span>.
                  <br />
                  Together, we can turn environmental truth into auditable, investable assets.
                </p>
                <div className="mt-4 text-white/80">Thank you.</div>
                <div className="mt-2 text-white/95 font-semibold">Let&apos;s build the ESG verification standard.</div>
              </div>

              <TrustSymbol />
            </div>
          </div>

          {/* Middle zone */}
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs font-mono text-white/70">CONTACT & NEXT STEPS</div>

            <div className="mt-4 flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl border border-white/12 bg-white/5 flex items-center justify-center relative group">
                <span className="text-white/90 font-mono text-lg">AB</span>
                <span className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full bg-[#00E0A2] text-black text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  ✓
                </span>
              </div>
              <div>
                <div className="text-white/95 font-semibold">Abraham Bollarapu</div>
                <div className="text-white/70 text-sm">Founder & CEO</div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <QuickLink label="www.ecoveraz.com" href="https://www.ecoveraz.com" />
              <QuickLink label="ab@ecoveraz.com" href="mailto:ab@ecoveraz.com" />
              <QuickLink label="@pitch/ecoveraz" href="https://pitch.com/ecoveraz" />
            </div>
          </div>

          {/* Bottom / docs zone */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs font-mono text-white/70">INVESTMENT MEMORANDUM</div>
            <div className="mt-3 text-white/85 text-sm">Full due diligence package available upon request:</div>

            <div className="mt-4 space-y-2">
              <Doc title="Financial projections (5-year model)" />
              <Doc title="Technical architecture deep dive" />
              <Doc title="Regulatory compliance matrix" />
              <Doc title="Patent portfolio" />
              <Doc title="Customer pipeline & LOIs" />
            </div>

            <div className="mt-5 rounded-xl border border-[#00E0A2]/35 bg-black/10 p-4">
              <div className="text-xs text-white/70">Personalized QR (demo)</div>
              <div className="mt-2 flex items-center gap-3">
                <QrStub onClick={() => copy(qrUrl)} />
                <div className="min-w-0">
                  <div className="text-sm font-mono text-white/85 truncate">{qrUrl}</div>
                  <div className="mt-1 text-xs text-white/60">Click QR to copy link • Viewer ID: <span className="font-mono">{viewerId}</span></div>
                </div>
              </div>
            </div>

            <button
              className="mt-5 w-full rounded-xl border border-[#00E0A2] bg-black/10 px-4 py-3 text-sm font-semibold transition hover:border-[#0EA5E9]"
              onClick={requestAccess}
            >
              🔒 Request Secure Data Room Access
            </button>
          </div>

          {/* Footer */}
          <div className="md:col-span-3 flex items-center justify-between text-xs text-white/60 px-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-white/10 bg-white/5">🛡️</span>
              <span className="tracking-wide">CONFIDENTIAL & PROPRIETARY</span>
            </div>
            <div>© {year} EcoVeraZ, Inc. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustSymbol() {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="relative h-20 w-20" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {hover ? (
        <>
          <span className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full border border-[#00E0A2]"
            style={{ animation: "evzRing 2.8s ease-out infinite" }} />
          <span className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full border border-[#00E0A2]"
            style={{ animation: "evzRing 2.8s ease-out infinite", animationDelay: "0.8s" }} />
          <span className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full border border-[#00E0A2]"
            style={{ animation: "evzRing 2.8s ease-out infinite", animationDelay: "1.6s" }} />
        </>
      ) : null}

      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
        <div style={{ animation: "evzLockSpin 10s linear infinite" }} aria-label="Trust lock icon">
          🔒
        </div>
      </div>
    </div>
  );
}

function QuickLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      className="rounded-xl border border-white/10 bg-black/10 px-3 py-3 text-sm text-white/85 hover:text-white hover:border-[#00E0A2]/40 transition"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      onClick={() => console.log("track", { action: "quicklink", href })}
    >
      {label}
    </a>
  );
}

function Doc({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80 hover:border-[#00E0A2]/35 transition">
      • {title}
    </div>
  );
}

function QrStub({ onClick }: { onClick: () => void }) {
  // This is a visually QR-like stub to avoid external network calls.
  const blocks = Array.from({ length: 49 }).map((_, i) => (i % 3 === 0 ? 1 : (i * 7) % 5 === 0 ? 1 : 0));
  return (
    <button onClick={onClick} className="h-24 w-24 rounded-lg border border-white/15 bg-white/5 p-2 hover:border-[#00E0A2]/40 transition" aria-label="QR code (demo)">
      <div className="grid grid-cols-7 gap-[2px]">
        {blocks.map((b, i) => (
          <div key={i} className="h-2 w-2" style={{ background: b ? "rgba(248,250,252,0.90)" : "rgba(248,250,252,0.12)" }} />
        ))}
      </div>
    </button>
  );
}
