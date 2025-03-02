"use client"; // ✅ Client Component

import { useState, useEffect } from "react";
import { getHouseFeatures } from "@/sanity/lib/getHouseFeatures";
import FeaturesSection from "./Features-Section";

export default function FeaturesWrapper() {
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHouseFeatures();
        setFeatureData(data);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    }

    fetchData();
  }, []);

  if (!featureData) return <p className="text-center text-gray-600">Loading...</p>;

  return <FeaturesSection featureData={featureData} />;
}
