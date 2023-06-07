const Navbar = {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'home',
      title: 'Home',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Home in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'string',
          description: 'Home in Portuguese',
        },
      ],
    },
    {
      name: 'info',
      title: 'Info',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Info in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'string',
          description: 'Info in Portuguese',
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Contact in English',
        },
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'string',
          description: 'Contact in Portuguese',
        },
      ],
    },
  ],
};

export default Navbar;
