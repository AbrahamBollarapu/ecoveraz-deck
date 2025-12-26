import * as React from "react";
import Link from "next/link";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
        <div className="mx-auto w-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-evz-green/10 border border-evz-green/20 shadow-soft" />
            <div>
              <div className="text-sm font-semibold">EcoVeraZ</div>
              <div className="text-xs text-sub">Audit-grade ESG infrastructure</div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm text-sub">
            <Link className="hover:text-ink" href="/pitch">Pitch</Link>
            <Link className="hover:text-ink" href="/demo">Demo</Link>
            <Link className="hover:text-ink" href="/team">Team</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-line">
        <div className="mx-auto w-full px-6 py-6 text-xs text-sub flex items-center justify-between">
          <div>© {new Date().getFullYear()} EcoVeraZ, Inc.</div>
          <div className="font-mono">v1.0.0</div>
        </div>
      </footer>
    </div>
  );
}
