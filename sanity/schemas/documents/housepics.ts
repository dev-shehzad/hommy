export default {
    name: 'housepics',
    type: 'document',
    title: 'House Grid Layout',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [{ type: 'image' }]
      }
    ]
  }
  