"use client";

import React from "react";

interface JobData {
    id: string;
    companyName: string;
    companyLogo: string;
    positionName: string;
    salary: string;
}

interface EmbedJobCardClientProps {
    jobData: JobData;
}

const EmbedJobCardClient: React.FC<EmbedJobCardClientProps> = ({ jobData }) => {

    // 企業ロゴや社名クリック時に親ウィンドウへメッセージを送信
    const handleRedirect = () => {
        window.parent.postMessage(
            { type: "navigate", url: `/jobs/${jobData.id}` },
            "*"
        );
    };

    // 応募ボタンクリック時に親ウィンドウへメッセージを送信
    const handleApplyClick = () => {
        window.parent.postMessage(
            { type: "apply", jobId: jobData.id },
            "*"
        );
    };

    return (
        <>
            {/* 企業ロゴ＋社名をクリックで詳細へ */}
            <div
                onClick={handleRedirect}
                className="flex items-center space-x-3 mb-4 cursor-pointer"
            >
                <img
                    src={jobData.companyLogo}
                    alt="Company Logo"
                    className="w-12 h-12 object-cover rounded"
                />
                <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <h2 className="text-base font-bold">{jobData.companyName}</h2>
                </div>
            </div>

            {/* ポジション名 & 年収 */}
            <div
                onClick={handleRedirect}
                className="mb-4 cursor-pointer"
            >
                <h3 className="text-lg font-semibold">{jobData.positionName}</h3>
                <p className="text-sm text-gray-600 mt-1">{jobData.salary}</p>
            </div>

            {/* 応募ボタン */}
            <button
                onClick={handleApplyClick}
                className="mt-2 w-full text-center rounded bg-blue-600 text-white px-3 py-2 hover:bg-blue-500 font-semibold"
            >
                Apply with Cross
            </button>
        </>
    );
};

export default EmbedJobCardClient;
