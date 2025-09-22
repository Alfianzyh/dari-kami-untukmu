"use client";

import React, { useState } from "react";
import Logo from "./logo";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer font-semibold text-lg text-black"
        >
          DariKamiUntukmu
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 ml-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-800 text-[15px] font-medium hover:text-black transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="px-4 py-1.5 bg-gray-200 text-black rounded-full text-sm font-medium hover:bg-gray-300 transition">
            Masuk
          </button>
          <button className="px-4 py-1.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition">
            Daftar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 px-6 space-y-4 bg-white shadow-md pb-4"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 text-base font-medium hover:text-black transition"
              >
                {item.label}
              </button>
            ))}

            {/* Auth Buttons in mobile */}
            <div className="flex flex-col space-y-2 pt-4">
              <button className="w-full h-[35px] flex items-center justify-center bg-gray-200 rounded-full text-sm font-medium hover:bg-gray-300 transition">
                Masuk
              </button>
              <button className="w-full h-[35px] flex items-center justify-center bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition">
                Daftar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
