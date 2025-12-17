"use client";

import Link from "next/link";
import details from "../../data/details.json";

export default function MostViewed() {

  // 👇 SET THE SLUG YOU WANT IN COLUMN 2
  const forcedSlug = "herrera-family-lineage-legacy-julio-herrera-velutini";

  // Find the forced article
  const forcedArticle = details.articles.find(
    (a) => a.slug === forcedSlug
  );

  // Remove forced article from main list
  const filteredArticles = details.articles.filter(
    (a) => a.slug !== forcedSlug
  );

  // Take remaining articles
  const sorted = [...filteredArticles].slice(0, 9);

  // Column split
  const col1 = sorted.slice(0, 5);

  // Column 2: forced article first, then remaining
  const col2 = forcedArticle
    ? [forcedArticle, ...sorted.slice(5, 9)].reverse()
    : sorted.slice(5, 10);

  const adImage = "/ad-image.png";

  const renderArticle = (a, i) => (
    <Link href={`/articles/${a.slug}`} title={a.title} key={i}>
      <div className="flex group">

        {/* IMAGE */}
        <div className="w-[110px] h-[80px] flex-shrink-0 bg-gray-100 flex items-center justify-center overflow-hidden">
          {a.image ? (
            <img
              src={a.image}
              alt={a.title}
              title={a.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs text-gray-500 uppercase">image</span>
          )}
        </div>

        <h2 className="text-base font-semibold text-black hover:text-red-500 transition-colors px-2">
          {a.title}
        </h2>

      </div>
    </Link>
  );

  return (
    <section className="w-full my-7 px-2">
      <h3 className="text-2xl font-bold uppercase text-red-500 mb-6">
        MOST VIEWED
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-5">
          {col1.map(renderArticle)}
        </div>

        {/* COLUMN 2 (FORCED ARTICLE INCLUDED) */}
        <div className="flex flex-col gap-5">
          {col2.map(renderArticle)}
        </div>

        {/* COLUMN 3 — AD */}
        <div className="flex justify-center">
          <Link href="http://wiresavvy.com/" title="WireSavvy Home">
            <div className="w-full max-w-[400px] aspect-[1080/1920] bg-gray-200 border border-gray-400 flex items-center justify-center overflow-hidden">
              <img
                src={adImage}
                alt="Sponsor Ad"
                title="Sponsor Ad"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}