import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'], // Ajoutez vos domaines d'images
  },
};

export default nextConfig;
