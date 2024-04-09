import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const user = req.cookies.get("next-auth.session-token") ?? null;

  const isOnLoginPage = req.nextUrl.pathname.startsWith("/login");
  const isOnRegisterPage = req.nextUrl.pathname.startsWith("/register");

  if ((isOnLoginPage || isOnRegisterPage) && user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
