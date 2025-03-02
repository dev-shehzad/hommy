"use client";

import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";

export default function Page({ slug }: { slug: string }) {
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await sanityFetch({
        query: `
          *[_type == "page" && slug.current == $slug][0]{
            title,
            components[]->{
              _type,
              title,
              location,
              tags,
              image{ asset->{url} }
            }
          }
        `,
        params: { slug },
      });

      setPageData(data);
    }

    fetchData();
  }, [slug]);

  if (!pageData) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{pageData.title}</h1>
      <div className="grid grid-cols-3 gap-4">
        {pageData.components.map((component: any) => (
          <div key={component._id} className="p-4 border rounded-md">
            <h2 className="text-lg font-semibold">{component.title}</h2>
            {component.image && (
              <Image
                src={component.image.asset.url}
                alt={component.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
