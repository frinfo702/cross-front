import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // 認証Cookieを取得
    const token = request.cookies.get("auth_token")?.value;

    // ダッシュボード配下を保護したい場合:
    const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

    // 未ログインかつ保護パスにアクセスしようとしている場合、loginへ飛ばす
    if (isDashboard && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // それ以外はそのまま進ませる
    return NextResponse.next();
}

// このミドルウェアを適用するパスを指定。
// 例： /dashboard 以下にのみ適用する
export const config = {
    matcher: ["/dashboard/:path*"],
};
