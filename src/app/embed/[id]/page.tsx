// src/app/embed/[id]/page.tsx

"use client";

import { useParams, useRouter } from "next/navigation";

export default function EmbedJobCard() {
    const { id } = useParams() || {};
    const router = useRouter();

    // ここも仮のデータ
    const jobData = {
        id: id,
        companyName: "Awesome Company Inc.",
        positionName: "ソフトウェアエンジニア(バックエンド)",
    };

    const handleClick = () => {
        // クリックしたら詳細ページに飛ばすイメージ
        router.push(`/jobs/${id}`);
    };

    return (
        <div className="border rounded shadow-md p-4 max-w-sm bg-white">
            <h2 className="text-lg font-bold mb-2">{jobData.positionName}</h2>
            <p className="text-sm text-gray-600">{jobData.companyName}</p>
            <button
                onClick={handleClick}
                className="mt-4 w-full text-center rounded bg-blue-600 text-white px-3 py-2 hover:bg-blue-500"
            >
                Apply with Cross
            </button>
        </div>
    );
}
