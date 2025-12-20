import { BlogPost } from './types';

// Pour l'instant, on utilise des données statiques
// Plus tard, cela sera remplacé par une intégration CMS (Sanity, Strapi, etc.)
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Bienvenue sur le site du Dr. Omar Wahab',
    slug: 'bienvenue',
    excerpt: 'Découvrez notre nouveau site web et nos services de chirurgie esthétique.',
    content: `
      <p>Bienvenue sur le site du Dr. Omar Wahab, chirurgien esthétique à Bruges.</p>
      <p>Ce site vous permettra de découvrir nos différentes interventions en chirurgie esthétique et médecine esthétique.</p>
      <p>N'hésitez pas à prendre rendez-vous pour une consultation personnalisée.</p>
    `,
    author: 'Dr. Omar Wahab',
    publishedAt: new Date().toISOString(),
    category: 'Actualités',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

