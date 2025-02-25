"use client"

import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCalendar } from "react-icons/fa"
import Image from "next/image"

const carouselImages = ["/luna.jpg", "/mia.jpg", "/balanca.jpg", "/hausluna.jpg"]

export default function HoneymoonLayout() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">HONEYMOON</h1>
            <p className="text-xl text-gray-600">in Alps</p>
          </div>

          {/* Images Row */}
          <div className="flex gap-4">
            {/* First Image Box */}
            <div className="flex-1 space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                <Image src="/luna.jpg" alt="Location 1" layout="fill" objectFit="cover" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Mountain Resort</h3>
                <p className="text-sm text-gray-600">
                  Experience luxury in the heart of the Alps with breathtaking mountain views
                </p>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <FaMapMarkerAlt />
                  <span>Swiss Alps</span>
                </div>
              </div>
            </div>

            {/* Second Image Box */}
            <div className="flex-1 space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                <Image src="/mia.jpg" alt="Location 2" layout="fill" objectFit="cover" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Luxury Suite</h3>
                <p className="text-sm text-gray-600">
                  Perfect romantic getaway with premium amenities and stunning views
                </p>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <FaCalendar />
                  <span>Available Year-round</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="lg:w-1/2 relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          {/* Main Carousel Image */}
          <div className="relative h-full">
            <Image
              src={carouselImages[currentSlide] || "/placeholder.svg"}
              alt={`Slide ${currentSlide + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors z-30"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors z-30"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

