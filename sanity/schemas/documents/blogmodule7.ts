export default {
    name: "blogmodule7",
    title: "Highlight Section",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "points",
        title: "Key Points",
        type: "array",
        of: [{ type: "string" }],
        validation: (Rule: { min: (arg0: number) => any; }) => Rule.min(1),
      },
    ],
  }
  