"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCalendar,
  FaSun,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";

const navItems = [
  {
    id: 1,
    label: "Calendar",
    link: "/calendar",
  },
  {
    id: 2,
    label: "Events",
    link: "/events",
  },
  {
    id: 3,
    label: "Experiences",
    link: "/experiences",
  },
];

const houses = [
  {
    id: 1,
    name: "House 1",
    link: "/house1",
  },
  {
    id: 2,
    name: "House 2",
    link: "/house2",
  },
  {
    id: 3,
    name: "House 3",
    link: "/house3",
  },
];

const menuLinks = [
  {
    id: 1,
    label: "Link 1",
    link: "/link1",
  },
  {
    id: 2,
    label: "Link 2",
    link: "/link2",
  },
  {
    id: 3,
    label: "Link 3",
    link: "/link3",
  },
];

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const lastScrollY = useRef(0);
  const hasHiddenOnce = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && !hasHiddenOnce.current) {
        setIsHidden(true);
        hasHiddenOnce.current = true;

        setTimeout(() => {
          setIsHidden(false);
          setIsWhiteBg(true);
        }, 100);
      } else if (currentScrollY === 0) {
        setIsWhiteBg(false);
        hasHiddenOnce.current = false;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${isWhiteBg ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="bg-transparent w-full relative">
        <div className="container bg-transparent mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <Link
              href="/"
              className={`text-xl font-bold tracking-wider ${
                isWhiteBg ? "text-black" : "text-white"
              }`}
            >
              DESIGN HOTELS<sup>®</sup>
            </Link>

            {/* Desktop Search Bar */}
            <div
              className={`hidden lg:flex items-center bg-white px-2 py-1 rounded-full mx-4 flex-1 w-full max-w-lg ${
                isWhiteBg ? "bg-white border" : "border-none"
              }`}
            >
              <div className="flex items-center w-full">
                <div className="flex items-center pl-4 pr-2 py-3 border-r">
                  <FaSearch className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search Destination"
                    className="bg-transparent outline-none text-[12px] w-full min-w-[120px]"
                  />
                </div>
                <div className="px-4 py-3 text-nowrap border-r text-[12px] font-[600]">
                  Check-in - Check-out
                </div>
                <div className="px-4 py-3 text-[12px]">Guests</div>
                <button className="bg-black text-white text-[12px] px-6 py-2 ml-auto rounded-[25px]">
                  Search
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div
              className={`flex items-center gap-6 ${isWhiteBg ? "text-black" : "text-white"}`}
            >
              <Link href="/apartment" className="hidden lg:block text-sm font-light">
                Apartment
              </Link>
              <Link href="/houses" className="hidden lg:block text-sm font-light">
                Houses
              </Link>
              <Link href="/blogs" className="hidden lg:block text-sm font-light">
                Blogs
              </Link>
              <button className="hidden lg:flex items-center justify-center w-8 h-8">
                <FaUser
                  className={`${isWhiteBg ? "text-black" : "text-white"}`}
                />
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex flex-col gap-1 p-2 "
              >
                <span
                  className={`w-5 h-0.5 ${isWhiteBg ? "bg-black" : "bg-white"}`}
                ></span>
                <span
                  className={`w-5 h-0.5 ${isWhiteBg ? "bg-black" : "bg-white"}`}
                ></span>
                <span
                  className={`w-5 h-0.5 ${isWhiteBg ? "bg-black" : "bg-white"}`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Search */}
      <div className="hidden bg-white p-4">
        <div className="flex items-center border rounded-md overflow-hidden">
          <FaSearch className="text-gray-400 mx-3" />
          <input
            type="text"
            placeholder="Search Destination"
            className="flex-1 py-2 outline-none text-sm"
          />
          <button className="bg-black text-white px-4 py-2">Search</button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-50 bg-white">
          <div className=" bg-white mx-auto px-4 sm:px-6 py-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 hover:bg-gray-100 rounded-full"
            >
              <FaTimes className="text-xl sm:text-2xl" />
            </button>

            <nav className="md:hidden mt-8 mb-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="flex items-center gap-2 px-4 py-3 text-lg border-b border-gray-200 hover:bg-gray-50"
                >
                  <FaCalendar className="text-gray-400 text-xl" />
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="grid sm:grid-cols-3 gap-8 mt-12 sm:mt-16">
              <div className="space-y-4 sm:space-y-6">
                {houses.map((house) => (
                  <Link
                    key={house.id}
                    href={house.link}
                    className="block text-xl sm:text-2xl hover:text-gray-600"
                  >
                    {house.name}
                  </Link>
                ))}
                <Link
                  href="/about"
                  className="block text-xl sm:text-2xl hover:text-gray-600"
                >
                  About Us
                </Link>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="p-4 sm:p-6 border rounded-lg">
                  <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
                    January 2025
                  </h3>
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

              <div className="space-y-4 sm:space-y-6">
                {menuLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.link}
                    className="block text-lg sm:text-xl hover:text-gray-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

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
                    placeholder="e-mail-address"
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