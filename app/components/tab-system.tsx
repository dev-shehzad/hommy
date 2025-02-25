"use client";

import { useState } from "react";
import { FaEye, FaUsers } from "react-icons/fa";
import Image from "next/image";

interface Tab {
  _id: string;
  title: string;
  heading: string;
  description: string;
  imageUrl?: string;
  order: number;
}

interface TabSystemProps {
  tabs: Tab[];
}

export default function TabSystem({ tabs = [] }: TabSystemProps) {
 // Initialize state BEFORE any conditional returns
 const [activeTab, setActiveTab] = useState<string>(tabs.length > 0 ? tabs[0]._id : "");

 // Handle the case where no tabs exist after initializing the state
 if (!tabs || tabs.length === 0) {
   return <div>No tabs available</div>;
 }

 const activeContent = tabs.find((tab) => tab._id === activeTab);

 if (!activeContent) {
   return <div>Loading...</div>;
 }
  return (
    <div className="flex flex-col lg:flex-row h-[500px] bg-white">
      {/* Main Content Area */}
      <div className="lg:w-3/4 p-4">
        <div className="h-full bg-gray-400 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden">
          {activeContent.imageUrl && (
            <Image
              src={activeContent.imageUrl}
              alt={activeContent.heading}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 mix-blend-overlay opacity-30"
            />
          )}
          <div className="relative z-10">
            <h1 className="text-3xl font-light mb-4">
              {activeContent.heading}
            </h1>
            <p className="text-lg mb-4">{activeContent.description}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full relative z-10">
            <button className="flex-1 px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white transition-colors flex items-center justify-center gap-2">
              <FaEye />
              <span>view</span>
            </button>
            <button className="flex-1 px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-white transition-colors flex items-center justify-center gap-2">
              <FaUsers />
              <span>family</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="lg:w-1/4 p-4">
        <div className="h-full flex flex-col justify-between">
          {tabs.map((tab) => (
            <button
              key={tab._id}
              onClick={() => setActiveTab(tab._id)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-300
                ${
                  activeTab === tab._id
                    ? "bg-gray-700 text-white font-medium"
                    : "bg-gray-200 hover:bg-gray-700 hover:text-white"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
