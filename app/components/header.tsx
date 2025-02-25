"use client";

import { useState } from "react";
import { navItems, houses, menuLinks } from "../data/navigation";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCalendar,
  FaSun,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full">
      {/* Main Header */}
      <div className="bg-white border-b w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              LOGO
            </Link>

            {/* Navigation - Only visible on larger screens */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="flex items-center gap-2 px-4 py-2 text-lg rounded-md hover:bg-gray-100"
                >
                  <FaCalendar className="text-gray-400 text-xl" />
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button className="flex items-center gap-2 text-lg">
                <FaGlobe className="text-xl" />
                EN
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 sm:p-3 hover:bg-gray-100 rounded-md"
              >
                <FaBars className="text-xl sm:text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 py-8">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 hover:bg-gray-100 rounded-full"
            >
              <FaTimes className="text-xl sm:text-2xl" />
            </button>

            {/* Navigation Items - Visible on smaller screens */}
            <nav className="md:hidden mt-8 mb-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="flex items-center gap-2 px-4 py-3 text-lg border-b border-gray-200 hover:bg-gray-50"
                >
                  <FaCalendar className="text-gray-400 text-xl" />
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="grid sm:grid-cols-3 gap-8 mt-12 sm:mt-16">
              {/* Left Column - Houses */}
              <div className="space-y-4 sm:space-y-6">
                {houses.map((house) => (
                  <a
                    key={house.id}
                    href={house.link}
                    className="block text-xl sm:text-2xl hover:text-gray-600"
                  >
                    {house.name}
                  </a>
                ))}
                <a
                  href="/about"
                  className="block text-xl sm:text-2xl hover:text-gray-600"
                >
                  About Us
                </a>
              </div>

              {/* Middle Column - Calendar */}
              <div className="space-y-4 sm:space-y-6">
                <div className="p-4 sm:p-6 border rounded-lg">
                  <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
                    Janaury 2025
                  </h3>
                  {/* Calendar Grid - Simplified Version */}
                  <div className="grid grid-cols-7 gap-2 sm:gap-3">
                    {Array.from({ length: 31 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square flex items-center justify-center text-sm sm:text-lg border rounded"
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full py-2 sm:py-3 text-base sm:text-lg bg-gray-900 text-white rounded-full hover:bg-gray-800">
                  BOOK NOW
                </button>
              </div>

              {/* Right Column - Links */}
              <div className="space-y-4 sm:space-y-6">
                {menuLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.link}
                    className="block text-lg sm:text-xl hover:text-gray-600"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                <div className="flex gap-4 sm:gap-6">
                  <FaFacebook className="text-xl sm:text-2xl hover:text-gray-600 cursor-pointer" />
                  <FaTwitter className="text-xl sm:text-2xl hover:text-gray-600 cursor-pointer" />
                  <FaInstagram className="text-xl sm:text-2xl hover:text-gray-600 cursor-pointer" />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <span className="text-base sm:text-lg">Sign Up & get 5%</span>
                  <input
                    type="email"
                    placeholder="e-mail-adress"
                    className="px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg border rounded-md w-full sm:w-auto"
                  />
                  <button className="p-2 sm:p-3 bg-gray-900 text-white rounded-md hover:bg-gray-800">
                    <FaSun className="text-lg sm:text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
