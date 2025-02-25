export const heroHeaderSchema = {
  name: "heroHeader",
  title: "Hero Header",
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
};
