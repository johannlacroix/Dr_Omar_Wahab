import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} - Blog Dr. Omar Wahab`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <article>
            <div className="mb-6">
              {post.category && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
                  {post.category}
                </span>
              )}
              <time className="text-gray-500 text-sm">
                Publié le {format(new Date(post.publishedAt), "d MMMM yyyy", { locale: fr })}
              </time>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-gray-600 mb-4">
                <strong>Auteur:</strong> {post.author}
              </p>
            </div>
          </article>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Consultation sur rendez-vous
            </h2>
            <p className="text-gray-700 mb-6">
              Prenez rendez-vous pour discuter de votre projet esthétique
            </p>
            <DoctolibButton />
          </div>
        </div>
      </div>
    </div>
  );
}

