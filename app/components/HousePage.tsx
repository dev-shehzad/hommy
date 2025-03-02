"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Property {
  _id: string;
  name: string;
  mainTitle?: string;
  mainSubtitle?: string;
  mainDescription?: string;
  mainImageUrl?: string;
  detailTitle?: string;
  detailSubtitle?: string;
  detailDescription?: string;
  detailImageUrl?: string;
  style?: string;
  isMainProperty: boolean;
  country?: string;
}

interface HousePageProps {
  properties: Property[];
}

export default function HousePage({ properties = [] }: HousePageProps) {
  const mainProperty =
    properties.find((prop) => prop.isMainProperty) || properties[0] || null;
  const [activeTab, setActiveTab] = useState(mainProperty?._id || "");

  if (!properties.length) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg font-medium">No properties found.</p>
      </div>
    );
  }

  const activeProperty = properties.find(
    (property) => property._id === activeTab
  );

  if (!mainProperty || !activeProperty) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg font-medium">Loading properties...</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mobile Tabs (Upar) */}
        <div className="block md:hidden mb-4">
          <div className="grid grid-cols-2 gap-2">
            {properties.map((property) => (
              <button
                key={property._id}
                onClick={() => setActiveTab(property._id)}
                className={`flex flex-col items-start justify-start p-3 text-left rounded-lg ${
                  activeTab === property._id
                    ? "underline"
                    : ""
                }`}
              >
                <span className="text-xs text-gray-600">
                  {property.style || "N/A"}
                </span>
                <span className="font-medium">{property.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Left Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[250px] md:h-[400px] lg:h-[70vh] flex p-4 pt-8 text-white"
        >
          <Image
            src={activeProperty.mainImageUrl || "/placeholder.svg"}
            alt={activeProperty.mainTitle || ""}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

          <div className="z-10 px-6 text-center md:text-left">
            <p className="text-sm font-medium">New Member Hotels</p>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
              {activeProperty.mainTitle}
            </h1>
            <p className="text-sm">{activeProperty.mainSubtitle}</p>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="flex flex-col bg-[#f7f7f4] p-6 md:pl-9 py-8 rounded-lg">
          {/* Tabs (Only on Large Screens) */}
          <div className="hidden md:grid grid-cols-3 gap-2 mb-6">
            {properties.map((property) => (
              <button
                key={property._id}
                onClick={() => setActiveTab(property._id)}
                className={`flex flex-col items-start justify-start p-3 text-left rounded-lg ${
                  activeTab === property._id
                    ? "underline border-none"
                    : "   "
                }`}
              >
                <span className="text-xs text-gray-600">
                  {property.style || "N/A"}
                </span>
                <span className="font-medium">{property.name}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col"
          >
            <div className="aspect-[16/9] w-full relative overflow-hidden mb-6 rounded-lg">
              <Image
                src={activeProperty.detailImageUrl || "/placeholder.svg"}
                alt={activeProperty.detailTitle || ""}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="mt-auto flex flex-col md:flex-row justify-between">
              <p className="text-gray-800 leading-relaxed mb-6 md:mb-0">
                {activeProperty.detailDescription}
              </p>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-black text-black rounded-full hover:bg-gray-100 transition-colors">
                View & book
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
