'use client'
import { useEffect, useState } from "react"
import { FaCircle } from "react-icons/fa"
import { client } from "@/sanity/lib/client"

interface InfoItem {
  title: string
  description: string
}

export default function ThreeColumnInfo() {
  const [infoItems, setInfoItems] = useState<InfoItem[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await client.fetch(`*[_type == "blogmodule8"][0].infoItems`)
        setInfoItems(result || [])
      } catch (error) {
        console.error("Sanity Fetch Error:", error)
      }
    }
    fetchData()
  }, [])

  if (!infoItems.length) return <p>Loading...</p>

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
