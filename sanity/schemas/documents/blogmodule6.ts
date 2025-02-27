export default {
    name: "blogmodule6",
    type: "document",
    title: "Image Layout (Blogs)",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        name: "description",
        type: "text",
        title: "Description",
      },
      {
        name: "size",
        type: "string",
        title: "Grid Size",
        description: "Example: col-span-2, col-span-1 row-span-2",
      },
      {
        name: "image",
        type: "image",
        title: "Image",
        options: {
          hotspot: true,
        },
      },
    ],
  }
  