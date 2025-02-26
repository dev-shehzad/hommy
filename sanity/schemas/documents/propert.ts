export default {
    name: "properti",
    title: "Properties ",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Property Title",
        type: "string",
      },
      {
        name: "location",
        title: "Location",
        type: "string",
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "tabs",
        title: "Tabs",
        type: "array",
        of: [{ type: "reference", to: [{ type: "propertii" }] }],
      },
    ],
  }
  