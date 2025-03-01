"use client";

import { useState } from "react";
import Image from "next/image";

interface Tab {
  _id: string;
  title: string;
  heading: string;
  description: string;
  imageUrl?: string;
}

interface TabSystemProps {
  tabs: Tab[];
}

export default function TabSystem({ tabs = [] }: TabSystemProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs.length > 0 ? tabs[0]._id : "");

  if (!tabs || tabs.length === 0) {
    return <div>No tabs available</div>;
  }

  const activeContent = tabs.find((tab) => tab._id === activeTab);

  if (!activeContent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full px-4 py-8 container mx-auto mt-11">
      <h2 className="text-5xl font-semibold mb-9">Originals</h2>
      <div className="container mx-auto flex flex-col lg:flex-row h-[600px] ">
        
        {/* Image & Content Section */}
        <div className="lg:w-3/4 relative h-full rounded-lg overflow-hidden">
          {activeContent.imageUrl && (
            <Image
              src={activeContent.imageUrl}
              alt={activeContent.heading}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-14 text-white">
            <p className="text-4xl font-medium italic mb-4">“{activeContent.description}”</p>
            
            {/* Buttons */}
            <div className="mt-6">
              <h1 className="text-4xl font-bold">{activeContent.heading}</h1>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                  Read his story
                </button>
                <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
                  See the hotel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section - Full Height */}
        <div className="lg:w-1/4 flex flex-col  gap-0.5 h-full">
          {tabs.map((tab) => (
            <button
              key={tab._id}
              onClick={() => setActiveTab(tab._id)}
              className={`p-4 px-9  rounded-lg text-left transition-all duration-300  h-full
                ${activeTab === tab._id ? "border-black font-bold bg-[#f7f7f4]" : "bg-[#f7f7f4] "}
              `}
            >
              <span className="block text-gray-600 text-sm">{tab.title}</span>
              <span className={`block text-[19px] font-medium pb-1 transition-all duration-300 
                ${activeTab === tab._id ? "underline" : "border-transparent"}`}
              >
                {tab.heading}
              </span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
