"use client";

import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import HousePage from "./HousePage";

const propertiesQuery = `
  *[_type == "property"]{
    _id,
    name,
    mainTitle,
    mainSubtitle,
    mainDescription,
    "mainImageUrl": mainImage.asset->url,
    detailTitle,
    detailSubtitle,
    detailDescription,
    "detailImageUrl": detailImage.asset->url,
    style,
    isMainProperty,
    country
  }
`;

const HousePageWrapper = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityFetch({ query: propertiesQuery })
      .then((data) => {
        if (Array.isArray(data)) {
          setProperties(data);
        } else {
          console.error("Properties is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching properties:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading properties...</div>;
  if (!properties.length) return <div>No properties found.</div>;

  return <HousePage properties={properties} />;
};

export default HousePageWrapper;
