"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";


export default function HomePage() {

  const [timeLeft, setTimeLeft, ] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
    const [showQRCodePopup, setShowQRCodePopup] = useState(false);

    // Set your wedding date
    const weddingDate = new Date("2025-12-06T09:00:00");

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
    }, [weddingDate]);

    const togglePopup = () => {
      setShowQRCodePopup(!showQRCodePopup);
    };

    
    return (
      <div>
        <audio autoPlay loop controls className="w-full">
      <source src="/audio/ToTheMoon.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
        <section className="bg-pink p-10 text-white text-center rounded-md">
          <h1 className="text-4xl font-bold font-darleston">Welcome to our wedding.</h1>
          <p className="text-1xl mt-4">We’re so delighted to have you here to share in the love and happiness of Ketmanee and Nattapon.</p>
          <p className="text-1xl mt-4">It was filled with love laughter and good memories of the two of us.</p>
        </section>
        <section className="mt-0">
          <Carousel
            autoPlay        // เปิดใช้งานเลื่อนอัตโนมัติ
            infiniteLoop    // วนซ้ำเมื่อถึงภาพสุดท้าย
            interval={2000} // เวลาแต่ละภาพ (หน่วย: ms)
            showThumbs={false} // ซ่อนแถบ Thumbnail
            showStatus={false} // ซ่อนสถานะ (เช่น "1/3")
            >
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/banner1-mobile.jpg" />
            <source media="(min-width: 769px)" srcSet="/images/banner1.png" />
            <img src="/images/banner1.jpg" alt="Banner 1" />
          </picture>
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/banner2-mobile.jpg" />
            <source media="(min-width: 769px)" srcSet="/images/banner2.jpg" />
            <img src="/images/banner2.jpg" alt="Banner 2" />
          </picture>
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/banner3-mobile.jpg" />
            <source media="(min-width: 769px)" srcSet="/images/banner3.jpg" />
            <img src="/images/banner3.jpg" alt="Banner 3" />
          </picture>
        </Carousel>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-40 mt-10 px-4 text-center">
        {/* Text Section */}
      <div className="text-center">
        <h2 className="text-5xl lg:text-[80px] text-yellow-700 font-darleston mb-10">Save The Date</h2>
        <p className="text-3xl lg:text-6xl font-semibold text-rose-400 font-darleston mb-10 ">Benz & M</p>
        <p className="text-3xl lg:text-6xl text-yellow-700 mt-4 font-darleston">We Are Getting Married</p>
      </div>

        {/* Image Section */}
      <div className="rounded-[200px] overflow-hidden shadow-lg w-72 h-96 lg:w-80 lg:h-96">
        <img src="/images/sample-couple3.JPG" alt="benz and M" className="w-full h-full object-cover" />
      </div>
      </section>
      <section className="text-center py-10 mt-16">
        <h2 className="text-4xl lg:text-[80px] font-semibold text-rose-400 font-darleston mb-4 pb-10">Time To Celebrate</h2>
        <p className="text-xl lg:text-1xl text-yellow-700 mb-6 pb-10 font-darleston">
        We cordially invite you to celebrate our love and marriage as we count down to our special day together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center bg-rose-100 text-yellow-700 font-darleston rounded-lg shadow-md px-6 py-4">
              <span className="text-3xl lg:text-5xl font-bold">{value}</span>
              <span className="text-sm lg:text-lg capitalize mt-2 text-yellow-700">{key}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-between gap-20 mt-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Text Section - Left */}
        <div className="text-center lg:text-right lg:pl-30 flex-1">
          <h3 className="text-3xl lg:text-4xl font-bold text-rose-500 font-darleston">Benz</h3>
          <p className="text-2xl lg:text-3xl text-yellow-900 font-darleston mt-2">Ketmanee Manuson</p>
          <p className="text-sm lg:text-lg text-yellow-700 mt-1 font-darleston">นางสาวเก็จมณี มานุสนธ์</p>
        </div>

        {/* Image Section - Center */}
        <div className="rounded-full overflow-hidden shadow-lg w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mx-10 lg:mx-0 flex-shrink-0 lg:mx-20">
          <img src="/images/sample-couple.jpg" alt="benz and M" className="w-full h-full object-cover" />
        </div>

        {/* Text Section - Right */}
        <div className="text-center lg:text-right lg:pl-30 flex-1">
          <h3 className="text-3xl lg:text-4xl font-bold text-rose-500 font-darleston">M</h3>
          <p className="text-2xl lg:text-3xl text-yellow-900 font-darleston mt-2">Nattapon Khansri</p>
          <p className="text-sm lg:text-lg text-yellow-700 mt-1 font-darleston">นายณัฐพล คานศรี</p>
        </div>

        {/* Image Section - Center */}
        <div className="rounded-full overflow-hidden shadow-lg w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mx-10 lg:mx-0 flex-shrink-0 lg:mx-20">
          <img src="/images/sample-couple2.jpg" alt="benz and M" className="w-full h-full object-cover" />
        </div>
         </div>
      </section>
      <section className="text-center py-10 mt-16 px-4">
          <h2 className="text-4xl lg:text-6xl font-semibold text-rose-400 font-darleston mb-4"> Wedding Schedule </h2>
          <p className="text-xl lg:text-2xl text-yellow-900 font-semibold mb-6 pt-10"> กำหนดพิธีการ </p>
          <p className="text-lg lg:text-xl text-yellow-700 mb-10">วันเสาร์ที่ 6 ธันวาคม พ.ศ. 2568 </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Catholic Wedding Ceremony */}
        <div className="flex flex-col items-center">
          <img src="/images/pan.png" alt="Catholic Wedding Ceremony" className="w-20 h-20 mb-4"/>
          <p className="text-lg lg:text-xl font-semibold text-yellow-700"> แห่ขันหมาก </p>
          <p className="text-lg lg:text-xl text-yellow-700">08 : 08 น.</p>
        </div>
        {/* Guest Registration */}
        <div className="flex flex-col items-center">
          <img src="/images/ring.png" alt="Guest Registration" className="w-20 h-20 mb-4"/>
          <p className="text-lg lg:text-xl font-semibold text-yellow-700"> บายศรีสู่ขวัญ </p>
          <p className="text-lg lg:text-xl text-yellow-700">09 : 09 น.</p>
        </div>
        {/* Reception */}
        <div className="flex flex-col items-center">
           <img src="/images/dinner-icon.png" alt="Reception" className="w-20 h-20 mb-4"/>
           <p className="text-lg lg:text-xl font-semibold text-yellow-700"> รับประทานอาหารร่วมกัน </p>
           <p className="text-lg lg:text-xl text-yellow-700">11 : 00 น.</p>
        </div>
        </div>
    </section>
    <section className="mt-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Image 1 */}
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img src="/images/photo1.JPG" alt="Image 1" className="w-full h-full object-cover" />
      </div>
      {/* Image 2 */}
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img src="/images/photo2.JPG" alt="Image 2" className="w-full h-full object-cover" />
      </div>
      {/* Image 3 */}
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img src="/images/photo3.JPG" alt="Image 3" className="w-full h-full object-cover" />
      </div>
      {/* Image 4 */}
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img src="/images/photo4.JPG" alt="Image 4" className="w-full h-full object-cover" />
      </div>
      {/* Add more images */}
      </div>
    </section>
    <section className="mt-10 px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-rose-400 font-darleston mb-4 pt-10 pb-10">WEDDING GIFT</h2>
          <div className="relative max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden mb-6 pt-10">
          <video src="/videos/IMG_2199.mov" className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          </div>
          <p className="text-lg lg:text-xl text-yellow-700 mb-10">ร่วมแสดงความยินดีและส่งมอบของขวัญให้คู่บ่าวสาว เนื่องในโอกาสพิเศษ</p>
        <button
          className="bg-pink text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-white hover:text-pink mb-6"
          onClick={togglePopup}> แสดงคำอวยพรให้คู่บ่าวสาว
        </button>
          <p className="text-lg lg:text-xl text-yellow-700 mb-10 pt-5">ขอบคุณทุกท่านที่ร่วมเป็นส่วนหนึ่งในวันสำคัญของเรา</p>

        <p className="text-lg lg:text-xl text-yellow-700 mb-10">อย่าลืมแบ่งปันความทรงจำดี ๆ ในวันสำคัญของเรา ด้วยการติดแฮชแท็ก</p>
        <h3 className="text-3xl lg:text-4xl text-rose-400 font-darleston mb-6 pt-5">#BenzM Wedding</h3>
      <div className="flex justify-center gap-4 pb-20">
        <a href="https://facebook.com" target="_blank" rel="facebook">
        <img src="/icons/facebook.png" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="instagram">
        <img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
        </a>
      </div>
    </section>
    {/* QR Code Popup */}
    {showQRCodePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 bg-pink text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={togglePopup}>×
            </button>
            <h2 className="text-lg lg:text-xl text-yellow-700 font-bold text-center mb-4">แสดงคำอวยพรให้คู่บ่าวสาว</h2>
            {/* <img src="/images/qrcode-sample.png" alt="Gift QR Code" className="w-64 h-64 object-contain mx-auto"/> */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-yellow-700">
          {/* First Name */}
          <div className="md:col-span-1">
            <label htmlFor="firstName" className="block text-lg mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="w-full p-3 border border-pink rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-lg mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="w-full p-3 border border-pink rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-lg mb-2">
              Message
            </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            required
            rows={8} // Use curly braces to pass a number, not a string
            className="w-full p-3 border border-pink rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 text-black"
          ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-pink text-white text-lg font-bold py-4 px-12 rounded-full shadow-lg hover:bg-white hover:text-pink focus:ring-2 focus:ring-green-500 focus:outline-none transform transition duration-300 hover:scale-105"
            >
              Submit
            </button>
          </div>
          </form>
          </div>
        </div>
      )}
      </div>
    );
  }
  