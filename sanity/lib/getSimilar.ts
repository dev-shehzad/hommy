import { client } from "./client";


export async function getSimilarApartments() {
  const query = `
  *[_type == "similarapart"][0] {
    sectionTitle,
    buttons[]{
      label,
      subtext,
      link,
      linkedApartments[]->{
        _id,
        slug,
        title,
        houseName,
        description,
        imageUrl
      }
    }
  }
  `;

  try {
    const data = await client.fetch(query);
    console.log("✅ Fetched Similar Apartments:", data);
    return data;
  } catch (error) {
    console.error("❌ Error fetching similar apartments:", error);
    return null;
  }
}
