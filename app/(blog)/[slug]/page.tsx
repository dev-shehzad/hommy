"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // ✅ usePathname for detecting "/"
import { sanityFetch } from "@/sanity/lib/fetch";
import ClientWrapper from "@/app/components/ClientWrapper";

type PageType = {
  title: string;
  components: ComponentType[];
};

type ComponentType = {
  _id: string;
  _type: string;
};

export default function SlugPage() {
  const pathname = usePathname(); // ✅ Get current URL
  const [pageData, setPageData] = useState<PageType | null>(null);

  useEffect(() => {
    let currentSlug = "homepage"; // ✅ Default homepage slug

    if (pathname !== "/") {
      currentSlug = pathname.replace("/", ""); // ✅ Extract slug from URL
    }

    const fetchData = async () => {
      const data = await sanityFetch<PageType>({
        query: `
          *[_type == "page" && slug.current == $slug][0]{
            title,
            components[]->{
              _id,
              _type
            }
          }
        `,
        params: { slug: currentSlug },
      });

      setPageData(data);
    };

    fetchData();
  }, [pathname]);

  if (!pageData) return <p>Loading...</p>;

  return (
    <div>
      {pageData.components.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">This page has no components yet.</p>
      ) : (
        <div className="space-y-4">
          {pageData.components.map((component) => (
            <ClientWrapper key={component._id} componentType={component._type} componentProps={component} />
          ))}
        </div>
      )}
    </div>
  );
}
