import type { ClientPerspective, QueryParams } from "next-sanity";
import { client } from "./client";
import { token } from "./token";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  perspective: _perspective,
  stega: _stega,
  tags,
}: {
  query: string;
  params?: QueryParams | Promise<QueryParams>;
  perspective?: ClientPerspective;

  stega?: boolean;
  tags?: string[];
}): Promise<QueryResponse> {
  let perspective: ClientPerspective = _perspective || "published";
  let stega = _stega || false;

  if (typeof window === "undefined") {
    try {
      const { draftMode } = await import("next/headers");
      perspective = (await draftMode()).isEnabled
        ? "previewDrafts"
        : "published";
      stega =
        perspective === "previewDrafts" || process.env.VERCEL_ENV === "preview";
    } catch (error) {
      console.warn(
        "Unable to import next/headers. Defaulting to published perspective."
      );
    }
  }

  const fetchOptions = {
    perspective,
    stega,
    token: perspective === "previewDrafts" ? token : undefined,
    useCdn: perspective === "published",
    next: {
      revalidate: 60,
      tags,
      cache: 'force-cache', // 🔥 Move cache inside next
    }
  };
  

  return client.fetch<QueryResponse>(query, await params, fetchOptions);
}
