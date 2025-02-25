"use client"

import { nearbyPlaces } from "../data/location-data"
import { FaMapMarkerAlt, FaCircle } from "react-icons/fa"

export default function LocationSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section - Map */}
        <div className="bg-gray-200 rounded-lg overflow-hidden relative min-h-[400px]">
          {/* Map Image */}
          <img src="/placeholder.svg" alt="Location Map" className="w-full h-full object-cover" />

          {/* Map Marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-purple-100 p-2 rounded shadow-lg">
              <p className="text-sm font-medium">Luna Mia</p>
              <p className="text-xs">Boutique Apartments</p>
            </div>
            <FaMapMarkerAlt className="text-2xl text-purple-600 mx-auto mt-1" />
          </div>
        </div>

        {/* Right Section - Location Details */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Located in the</h2>
            <h3 className="text-xl">Neighbourhood</h3>
          </div>
        </div>
      </div>

      {/* Bottom Section - Nearby Places */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {nearbyPlaces.map((place) => (
          <div key={place.id} className="p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FaCircle className="text-gray-400" />
              <h3 className="font-medium">{place.title}</h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <p className="text-sm">{place.distance}</p>
              <p className="text-sm">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

