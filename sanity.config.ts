/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
"use client";

import { visionTool } from "@sanity/vision";
import { PluginOptions, defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from "sanity/presentation";
import { StructureResolver, structureTool } from "sanity/structure";
import { deskTool } from "sanity/desk";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import { assistWithPresets } from "@/sanity/plugins/assist";
import author from "@/sanity/schemas/documents/author";
import post from "@/sanity/schemas/documents/post";
import settings from "@/sanity/schemas/singletons/settings";
import { resolveHref } from "@/sanity/lib/utils";
import hero from "./sanity/schemas/documents/hero";
import house from "@/sanity/schemas/documents/house";
import tab from "./sanity/schemas/documents/tab";
import { heroHeaderSchema } from "./sanity/schemas/documents/hero-header";
import { featuresSchema } from "./sanity/schemas/documents/features";
import footer from "./sanity/schemas/documents/footer";
import houses from "./sanity/schemas/documents/houses.";
import housefeatures from "./sanity/schemas/documents/housefeatures";
import housepics from "./sanity/schemas/documents/housepics";
import similarappart from "./sanity/schemas/documents/similarappart";
import propert from "./sanity/schemas/documents/propert";
import propertii from "./sanity/schemas/documents/tabschema";
import honeymoon from "./sanity/schemas/documents/honeymoon";
import blogmodule2 from "./sanity/schemas/documents/blogmodule2";
import honemoonlayout from "./sanity/schemas/documents/honemoonlayout";
import places from "./sanity/schemas/documents/places";
import blogmodule5 from "./sanity/schemas/documents/blogmodule5";
import blogmodule6 from "./sanity/schemas/documents/blogmodule6";
import blogmodule7 from "./sanity/schemas/documents/blogmodule7";
import blogmodule8 from "./sanity/schemas/documents/blogmodule8";
import blogmodule9 from "./sanity/schemas/documents/blogmodule9";
import page from "./sanity/schemas/documents/page";
import dynamic from "./sanity/schemas/documents/dynamic";
import property from "./sanity/schemas/documents/property";
import availabilityBanner from "./sanity/schemas/documents/availabilityBanner";

const homeLocation = {
  title: "Home",
  href: "/",
} satisfies DocumentLocation;

export const apartmentSchema = {
  name: "apartment",
  title: "Apartment",
  type: "document",
  fields: [
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "apartmentTitle",
          title: "Apartment Title",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "houseSubtitle",
          title: "House Subtitle",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
};

export const experienceSchema = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export const homeContentSchema = {
  name: "homeContent",
  title: "Home Content",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export default defineConfig({
  name: "default",
  title: "Your Project Name",
  projectId,
  dataset,

  plugins: [
    deskTool(),
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/posts/:slug",
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
        locations: {
          settings: defineLocations({
            locations: [homeLocation],
            message: "This document is used on all pages",
            tone: "caution",
          }),
          post: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: resolveHref("post", doc?.slug)!,
                },
                homeLocation,
              ],
            }),
          }),
        },
      },
      previewUrl: {
        previewMode: { enable: "/api/draft-mode/enable" },
        draftMode: { enable: "/api/draft-mode/enable" },
      },
    }),
    structureTool({
      structure: pageStructure([settings]) as unknown as StructureResolver,
    }),
    singletonPlugin([settings.name]),
    unsplashImageAsset(),
    assistWithPresets(),
    process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],

  schema: {
    types: [
      settings,
      post,
      author,
      hero,
      house,
      apartmentSchema,
      tab,
      experienceSchema,
      homeContentSchema,
      heroHeaderSchema,
      featuresSchema,
      footer,
      houses,
      housefeatures,
      housepics,
      similarappart,
      propert,
      propertii,
      honeymoon,
      blogmodule2,
      honemoonlayout,
      places,
      blogmodule5,
      blogmodule6,
      blogmodule7,
      blogmodule8,
      blogmodule9,
      page,
      dynamic,
      property,
      availabilityBanner,
    ],
  },
  // structure: deskStructure,
  basePath: studioUrl,
});
