import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Type pour les sources d'images Sanity
type SanityImageSource = {
  _type?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
  [key: string]: any;
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rg0stah3';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Log en développement pour vérifier la configuration
if (process.env.NODE_ENV === 'development') {
  console.log('[Sanity] Client configured:', { projectId, dataset, apiVersion });
}

// Builder pour les URLs d'images Sanity
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}



