export default {
    name: 'houses',
    title: 'Houses',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'name', maxLength: 96 },
        validation: Rule => Rule.required()
      },
      {
        name: 'details',
        title: 'Details',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'apartments',
        title: 'Apartments',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: Rule => Rule.required()
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true },
                validation: Rule => Rule.required()
              },
              {
                name: 'features',
                title: 'Features',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'icon',
                        title: 'Icon',
                        type: 'string',
                        options: {
                          list: [
                            { title: 'Bed', value: 'bed' },
                            { title: 'Sun', value: 'sun' },
                            { title: 'Star', value: 'star' },
                            { title: 'Layout', value: 'layout' }
                          ]
                        },
                        validation: Rule => Rule.required()
                      },
                      {
                        name: 'text',
                        title: 'Text',
                        type: 'string',
                        validation: Rule => Rule.required()
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'location',
        title: 'Location',
        type: 'object',
        fields: [
          {
            name: 'mapImage',
            title: 'Map Image',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
          },
          {
            name: 'neighborhood',
            title: 'Neighborhood',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'nearbyPlaces',
            title: 'Nearby Places',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: Rule => Rule.required()
                  },
                  {
                    name: 'distance',
                    title: 'Distance',
                    type: 'string',
                    validation: Rule => Rule.required()
                  },
                  {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    validation: Rule => Rule.required()
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  