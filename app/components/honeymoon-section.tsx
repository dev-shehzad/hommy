"use client"

import { useRef } from "react"
import { FaArrowDown, FaEye, FaUsers } from "react-icons/fa"
import AutoCarousel from "./auto-carousel"

export default function HoneymoonSection() {
  const nextSectionRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="relative min-h-[500px] w-full bg-[#ffd7ce] overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_URL || "/luxury.jpg"})`,
          }}
        >
          <div className="absolute inset-0 bg-gray-400 bg-opacity-80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-between h-full min-h-[500px]">
          {/* Text Content */}
          <div className="text-center space-y-4 mt-12">
            <h1 className="text-4xl md:text-5xl font-light">HONEYMOON</h1>
            <p className="text-xl md:text-2xl text-gray-900">Our Boutique</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full max-w-md mb-12">
            <button className="flex-1 px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white transition-colors flex items-center justify-center gap-2">
              <FaEye />
              <span>view</span>
            </button>
            <button className="flex-1 px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white transition-colors flex items-center justify-center gap-2">
              <FaUsers />
              <span>family</span>
            </button>
          </div>

          {/* Scroll Down Icon */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-900 transition-colors animate-bounce"
          >
            <FaArrowDown size={24} />
          </button>
        </div>
      </section>

      {/* Auto Carousel Section */}
      <section ref={nextSectionRef} className="min-h-screen bg-white py-16">
        <AutoCarousel />
      </section>
    </>
  )
}

