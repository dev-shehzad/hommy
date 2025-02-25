export default {
    name: "housefeatures",
    title: "House Features",
    type: "document",
    fields: [
      {
        name: "rooms",
        title: "Rooms",
        type: "object",
        fields: [
          { name: "count", title: "Room Count", type: "number" },
          { name: "view", title: "View", type: "string" },
        ],
      },
      {
        name: "themes",
        title: "Themes",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "bed",
        title: "Bed",
        type: "object",
        fields: [
          { name: "kingSize", title: "King Size Beds", type: "number" },
          { name: "couch", title: "Couch", type: "number" },
        ],
      },
      {
        name: "nature",
        title: "Nature",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "bathroom",
        title: "Bathroom",
        type: "object",
        fields: [
          { name: "count", title: "Bathroom Count", type: "number" },
          {
            name: "amenities",
            title: "Amenities",
            type: "array",
            of: [{ type: "string" }],
          },
        ],
      },
    ],
  };
  