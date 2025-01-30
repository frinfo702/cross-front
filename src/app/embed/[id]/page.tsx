// src/app/embed/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function EmbedJobCard() {
    const { id } = useParams() || {};

    // Fetch job data based on the ID
    // For demonstration, using static data
    const jobData = {
        id,
        companyName: "Awesome Company Inc.",
        companyLogo: "https://via.placeholder.com/80?text=Logo",
        positionName: "ソフトウェアエンジニア (バックエンド)",
        salary: "¥5,000,000 / year",
    };

    // Handle Apply Click
    const handleApplyClick = () => {
        if (typeof window !== "undefined") {
            window.parent.postMessage(
                { type: "apply", jobId: jobData.id },
                "*"
            );
        }
    };

    return (
        <div
            id="embed-container"
            className="border rounded-lg shadow-md p-4 bg-white font-sans max-w-sm mx-auto"
        >
            {/* Company Logo and Name */}
            <div
                onClick={() => {
                    if (typeof window !== "undefined") {
                        window.parent.postMessage(
                            { type: "navigate", url: `/jobs/${jobData.id}` },
                            "*"
                        );
                    }
                }}
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

            {/* Position Name & Salary */}
            <div
                onClick={() => {
                    if (typeof window !== "undefined") {
                        window.parent.postMessage(
                            { type: "navigate", url: `/jobs/${jobData.id}` },
                            "*"
                        );
                    }
                }}
                className="mb-4 cursor-pointer"
            >
                <h3 className="text-lg font-semibold">{jobData.positionName}</h3>
                <p className="text-sm text-gray-600 mt-1">{jobData.salary}</p>
            </div>

            {/* Apply Button */}
            <button
                onClick={handleApplyClick}
                className="mt-2 w-full text-center rounded bg-blue-600 text-white px-3 py-2 hover:bg-blue-500 font-semibold"
            >
                Apply with Cross
            </button>
        </div>
    );
}
