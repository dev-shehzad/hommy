export default {
  name: "similarapart",
  title: "Similar Apartments Section",
  type: "document",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
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
            {
              name: "linkedApartments",
              title: "Linked Apartments",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "similarApartment" }], // 🔥 Directly select apartments
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
