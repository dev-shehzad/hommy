import { FaCircle } from "react-icons/fa"

const infoItems = [
  {
    title: "Luxury Accommodations",
    description:
      "Experience unparalleled comfort in our premium suites with stunning mountain views and modern amenities.",
  },
  {
    title: "Adventure Activities",
    description:
      "Discover exciting outdoor activities including hiking, skiing, and mountain biking for all skill levels.",
  },
  {
    title: "Wellness Center",
    description:
      "Rejuvenate your body and mind in our state-of-the-art spa and wellness facilities with expert therapists.",
  },
]

export default function ThreeColumnInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="bg-gray-300 p-6 md:p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {infoItems.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                <FaCircle className="text-gray-600 w-3 h-3" />
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

