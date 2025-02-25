import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

// export const heroQuery = defineQuery(`
//   *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
//     content,
//     ${postFields}
//   }
// `);
export const heroQuery = defineQuery(`
  *[_type == "hero"][0] {
    title,
    description,
    backgroundVideo {
      asset-> {
        url
      }
    },
    backgroundImage
  }
`);
export const moreStoriesQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content,
    ${postFields}
  }
`);

export const houseListingQuery = defineQuery(`
  *[_type == "house"] {
    _id,
    name,
    "apartments": *[_type == "apartment" && references(^._id)] {
      _id,
      title,
      "houseName": ^.name,
      image {
        asset->{
          _id,
          url
        }
      },
      characteristics
    }
  }
`);

export const propertiesQuery = defineQuery(`
  *[_type == "property"] {
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
    isMainProperty
  }
`);

export const experiencesQuery = `*[_type == "experience"] | order(order asc) {
  _id,
  title,
  description,
  "imageUrl": image.asset->url,
  order
}`;

export const tabSystemQuery = defineQuery(`
  *[_type == "tab"] | order(order asc) {
    _id,
    title,
    heading,
    description,
    "imageUrl": image.asset->url,
    order
  }
`);
