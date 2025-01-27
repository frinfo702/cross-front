// src/app/jobs/[id]/apply/page.tsx

"use client";

import { useParams, useRouter } from "next/navigation";

export default function JobApplyPage() {
    const { id } = useParams() || {};
    const router = useRouter();

    // 仮の求人データ（実際はfetchなど）
    const jobDetail = {
        id,
        companyName: "Awesome Company Inc.",
        positionName: "ソフトウェアエンジニア (バックエンド)",
        description:
            "バックエンドのAPI設計、開発、運用を担当してもらいます。TypeScript/Node.js/AWSなどをメインに使います。",
        requirements: "Webアプリケーション開発経験3年以上、チーム開発の経験",
    };

    const handleApply = () => {
        alert("応募完了！（デモ）");
        // 実際は応募API呼び出しなどを行い、完了画面へ遷移など
        router.push("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="mx-auto w-full max-w-5xl bg-white shadow-md rounded-lg md:flex">
                {/* --- 左側: Job詳細 --- */}
                <div className="md:w-1/2 border-b md:border-b-0 md:border-r p-6 space-y-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {jobDetail.positionName}
                    </h1>
                    <p className="text-sm text-gray-500">{jobDetail.companyName}</p>
                    <p className="text-gray-700 mt-4">{jobDetail.description}</p>

                    <div className="mt-6">
                        <h2 className="font-semibold text-gray-800">応募要件</h2>
                        <p className="text-gray-700 text-sm mt-1">{jobDetail.requirements}</p>
                    </div>
                </div>

                {/* --- 右側: 応募フォーム風 Stripeっぽいデザイン --- */}
                <div className="md:w-1/2 p-6 bg-gray-50">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        応募のためログイン
                    </h2>
                    <div className="space-y-3">
                        {/* Sign in with GitHub */}
                        <button
                            onClick={() => alert("GitHubでログイン（デモ）")}
                            className="w-full flex items-center justify-center space-x-2 border border-gray-300 bg-white text-gray-700 py-2 rounded-md hover:bg-gray-100"
                        >
                            <svg
                                className="w-5 h-5"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 .296a12 12 0 00-3.79 23.4c.6.111.82-.261.82-.58v-2.17c-3.34.725-4.04-1.61-4.04-1.61-.546-1.42-1.33-1.8-1.33-1.8-1.088-.745.084-.729.084-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.495.997.108-.776.42-1.304.763-1.605-2.665-.306-5.466-1.336-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.306-.536-1.54.116-3.215 0 0 1.01-.324 3.31 1.23.96-.266 1.98-.399 3-.404 1.02.005 2.04.138 3 .404 2.28-1.554 3.29-1.23 3.29-1.23.652 1.676.24 2.91.12 3.215.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.372.81 1.102.81 2.22v3.293c0 .326.22.698.82.58A12.005 12.005 0 0012 .296" />
                            </svg>
                            <span className="text-sm">Sign in with GitHub</span>
                        </button>
                        {/* Sign in with Google */}
                        <button
                            onClick={() => alert("Googleでログイン（デモ）")}
                            className="w-full flex items-center justify-center space-x-2 border border-gray-300 bg-white text-gray-700 py-2 rounded-md hover:bg-gray-100"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google icon"
                                className="w-5 h-5"
                            />
                            <span className="text-sm">Sign in with Google</span>
                        </button>
                    </div>

                    {/* ある程度ログインが済んだ体で「応募する」ボタン */}
                    <hr className="my-6" />
                    <button
                        onClick={handleApply}
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-500"
                    >
                        この職種に応募する
                    </button>
                </div>
            </div>
        </div>
    );
}
