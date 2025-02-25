"use client"

import { useState } from "react"
import { mainContent, tabContents } from "../data/content"
import { FaEye, FaUsers, FaArrowRight } from "react-icons/fa"

export default function LocalLiving() {
  const [activeTab, setActiveTab] = useState(tabContents[0].id)

  const activeContent = tabContents.find((tab) => tab.id === activeTab)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 h-full">
        {/* Left Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 h-[600px] flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{mainContent.title}</h1>
          <div className="flex-1 relative rounded-lg overflow-hidden mb-6">
            <img
              src={mainContent.image || "/placeholder.svg"}
              alt={mainContent.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex gap-4">
            <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
              <FaEye className="mr-2" />
              View
            </button>
            <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
              <FaUsers className="mr-2" />
              Family
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-[600px] flex flex-col">
          {/* Tabs */}
          <div className="space-y-3 mb-6">
            {tabContents.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                  activeTab === tab.id ? "bg-gray-900 text-white" : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">{tab.title}</span>
                {activeTab === tab.id && <FaArrowRight className="ml-2" />}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {activeContent && (
            <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
              <div className="h-full relative rounded-lg overflow-hidden">
                <img
                  src={activeContent.image || "/placeholder.svg"}
                  alt={activeContent.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

