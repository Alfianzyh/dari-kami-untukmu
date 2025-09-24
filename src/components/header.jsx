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
    <header className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer font-semibold text-lg text-black flex items-center gap-2"
        >
          <Logo size={60} textSize="text-2xl" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 ml-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-gray-500 text-base font-medium hover:text-black transition cursor-pointer group"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-pink-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 to-amber-500 text-white shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
            Masuk
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-semibold border border-pink-500 text-pink-600 bg-white hover:bg-pink-50 shadow-sm transition-all duration-300 transform hover:scale-105 cursor-pointer">
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 px-6 pt-5 space-y-4 bg-white/95 backdrop-blur-md shadow-lg pb-6 rounded-xl"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 text-base font-medium hover:text-pink-600 transition"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <button className="w-full h-[40px] flex items-center justify-center rounded-full text-sm font-semibold bg-gradient-to-r from-pink-500 to-amber-500 text-white shadow-md hover:scale-105 transition-all duration-300">
                Masuk
              </button>
              <button className="w-full h-[40px] flex items-center justify-center rounded-full text-sm font-semibold border border-pink-500 text-pink-600 bg-white hover:bg-pink-50 shadow-sm hover:scale-105 transition-all duration-300">
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