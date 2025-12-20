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
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Blog
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Actualités, conseils et informations sur la chirurgie esthétique
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Aucun article pour le moment. Les articles seront publiés prochainement.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">
                    {post.category && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-2">
                        {post.category}
                      </span>
                    )}
                    <time className="text-gray-500 text-sm block">
                      {format(new Date(post.publishedAt), "d MMMM yyyy", { locale: fr })}
                    </time>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-900 transition"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4 text-lg">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    Lire la suite →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

