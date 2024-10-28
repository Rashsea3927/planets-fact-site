import { dataset, projectId } from '@/env';
import { createClient } from 'next-sanity';

const config = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2024-10-11',
  useCdn: true,
};

const client = createClient(config);

export default client;
