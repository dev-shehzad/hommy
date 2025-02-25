export const featuresSchema = {
  name: "features",
  title: "Features Section",
  type: "document",
  fields: [
    {
      name: "rooms",
      title: "Rooms",
      type: "object",
      fields: [
        {
          name: "count",
          title: "Room Count",
          type: "number",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "view",
          title: "View Type",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "themes",
      title: "Themes",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "bed",
      title: "Bed",
      type: "object",
      fields: [
        {
          name: "kingSize",
          title: "King Size Beds",
          type: "number",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "couch",
          title: "Couches",
          type: "number",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "nature",
      title: "Nature Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "bathroom",
      title: "Bathroom",
      type: "object",
      fields: [
        {
          name: "count",
          title: "Bathroom Count",
          type: "number",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "amenities",
          title: "Bathroom Amenities",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
};
