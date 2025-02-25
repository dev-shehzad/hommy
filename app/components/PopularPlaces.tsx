import Image from "next/image"
import { FaMapMarkerAlt, FaClock, FaMountain } from "react-icons/fa"

const places = [
  {
    id: 1,
    title: "Alpine Hiking Trail",
    image: "/countryside.jpg",
    description: "Experience breathtaking mountain views on our guided hiking trails",
    distance: "2.5 km",
    duration: "3 hours",
    difficulty: "Moderate",
  },
  {
    id: 2,
    title: "Crystal Lake",
    image: "/.jpg",
    description: "Perfect spot for swimming and water activities in crystal clear waters",
    distance: "1.8 km",
    duration: "Full day",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Mountain Biking",
    image: "/balanca.jpg",
    description: "Exciting mountain biking trails for all skill levels",
    distance: "5 km",
    duration: "4 hours",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Scenic Viewpoint",
    image: "/hausluna.jpg",
    description: "Panoramic views of the surrounding mountains and valleys",
    distance: "3.2 km",
    duration: "2 hours",
    difficulty: "Easy",
  },
]

export default function PopularPlaces() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">POPULAR PLACES & ACTIVITIES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place) => (
            <div key={place.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Image Container */}
              <div className="relative aspect-square">
                <Image src={place.image || "/placeholder.svg"} alt={place.title} layout="fill" objectFit="cover" />
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

