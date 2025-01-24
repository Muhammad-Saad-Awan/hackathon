import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2023-01-01", // Replace with your desired API version
  token: process.env.SANITY_API_TOKEN, // Add the token here for authenticated requests
});

 