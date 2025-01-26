// src/app/jobs/[id]/page.tsx

"use client";

import { useParams, useRouter } from "next/navigation";

export default function JobDetailPage() {
    const { id } = useParams() || {};
    const router = useRouter();

    // ここでは仮のデータを表示する。実際はfetchでAPIなどから取得する
    const jobDetail = {
        id: id,
        companyName: "Awesome Company Inc.",
        companyLogo:
            "https://via.placeholder.com/80?text=Logo", // ダミー画像
        companyIntro:
            "Our company is building next generation web apps. We love innovation!",
        positionName: "ソフトウェアエンジニア(バックエンド)",
        description: "バックエンドのAPI設計、開発、運用を担当してもらいます。",
        techStack: "TypeScript, Node.js, AWS, PostgreSQL etc.",
        requirements: "Webアプリケーション開発経験3年以上...",
        niceToHave: "React, Docker, Microservicesなどの知識があれば尚可",
        benefits: "フルリモート可、フレックス制度あり、社会保険完備...",
        office: "大阪府○○市...",
    };

    const handleApply = () => {
        // 本当は応募API呼び出しなど
        if (confirm("本当に応募しますか？")) {
            alert("応募が完了しました！");
            router.push("/"); //トップや別の応募完了ページなどに飛ばす
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-sm space-y-4">
                <div className="flex items-center space-x-4">
                    <img
                        src={jobDetail.companyLogo}
                        alt="Company Logo"
                        className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                        <h1 className="text-xl font-bold">{jobDetail.companyName}</h1>
                        <p className="text-gray-500">{jobDetail.companyIntro}</p>
                    </div>
                </div>
                <hr />
                <div>
                    <h2 className="text-lg font-semibold mb-2">{jobDetail.positionName}</h2>
                    <p className="text-gray-700">{jobDetail.description}</p>
                </div>
                <div>
                    <h3 className="font-semibold">使用技術</h3>
                    <p>{jobDetail.techStack}</p>
                </div>
                <div>
                    <h3 className="font-semibold">応募要件</h3>
                    <p>{jobDetail.requirements}</p>
                </div>
                <div>
                    <h3 className="font-semibold">歓迎条件</h3>
                    <p>{jobDetail.niceToHave}</p>
                </div>
                <div>
                    <h3 className="font-semibold">福利厚生/オフィスなど</h3>
                    <p>{jobDetail.benefits}</p>
                    <p>{jobDetail.office}</p>
                </div>
                <button
                    onClick={handleApply}
                    className="mt-4 w-full rounded border px-4 py-2 bg-blue-600 text-white hover:bg-blue-500"
                >
                    Apply with Cross
                </button>
            </div>
        </div>
    );
}
