import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const PRIVATE_PATHS = ["/dashboard", "/admin", "/account", "/checkout"];

const AUTH_PATHS = ["/login", "/register"];

export async function proxy(req: NextRequest) {
  const session = await getServerSession();

  const { pathname } = req.nextUrl;

  const isPrivateRoute = PRIVATE_PATHS.some((path) =>
    pathname.startsWith(path),
  );

  const isAuthRoute = AUTH_PATHS.includes(pathname);

  if (isPrivateRoute && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/shop", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/account/:path*",
    "/login",
    "/register",
    "/checkout"
  ],
};
