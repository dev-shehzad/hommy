"use client"

import { useEffect, useState } from "react"
import { FaCircle } from "react-icons/fa"
import Image from "next/image"

const images = [
  {
    url: "/luna.jpg",
    title: "The End",
    icons: 2,
  },
  {
    url: "/mia.jpg",
    title: "The End",
    icons: 3,
  },
  {
    url: "/balanca.jpg",
    title: "The End",
    icons: 1,
  },
  {
    url: "/countryside.jpg",
    title: "The End",
    icons: 4,
  },
  {
    url: "/hausluna.jpg",
    title: "The End",
    icons: 2,
  },
]

export default function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-lg">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative aspect-square bg-[#ffd7ce] overflow-hidden group">
                {/* Diagonal Pattern Overlay */}
                <div className="absolute inset-0">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 12px)`,
                    }}
                  />
                </div>

                {/* Image */}
                <div className="relative h-full w-full">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80"
                  />
                </div>

                {/* Icons Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {[...Array(image.icons)].map((_, i) => (
                    <FaCircle key={i} className="text-gray-600 text-sm" />
                  ))}
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
                  <h3 className="text-lg font-medium text-center">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

