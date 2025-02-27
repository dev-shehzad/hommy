'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaMapMarkerAlt, FaClock, FaMountain } from "react-icons/fa"
import { client } from "@/sanity/lib/client" // Make sure this is correctly set up
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

// Sanity ke image URL ko generate karne ka function
function urlFor(source) {
  return builder.image(source).width(600).height(400).url()
}

export default function PopularPlaces() {
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const result = await client.fetch(
          `*[_type == "place"]{
            _id,
            title,
            image,
            description,
            distance,
            duration,
            difficulty
          }`
        )
        setPlaces(result || [])
      } catch (error) {
        console.error("Error fetching places:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPlaces()
  }, [])

  if (loading) return <p className="text-center text-gray-500">Loading places...</p>
  if (!places.length) return <p className="text-center text-gray-500">No places found.</p>

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">POPULAR PLACES & ACTIVITIES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place) => (
            <div key={place._id} className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Image Container */}
              <div className="relative aspect-square">
                <Image
                  src={place.image ? urlFor(place.image) : "/placeholder.svg"}
                  alt={place.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-lg">{place.title}</h3>
                <p className="text-gray-600 text-sm">{place.description}</p>

                {/* Details */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaMapMarkerAlt className="text-gray-400" />
                    <span>Distance: {place.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClock className="text-gray-400" />
                    <span>Duration: {place.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaMountain className="text-gray-400" />
                    <span>Difficulty: {place.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
