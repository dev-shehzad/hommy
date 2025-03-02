"use client";

import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";

// Define Types for Sanity Data
interface Page {
  title: string;
  slug: { current: string };
  components?: { _type: string; [key: string]: any }[];
}

export default function HomeP() {
  const [homepage, setHomepage] = useState<Page | null>(null);

  useEffect(() => {
    async function fetchHomepage() {
      const data: Page = await sanityFetch({
        query: `
          *[_type == "page" && slug.current == "homepage"][0]{
            title,
            slug,
            components[]-> 
          }
        `,
      });

      setHomepage(data);
    }

    fetchHomepage();
  }, []);

  if (!homepage) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{homepage.title}</h1>
      <p className="text-gray-600">Slug: {homepage.slug.current}</p>

      {/* Render Dynamic Components */}
      <div className="mt-4">
        {homepage.components?.map((component, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md mb-2">
            <h3 className="font-semibold text-lg">{component._type}</h3>
            <pre className="text-sm text-gray-500">{JSON.stringify(component, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
