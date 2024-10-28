import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'planets-fact-site',

  projectId: 'ddmndcen',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
});
