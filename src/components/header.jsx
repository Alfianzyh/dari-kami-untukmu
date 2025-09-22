"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold cursor-pointer">DariKamiUntukmu</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#templates">Template</Link>
          <Link href="#pricing">Harga</Link>
          <Link href="#about">Tentang</Link>
          <Link href="#contact">Kontak</Link>
          <button className="px-4 py-2 bg-gray-200 rounded-full">Masuk</button>
          <button className="px-4 py-2 bg-black text-white rounded-full">Daftar</button>
        </nav>
 
        {/* Mobile Menu Button */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden text-2xl"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {nav && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center py-6 space-y-4 shadow-md md:hidden">
          <Link href="#templates" onClick={() => setNav(false)}>Template</Link>
          <Link href="#pricing" onClick={() => setNav(false)}>Harga</Link>
          <Link href="#about" onClick={() => setNav(false)}>Tentang</Link>
          <Link href="#contact" onClick={() => setNav(false)}>Kontak</Link>
          <button className="px-4 py-2 bg-gray-200 rounded-full">Masuk</button>
          <button className="px-4 py-2 bg-black text-white rounded-full">Daftar</button>
        </div>
      )}
    </header>
  );
}
