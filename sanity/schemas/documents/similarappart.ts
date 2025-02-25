export default {
    name: "similarapart",
    title: "Similar Apartments",
    type: "document",
    fields: [
      {
        name: "sectionTitle",
        title: "Section Title",
        type: "string",
      },
      {
        name: "apartments",
        title: "Apartments",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "title",
                title: "Title",
                type: "string",
              },
              {
                name: "houseName",
                title: "House Name",
                type: "string",
              },
              {
                name: "description",
                title: "Description",
                type: "text",
              },
              {
                name: "imageUrl",
                title: "Image",
                type: "image",
                options: { hotspot: true },
              },
            ],
          },
        ],
      },
      {
        name: "buttons",
        title: "Overview Buttons",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "label",
                title: "Button Label",
                type: "string",
              },
              {
                name: "subtext",
                title: "Button Subtext",
                type: "string",
              },
              {
                name: "link",
                title: "Button Link",
                type: "url",
              },
            ],
          },
        ],
      },
    ],
  };
  