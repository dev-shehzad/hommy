import { client } from "./client";

export async function getHouseData() {
    const query = `*[_type == "houseGrid"]{
      title,
      description,
      "images": images[].asset->url
    }`;
    return await client.fetch(query);
  }