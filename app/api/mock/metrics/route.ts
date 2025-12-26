import { NextResponse } from "next/server";

export async function GET() {
  // Deterministic mock: safe for demos (no surprises)
  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    co2AvoidedTons: 12450,
    auditsAutomated: 387,
    sitesMonitored: 18,
    sensorsStreaming: 642
  });
}
