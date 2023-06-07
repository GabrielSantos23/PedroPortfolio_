const Info = {
  name: 'info',
  title: 'Info',
  type: 'document',
  fields: [
    {
      name: 'apresentation',
      title: 'Apresentation',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Apresentation in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'string',
          description: 'Apresentation in Portuguese',
        },
      ],
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          description: 'Resume in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'text',
          description: 'Resume in Portuguese',
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
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          description: 'About in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'text',
          description: 'About in Portuguese',
        },
      ],
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'profilePicture',
      title: 'ProfilePicture',
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
      name: 'courses',
      title: 'Courses',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Courses in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'string',
          description: 'Courses in Portuguese',
        },
      ],
    },
    {
      name: 'cousesName',
      title: 'couse name',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Tools in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Tools in Portuguese',
        },
      ],
    },
  ],
};

export default Info;
