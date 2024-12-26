import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

// matcher 속성에 일치하는 경로에서만 미들웨어가 호출됨.
// `config` 내보내기를 생략하면, 모든 경로에서 미들웨어가 호출됨.
export const config = {
  /*
   * 다음과 같이 시작하는 경로를 제외한 모든 요청 경로를 일치시킴:
   * - api (API 라우트)
   * - _next/static (정적 파일)
   * - _next/image (이미지 최적화 파일)
   * - favicon.ico (favicon 파일)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
