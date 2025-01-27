import { NextRequest, NextResponse } from "next/server";

// 仮のユーザー情報
const DUMMY_USER = {
    email: "test@example.com",
    password: "password123",
};

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // ダミー認証
        if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
            // 例えばCookieをセットして認証済みを示す
            // 本来はJWTなどを発行してCookieに保存したりする
            const response = NextResponse.json({ success: true });
            response.cookies.set({
                name: "auth_token",
                value: "mock_jwt_token", //本来は本物のJWTなどをセット
                httpOnly: true,         // JSから読めないようにしておく
                maxAge: 60 * 60 * 24,   // 1日(秒)
                path: "/",
            });
            return response;
        } else {
            return new NextResponse("Invalid credentials", { status: 401 });
        }
    } catch (err) {
        console.error(err);
        return new NextResponse("Internal server error", { status: 500 });
    }
}
