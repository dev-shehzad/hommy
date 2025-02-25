import { experiencesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import ExperiencePage from "./ExperiencePage";

interface Experience {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
  link?: string;
  category?: string;
}

const ExperiencePageWrapper = async () => {
  try {
    const experiences = await client.fetch<Experience[]>(experiencesQuery);
    console.log("Fetched experiences:", experiences); // For debugging

    return <ExperiencePage experiences={experiences} />;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return <div>Error loading experiences</div>;
  }
};

export default ExperiencePageWrapper;
