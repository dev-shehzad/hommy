'use client'
import { useState, useEffect } from "react"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "@/sanity/lib/client"

const builder = imageUrlBuilder(client)

// Function to get the image URL
function urlFor(source) {
  return builder.image(source).width(1600).height(900).url()
}

export default function LocalLifeBanner() {
  const [banner, setBanner] = useState(null)

  useEffect(() => {
    async function fetchBanner() {
      try {
        const result = await client.fetch(
          `*[_type == "blogmodule5"][0]{title, subtitle, backgroundImage}`
        )
        setBanner(result)
      } catch (error) {
        console.error("Error fetching banner:", error)
      }
    }
    fetchBanner()
  }, [])

  if (!banner) return <p className="text-center text-gray-500">Loading banner...</p>

  return (
    <div className="max-w-7xl mx-auto my-8 sm:my-16 px-4 sm:px-8">
      <div className="bg-gray-400 p-4 sm:p-8 rounded-lg">
        {/* Content Box */}
        <div className="bg-gray-300 p-4 sm:p-8 rounded-lg relative overflow-hidden shadow-lg">
          {/* Background Image */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${banner.backgroundImage ? urlFor(banner.backgroundImage) : "/luna.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center space-y-4 py-4 sm:py-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{banner.title}</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">{banner.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
