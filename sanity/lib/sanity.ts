import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client"; // Sanity client import karna na bhoolo

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source).url();
}
