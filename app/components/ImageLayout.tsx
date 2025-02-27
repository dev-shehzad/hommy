'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "@/sanity/lib/client"

const builder = imageUrlBuilder(client)

// Function to get the image URL
function urlFor(source) {
  return builder.image(source).width(800).height(600).url()
}

export default function ImageLayout() {
  const [layoutItems, setLayoutItems] = useState([])

  useEffect(() => {
    async function fetchLayoutItems() {
      try {
        const result = await client.fetch(
          `*[_type == "blogmodule6"]{title, description, size, image}`
        )
        setLayoutItems(result)
      } catch (error) {
        console.error("Error fetching layout items:", error)
      }
    }
    fetchLayoutItems()
  }, [])

  if (!layoutItems.length) return <p className="text-center text-gray-500">Loading images...</p>

  return (
    <div className="max-w-7xl mx-auto px-4 my-8">
      <div className="bg-gray-300 p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          {layoutItems.map((item, index) => (
            <div key={index} className={`${item.size || "col-span-1"} bg-gray-400 p-2 rounded overflow-hidden flex flex-col`}>
              <div
                className="relative w-full flex-grow"
                style={{ minHeight: item.size?.includes("row-span-2") ? "250px" : "150px" }}
              >
                <Image
                  src={item.image ? urlFor(item.image) : "/placeholder.svg"}
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
