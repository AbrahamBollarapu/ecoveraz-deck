import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "evz_deck_key";

export async function POST(req: NextRequest) {
  const { key } = await req.json().catch(() => ({ key: "" }));

  const required = process.env.DECK_ACCESS_KEY || "";

  if (!required) {
    // No key configured => accept (dev convenience)
    const res = NextResponse.json({ ok: true, devBypass: true });
    res.cookies.set(COOKIE_NAME, "dev", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
  }

  if (typeof key !== "string" || key.trim() !== required) {
    return NextResponse.json({ ok: false, error: "INVALID_KEY" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, required, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return res;
}
