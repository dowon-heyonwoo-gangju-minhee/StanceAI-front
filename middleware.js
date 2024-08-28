import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/checkAuth";

// 인증이 필요한 경로들을 배열로 정의
const protectedRoutes = ["/projects"];

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  // 쿠키에서 세션 토큰 확인
  const sessionToken = req.cookies.get("__Secure-authjs.session-token");

  // 세션 토큰이 있으면 인증된 사용자로 간주하고 다음으로 진행
  if (sessionToken) {
    return NextResponse.next();
  }

  // 보호된 경로인지 확인
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const authResult = await checkAuth(req);
    if (!authResult.authenticated) {
      return NextResponse.redirect(new URL(authResult.redirectUrl, req.url));
    }
  }

  // 인증이 필요없는 경로는 그대로 진행
  return NextResponse.next();
}

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: ["/projects/:path*", "/api/:path*", "/((?!_next/static|favicon.ico).*)"],
};
