"use client";
import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import TabSystem from "./tab-system";
import { tabSystemQuery } from "@/sanity/lib/queries";

// Define the type for tabs
interface Tab {
  _id: string;
  title: string;
  heading: string;
  description: string;
  imageUrl?: string;
}

const TabSystemWrapper = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ Loading state added

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        setIsLoading(true); // ✅ Start loading
        const fetchedTabs = await sanityFetch<Tab[]>({ query: tabSystemQuery });
        console.log("Fetched tabs:", fetchedTabs);
        setTabs(fetchedTabs);
      } catch (error) {
        console.error("Error fetching tabs:", error);
      } finally {
        setIsLoading(false); // ✅ Stop loading
      }
    };

    fetchTabs();
  }, []);

  if (isLoading) {
    return <p>Loading tabs...</p>; // ✅ Show loader instead of "No tabs available"
  }

  if (!tabs || tabs.length === 0) {
    return <p>No tabs available</p>;
  }

  return <TabSystem tabs={tabs} />;
};

export default TabSystemWrapper;
