import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

// Define TypeScript types
interface AvailabilityBannerData {
  backgroundImage?: string;
  buttonText?: string;
}

// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

// Fetching data from Sanity
export async function getAvailabilityBanner(): Promise<AvailabilityBannerData> {
  const query = `*[_type == "availabilityBanner"][0]{
    backgroundImage,
    buttonText
  }`;
  const data = await client.fetch(query);

  return {
    backgroundImage: data?.backgroundImage ? urlFor(data.backgroundImage) : undefined,
    buttonText: data?.buttonText || "CHECK AVAILABILITY",
  };
}
