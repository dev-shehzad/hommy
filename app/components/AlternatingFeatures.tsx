import Image from "next/image"
import { FaBed, FaWifi, FaParking, FaCoffee, FaSwimmingPool, FaUtensils } from "react-icons/fa"

const features = [
  {
    title: "LUNA Suite Deluxe",
    description:
      "Experience luxury living with our spacious suite featuring panoramic mountain views and premium amenities.",
    amenities: [
      { icon: FaBed, label: "King Size Bed" },
      { icon: FaWifi, label: "Free Wi-Fi" },
      { icon: FaParking, label: "Free Parking" },
    ],
    image: "/luna.jpg",
    imagePosition: "left",
  },
  {
    title: "LUNA Premium Suite",
    description: "Indulge in our premium suite with exclusive access to spa facilities and gourmet dining options.",
    amenities: [
      { icon: FaSwimmingPool, label: "Pool Access" },
      { icon: FaCoffee, label: "Breakfast" },
      { icon: FaUtensils, label: "Room Service" },
    ],
    image: "/lunamia.jpg",
    imagePosition: "right",
  },
]

export default function AlternatingFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="space-y-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-300 p-6 rounded-lg">
            <div
              className={`flex flex-col ${feature.imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] bg-[#ff9f80] rounded-lg overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
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
                      <amenity.icon className="text-gray-600 w-4 h-4" />
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

