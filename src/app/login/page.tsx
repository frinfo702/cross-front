"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        // API Routeを叩いて認証チェック
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            // 認証成功 → ダッシュボードへ移動
            router.push("/dashboard");
        } else {
            // 認証失敗 → アラートなど
            alert("ログイン失敗");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4"
            >
                <h1 className="text-xl font-semibold text-gray-800">ログイン</h1>
                <div>
                    <label className="block mb-1 text-sm text-gray-600">Email</label>
                    <input
                        className="w-full border rounded px-3 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm text-gray-600">Password</label>
                    <input
                        className="w-full border rounded px-3 py-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded font-medium hover:bg-indigo-500"
                >
                    ログイン
                </button>
            </form>
        </div>
    );
}
