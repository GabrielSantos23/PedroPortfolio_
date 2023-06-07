const Videos = {
  name: 'videos',
  title: 'Videos',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Title in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'string',
          description: 'Title in Portuguese',
        },
      ],
    },

    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Subtitle in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'string',
          description: 'Subtitle in Portuguese',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'Descrition in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'Descrition in Portuguese',
        },
      ],
    },
    {
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'About in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'About in Portuguese',
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'imageUrl',
      title: 'ImageUrl',
      type: 'image',

      options: { hotspot: true },

      fields: [
        {
          name: 'alt',

          title: 'Alt',

          type: 'string',
        },
      ],
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

export default Videos;
