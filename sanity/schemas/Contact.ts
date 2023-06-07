const Contact = {
  name: 'contact',
  title: 'Contact',
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
          type: 'text',
          description: 'Subtitle in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'text',
          description: 'Subtitle in Portuguese',
        },
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
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
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    },
    {
      name: 'profilePicture',
      title: 'ProfilePicture',
      type: 'image',
    },
  ],
};
export default Contact;
