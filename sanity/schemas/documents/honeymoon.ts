export default {
    name: "honeymoon",
    title: "Honeymoon Section",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "subtitle",
        title: "Subtitle",
        type: "string",
      },
      {
        name: "backgroundImage",
        title: "Background Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "buttons",
        title: "Buttons",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "label",
                title: "Label",
                type: "string",
              },
              {
                name: "icon",
                title: "Icon",
                type: "string",
                description: "FontAwesome icon class (e.g., 'FaEye', 'FaUsers')",
              },
            ],
          },
        ],
      },
    ],
  }
  