import { defineType } from "sanity";

export default defineType({
  name: "availabilityBanner",
  title: "Availability Banner",
  type: "document",
  fields: [
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
  ],
  
});
