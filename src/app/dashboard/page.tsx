"use client";

import { useState } from "react";

// Rechartsから複数コンポーネントをインポート
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

/**
 * 以前のようなタブ切り替えではなく、
 * Stripe Dashboard 風にサイドバー or シンプル上部ナビを用意して
 * 中身だけ切り替える、というイメージでもOK。
 * ここでは中央に大きめのカードを置くデザイン例を示すわ。
 */
export default function CompanyDashboard() {
    // ------------------------------------------------
    // 状態管理
    // ------------------------------------------------
    const [currentTab, setCurrentTab] = useState<"myJobs" | "createJob" | "analytics">("myJobs");
    const [embedCode, setEmbedCode] = useState<string | null>(null);

    // ダミー求人データ
    const jobs = [
        {
            id: "1",
            title: "ソフトウェアエンジニア(バックエンド)",
            status: "Active",
            applicants: 12,
        },
        {
            id: "2",
            title: "UI/UXデザイナー",
            status: "Active",
            applicants: 5,
        },
        {
            id: "3",
            title: "QAエンジニア",
            status: "Active",
            applicants: 3,
        },
    ];

    // アナリティクス用のモックグラフデータ
    const analyticsData = [
        { month: "Jan", Applicants: 20, Hires: 2 },
        { month: "Feb", Applicants: 35, Hires: 3 },
        { month: "Mar", Applicants: 50, Hires: 5 },
        { month: "Apr", Applicants: 40, Hires: 4 },
        { month: "May", Applicants: 60, Hires: 6 },
    ];

    // Embedコード生成
    const handleGenerateEmbedCode = (jobId: string) => {
        const code = `<iframe src="https://example.com/embed/${jobId}" width="600" height="400"></iframe>`;
        setEmbedCode(code);
    };

    // Job作成(ダミー)
    const handleCreateJob = (e: React.FormEvent) => {
        e.preventDefault();
        alert("新規Jobを作成しました！（Stripe課金イメージ）");
    };

    // ------------------------------------------------
    // JSX描画
    // ------------------------------------------------
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {/* ヘッダー部分 */}
            <header className="w-full bg-white border-b shadow-sm">
                <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
                    {/* 左側ロゴなど（Stripeダッシュボード風にシンプルに） */}
                    <div className="flex items-center space-x-2">
                        <div className="text-xl font-bold tracking-tight text-indigo-600">
                            Cross Dashboard
                        </div>
                    </div>

                    {/* 右側：タブ切り替え or シンプルナビ */}
                    <nav className="flex space-x-4">
                        <button
                            onClick={() => setCurrentTab("myJobs")}
                            className={`${currentTab === "myJobs"
                                    ? "text-indigo-600 font-semibold"
                                    : "text-gray-600 hover:text-gray-800"
                                }`}
                        >
                            My Jobs
                        </button>
                        <button
                            onClick={() => setCurrentTab("createJob")}
                            className={`${currentTab === "createJob"
                                    ? "text-indigo-600 font-semibold"
                                    : "text-gray-600 hover:text-gray-800"
                                }`}
                        >
                            Create Job
                        </button>
                        <button
                            onClick={() => setCurrentTab("analytics")}
                            className={`${currentTab === "analytics"
                                    ? "text-indigo-600 font-semibold"
                                    : "text-gray-600 hover:text-gray-800"
                                }`}
                        >
                            Analytics
                        </button>
                    </nav>
                </div>
            </header>

            {/* メインコンテンツ */}
            <main className="flex-grow">
                {/* 中央寄せコンテナ */}
                <div className="max-w-4xl mx-auto py-10 px-4">
                    {currentTab === "myJobs" && (
                        <section className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">My Jobs</h2>
                            {jobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="flex items-center justify-between p-4 rounded-md bg-gray-50 mb-3"
                                >
                                    <div>
                                        <p className="font-medium text-gray-800">{job.title}</p>
                                        <p className="text-sm text-gray-500">Status: {job.status}</p>
                                        <p className="text-sm text-gray-500">Applicants: {job.applicants}</p>
                                    </div>
                                    <button
                                        onClick={() => handleGenerateEmbedCode(job.id)}
                                        className="px-4 py-2 rounded bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500"
                                    >
                                        Generate Embed Code
                                    </button>
                                </div>
                            ))}
                        </section>
                    )}

                    {currentTab === "createJob" && (
                        <section className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create New Job</h2>
                            <form onSubmit={handleCreateJob} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                                        placeholder="例: フロントエンドエンジニア"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Job Description
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                                        placeholder="仕事内容の詳細..."
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Requirements
                                    </label>
                                    <textarea
                                        rows={2}
                                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-indigo-300"
                                        placeholder="必須スキルや経験..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-500"
                                >
                                    Create (Stripe課金イメージ)
                                </button>
                            </form>
                        </section>
                    )}

                    {currentTab === "analytics" && (
                        <section className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Analytics</h2>
                            <div className="w-full h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={analyticsData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                        <XAxis dataKey="month" stroke="#666" />
                                        <YAxis stroke="#666" />
                                        <Tooltip />
                                        <Bar dataKey="Applicants" fill="#6366F1" />
                                        <Bar dataKey="Hires" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </section>
                    )}
                </div>
            </main>

            {/* Embed コードのモーダル（変更なし：見た目のみ微調整） */}
            {embedCode && (
                <div
                    className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
                    onClick={() => setEmbedCode(null)}
                >
                    <div
                        className="bg-white w-full max-w-md p-6 rounded-lg shadow-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-lg font-bold mb-2 text-gray-800">Embed Code</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            以下のコードを自社ページに貼り付けてください。
                        </p>
                        <pre className="bg-gray-100 p-3 rounded text-xs break-all">
                            {embedCode}
                        </pre>
                        <button
                            onClick={() => setEmbedCode(null)}
                            className="mt-4 border rounded px-4 py-2 hover:bg-gray-100 text-sm font-medium"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
