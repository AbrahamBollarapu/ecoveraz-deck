import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "evz_deck_key";

function isPublicPath(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts")
  );
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Always allow public assets and the access page itself
  if (isPublicPath(pathname) || pathname === "/access") {
    return NextResponse.next();
  }

  // Only protect /pitch (and anything under it)
  const isProtected = pathname === "/pitch" || pathname.startsWith("/pitch/");
  if (!isProtected) return NextResponse.next();

  // If no env key is configured, disable gating (useful for debugging)
  const envKey = process.env.DECK_ACCESS_KEY;
  if (!envKey || envKey.trim().length === 0) {
    return NextResponse.next();
  }

  // Check cookie
  const cookieVal = req.cookies.get(COOKIE_NAME)?.value ?? "";
  const ok = cookieVal === envKey;

  if (ok) return NextResponse.next();

  // Not allowed -> redirect to /access with return path
  const url = req.nextUrl.clone();
  url.pathname = "/access";
  url.searchParams.set("next", pathname + (search || ""));
  return NextResponse.redirect(url);
}

// Run middleware for everything except static files
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
