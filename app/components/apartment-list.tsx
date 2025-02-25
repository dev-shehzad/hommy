"use client"
import { apartments } from "../data/apartment-data"
import { FaBed, FaHome, FaSun, FaStar, FaThLarge, FaEye, FaBook } from "react-icons/fa"
import { IconType } from "react-icons"

const getIcon = (iconName: string): JSX.Element => {
  switch (iconName) {
    case "bed":
      return <FaBed />
    case "home":
      return <FaHome />
    case "sun":
      return <FaSun />
    case "star":
      return <FaStar />
    case "layout":
      return <FaThLarge />
    default:
      return <FaStar />
  }
}

export default function ApartmentList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 bg-white p-4 rounded-lg">Book Your Stay Now</h1>

      <div className="space-y-8">
        {apartments.map((apartment) => (
          <div
            key={apartment.id}
            className={`grid md:grid-cols-2 gap-6 p-6 rounded-lg ${
              apartment.isHighlighted ? "bg-white" : "bg-white"
            } shadow-lg`}
          >
            {/* Left Side - Image */}
            <div className="relative aspect-video bg-[#ffded4] rounded-lg overflow-hidden">
              <img
                src={apartment.imageUrl || "/placeholder.svg"}
                alt={apartment.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
                <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
                <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{apartment.title}</h2>
              <p className="text-gray-600">{apartment.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {apartment.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    {getIcon(feature.icon)}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <button className="flex-1 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <FaEye />
                  View
                </button>
                <button className="flex-1 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <FaBook />
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}