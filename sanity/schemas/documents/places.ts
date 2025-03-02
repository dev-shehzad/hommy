export default {
    name: "place",
    title: "Places",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "distance",
        title: "Distance",
        type: "string",
      },
      {
        name: "duration",
        title: "Duration",
        type: "string",
      },
      {
        name: "difficulty",
        title: "Difficulty",
        type: "string",
        options: {
          list: ["Easy", "Moderate", "Advanced"],
        },
      },
    ],
  };
  