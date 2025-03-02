"use client"; // ✅ Client component banane ke liye

import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import ExperiencePage from "./ExperiencePage";
import { experiencesQuery } from "@/sanity/lib/queries";

interface Experience {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
  link?: string;
  category?: string;
}

const ExperiencePageWrapper = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const fetchedExperiences = await sanityFetch<Experience[]>({ query: experiencesQuery });
        console.log("Fetched experiences:", fetchedExperiences); // Debugging ke liye
        setExperiences(fetchedExperiences);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <p>Loading experiences...</p>;
  if (!experiences.length) return <p>No experiences available</p>;

  return <ExperiencePage experiences={experiences} />;
};

export default ExperiencePageWrapper;
