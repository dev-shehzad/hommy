export default {
    name: "honeymoonlayout",
    title: "Honeymoon Layout",
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
        name: "locations",
        title: "Locations",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "name", title: "Name", type: "string" },
              { name: "description", title: "Description", type: "text" },
              { name: "image", title: "Image", type: "image" },
              { name: "location", title: "Location", type: "string" },
              { name: "availability", title: "Availability", type: "string" },
            ],
          },
        ],
      },
      {
        name: "carouselImages",
        title: "Carousel Images",
        type: "array",
        of: [{ type: "image" }],
      },
    ],
  }
  