import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Dr. Omar Wahab | Actualités et Conseils",
  description: "Découvrez les articles du Dr. Omar Wahab sur la chirurgie esthétique, la médecine esthétique et les actualités du cabinet.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      <section className="bg-background-soft py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-neutral-800 mb-6 tracking-tight">
              Blog
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-neutral-600 font-light tracking-wide">
              Actualités, conseils et informations sur la chirurgie esthétique
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-neutral-600 text-lg font-light">
                  Aucun article pour le moment. Les articles seront publiés prochainement.
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-200 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="mb-6">
                      {post.category && (
                        <span className="inline-block px-4 py-1.5 bg-background-soft text-neutral-600 text-xs font-light tracking-wide uppercase mb-3 border border-neutral-200 rounded-lg">
                          {post.category}
                        </span>
                      )}
                      <time className="text-neutral-500 text-sm font-light block">
                        {format(new Date(post.publishedAt), "d MMMM yyyy", { locale: fr })}
                      </time>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-6 tracking-tight">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-neutral-600 mb-6 text-lg font-light leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-light text-sm tracking-wide hover:translate-x-2 transition-transform"
                    >
                      Lire la suite
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
