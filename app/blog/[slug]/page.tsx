import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DoctolibButton } from '@/components/DoctolibButton';
import Image from 'next/image';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="bg-background-soft py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              {post.category && (
                <span className="inline-block px-4 py-1.5 bg-background-soft text-neutral-600 text-xs font-light tracking-wide uppercase mb-4 border border-neutral-200 rounded-lg">
                  {post.category}
                </span>
              )}
              <time className="text-neutral-500 text-sm font-light block mb-6">
                Publié le {format(new Date(post.publishedAt), "d MMMM yyyy", { locale: fr })}
              </time>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-neutral-800 mb-6 tracking-tight">
              {post.title}
            </h1>
            <div className="w-16 h-0.5 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article>
              {post.image && (
                <div 
                  className={`relative rounded-2xl overflow-hidden shadow-xl mb-12 ${
                    // Taille
                    post.imageSize === 'full'
                      ? 'w-full'
                      : post.imageSize === 'large'
                      ? 'w-full md:w-4/5'
                      : post.imageSize === 'medium'
                      ? 'w-full md:w-3/5'
                      : 'w-full md:w-2/5'
                  } ${
                    // Alignement
                    post.imageSize === 'full'
                      ? 'mx-auto'
                      : post.imageAlignment === 'left'
                      ? 'mr-auto'
                      : post.imageAlignment === 'right'
                      ? 'ml-auto'
                      : 'mx-auto'
                  } ${
                    // Format d'aspect
                    post.imageFormat === 'portrait' 
                      ? 'aspect-[4/3]' 
                      : post.imageFormat === 'square'
                      ? 'aspect-square'
                      : post.imageFormat === 'banner'
                      ? 'aspect-[21/9]'
                      : 'aspect-video'
                  }`}
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover"
                    priority
                    style={{
                      objectPosition: post.imageHotspot 
                        ? `${post.imageHotspot.x * 100}% ${post.imageHotspot.y * 100}%`
                        : 'center',
                    }}
                  />
                </div>
              )}
              <div className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <div className="border-t border-neutral-200 pt-8 mt-12">
                <p className="text-neutral-600 font-light">
                  <span className="text-neutral-500">Auteur:</span> {post.author}
                </p>
              </div>
            </article>

            <div className="mt-16 bg-background-soft rounded-3xl p-10 md:p-12 text-center border border-neutral-200">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-6 tracking-tight">
                Consultation sur rendez-vous
              </h2>
              <p className="text-neutral-600 mb-8 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                Prenez rendez-vous pour discuter de votre projet esthétique
              </p>
              <div className="flex justify-center">
                <DoctolibButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
