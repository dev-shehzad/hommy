export default {
    name: "blogmodule9",
    title: "Alternating Features",
    type: "document",
    fields: [
      {
        name: "features",
        title: "Features",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "title",
                title: "Title",
                type: "string",
                validation: (Rule) => Rule.required(),
              },
              {
                name: "description",
                title: "Description",
                type: "text",
                validation: (Rule) => Rule.required(),
              },
              {
                name: "amenities",
                title: "Amenities",
                type: "array",
                of: [
                  {
                    type: "object",
                    fields: [
                      {
                        name: "label",
                        title: "Amenity Label",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                      },
                      {
                        name: "icon",
                        title: "Icon",
                        type: "string",
                        description: "Enter the icon name (e.g., FaBed, FaWifi)",
                        validation: (Rule) => Rule.required(),
                      },
                    ],
                  },
                ],
              },
              {
                name: "image",
                title: "Image",
                type: "image",
                options: { hotspot: true },
              },
              {
                name: "imagePosition",
                title: "Image Position",
                type: "string",
                options: {
                  list: [
                    { title: "Left", value: "left" },
                    { title: "Right", value: "right" },
                  ],
                },
              },
            ],
          },
        ],
        validation: (Rule) => Rule.min(1),
      },
    ],
  }
  