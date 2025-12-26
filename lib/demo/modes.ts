export type DemoMode = "investor" | "regulator" | "developer";

export function getModeFromSearchParams(sp: { get: (k: string) => string | null }): DemoMode {
  const mode = (sp.get("mode") || "investor").toLowerCase();
  if (mode === "regulator" || mode === "developer" || mode === "investor") return mode;
  return "investor";
}
