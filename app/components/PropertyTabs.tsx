"use client";
import { useState } from "react";
import Image from "next/image";
import { HomeIcon } from "lucide-react";

export default function PropertyTabs({ tabs, properties }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProperties =
    activeTab === "all"
      ? properties
      : properties.filter((property) =>
          property.tabs?.some((tab) => tab._id === activeTab)
        );

  return (
    <div className="container mt-11 mx-auto min-h-[500px] p-4">
      {/* Tabs Section */}
      <div className="flex gap-4 mx-auto w-fit mb-7">
        {tabs
          .filter(
            (tab, index, self) =>
              self.findIndex((t) => t._id === tab._id) === index
          )
          .map((tab, index) => {
            const tabColors = ["bg-[#936648]", "bg-[#939695]", "bg-[#A89B77]"];
            const tabColor = tabColors[index % tabColors.length];

            return (
              <button
                key={tab._id}
                onClick={() => setActiveTab(tab._id)}
                className={`px-6 py-2 text-sm font-semibold text-white rounded-md transition-colors min-w-[180px] text-center ${tabColor} ${
                  activeTab === tab._id
                    ? "brightness-110 shadow-md"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                {tab.title}
              </button>
            );
          })}
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <div
            key={property._id}
            className="bg-white rounded shadow overflow-hidden"
          >
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
  );
}
