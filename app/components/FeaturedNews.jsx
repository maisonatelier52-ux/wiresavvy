"use client";

import Link from "next/link";

export default function FeaturedNews({ articles }) {
  if (!articles || articles.length === 0) return null;

  // SORT BY DATE (LATEST FIRST)
  const sortedCategory = [...articles];

  const topNews = sortedCategory[0];
  const bottomNews = sortedCategory.slice(1, 3);

  return (
    <aside className="md:col-span-2 flex flex-col gap-6 w-full">

      {/* ===== TOP FEATURED NEWS ===== */}
      {topNews && (
        <Link href={`/articles/${topNews.slug}`} className="relative w-full">
          <div className="relative overflow-hidden w-full">
            <img
              src={topNews.image}
              alt={topNews.title}
              title={topNews.title}
              className="object-cover w-full h-[300px] md:h-[460px]"
            />

            <div className="absolute inset-0 bg-black/45"></div>

            <div className="absolute bottom-0 left-0 p-5 text-white">
              <p className="text-sm font-bold uppercase mb-1">
                {topNews.category}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-snug">
                {topNews.title}
              </h2>
            </div>
          </div>
        </Link>
      )}

      {/* ===== BOTTOM 2 NEWS CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {bottomNews.map((news) => (
          <Link key={news.slug} href={`/articles/${news.slug}`}>
            <div className="bg-white overflow-hidden w-full">
              {news.image && (
                <img
                  src={news.image}
                  alt={news.title}
                  title={news.title}
                  className="w-full h-[160px] object-cover"
                />
              )}

              <div className="p-4">
                <p className="text-xs font-bold text-red-500 uppercase mb-1">
                  {news.category}
                </p>
                <h2 className="text-lg font-bold text-zinc-900 line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-md text-zinc-500 line-clamp-2 mt-2">
                  {news.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </aside>
  );
}
