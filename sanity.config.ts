import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { dataset, projectId } from './env';

export default defineConfig({
  name: 'default',
  title: 'planets-fact-site',

  projectId: projectId,
  dataset: dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
