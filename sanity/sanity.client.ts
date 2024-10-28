import { dataset, projectId } from '@/env';
import { createClient } from 'next-sanity';
import { type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2024-10-11',
  useCdn: true,
};

const client = createClient(config);

export default client;
