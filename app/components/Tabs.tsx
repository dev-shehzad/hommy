"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HomeIcon } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/fetch";

type TabType = {
  _id: string;
  title: string;
};

type PropertyType = {
  _id: string;
  title: string;
  location: string;
  image?: {
    asset?: {
      url: string;
    };
  };
  tabs?: TabType[];
  tags?: string[];
};

export default function PropertyTabs() {
  const propertyTabsQuery = `
    {
      "tabs": *[_type == "propertii"],
      "properties": *[_type == "properti"]{..., tabs[]->, image{asset->{url}}}
    }
  `;

  const [tabs, setTabs] = useState<TabType[]>([]);
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    async function fetchData() {
      const data: { tabs: TabType[]; properties: PropertyType[] } = await sanityFetch({
        query: propertyTabsQuery,
      });

      if (data) {
        const allTabExists = data.tabs.some((tab) => tab._id === "all");
        const updatedTabs = allTabExists
          ? data.tabs
          : [{ _id: "all", title: "All" }, ...data.tabs];

        setTabs(updatedTabs);
        setProperties(data.properties);
      }
    }

    fetchData();
  }, []);

  const filteredProperties =
    activeTab === "all"
      ? properties
      : properties.filter((property) =>
          property.tabs?.some((tab) => tab._id === activeTab)
        );

  return (
    <div className="container mx-auto mt-11 px-4">
      {/* Tabs Section */}
      <div className="mb-7">
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto no-scrollbar">
          {tabs.map((tab, index) => {
            const tabColors = ["bg-[#936648]", "bg-[#939695]", "bg-[#A89B77]"];
            const tabColor = tabColors[index % tabColors.length];

            return (
              <button
                key={tab._id}
                onClick={() => setActiveTab(tab._id)}
                className={`whitespace-nowrap px-6 py-2 text-sm font-semibold text-white rounded-md min-w-[140px] md:min-w-[180px] text-center ${tabColor} ${
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
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <span key={index} className="px-3 py-1 text-xs font-medium bg-amber-50 text-amber-900 rounded">
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
