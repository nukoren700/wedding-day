"use client";

import React, { useEffect, useState } from "react";

interface RecordData {
  id: number;
  firstname: string;
  lastname: string;
  message: string;
  created_at: string;
}

export default function PC9nCVgN4KMl4DIPage() {
  const [data, setData] = useState<RecordData[]>([]); // ระบุประเภทของ data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // รองรับ string และ null
  const [selectedRecord, setSelectedRecord] = useState<RecordData | null>(null); // เก็บข้อมูลสำหรับแสดงใน popup

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/message"); // ใส่ URL ของ API ที่คุณต้องการ
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
          setError(err.message); // เก็บข้อความของ error
        } else {
          setError("An unknown error occurred"); // กรณี err ไม่ใช่ Error
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

      <div className="container mx-auto p-4">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-yellow-700 text-center">
              <th className="px-6 py-3 border border-gray-200 text-white">First Name</th>
              <th className="px-6 py-3 border border-gray-200 text-white">Last Name</th>
              {/* <th className="px-6 py-3 border border-gray-200 text-white">Message</th> */}
              <th className="px-6 py-3 border border-gray-200 text-white">บันทึกเมื่อ</th>
              <th className="px-6 py-3 border border-gray-200 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50">
                <td className="text-lg font-bold py-4 px-3 border-gray-200">
                  {record.firstname}
                </td>
                <td className="text-lg font-bold py-4 px-3 border-gray-200">
                  {record.lastname}
                </td>
                {/* <td className="px-6 py-4 border border-gray-200 text-center">
                  <div className="break-message">{record.message}</div>
                </td> */}
                <td className="text-lg font-bold py-4 px-3 border-gray-200">
                  {new Date(record.created_at).toLocaleString()}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-center">
                  <button 
                  className="bg-pink text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:bg-white hover:text-pink focus:ring-2 focus:ring-green-500 focus:outline-none transform transition duration-300 hover:scale-105"
                  onClick={() => setSelectedRecord(record)}>
                    View
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
    max-width: 300px; /* กำหนดความกว้างสูงสุด */
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div
          className="bg-white rounded-lg shadow-lg p-lg w-3/4 max-w-3xl break-message relative"
          style={{
            backgroundImage: "url('/images/CardPortrait.png')", // เพิ่มรูปภาพพื้นหลัง
            backgroundSize: "cover", // ปรับขนาดให้พอดีกับป๊อปอัป
            backgroundPosition: "center", // ตั้งค่าให้แสดงตรงกลาง
          }}
        >
          {/* เพิ่ม overlay ให้ข้อความอ่านง่าย */}
          <div className="bg-white bg-opacity-90 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Details</h2>
            <p className="text-lg"><strong>First Name:</strong> {selectedRecord.firstname}</p>
            <p className="text-lg"><strong>Last Name:</strong> {selectedRecord.lastname}</p>
            <div className="overflow-y-auto max-h-60 border-t border-b my-6 py-4">
              <p className="text-lg"><strong>Message:</strong></p>
              <p className="whitespace-pre-line text-lg">{selectedRecord.message}</p>
            </div>
            <p className="text-lg"><strong>บันทึกเมื่อ:</strong> {new Date(selectedRecord.created_at).toLocaleString()}</p>
            <div className="mt-8 text-right">
              <button
                className="bg-pink text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600"
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