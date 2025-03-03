export default {
    name: "similarApartment",
    title: "Similar Apartment",
    type: "document", // 🔥 Each apartment is a separate document
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Apartment Slug",
        type: "slug",
        options: { source: "title", maxLength: 100 },
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
  };
  