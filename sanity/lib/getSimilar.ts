import { client } from "./client";

export async function getSimilarApartments() {
    return await client.fetch(
      `*[_type == "similarapart"][0]{
        sectionTitle,
        apartments[] {
          _id,
          title,
          houseName,
          description,
          imageUrl
        },
        buttons[] {
          label,
          subtext,
          link
        }
      }`
    );
  }
  
  