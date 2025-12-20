// Configuration pour l'intégration Sanity CMS
// À configurer lorsque vous serez prêt à utiliser Sanity

/*
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Exemple de requête pour récupérer les articles
export async function getBlogPostsFromSanity() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    author->{name},
    image
  }`;
  
  return await sanityClient.fetch(query);
}
*/

// Pour l'instant, on utilise les données statiques de lib/blog.ts
// Décommentez et configurez le code ci-dessus lorsque vous aurez configuré Sanity

