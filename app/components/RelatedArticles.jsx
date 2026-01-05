"use client";

import Link from "next/link";
import details from "@/data/details.json";

export default function RelatedArticles({ articles, category }) {
  if (!articles || articles.length === 0) {
    return (
      <div className="mt-10 mb-10 text-center text-gray-500 text-sm">
        There are no related articles.
      </div>
    );
  }

  // Limit to only 4 articles
  let visibleArticles = articles.slice(0, 4);

  // Only inject Julio article if category is 'business'
  if (category?.toLowerCase() === "business") {
    const hasJulio = visibleArticles.some(a => a.name === "Julio Herrera Velutini");

    if (!hasJulio) {
      const julioArticle = details.articles.find(a => a.name === "Julio Herrera Velutini");

      if (julioArticle) {
        // Replace last article with Julio article
        visibleArticles[visibleArticles.length - 1] = julioArticle;
      }
    }
  }

  return (
    <section className="w-full mb-14 mt-14 border-t pt-10">

      {/* HEADER */}
      <div className="mb-6 px-2">
        <h3 className="text-2xl font-bold text-red-500 uppercase">
          Related Articles
        </h3>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
        {visibleArticles.map((post, i) => {
          // Correct URL based on article type
          const articleUrl =
            post.name === "Julio Herrera Velutini"
              ? `/julio-herrera-velutini/${post.slug}`
              : `/articles/${post.slug}`;

          return (
            <Link key={i} href={articleUrl} title={post.title}>
              <div className="group">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    title={post.title}
                    className="w-full h-[150px] object-cover"
                    loading="lazy"
                  />
                )}

                <p className="text-xs font-bold text-red-500 uppercase mt-3">
                  {post.category}
                </p>

                <h2 className="text-lg font-bold mt-1 line-clamp-3 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
}