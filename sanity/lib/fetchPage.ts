import { client } from "@/sanity/lib/client";

export async function fetchPage(slug) {
  const query = `*[_type == "page" && slug.current == $slug][0]{
    title,
    components[]->{
      _id,
      componentType,
      content
    }
  }`;

  const page = await client.fetch(query, { slug });
  return page;
}
