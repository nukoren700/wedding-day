"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface RecordData {
    id: number;
    firstname: string;
    lastname: string;
    message: string;
    image?: string;
    created_at: string;
}

export default function PC9nCVgN4KMl4DIPage() {
    const [data, setData] = useState<RecordData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedRecord, setSelectedRecord] = useState<RecordData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://wedding-day-seven.vercel.app/api/message");
                // const response = await fetch("http://localhost:3000/api/message");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();

                if (result.success && Array.isArray(result.data)) {
                    setData(result.data);
                } else {
                    throw new Error("Invalid API response");
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

return (
    <div>
        <section className="bg-pink p-7 text-white text-center rounded-md">
            <h1 className="text-4xl font-bold font-darleston">คำอวยพร</h1>
        </section>
    <div
        className="container mx-auto p-4"
        style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
    >
    <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-yellow-700 text-center">
                <th className="px-6 py-3 border border-gray-200 text-white">First Name</th>
                <th className="px-6 py-3 border border-gray-200 text-white">Last Name</th>
                {/* <th className="px-6 py-3 border border-gray-200 text-white">Message</th> */}
                {/* <th className="px-6 py-3 border border-gray-200 text-white">บันทึกเมื่อ</th> */}
                <th className="px-6 py-3 border border-gray-200 text-white">Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((record) => (
            <tr key={record.id} className="border-b hover:bg-gray-50">
                <td className="text-lg font-bold py-4 px-3 border-gray-200">{record.firstname}</td>
                <td className="text-lg font-bold py-4 px-3 border-gray-200">{record.lastname}</td>
                {/* <td className="px-6 py-4 border border-gray-200 text-center">
                  <div className="break-message">{record.message}</div>
                </td> */}
                                {/* <td className="text-lg font-bold py-4 px-3 border-gray-200">
                  {new Date(record.created_at).toLocaleString()}
                </td> */}
                <td className="px-6 py-4 border border-gray-200 text-center">
                <button
                    className="bg-pink text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600"
                    onClick={() => setSelectedRecord({ ...record })}
                >
                    ดู
                </button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

 <style jsx>{`
            .break-message {
            word-wrap: break-word; /* บังคับให้ข้อความตัดคำเมื่อยาวเกิน */
            word-break: break-word; /* บังคับให้ข้อความตัดคำ */
            white-space: pre-wrap; /* อนุญาตให้เคาะบรรทัดและตัดข้อความ */
            overflow-wrap: break-word; /* รองรับการตัดคำเพิ่มเติม */
            // max-width: auto; /* กำหนดความกว้างสูงสุด */
            }
            table {
                table-layout: fixed; /* ทำให้ตารางจัดความกว้างแบบอัตโนมัติ */
                width: 100%; /* ตารางจะปรับตามความกว้างของคอนเทนเนอร์ */
            }
            td {
                word-wrap: break-word; /* เพิ่มการตัดคำในเซลล์ตาราง */
                word-break: break-word;
                white-space: pre-wrap; /* อนุญาตการเคาะบรรทัดและข้อความตัดคำ */
            }
            `}</style>

{/* Popup */}
{selectedRecord && (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
        <div
            className="bg-white animate-fade-in-down max-h-[97%] flex flex-col overflow-auto rounded-lg shadow-lg p-lg w-80 break-message relative"
            style={{
                // backgroundImage: "url('/images/CardPortrait.png')", // เพิ่มรูปภาพพื้นหลัง
                backgroundImage: "url('/images/CardPortrait2.jpg')", // เพิ่มรูปภาพพื้นหลัง
                backgroundSize: "cover", // ปรับขนาดให้พอดีกับป๊อปอัป
                backgroundPosition: "top", // ตั้งค่าให้แสดงตรงกลาง
                backgroundRepeat: "no-repeat", // ไม่ทำรูปซ้ำ
            }}
        >
{/* เพิ่ม overlay ให้ข้อความอ่านง่าย */}
<div className="flex-1 flex flex-col overflow-auto bg-white bg-opacity-40 rounded-lg">
    <h2 className="text-2xl font-bold mb-4 px-6 pt-4">คำอวยพร</h2>
    <div className="flex-1 overflow-auto p-6">
    <div className="border-b mb-4 pb-4">
        <p className="text-lg">
            <strong>First Name:</strong> {selectedRecord.firstname}
        </p>
        <p className="text-lg">
            <strong>Last Name:</strong> {selectedRecord.lastname}
        </p>
    </div>
    <div className="border-b mb-4 pb-4">
        <p className="text-lg">
            <strong>Message:</strong>
        </p>
        <p className="whitespace-pre-line text-lg">{selectedRecord.message}</p>
    </div>
    {selectedRecord?.image ? (
    <div className="border-b mb-4 pb-4">
        <p className="text-lg mb-2">
            <strong>Picture:</strong>
        </p>
    <div className="border-2 p-1 border-pink border-dashed rounded-lg">
        <Image
            src={selectedRecord?.image}
            width={300}
            height={150}
            className="w-full max-w-80 mx-auto h-auto object-scale-down shadow rounded-md"
            alt=""
        />
    </div>
</div>
    ) : null}
<div>
    <p className="text-lg">
        <strong>บันทึกเมื่อ:</strong>{" "}
            {new Date(selectedRecord.created_at).toLocaleString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })}
    </p>
</div>
    </div>
    <div className="mt-4 text-right px-6 pb-4">
        <button
            className="bg-pink text-white px-4 py-2 rounded-lg text-lg hover:bg-red-600"
            onClick={() => setSelectedRecord(null)}
        >
            Close
        </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
