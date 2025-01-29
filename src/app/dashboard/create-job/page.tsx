// src/app/dashboard/create-job/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateJob() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateJob = (e: React.FormEvent) => {
        e.preventDefault();
        // 実際はバックエンドAPIを呼び出して求人作成し、成功後ダッシュボードなどへ飛ばす
        alert("求人を作成しました(デモ)");
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="p-4 bg-white border-b shadow-sm flex items-center justify-between">
                <h1 className="text-xl font-semibold">Company Dashboard</h1>
                <nav className="space-x-4">
                    <Link href="/dashboard" className="hover:underline">
                        My Jobs
                    </Link>
                    <Link href="/dashboard/create-job" className="hover:underline font-bold">
                        Create Job
                    </Link>
                    <Link href="/dashboard/analytics" className="hover:underline">
                        Analytics
                    </Link>
                </nav>
            </header>

            <main className="p-4 max-w-xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">Create New Job</h2>
                <form onSubmit={handleCreateJob} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Job Title</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border rounded px-3 py-2 h-32"
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded border px-4 py-2 bg-blue-600 text-white hover:bg-blue-500"
                    >
                        Create
                    </button>
                </form>
            </main>
        </div>
    );
}
