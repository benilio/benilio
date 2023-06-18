export default {
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    {
      type: 'number',
      name: 'sortOrder',
      title: 'Sort order',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: { source: 'title' },
    },
    {
      type: 'string',
      name: 'team',
      title: 'Team',
    },
    {
      type: 'string',
      name: 'detail',
      title: 'Position, Date',
    },
    {
      type: 'image',
      name: 'cover',
      title: 'Cover',
      options: { hotspot: true },
      fields: [{ type: 'string', name: 'alt', title: 'Alt' }],
    },
    {
      type: 'array',
      name: 'overview',
      title: 'Overview',
      of: [{ type: 'block' }],
    },
    {
      type: 'array',
      name: 'contributions',
      title: 'Contributions',
      of: [{ type: 'block' }],
    },
    {
      type: 'array',
      name: 'gallery',
      title: 'Gallery',
      of: [
        {
          type: 'image',
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
}
