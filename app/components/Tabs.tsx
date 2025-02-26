"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { HomeIcon } from "lucide-react"
import { client } from "@/sanity/lib/client"

export default function PropertyTabs() {
  const [tabs, setTabs] = useState([])
  const [properties, setProperties] = useState([])
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    async function fetchData() {
      const tabsData = await client.fetch(`*[_type == "propertii"]`)
      const propertiesData = await client.fetch(
        `*[_type == "properti"]{..., tabs[]->, image{asset->{url}}}`
      )

      // "All" tab ko sirf tab add karo jab wo pehle se exist na kare
      const allTabExists = tabsData.some((tab) => tab._id === "all")
      const updatedTabs = allTabExists ? tabsData : [{ _id: "all", title: "All" }, ...tabsData]

      setTabs(updatedTabs)
      setProperties(propertiesData)
    }

    fetchData()
  }, [])

  const filteredProperties =
    activeTab === "all"
      ? properties
      : properties.filter((property) =>
          property.tabs?.some((tab) => tab._id === activeTab)
        )

  return (
    <div className=" container mx-auto min-h-[500px] p-4">
      {/* Tabs Section */}
      <div className="flex mb-4 mx-auto w-fit">
        {tabs
          .filter((tab, index, self) => self.findIndex(t => t._id === tab._id) === index) // Duplicate remove karne ke liye
          .map((tab) => (
          <button
            key={tab._id}
            onClick={() => setActiveTab(tab._id)}
            className={`px-6 py-2 text-sm font-medium transition-colors ${
              activeTab === tab._id
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900 hover:bg-gray-50"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <div key={property._id} className="bg-white rounded shadow overflow-hidden">
            <div className="relative h-[200px] w-full">
              {property.image?.asset?.url ? (
                <Image
                  src={property.image.asset.url}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                  No Image
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{property.title}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <HomeIcon className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {property.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-amber-50 text-amber-900 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
