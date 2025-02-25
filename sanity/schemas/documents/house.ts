import { defineField, defineType } from "sanity";

export default defineType({
  name: "house",
  title: "House",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "House Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
