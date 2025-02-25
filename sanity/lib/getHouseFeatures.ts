import {client} from "./client"

export async function getHouseFeatures() {
  const query = `*[_type == "housefeatures"][0]{
    rooms { count, view },
    themes,
    bed { kingSize, couch },
    nature,
    bathroom { count, amenities }
  }`;
  
  const data = await client.fetch(query);
  return data;
}
