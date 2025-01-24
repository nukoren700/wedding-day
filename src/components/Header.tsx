"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ควบคุมการเปิด-ปิดเมนู

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // เปลี่ยนสถานะเมื่อเลื่อนเกิน 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-pink shadow-lg" : "bg-pink shadow-lg"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* โลโก้ */}
        <div className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2 font-darleston">
          <span className="animate-spin-slow">🌟</span> Benz & M{" "}
          <span className="animate-spin-slow">🌟</span>
        </div>

        {/* เมนูสำหรับเดสก์ท็อป */}
        <nav className="hidden md:flex gap-6 text-lg md:text-2xl text-white font-darleston">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/location">Location</Link>
          </li>
          <li>
            <Link href="/qr-code">QR Code</Link>
          </li>
        </nav>

        {/* Hamburger Menu สำหรับมือถือ */}
        <div className="md:hidden text-white">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              className="absolute right-4 top-16 bg-pink shadow-lg rounded-lg p-4 w-48"
              style={{ zIndex: 60 }}
            >
              <ul className="flex flex-col gap-4 text-lg text-pink-600 font-darleston">
                <li>
                  <Link href="/home" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/location" onClick={() => setMenuOpen(false)}>
                    Location
                  </Link>
                </li>
                <li>
                  <Link href="/qr-code" onClick={() => setMenuOpen(false)}>
                    QR Code
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
