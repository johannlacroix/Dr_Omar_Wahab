export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image?: string;
  imageAlt?: string;
  imageHotspot?: { x: number; y: number };
  imageFormat?: 'landscape' | 'portrait' | 'square' | 'banner';
  imageSize?: 'full' | 'large' | 'medium' | 'small';
  imageAlignment?: 'center' | 'left' | 'right';
  category?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image?: string;
  category: 'mammaire' | 'silhouette' | 'visage' | 'medecine-esthetique';
}



