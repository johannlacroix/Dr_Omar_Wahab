import { sanityClient, urlFor } from './sanity';
import { BlogPost } from './types';
import { toHTML } from '@portabletext/to-html';

// Interface pour les données brutes de Sanity
interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  content: any; // Portable Text
  author?: string;
  publishedAt: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
      metadata?: any;
    };
    alt?: string;
    hotspot?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  imageFormat?: 'landscape' | 'portrait' | 'square' | 'banner';
  imageSize?: 'full' | 'large' | 'medium' | 'small';
  imageAlignment?: 'center' | 'left' | 'right';
  category?: string;
}

// Convertir les catégories Sanity en catégories affichables
function formatCategory(category?: string): string | undefined {
  const categoryMap: Record<string, string> = {
    'actualites': 'Actualités',
    'conseils': 'Conseils',
    'chirurgie-mammaire': 'Chirurgie Mammaire',
    'chirurgie-silhouette': 'Chirurgie Silhouette',
    'chirurgie-visage': 'Chirurgie Visage',
    'medecine-esthetique': 'Médecine Esthétique',
  };
  return category ? categoryMap[category] || category : undefined;
}

// Générer l'URL d'image selon le format
function getImageUrl(mainImage: any, format?: string): string | undefined {
  if (!mainImage?.asset) return undefined;

  const builder = urlFor(mainImage);
  
  // Dimensions selon le format
  switch (format) {
    case 'portrait':
      return builder.width(800).height(1067).fit('crop').url(); // 4:3
    case 'square':
      return builder.width(1200).height(1200).fit('crop').url(); // 1:1
    case 'banner':
      return builder.width(1920).height(823).fit('crop').url(); // 21:9
    case 'landscape':
    default:
      return builder.width(1920).height(1080).fit('crop').url(); // 16:9
  }
}

// Convertir un article Sanity en BlogPost
function convertSanityPostToBlogPost(post: SanityPost): BlogPost {
  const imageFormat = post.imageFormat || 'landscape';
  const imageUrl = getImageUrl(post.mainImage, imageFormat);

  return {
    id: post._id,
    title: post.title,
    slug: post.slug.current,
    excerpt: post.excerpt || '',
    content: toHTML(post.content || []),
    author: post.author || 'Dr. Omar Wahab',
    publishedAt: post.publishedAt,
    image: imageUrl,
    imageAlt: post.mainImage?.alt || post.title,
    imageHotspot: post.mainImage?.hotspot ? {
      x: post.mainImage.hotspot.x,
      y: post.mainImage.hotspot.y,
    } : undefined,
    imageFormat: imageFormat,
    imageSize: post.imageSize || 'full',
    imageAlignment: post.imageAlignment || 'center',
    category: formatCategory(post.category),
  };
}

// Récupérer tous les articles depuis Sanity
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    author,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url,
        metadata
      },
      alt,
      hotspot,
      crop
    },
    imageFormat,
    imageSize,
    imageAlignment,
    category
  }`;

  try {
    const posts: SanityPost[] = await sanityClient.fetch(query);
    console.log(`[Blog] Fetched ${posts.length} posts from Sanity`);
    if (posts.length === 0) {
      console.warn('[Blog] No posts found. Check if posts are published in Sanity.');
    }
    return posts.map(convertSanityPostToBlogPost);
  } catch (error) {
    console.error('[Blog] Error fetching blog posts from Sanity:', error);
    console.error('[Blog] Sanity config:', {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rg0stah3',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    });
    return [];
  }
}

// Récupérer un article par son slug
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    author,
    publishedAt,
    mainImage{
      asset->{
        _id,
        url,
        metadata
      },
      alt,
      hotspot,
      crop
    },
    imageFormat,
    imageSize,
    imageAlignment,
    category
  }`;

  try {
    const post: SanityPost | null = await sanityClient.fetch(query, { slug });
    return post ? convertSanityPostToBlogPost(post) : undefined;
  } catch (error) {
    console.error('Error fetching blog post from Sanity:', error);
    return undefined;
  }
}



