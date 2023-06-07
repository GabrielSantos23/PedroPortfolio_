import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';

const config = defineConfig({
  projectId: 'docvvcqm',

  dataset: 'production',

  title: 'Pedro Portfolio',

  apiVersion: '2023-02-19',

  basePath: '/admin',

  plugins: [deskTool()],

  schema: { types: schemaTypes },
});

export default config;
