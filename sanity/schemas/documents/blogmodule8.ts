export default {
    name: "blogmodule8",
    title: "Three Column Info",
    type: "document",
    fields: [
      {
        name: "infoItems",
        title: "Info Items",
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
            ],
          },
        ],
        validation: (Rule) => Rule.min(1),
      },
    ],
  }
  