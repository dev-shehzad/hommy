"use client"

import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"

export default function HeaderBanner() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const result = await client.fetch(
        `*[_type == "blogmodule2"][0]{title, subtitle, description}`
      )
      setData(result)
    }
    fetchData()
  }, [])

  if (!data) return null

  return (
    <div className="w-full bg-gray-400 py-8 px-4 rounded-lg mx-auto my-4 max-w-6xl">
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">{data.title}</h1>

        {/* Subtitle */}
        <h2 className="text-lg md:text-xl text-white/90 text-center font-light">
          {data.subtitle}
        </h2>

        {/* Wavy Separator */}
        <div className="flex justify-center py-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-16 h-1 bg-white mx-1 rounded-full" />
          ))}
        </div>

        {/* Description */}
        <div className="text-white/80 max-w-2xl mx-auto text-center leading-relaxed">
          <p className="text-sm md:text-base">{data.description}</p>
        </div>
      </div>
    </div>
  )
}
