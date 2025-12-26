// app/team/page.tsx

type Person = {
  name: string;
  role: string;
  focus: string[];
  note?: string;
};

const EXEC_TEAM: Person[] = [
  {
    name: "Abraham Bollarapu",
    role: "Founder & CEO",
    focus: [
      "Evidence-first product execution",
      "Systems delivery + entrepreneurship",
      "45 years across engineering (mechanical, instrumentation, software)",
    ],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Dr Evzen Thoendel",
    role: "Chief Technical Officer",
    focus: ["Architecture + defensibility", "R&D + standards alignment", "Audit-grade evidence systems"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Avinash Nuthakki",
    role: "Chief Marketing Officer",
    focus: ["Positioning + narrative", "Enterprise go-to-market", "Category design (proof-first)"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Prabhu Devunivari",
    role: "Chief Operating Officer",
    focus: ["Delivery operations", "Multi-site rollout", "Customer success execution"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Rajinikanth Siddamshetty",
    role: "Chief Growth Officer",
    focus: ["Pipeline generation", "Partner-led growth", "Expansion playbooks"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Madhusudhana Rao Rachaputi",
    role: "Legal & Compliances Officer",
    focus: ["Contract risk", "Compliance posture", "Policy + governance readiness"],
    note: "PLACEHOLDER — headshot",
  },
  {
    name: "Raghuram Palirisetty",
    role: "Chief Contracts Officer",
    focus: ["Enterprise contracts", "Commercial terms", "Delivery governance"],
    note: "PLACEHOLDER — headshot",
  },
];

const ADVISOR: Person = {
  name: "Fahmi Owaidah",
  role: "Advisor for Middle Eastern Marketing",
  focus: ["Market entry support", "Partner introductions", "Regional messaging"],
  note: "PLACEHOLDER — activation scope",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-mono text-slate-500">
      {children}
    </span>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
      <div className="text-sm text-slate-600 leading-relaxed">{text}</div>
    </div>
  );
}

function CardBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

function PersonCard({ p }: { p: Person }) {
  return (
    <CardBox>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-xs font-semibold text-slate-700">
            {initials(p.name)}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold leading-snug break-words text-slate-900">
              {p.name}
            </div>
            <div className="mt-1 text-sm text-slate-600 leading-snug break-words">
              {p.role}
            </div>
          </div>
        </div>

        {p.note ? (
          <span className="text-[11px] font-mono text-slate-500 whitespace-nowrap">
            {p.note}
          </span>
        ) : null}
      </div>

      <div className="mt-4 space-y-2">
        {p.focus.map((f) => (
          <Bullet key={f} text={f} />
        ))}
      </div>
    </CardBox>
  );
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Pill>TEAM</Pill>
        <div className="text-sm text-slate-500">Leadership & execution roles</div>
      </div>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
        Founder-led execution team
      </h1>

      <p className="mt-2 max-w-3xl text-base text-slate-600 leading-relaxed">
        Roles are presented as execution functions (not optics). All profiles use explicit placeholders
        until final approval.
      </p>

      {/* Guardrails */}
      <div className="mt-6">
        <CardBox>
          <div className="text-sm font-semibold text-slate-900">Guardrails</div>
          <div className="mt-1 text-sm text-slate-600">
            Investor-safe + regulator-safe presentation rules
          </div>

          <div className="mt-4 space-y-2">
            <Bullet text="No logos, titles, or institutions without explicit approval." />
            <Bullet text="No unverified claims or inflated language." />
            <Bullet text="Advisors framed as activation roles only." />
            <Bullet text="Hiring is milestone-tied (shown inside the deck)." />
          </div>
        </CardBox>
      </div>

      {/* Exec team */}
      <div className="mt-10 flex items-center justify-between gap-3">
        <div className="text-sm font-mono text-slate-500">EXEC TEAM</div>
        <div className="text-xs font-mono text-slate-500">Order locked • Board variant aligned</div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {EXEC_TEAM.map((p) => (
          <PersonCard key={p.name} p={p} />
        ))}
      </div>

      {/* Advisor */}
      <div className="mt-10 flex items-center justify-between gap-3">
        <div className="text-sm font-mono text-slate-500">ADVISOR (ACTIVATION)</div>
        <div className="text-xs font-mono text-slate-500">No optics framing</div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <PersonCard p={ADVISOR} />

        <CardBox>
          <div className="text-sm font-semibold text-slate-900">Advisor usage policy</div>
          <div className="mt-1 text-sm text-slate-600">Activation-only framing</div>

          <div className="mt-4 space-y-2">
            <Bullet text="Advisors are used for execution acceleration, not branding." />
            <Bullet text="Names shown; no “former” titles or institutions." />
            <Bullet text="Scope is explicit; activation evidence can be demonstrated." />
          </div>
        </CardBox>
      </div>
    </div>
  );
}
