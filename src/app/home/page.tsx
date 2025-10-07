"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fileToBase64 } from "@/utils/file-management";

// Set your wedding date
const weddingDate = new Date("2025-12-06T09:00:00");

export default function HomePage() {
    // Ref
    const inputFileRef = React.useRef<HTMLInputElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [showQRCodePopup, setShowQRCodePopup] = useState(false);

useEffect(() => {
    const timer = setInterval(() => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference > 0) {
        setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
                });
    } else {
        clearInterval(timer);
        }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

const togglePopup = () => {
    setShowQRCodePopup(!showQRCodePopup);
        if (showQRCodePopup) {
            setFormData({
                firstName: "",
                lastName: "",
                message: "",
                imageSrc: "",
            });
        }
    };

const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    imageSrc: "",
    });
const [statusMessage, setStatusMessage] = useState("");
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
};

const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
const file = e.target.files?.item(0);
    if (file) {
const megabyte = Math.round((file.size / 1024 / 1000) * 100) / 100; // ปัดเศษขึ้นต่ำแหน่งที่สอง
    if (megabyte > 3) {
    if (inputFileRef.current) {
        inputFileRef.current.value = "";
        inputFileRef.current.files = null;
    }
        setFormData((prev) => ({ ...prev, imageSrc: "" }));
        alert("รูปภาพของคุณต้องไม่เกิน 3 MB");
        return;
    }
const base64 = await fileToBase64(file);
    setFormData((prev) => ({ ...prev, imageSrc: base64 }));
        }
    };
const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
const response = await fetch("https://wedding-day-seven.vercel.app/api/save-data", {
// const response = await fetch("http://localhost:3000/api/save-data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
    firstname: formData.firstName,
    lastname: formData.lastName,
    message: formData.message,
    image: formData?.imageSrc,
    }),
});

const result = await response.json();
    if (response.ok) {
        // setStatusMessage('Data submitted successfully!');
        alert("ขอบคุณสำหรับคำอวยพรดีๆ ขอให้ท่านมีความสุขดั่งคำอวยพร");
        togglePopup();
        // setFormData({ firstName: '', lastName: '', message: '' }); // Reset form
        } else {
            setStatusMessage(result.error || "Failed to submit data.");
        }
        } catch (error) {
            console.error("Error submitting form:", error);
            // setStatusMessage('An unexpected error occurred. Please try again later.');
            alert("บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่");
        } finally {
            setIsSubmitting(false);
        }
    };

return (
    <div>
        <audio autoPlay loop controls className="w-full">
            <source src="/audio/ToTheMoon.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
<section className=" bg-rose-400/70 p-10 text-white text-center rounded-md">
    <h1 className="text-4xl font-bold ">เพราะความรักเติบโตในทุกๆวัน...</h1>
    <p className="text-1xl mt-4">
        เราสองคนจึงตั้งใจจะก้าวไปสู่บทใหม่ของชีวิตและอยากให้ทุกคนได้เป็นส่วนหนึ่งของความทรงจำอันสวยงามนี้ด้วยกัน
    </p>
    <p className="text-1xl mt-4">Together, we are embarking on a new chapter of our lives, and we sincerely wish for you to be part of this beautiful and cherished moment with us.</p>
</section>
<section className="mt-0 items-center">
    <picture>
        <source media="(max-width: 768px)" srcSet="/images/banner2-mobile.png" />
            {/* <source media="(min-width: 769px)" srcSet="/images/banner2.png" /> */}
            {/* <img src="/images/banner2.jpg" alt="Banner 2" /> */}
    </picture>
</section>
<section className="flex flex-col lg:flex-row items-center justify-center gap-40 mt-10 px-4 text-center">
    <div className="text-center">
        <h2 className="text-5xl lg:text-[80px] text-yellow-700 mb-10">Save The Date</h2>
        <p className="text-3xl lg:text-6xl font-semibold text-rose-400 font-darleston mb-10 ">Benz & M</p>
        <p className="text-3xl lg:text-6xl text-yellow-700 mt-4">เรากำลังจะแต่งงาน</p>
    </div>

    <div className="rounded-[200px] overflow-hidden shadow-xl w-72 h-96 lg:w-80 lg:h-96">
        <Image
            src="/images/IMG_3553 copy.jpg"
            alt="benz and M"
            width={320}
            height={400}
            className="w-full h-full object-cover"
            priority
        />
    </div>
</section>
<section className="text-center py-10 mt-16">
    <h2 className="text-4xl lg:text-[80px] font-semibold text-rose-400 font-darleston mb-4 pb-10">
        Time To Celebrate
    </h2>
    <p className="text-xl lg:text-1xl text-yellow-700 mb-6 pb-10">
        การมีคุณในวันพิเศษของเราคือของขวัญที่มีค่าที่สุดแล้วพบกันในงานนะคะ💕
    </p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 ">
        {Object.entries(timeLeft).map(([key, value]) => (
        <div
            key={key}
            className="flex flex-col items-center bg-rose-400/70 text-yellow-700 font-darleston rounded-lg shadow-lg px-6 py-4">
            <span className="text-3xl lg:text-5xl font-bold">{value}</span>
            <span className="text-sm lg:text-lg capitalize mt-2 text-yellow-700">{key}</span>
        </div>
    ))}
    </div>
</section>
<section className="min-h-screen flex items-center justify-center px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-20 w-full max-w-7xl">
        {/* Text Section - Left */}
        <div className="text-center lg:text-right lg:pl-10 flex-1">
            <h3 className="text-3xl lg:text-4xl font-bold text-rose-500 font-darleston">Benz</h3>
            <p className="text-2xl lg:text-3xl text-yellow-900 font-darleston mt-2">Ketmanee Manuson</p>
            <p className="text-sm lg:text-lg text-yellow-700 mt-1">นางสาวเก็จมณี มานุสนธ์</p>
        </div>
        {/* Image Section - Center */}
        <div className="rounded-[200px] overflow-hidden shadow-xl w-72 h-[500px] lg:w-80 lg:h-[600px]">
        <Image
            src="/images/IMG_3606.jpg"
            alt="benz and M"
            width={320}
            height={500}
            className="w-full h-full object-cover"
            priority
        />
    </div>
    {/* Text Section - Right */}
    <div className="text-center lg:text-left lg:pr-10 flex-1">
        <h3 className="text-3xl lg:text-4xl font-bold text-rose-500 font-darleston">M</h3>
        <p className="text-2xl lg:text-3xl text-yellow-900 font-darleston mt-2">Nattapon Khansri</p>
        <p className="text-sm lg:text-lg text-yellow-700 mt-1">นายณัฐพล คานศรี</p>
    </div>
    </div>
</section>
<section className="text-center py-10 mt-16 px-4">
    <h2 className="text-4xl lg:text-6xl font-semibold text-rose-400 font-darleston mb-4">
        {" "}Wedding Schedule{" "}
    </h2>
    <p className="text-xl lg:text-2xl text-yellow-900 font-semibold mb-6 pt-10"> กำหนดพิธีการ </p>
    <p className="text-lg lg:text-xl text-yellow-700 mb-10">วันเสาร์ที่ 6 ธันวาคม พ.ศ. 2568 </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Catholic Wedding Ceremony */}
        <div className="flex flex-col items-center">
            <Image
                src="/images/pan.png"
                alt="Catholic Wedding Ceremony"
                width={320}
                height={500}
                className="w-20 h-20 mb-4"
                priority
            />
        <p className="text-lg lg:text-xl font-semibold text-yellow-700"> แห่ขันหมาก </p>
        <p className="text-lg lg:text-xl text-yellow-700">08 : 08 น.</p>
        </div>
    {/* Guest Registration */}
        <div className="flex flex-col items-center">
            <Image
                src="/images/ring.png"
                alt="Guest Registration"
                width={320}
                height={500}
                className="w-20 h-20 mb-4"
                priority
            />
            <p className="text-lg lg:text-xl font-semibold text-yellow-700"> บายศรีสู่ขวัญ </p>
            <p className="text-lg lg:text-xl text-yellow-700">09 : 09 น.</p>
        </div>
    {/* Reception */}
        <div className="flex flex-col items-center">
            <Image
                src="/images/dinner-icon.png"
                alt="Reception"
                width={320}
                height={500}
                className="w-20 h-20 mb-4"
                priority
            />
            <p className="text-lg lg:text-xl font-semibold text-yellow-700"> รับประทานอาหารร่วมกัน </p>
            <p className="text-lg lg:text-xl text-yellow-700">11 : 00 น.</p>
        </div>
    </div>
</section>
<section className="mt-10 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
    {/* Image 1 */}
        <div className="relative overflow-hidden rounded-lg transition-shadow hover:shadow-xl hover:shadow-rose-400">
            <Image
                src="/images/S__19972102_0.jpg"
                alt="Image 1"
                width={320}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                priority
            />
        </div>
        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-lg transition-shadow  hover:shadow-xl hover:shadow-rose-400">
            <Image
                src="/images/S__19972104_0.jpg"
                alt="Image 2"
                width={320}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                priority
            />
        </div>
        {/* Image 3 */}
        <div className="relative overflow-hidden rounded-lg transition-shadow  hover:shadow-xl hover:shadow-rose-400">
            <Image
                src="/images/S__19972105_0.jpg"
                alt="Image 3"
                width={320}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                priority
            />
        </div>
        {/* Image 4 */}
        <div className="relative overflow-hidden rounded-lg transition-shadow  hover:shadow-xl hover:shadow-rose-400">
            <Image
                src="/images/S__19972106_0.jpg"
                alt="Image 4"
                width={320}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                priority
            />
        </div>
        {/* Image 5 */}
        <div className="relative overflow-hidden rounded-lg transition-shadow  hover:shadow-xl hover:shadow-rose-400">
            <Image
                src="/images/S__19972107_0.jpg"
                alt="Image 4"
                width={320}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                priority
            />
        </div>
        {/* Image 6 */}
        <div className="relative overflow-hidden rounded-lg transition-shadow  hover:shadow-xl hover:shadow-rose-400">
            <Image
                src="/images/S__19972108_0.jpg"
                alt="Image 6"
                width={320}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                priority
            />
        </div>
        {/* Image 7 */}
        <div className="relative overflow-hidden rounded-lg transition-shadow  hover:shadow-xl hover:shadow-rose-400">
            <Image
                src="/images/S__19972109_0.jpg"
                alt="Image 6"
                width={320}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                priority
            />
        </div>
        {/* Image 8 */}
        <div className="relative overflow-hidden rounded-lg transition-shadow  hover:shadow-xl hover:shadow-rose-400">
            <Image
                src="/images/S__19972110_0.jpg"
                alt="Image 6"
                width={320}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                priority
            />
        </div>
    </div>
</section>
<section className="mt-10 px-4 text-center">
    <h2 className="text-3xl lg:text-4xl font-semibold text-rose-400 mb-4 pt-10 pb-10">
        PREWEDDING
    </h2>
    <div className="relative max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden mb-6 pt-10">
        <video
            src="/videos/Pre (สำเนา).mov"
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
        ></video>
    </div>
        <p className="text-lg lg:text-xl text-yellow-700 mb-10">
            ร่วมแสดงความยินดีและส่งมอบของขวัญให้คู่บ่าวสาว เนื่องในโอกาสพิเศษ
        </p>
        <button
            className="bg-rose-400/70 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-white hover:text-pink mb-6"
            onClick={togglePopup}
        >
            {" "}แสดงคำอวยพรให้คู่บ่าวสาว
        </button>
        <p className="text-lg lg:text-xl text-yellow-700 mb-10 pt-5">
            ขอบคุณทุกท่านที่ร่วมเป็นส่วนหนึ่งในวันสำคัญของเรา
        </p>
        <p className="text-lg lg:text-xl text-yellow-700 mb-10">
            อย่าลืมแบ่งปันความทรงจำดี ๆ ในวันสำคัญของเรา ด้วยการติดแฮชแท็ก
        </p>
        <h3 className="text-3xl lg:text-4xl text-rose-400 mb-6 pt-5">#BMWeddingDay</h3>
        <div className="flex justify-center gap-4 pb-20">
            <a href="https://facebook.com" target="_blank" rel="facebook">
                <Image
                    src="/icons/Facebook_Logo.png"
                    alt="Facebook"
                    width={320}
                    height={500}
                    className="w-8 h-8"
                    priority
                />
            </a>
            <a href="https://instagram.com" target="_blank" rel="instagram">
                <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={320}
                    height={500}
                    className="w-8 h-8"
                    priority
                />
            </a>
        </div>
    </section>
{/* QR Code Popup */}
{showQRCodePopup && (
<div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
    <div className="max-h-[97%] flex flex-col animate-fade-in-down overflow-auto bg-white rounded-lg shadow-lg relative">
        <button
            className="absolute top-2 right-2 bg-pink text-white rounded-full w-8 h-8 flex items-center justify-center"
            onClick={togglePopup}
        >
            ×
        </button>
        <h2 className="text-lg lg:text-xl text-yellow-700 font-bold text-center mb-4 my-6">
            แสดงคำอวยพรให้คู่บ่าวสาว
        </h2>
        {/* <img src="/images/qrcode-sample.png" alt="Gift QR Code" className="w-64 h-64 object-contain mx-auto"/> */}
    <div className="flex-1 p-6 overflow-auto">
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-3 text-yellow-700"
        >
        {/* First Name */}
        <div className="md:col-span-1">
            <label htmlFor="firstName" className="block text-lg mb-2">
                ชื่อ
            </label>
            <input
                type="text"
                id="firstName"
                placeholder="ชื่อ"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-pink rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
            />
        </div>
        {/* Last Name */}
        <div>
            <label htmlFor="lastName" className="block text-lg mb-2">
                นามสกุล
            </label>
            <input
                type="text"
                id="lastName"
                placeholder="นามสกุล"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-pink rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
            />
        </div>
        {/* Message */}
        <div className="md:col-span-2">
            <label htmlFor="message" className="block text-lg mb-2">
                คำอวยพร
            </label>
            <textarea
                id="message"
                placeholder="ข้อความอวยพร"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3} // Use curly braces to pass a number, not a string
                className="w-full p-3 border border-pink rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
        ></textarea>
       {/*แสดงจำนวนตัวอักษร */}
        <div className="text-sm text-gray-500 text-right mt-1">
            {formData.message.length} / 1000 ตัวอักษร
        </div>
    </div>
    {/* Upload image */}
    <div className="md:col-span-2">
        <label htmlFor="message" className="block text-lg mb-2">
            <p className="mb-0">WEDDING GIFT</p>
                <Image
                    src="/images/S__14131223.jpg"
                    alt="Image 6"
                    width={320}
                    height={500}
                    className="w-full h-full object-cover pt-5"
                    priority
                />
            <p className="mb-0 pt-5">อัพโหลดภาพ</p>
        </label>
        <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            accept=".png, .jpg, .jpeg"
            className="mb-2 p-1 w-full text-slate-500 text-sm rounded-md leading-6 file:bg-rose-200 file:text-rose-700 file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-lg hover:file:bg-rose-100 border border-pink"
        />
        <p className="text-xs text-gray-400 mb-3">
            ประเภทไฟล์ .png, .jpg, .jpeg และขนาดไม่เกิน 3 MB
        </p>
        {/* preview image */}
        {formData?.imageSrc ? (
            <div className="p-2 border border-pink border-dashed rounded-lg">
                <Image
                    src={formData?.imageSrc}
                    width={300}
                    height={150}
                    className="w-full max-w-80 mx-auto h-auto object-scale-down shadow rounded-md overflow-hidden"
                    alt=""
                />
            </div>
        ) : null}
    </div>
    {/* Submit Button */}
    <div className="md:col-span-2 flex justify-center mt-4">
        <button
            type="submit"
            disabled={isSubmitting}
            className="bg-rose-400/70 text-white text-lg font-bold py-3 px-6 min-w-40 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed rounded-full shadow-lg hover:bg-white hover:text-pink focus:ring-2 focus:ring-green-500 focus:outline-none transform transition duration-300 hover:scale-105 flex flex-row gap-2 items-center justify-center"
        >
        {isSubmitting && (
        <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-200 animate-spin dark:text-rose-100 fill-pink"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
         />
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
        />
        </svg>
    )}
        Submit
    </button>
</div>
{/* Status Message */}
{statusMessage && (
    <div className="md:col-span-2 text-center mt-4 text-red-700 font-bold">
        {statusMessage}
    </div>
)}
                </form>
            </div>
    </div>
</div>
    )}
</div>
);
}
