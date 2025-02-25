import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";

export const client = createClient({
  projectId: "lllguj3x",
  dataset: "production",
  apiVersion: "2024-05-28",
  useCdn: false,
  perspective: "published",
  stega: {
    enabled: true,
    studioUrl,
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === "title") {
        return true;
      }

      return props.filterDefault(props);
    },
  },
});
