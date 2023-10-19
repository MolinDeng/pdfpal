import { PineconeClient } from '@pinecone-database/pinecone';

// TODO change deprecated method
export const getPineconeClient = async () => {
  const client = new PineconeClient();

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: process.env.PINECONE_ENVIRONMENT!,
  });

  return client;
};
