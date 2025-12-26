import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 🔒 Only protect /pitch (and subroutes)
  if (!pathname.startsWith("/pitch")) {
    return NextResponse.next();
  }

  // ✅ Check cookie set by AccessInner
  const hasAccess =
    req.cookies.get("evz_deck_granted")?.value === "true";

  if (!hasAccess) {
    const url = req.nextUrl.clone();
    url.pathname = "/access";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Optional but recommended matcher
export const config = {
  matcher: ["/pitch/:path*"],
};
