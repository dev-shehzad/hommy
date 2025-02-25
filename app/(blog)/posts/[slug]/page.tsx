import { defineQuery } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Avatar from "../../avatar";
import CoverImage from "../../cover-image";
import DateComponent from "../../date";
import MoreStories from "../../more-stories";
import PortableText from "../../portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { SanityImageCrop, SanityImageHotspot } from "@/sanity.types";

// ✅ Define TypeScript interfaces
interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  coverImage?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
  };
  date: string;
  author?: {
    name: string;
    picture?: {
      asset?: {
        _ref: string;
        _type: "reference";
      };
      _type: "image";
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
    } | null;
  };
  content?: PortableTextBlock[];
}

interface Settings {
  title?: string;
}

interface Props {
  params: { slug: string };
}

// ✅ Generate static paths
export async function generateStaticParams() {
  const postSlugsQuery = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: postSlugsQuery,
    perspective: "published",
    stega: false,
  });

  return slugs.map(({ slug }) => ({ slug }));
}

// ✅ Generate Metadata for SEO
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!params?.slug) {
    return { title: "Post Not Found" };
  }

  const post = await sanityFetch<Post | null>({
    query: postQuery,
    params: { slug: params.slug },
  });

  if (!post) {
    return { title: "Post Not Found" };
  }

  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post.coverImage);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
    authors: post.author?.name ? [{ name: post.author.name }] : [],
  };
}

// ✅ Main component
export default async function PostPage({ params }: Props) {
  if (!params?.slug) {
    return notFound();
  }

  const [post, settings] = await Promise.all([
    sanityFetch<Post | null>({
      query: postQuery,
      params: { slug: params.slug },
    }),
    sanityFetch<Settings>({ query: settingsQuery }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          {settings?.title || demo.title}
        </Link>
      </h2>

      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          {post.title}
        </h1>

        <div className="hidden md:mb-12 md:block">
          {post.author && post.author.picture && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>

        <div className="mb-8 sm:mx-0 md:mb-16">
          {post.coverImage && <CoverImage image={post.coverImage} priority />}
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && post.author.picture && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>

          <div className="mb-6 text-lg">
            <DateComponent dateString={post.date} />
          </div>
        </div>

        {post.content && post.content.length > 0 && (
          <PortableText className="mx-auto max-w-2xl" value={post.content} />
        )}
      </article>

      <aside>
        <hr className="border-accent-2 mb-24 mt-28" />
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
          Recent Stories
        </h2>
        <Suspense fallback={<p>Loading stories...</p>}>
          <MoreStories skip={post._id} limit={2} />
        </Suspense>
      </aside>
    </div>
  );
}
