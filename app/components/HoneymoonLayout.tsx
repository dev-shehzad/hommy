"use client"

import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCalendar } from "react-icons/fa"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url" 

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function HoneymoonLayout() {
  const [data, setData] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const result = await client.fetch(
        `*[_type == "honeymoonlayout"][0]{title, subtitle, locations, carouselImages}`
      )
      setData(result)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (data?.carouselImages?.length || 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [data])

  if (!data) return null

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <p className="text-xl text-gray-600">{data.subtitle}</p>
          </div>

          {/* Locations */}
          <div className="flex gap-4">
            {data.locations.map((location, index) => (
              <div key={index} className="flex-1 space-y-4">
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                  <Image
                    src={urlFor(location.image).url()}
                    alt={location.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.description}</p>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    {location.location ? (
                      <>
                        <FaMapMarkerAlt />
                        <span>{location.location}</span>
                      </>
                    ) : (
                      <>
                        <FaCalendar />
                        <span>{location.availability}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="lg:w-1/2 relative overflow-hidden h-[600px]">
  {/* Carousel Container */}
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {data.carouselImages.map((image, index) => (
      <div key={index} className="min-w-full flex-shrink-0">
        <Image
          src={urlFor(image).url()}
          alt={`Slide ${index + 1}`}
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    ))}
  </div>

  {/* Navigation Arrows */}
  <button
    onClick={() =>
      setCurrentSlide((prev) =>
        prev === 0 ? data.carouselImages.length - 1 : prev - 1
      )
    }
    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors z-30"
  >
    <FaChevronLeft className="w-5 h-5" />
  </button>
  <button
    onClick={() =>
      setCurrentSlide((prev) =>
        prev === data.carouselImages.length - 1 ? 0 : prev + 1
      )
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors z-30"
  >
    <FaChevronRight className="w-5 h-5" />
  </button>

  {/* Dots */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
    {data.carouselImages.map((_, index) => (
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
