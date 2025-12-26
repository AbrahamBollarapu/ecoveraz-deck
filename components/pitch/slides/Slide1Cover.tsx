"use client";

import * as React from "react";
import { motion } from "framer-motion";

type Metric = { icon: string; value: string; label: string };

export function Slide1Cover() {
  const baseSensors = 12450;
  const [liveSensors, setLiveSensors] = React.useState(baseSensors);
  const [speed, setSpeed] = React.useState(1);
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });

  const metrics: Metric[] = [
    { icon: "📡", value: liveSensors.toLocaleString(), label: "active sensors" },
    { icon: "🛡️", value: "387", label: "audits verified" },
    { icon: "🔗", value: "8,921", label: "blockchain hashes" }
  ];

  React.useEffect(() => {
    const t = window.setInterval(() => {
      // demo-safe jitter
      const jitter = Math.round((Math.random() - 0.5) * 18);
      setLiveSensors(baseSensors + jitter);
    }, 3000);
    return () => window.clearInterval(t);
  }, []);

  React.useEffect(() => {
    function onMove(e: MouseEvent) {
      const x = Math.min(1, Math.max(0, e.clientX / window.innerWidth));
      const y = Math.min(1, Math.max(0, e.clientY / window.innerHeight));
      setMouse({ x, y });
    }
    function onKey(e: KeyboardEvent) {
      if (e.code === "Space") {
        e.preventDefault();
        setSpeed((s) => (s === 1 ? 1.6 : s === 1.6 ? 0.7 : 1));
      }
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const flowSpeed = (0.6 + mouse.x * 1.2) * speed;

  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Full-bleed dark split background inside PitchFrame */}
      <div className="absolute inset-0 evz-dark">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #000814 0%, #0A1A2F 70%)" }} />
        <div className="evz-gridlines" />
        <div className="absolute inset-0 opacity-60" style={{
          background:
            "radial-gradient(900px 520px at 20% 20%, rgba(0,224,162,0.16), transparent 55%)," +
            "radial-gradient(760px 520px at 85% 25%, rgba(14,165,233,0.14), transparent 55%)"
        }} />
      </div>

      <div className="relative grid md:grid-cols-5 min-h-[520px]">
        {/* Left 40%: Earth */}
        <div className="md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10">
          <div className="text-xs font-mono text-white/70">THE TRUST LAYER</div>
          <div className="mt-4">
            <EarthPanel />
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#00E0A2]" style={{ animation: "evzPulseBar 2.4s ease-in-out infinite" }} />
              <span className="text-white/85">LIVE:</span>
              <span className="font-mono text-white/95">{liveSensors.toLocaleString()}</span>
              <span className="text-white/70">sensors transmitting</span>
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-white/12 bg-white/5 px-3 py-2">
                <div className="text-xs text-white/70">{m.icon} {m.label}</div>
                <div className="mt-1 text-sm font-mono text-white/95">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 60%: Hero content */}
        <div className="md:col-span-3 p-6 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <LogoWordmark />
            <div className="text-xs font-mono text-white/60">SPACE: speed toggle</div>
          </div>

          <div className="mt-8">
            <div className="text-[28px] md:text-[34px] tracking-wide font-light">
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #00E0A2, #0EA5E9)" }}>
                AUDIT-GRADE ESG INFRASTRUCTURE
              </span>
            </div>

            <div className="mt-3 text-lg md:text-xl text-white/90">
              From Physical Measurement to Legally Verifiable ESG Evidence
            </div>

            <div className="mt-5 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              We transform environmental data into regulator-proof ESG evidence.
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
                <span className="text-white/85 font-mono">AB</span>
              </div>
              <div>
                <div className="text-white/90 font-semibold">Abraham Bollarapu</div>
                <div className="text-white/65 text-sm">Founder & CEO</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/12 bg-white/5 p-5">
            <div className="text-xs font-mono text-white/70">DATA FLOW</div>
            <div className="mt-3 relative h-28 rounded-xl border border-white/10 bg-black/10 overflow-hidden">
              <ParticleField speed={flowSpeed} />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Node label="SENSORS" />
                <Arrow />
                <Node label="ANALYTICS" />
                <Arrow />
                <Node label="BLOCKCHAIN" accent />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="text-xs text-white/55 flex items-center gap-2">
              <span className="inline-block h-5 w-5 rounded-full border border-white/10 bg-white/5 flex items-center justify-center" style={{ animation: "evzFloat 2.2s ease-in-out infinite" }}>↓</span>
              <span>Use ← / → to navigate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoWordmark() {
  return (
    <div className="flex items-baseline gap-2">
      <div className="text-[44px] md:text-[56px] font-bold tracking-tight text-white/95 leading-none">
        ECO<span className="inline-block text-white/80">¯</span>VERA<span className="inline-block text-white/80">¯</span>Z
      </div>
    </div>
  );
}

function EarthPanel() {
  const [hint, setHint] = React.useState("Hover Earth: zoom to a sensor cluster");
  return (
    <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
      <div className="text-xs text-white/70">{hint}</div>
      <div className="mt-4 flex items-center justify-center">
        <div
          className="relative h-56 w-56 rounded-full"
          onMouseEnter={() => setHint("Cluster view: North America → verified stream")}
          onMouseLeave={() => setHint("Hover Earth: zoom to a sensor cluster")}
          style={{
            background:
              "radial-gradient(circle at 30% 25%, rgba(14,165,233,0.45), rgba(0,0,0,0) 55%)," +
              "radial-gradient(circle at 60% 70%, rgba(0,224,162,0.35), rgba(0,0,0,0) 55%)," +
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), rgba(0,0,0,0) 62%)," +
              "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.0), rgba(0,0,0,0.75) 70%)"
          }}
        >
          {/* Atmosphere */}
          <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 40px rgba(14,165,233,0.18), 0 0 80px rgba(0,224,162,0.10)" }} />

          {/* Sensor nodes */}
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i / 14) * Math.PI * 2;
            const r = 78 + (i % 4) * 8;
            const x = 50 + Math.cos(a) * (r / 112) * 50;
            const y = 50 + Math.sin(a) * (r / 112) * 50;
            return (
              <div
                key={i}
                className="absolute h-2 w-2 rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  background: i % 3 === 0 ? "#00E0A2" : "rgba(14,165,233,0.95)",
                  boxShadow: "0 0 10px rgba(0,224,162,0.55)"
                }}
              />
            );
          })}

          {/* Upward stream */}
          <div className="absolute left-1/2 -top-8 h-24 w-[2px] -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, rgba(0,224,162,0), rgba(0,224,162,0.9), rgba(14,165,233,0.0))" }} />
        </div>
      </div>
    </div>
  );
}

function ParticleField({ speed }: { speed: number }) {
  // fixed set for stability
  const particles = React.useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const top = Math.random() * 100;
      const delay = Math.random() * 2.5;
      const size = 2 + Math.random() * 3;
      const dur = 3 + Math.random() * 2.2;
      return { id: i, top, delay, size, dur };
    });
  }, []);

  return (
    <div className="absolute inset-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: "-20px",
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "linear-gradient(90deg, #00E0A2, #0EA5E9)",
            opacity: 0.85,
            animationName: "dataFlow",
            animationDuration: `${p.dur / speed}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
          }}
          title="Verified data point (demo)"
        />
      ))}

      <style jsx>{`
        @keyframes dataFlow {
          0% { transform: translateX(-60px) translateY(60px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(520px) translateY(-220px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function Node({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div className={`rounded-full border px-3 py-1.5 text-xs font-mono ${accent ? "border-[#00E0A2]/50 bg-[#00E0A2]/10 text-white" : "border-white/15 bg-white/5 text-white/80"}`}>
      {label}
    </div>
  );
}

function Arrow() {
  return <div className="text-white/45 text-sm">→</div>;
}
