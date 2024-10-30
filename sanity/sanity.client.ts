import { dataset, projectId } from '@/env';
import { createClient } from 'next-sanity';

const config = {
  projectId,
  dataset: dataset || 'production',
  apiVersion: '2024-10-11',
  useCdn: true,
};

const client = createClient(config);

export default client;
