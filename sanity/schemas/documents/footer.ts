// sanity/schema/footer.js
export default {
    name: "footer",
    title: "Footer Column",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "links",
        title: "Links",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "title", title: "Title", type: "string" },
              { name: "href", title: "URL", type: "url" },
            ],
          },
        ],
      },
    ],
  };
  