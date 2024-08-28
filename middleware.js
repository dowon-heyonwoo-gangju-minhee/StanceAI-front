import { NextResponse } from "next/server";
import { checkAuth } from "@/lib/checkAuth";

// 인증이 필요한 경로들을 배열로 정의
const protectedRoutes = ["/projects"];

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  console.log("pathname", pathname);
  console.log("req", req);
  // 보호된 경로인지 확인
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const authResult = await checkAuth(req);
    console.log("authResult", authResult);
    if (!authResult.authenticated) {
      return NextResponse.redirect(new URL(authResult.redirectUrl, req.url));
    }
  }

  // 인증이 필요없는 경로는 그대로 진행
  return NextResponse.next();
}

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: ["/projects/:path*"],
};
