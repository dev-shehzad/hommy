"use client";

import { useState } from "react";
import { FaEye, FaBookmark } from "react-icons/fa";
import Image from "next/image";

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
}

interface HousePageProps {
  properties: Property[];
}

export default function HousePage({ properties = [] }: HousePageProps) {
  // Add default empty array and null checks
  const mainProperty =
  properties.find((prop) => prop.isMainProperty) || properties[0] || null;

// Initialize state outside conditionals
const [activeTab, setActiveTab] = useState(mainProperty?._id || "");

const activeProperty = properties.find(
  (property) => property._id === activeTab
);

if (!properties || properties.length === 0) {
  return (
    <div className="container mx-auto px-4 py-8">
      <p>No properties found.</p>
    </div>
  );
}

if (!mainProperty || !activeProperty) {
  return (
    <div className="container mx-auto px-4 py-8">
      <p>Loading properties...</p>
    </div>
  );
}

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white rounded-lg p-6 flex flex-col min-h-[600px]">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {mainProperty.mainTitle}
              </h1>
              <h2 className="text-2xl text-gray-700 mt-2">
                {mainProperty.mainSubtitle}
              </h2>
            </div>

            <div className="aspect-video w-full relative rounded-lg overflow-hidden">
              {mainProperty.mainImageUrl ? (
                <Image
                  src={mainProperty.mainImageUrl}
                  alt={mainProperty.mainTitle || ""}
                  fill
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/countryside.jpg"
                  alt={mainProperty.mainTitle || ""}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {mainProperty.mainDescription}
            </p>

            <button className="inline-flex items-center px-6 py-3 w-32 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
              <FaEye className="mr-2" />
              View
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col min-h-[600px]">
          {/* Tabs */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {properties.map((property) => (
              <button
                key={property._id}
                onClick={() => setActiveTab(property._id)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors ${
                  activeTab === property._id
                    ? "bg-white"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">{property.name}</span>
                <span className="text-sm text-gray-600">
                  {property.style ?? "N/A"}
                </span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex-1 flex flex-col">
            <div className="w-full bg-white mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {activeProperty.detailTitle}
              </h3>
              <h4 className="text-xl text-gray-700">
                {activeProperty.detailSubtitle}
              </h4>
            </div>

            <div className="aspect-video w-full relative rounded-lg overflow-hidden mb-6">
              {activeProperty.detailImageUrl ? (
                <Image
                  src={activeProperty.detailImageUrl}
                  alt={activeProperty.detailTitle || ""}
                  fill
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/luna.jpg"
                  alt={activeProperty.detailTitle || ""}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {activeProperty.detailDescription}
            </p>

            <div className="flex gap-4 mt-auto">
              <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                <FaEye className="mr-2" />
                View
              </button>
              <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                <FaBookmark className="mr-2" />
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
