import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-center gap-3">
          <Pill tone="good">EcoVeraZ</Pill>
          <Pill tone="neutral">Proof Interface</Pill>
          <Pill tone="warn">Light Theme</Pill>
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
          EcoVeraZ Code-Based Pitch (Web)
        </h1>
        <p className="mt-4 text-base md:text-lg text-sub max-w-3xl leading-relaxed">
          10 slides implemented (1–10). Keyboard-driven flow, YC-style headings, and demo-safe interactions.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="Pitch Flow" desc="Slides 1–10. Use ← / →.">
            <div className="mt-4 flex gap-3 flex-wrap">
              <Button asChild href="/pitch">Open /pitch</Button>
              <Button variant="secondary" asChild href="/pitch?mode=investor">Investor</Button>
              <Button variant="secondary" asChild href="/pitch?mode=regulator">Regulator</Button>
              <Button variant="secondary" asChild href="/pitch?mode=developer">Developer</Button>
            </div>
          </Card>

          <Card title="Demo Hub" desc="Audit simulator / penalty calc scaffolds.">
            <div className="mt-4">
              <Button asChild href="/demo">Open /demo</Button>
            </div>
          </Card>

          <Card title="Team" desc="Profiles scaffold.">
            <div className="mt-4">
              <Button asChild href="/team">Open /team</Button>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
