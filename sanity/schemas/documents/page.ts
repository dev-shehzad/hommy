
export default {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "components",
      title: "Page Components",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "properti" },
            { type: "property" },
            { type: "tab" },
            {type:"experience"},
            {type:"hero"},
            {type:"housefeatures"},
            {type:"heroHeader"},
            {type:"housepics"},
            {type:"availabilityBanner"},
            {type: "similarapart"},
            {type:"houses"},
            {type:"honeymoon"},
            {type:"blogmodule2"},
            {type:"honeymoonlayout"},
            {type:"place"},
            {type:"blogmodule5"},
            {type:"blogmodule6"},
            {type:"blogmodule7"},
            {type:"blogmodule8"},
            {type:"blogmodule9"}// Make sure this matches EXACTLY with schema file
             // Make sure this matches EXACTLY with schema file
          ],
        },
      ],
    },
  ],
};
