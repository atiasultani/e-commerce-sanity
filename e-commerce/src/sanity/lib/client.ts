import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'kpgmh614', // Replace with your Sanity project ID
  dataset: 'production',    // Replace with your dataset name (e.g., "production")
  useCdn: true,              // Use the Content Delivery Network for faster responses
  apiVersion: '2024-12-27',  // Specify the API version
});
