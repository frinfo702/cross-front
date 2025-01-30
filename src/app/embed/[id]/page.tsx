"use client"
import { useParams } from "next/navigation";

export default function EmbedJobCard() {
    const { id } = useParams() || {};

    // 仮データ例
    const jobData = {
        id,
        companyName: "Awesome Company Inc.",
        companyLogo: "/google-color.svg",
        positionName: "ソフトウェアエンジニア (バックエンド)",
        salary: "¥5,000,000 / year",
        description:
            "サンプル説明文: バックエンドのAPI設計や運用を担当していただきます。Node.js + TypeScriptがメインです。",
    };

    // 応募ボタンクリック時
    const handleApplyClick = () => {
        if (typeof window !== "undefined") {
            window.location.href = `/jobs/${jobData.id}`;
        }
    };

    // 全体を白背景＆ダークテキストにして、外部スタイルの影響を受けにくくする
    return (
        <div className="bg-white text-gray-900 max-w-sm border border-gray-200 rounded-lg shadow-lg p-5 font-sans">
            {/* 企業ロゴ + 企業名 */}
            <div
                onClick={() => window.location.href = `/jobs/${jobData.id}`}
                className="flex items-center mb-4 cursor-pointer"
            >
                <img
                    src={jobData.companyLogo}
                    alt="Company Logo"
                    className="w-12 h-12 object-cover rounded mr-3"
                />
                <div>
                    <p className="text-xs text-gray-500">Company</p>
                    <h2 className="text-sm font-bold">{jobData.companyName}</h2>
                </div>
            </div>

            {/* ポジション名 + 年収 + 簡単な説明 */}
            <div
                onClick={() => window.location.href = `/jobs/${jobData.id}`}
                className="mb-4 cursor-pointer"
            >
                <h3 className="text-base font-semibold">{jobData.positionName}</h3>
                <p className="text-sm text-gray-600 mt-1">{jobData.salary}</p>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                    {jobData.description}
                </p>
            </div>

            {/* 応募ボタン */}
            <button
                onClick={handleApplyClick}
                className="mt-2 w-full rounded bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-500 transition-colors"
            >
                Apply with Cross
            </button>
        </div>
    );
}
