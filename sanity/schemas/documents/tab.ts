export default {
  name: 'tab',
  title: 'Tab',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tab Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Content Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Content Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    }
  ]
} 