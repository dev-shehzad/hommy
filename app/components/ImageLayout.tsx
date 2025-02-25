import Image from "next/image"

const layoutItems = [
  {
    id: 1,
    title: "Luxurious Alpine Retreat",
    description: "Experience unparalleled comfort in our mountain-top suites",
    size: "col-span-2",
    imageUrl: "/luna.jpg",
  },
  {
    id: 2,
    title: "Panoramic Mountain Vistas",
    description: "Wake up to breathtaking views of snow-capped peaks",
    size: "col-span-1 row-span-2",
    imageUrl: "/mia.jpg",
  },
  {
    id: 3,
    title: "Cozy Fireside Cabins",
    description: "Intimate lodgings perfect for romantic getaways",
    size: "col-span-1 row-span-2",
    imageUrl: "/lunamia.jpg",
  },
  {
    id: 4,
    title: "Thrilling Mountain Adventures",
    description: "From skiing to hiking, excitement awaits at every turn",
    size: "col-span-2",
    imageUrl: "/countryside.jpg",
  },
  {
    id: 5,
    title: "Gourmet Alpine Cuisine",
    description: "Savor local delicacies and international flavors",
    size: "col-span-1",
    imageUrl: "/balanca.jpg",
  },
  {
    id: 6,
    title: "Rejuvenating Spa Experiences",
    description: "Unwind with our world-class wellness treatments",
    size: "col-span-1",
    imageUrl: "/hausluna.jpg",
  },
  {
    id: 7,
    title: "Winter Wonderland Activities",
    description: "Enjoy sledding, ice skating, and festive celebrations",
    size: "col-span-1",
    imageUrl: "/lunamia.jpg",
  },
]

export default function ImageLayout() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8">
      <div className="bg-gray-300 p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          {layoutItems.map((item) => (
            <div key={item.id} className={`${item.size} bg-gray-400 p-2 rounded overflow-hidden flex flex-col`}>
              <div
                className="relative w-full flex-grow"
                style={{ minHeight: item.size.includes("row-span-2") ? "250px" : "150px" }}
              >
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="mt-2 p-2 bg-white bg-opacity-80 rounded">
                <h3 className="text-sm font-semibold text-center text-gray-800">{item.title}</h3>
                <p className="text-xs text-center text-gray-600 mt-1 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

