import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'apartment',
  title: 'Apartment',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'house',
      title: 'House',
      type: 'reference',
      to: [{ type: 'house' }],
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'characteristics',
      title: 'Characteristics',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})