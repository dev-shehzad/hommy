export default {
    name: "blogmodule5",
    type: "document",
    title: "Local Life Banner",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Banner Title",
      },
      {
        name: "subtitle",
        type: "text",
        title: "Banner Subtitle",
      },
      {
        name: "backgroundImage",
        type: "image",
        title: "Background Image",
        options: {
          hotspot: true,
        },
      },
    ],
  }
  