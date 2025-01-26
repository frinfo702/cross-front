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

export default function CompanyDashboard() {
    // ---------------------------------
    // 状態管理
    // ---------------------------------
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

    // ジョブ作成(ダミー)
    const handleCreateJob = (e: React.FormEvent) => {
        e.preventDefault();
        alert("新規Jobを作成しました！（Stripe課金イメージ）");
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* --- ヘッダー部分 --- */}
            <header className="bg-white shadow-sm">
                <div className="flex items-center justify-between px-5 py-4 max-w-6xl mx-auto">
                    {/* 左側タイトル */}
                    <div className="flex items-center space-x-2">
                        {/* 戻る矢印ダミー */}
                        <button className="w-6 h-6 text-gray-600 hover:text-gray-800">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                className="w-full h-full"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h1 className="text-xl font-bold text-gray-800">
                            Cross Job Management
                        </h1>
                    </div>
                    {/* 右側サポートダミー */}
                    <button className="text-sm text-gray-600 hover:text-gray-800">
                        Support
                    </button>
                </div>
            </header>

            {/* --- サブヘッダー(説明) --- */}
            <div className="px-5 max-w-6xl mx-auto mt-2 text-gray-500 text-sm">
                The next generation platform to manage your job listings, create new ones, and analyze performance.
            </div>

            {/* --- タブ切り替えナビ --- */}
            <nav className="flex gap-2 mt-4 px-5 max-w-6xl mx-auto">
                {["myJobs", "createJob", "analytics"].map((tab) => {
                    const isActive = currentTab === tab;
                    const label =
                        tab === "myJobs"
                            ? "My Jobs"
                            : tab === "createJob"
                                ? "Create Job"
                                : "Analytics";

                    return (
                        <button
                            key={tab}
                            onClick={() => setCurrentTab(tab as typeof currentTab)}
                            className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all
                ${isActive
                                    ? // アクティブタブのスタイル（グラデーション）
                                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow"
                                    : // 非アクティブタブのスタイル
                                    "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                                }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </nav>

            {/* --- メインコンテンツ --- */}
            <main className="px-5 max-w-6xl mx-auto py-6">
                {/* 1) My Jobs */}
                {currentTab === "myJobs" && (
                    <section className="mt-4 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700">My Jobs</h2>
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                className="flex items-center justify-between p-4 rounded-lg bg-white shadow-sm border"
                            >
                                <div>
                                    <p className="font-medium text-gray-800">{job.title}</p>
                                    <p className="text-sm text-gray-500">Status: {job.status}</p>
                                    <p className="text-sm text-gray-500">
                                        Applicants: {job.applicants}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleGenerateEmbedCode(job.id)}
                                    className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-700"
                                >
                                    Generate Embed Code
                                </button>
                            </div>
                        ))}
                    </section>
                )}

                {/* 2) Create Job */}
                {currentTab === "createJob" && (
                    <section className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Create New Job</h2>
                        <form
                            onSubmit={handleCreateJob}
                            className="space-y-5 bg-white p-6 border rounded-lg shadow-sm max-w-lg"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded px-3 py-2"
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
                                    className="w-full border rounded px-3 py-2"
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
                                    className="w-full border rounded px-3 py-2"
                                    placeholder="必須スキルや経験..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90"
                            >
                                Create (Stripe課金イメージ)
                            </button>
                        </form>
                    </section>
                )}

                {/* 3) Analytics */}
                {currentTab === "analytics" && (
                    <section className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Analytics</h2>
                        <div className="bg-white p-6 border rounded-lg shadow-sm max-w-3xl">
                            <p className="text-gray-600 text-sm mb-4">
                                応募数や採用数の遷移をグラフで可視化（モックデータ）
                            </p>
                            {/* Rechartsによるグラフ描画 */}
                            <div className="w-full h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={analyticsData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                        <XAxis dataKey="month" stroke="#666" />
                                        <YAxis stroke="#666" />
                                        <Tooltip />
                                        <Bar dataKey="Applicants" fill="#8884d8" />
                                        <Bar dataKey="Hires" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* --- Embedコード用のモーダル --- */}
            {embedCode && (
                <div
                    className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
                    onClick={() => setEmbedCode(null)}
                >
                    <div
                        className="bg-white w-full max-w-md p-6 rounded-lg shadow-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-lg font-bold mb-2">Embed Code</h3>
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
