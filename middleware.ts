import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "evz_deck_key";

function isPublicPath(pathname: string) {
  // Always allow Next internals + static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/images")
  ) {
    return true;
  }

  // Allow the access screen + the API endpoint that sets the cookie
  if (pathname === "/access" || pathname.startsWith("/api/access")) {
    return true;
  }

  return false;
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const required = process.env.DECK_ACCESS_KEY;
  // If no key is configured, do NOT block (safe fallback for dev)
  if (!required) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(COOKIE_NAME)?.value;

  if (cookie && cookie === required) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/access";
  url.searchParams.set("next", pathname + (req.nextUrl.search || ""));
  return NextResponse.redirect(url);
}

export const config = {
  // Run on all routes except Next internals handled above
  matcher: ["/((?!_next/static|_next/image).*)"],
};
