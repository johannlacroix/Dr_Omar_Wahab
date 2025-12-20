# Guide d'intégration CMS pour le blog

Le site utilise actuellement des données statiques pour le blog. Voici comment intégrer un CMS.

## Option 1 : Sanity (Recommandé)

### Installation

```bash
npm install @sanity/client @sanity/image-url
```

### Configuration

1. Créez un projet sur [sanity.io](https://www.sanity.io)
2. Notez votre `projectId` et `dataset`
3. Ajoutez-les dans `.env.local` :
```
NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Schéma Sanity

Créez un schéma `post` dans votre studio Sanity :

```javascript
// schemas/post.js
export default {
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 4,
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
    },
  },
}
```

### Mise à jour du code

1. Décommentez le code dans `lib/sanity.ts`
2. Mettez à jour `lib/blog.ts` pour utiliser Sanity :

```typescript
import { sanityClient } from './sanity';
import { BlogPost } from './types';

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    "author": author->name,
    category,
    "image": image.asset->url
  }`;
  
  const posts = await sanityClient.fetch(query);
  
  return posts.map((post: any) => ({
    id: post._id,
    title: post.title,
    slug: post.slug.current,
    excerpt: post.excerpt,
    content: post.content, // À convertir en HTML si nécessaire
    author: post.author || 'Dr. Omar Wahab',
    publishedAt: post.publishedAt,
    category: post.category,
    image: post.image,
  }));
}
```

## Option 2 : Strapi

### Installation

```bash
npm install @strapi/strapi
```

### Configuration

1. Créez un projet Strapi
2. Configurez le modèle `Post` dans Strapi
3. Ajoutez l'URL de l'API dans `.env.local` :
```
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

### Mise à jour du code

Créez `lib/strapi.ts` :

```typescript
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function getAllBlogPosts() {
  const res = await fetch(`${API_URL}/api/posts?populate=*`);
  const data = await res.json();
  return data.data;
}
```

## Option 3 : Markdown Files

Vous pouvez aussi utiliser des fichiers Markdown dans un dossier `content/blog/` et les parser avec `remark` ou `gray-matter`.

## Recommandation

**Sanity** est recommandé car :
- Interface intuitive
- Gratuit jusqu'à 10k documents
- Intégration facile avec Next.js
- Gestion d'images intégrée
- Versioning et preview

