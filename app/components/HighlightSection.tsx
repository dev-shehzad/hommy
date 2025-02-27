'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { FaCircle } from "react-icons/fa"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

// Sanity ke liye image builder setup
const builder = imageUrlBuilder(client)

// Function to generate image URL
const urlFor = (source: any) => builder.image(source)

interface HighlightData {
  title: string
  image?: any
  points?: string[]
}

export default function HighlightSection() {
  const [highlight, setHighlight] = useState<HighlightData | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await client.fetch(`*[_type == "blogmodule7"][0]`)
        setHighlight(result)
      } catch (error) {
        console.error("Sanity Fetch Error:", error)
      }
    }
    fetchData()
  }, [])

  if (!highlight) return <p>Loading...</p>

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="bg-gray-300 p-6 md:p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square md:aspect-[4/3] bg-[#ff9f80] rounded-lg overflow-hidden">
              {highlight.image && (
                <Image
                  src={urlFor(highlight.image).url()} // Fixed Image URL
                  alt={highlight.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {highlight.title}
            </h2>

            <div className="space-y-4">
              {highlight.points?.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCircle className="w-2 h-2 mt-2 text-gray-600" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
