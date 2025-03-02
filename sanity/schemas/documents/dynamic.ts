export default {
    name: "dynamic",
    title: "Reusable Component",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "componentType",
        title: "Component Type",
        type: "string",
        options: {
          list: [
            { title: "Hero Section", value: "hero" },
            { title: "Feature Section", value: "feature" },
            { title: "Properties", value: "properti" },

          ],
        },
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }, { type: "image" }],
      },
    ],
  };
  