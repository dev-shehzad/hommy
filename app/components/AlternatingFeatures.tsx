"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { FaBed, FaWifi, FaParking, FaCoffee, FaSwimmingPool, FaUtensils } from "react-icons/fa"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

// Image URL generator
const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source).url()
}

// Icon mapping
const iconMap: { [key: string]: JSX.Element } = {
  FaBed: <FaBed className="text-gray-600 w-4 h-4" />,
  FaWifi: <FaWifi className="text-gray-600 w-4 h-4" />,
  FaParking: <FaParking className="text-gray-600 w-4 h-4" />,
  FaCoffee: <FaCoffee className="text-gray-600 w-4 h-4" />,
  FaSwimmingPool: <FaSwimmingPool className="text-gray-600 w-4 h-4" />,
  FaUtensils: <FaUtensils className="text-gray-600 w-4 h-4" />,
}

interface Feature {
  title: string
  description: string
  amenities: { label: string; icon: string }[]
  image: any
  imagePosition: "left" | "right"
}

export default function AlternatingFeatures() {
  const [features, setFeatures] = useState<Feature[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await client.fetch(`*[_type == "blogmodule9"][0].features`)
        setFeatures(result || [])
      } catch (error) {
        console.error("Sanity Fetch Error:", error)
      }
    }
    fetchData()
  }, [])

  if (!features.length) return <p>Loading...</p>

  return (
    <div className="max-w-7xl mx-auto px-4 my-12 mb-11">
      <div className="space-y-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-300 p-6 rounded-lg">
            <div
              className={`flex flex-col ${feature.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] bg-[#ff9f80] rounded-lg overflow-hidden">
                  {feature.image && (
                    <Image
                      src={urlFor(feature.image)}
                      alt={feature.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {feature.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                      {iconMap[amenity.icon] || <FaBed className="text-gray-600 w-4 h-4" />}
                      <span className="text-sm text-gray-700">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
