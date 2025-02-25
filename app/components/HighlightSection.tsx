import Image from "next/image"
import { FaCircle } from "react-icons/fa"

export default function HighlightSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="bg-gray-300 p-6 md:p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square md:aspect-[4/3] bg-[#ff9f80] rounded-lg overflow-hidden">
              <Image
                src="/luna.jpg"
                alt="Highlight Feature"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Experience Luxury Living in the Heart of Nature
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCircle className="w-2 h-2 mt-2 text-gray-600" />
                <p className="text-gray-700">
                  Discover our exclusive mountain-view suites featuring premium amenities and panoramic vistas of the
                  surrounding peaks
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaCircle className="w-2 h-2 mt-2 text-gray-600" />
                <p className="text-gray-700">
                  Enjoy personalized concierge services, spa treatments, and gourmet dining experiences crafted by
                  world-class chefs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

