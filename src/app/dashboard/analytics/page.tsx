// src/app/dashboard/analytics/page.tsx

import Link from "next/link";

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="p-4 bg-white border-b shadow-sm flex items-center justify-between">
                <h1 className="text-xl font-semibold">Company Dashboard</h1>
                <nav className="space-x-4">
                    <Link href="/dashboard" className="hover:underline">
                        My Jobs
                    </Link>
                    <Link href="/dashboard/create-job" className="hover:underline">
                        Create Job
                    </Link>
                    <Link href="/dashboard/analytics" className="hover:underline font-bold">
                        Analytics
                    </Link>
                </nav>
            </header>

            <main className="p-4 max-w-4xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">Analytics</h2>
                <p className="mb-4 text-sm text-gray-700">
                    ここでは応募状況などのグラフを表示する想定です。
                </p>
                {/* 本来ならCharts.jsやRechartsなどでグラフ描画 */}
                <div className="p-6 border rounded bg-white shadow-sm">
                    <p>（グラフが入るイメージ）</p>
                </div>
            </main>
        </div>
    );
}
