import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "mainTitle",
      title: "Main Section Title",
      type: "string",
    }),
    defineField({
      name: "mainSubtitle",
      title: "Main Section Subtitle",
      type: "string",
    }),
    defineField({
      name: "mainDescription",
      title: "Main Section Description",
      type: "text",
    }),
    defineField({
      name: "mainImage",
      title: "Main Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "detailTitle",
      title: "Detail Section Title",
      type: "string",
    }),
    defineField({
      name: "detailSubtitle",
      title: "Detail Section Subtitle",
      type: "string",
    }),
    defineField({
      name: "detailDescription",
      title: "Detail Section Description",
      type: "text",
    }),
    defineField({
      name: "detailImage",
      title: "Detail Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "style",
      title: "Style",
      type: "string",
    }),
    defineField({
      name: "isMainProperty",
      title: "Is Main Property",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
