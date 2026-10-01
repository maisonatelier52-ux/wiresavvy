"use client";

import Link from "next/link";
import details from "../../data/details.json";

export default function MostViewed() {
  const filteredArticles = details.articles;
  const sorted = [...filteredArticles].slice(0, 10);
  const col1 = sorted.slice(0, 5);
  const col2 = sorted.slice(5, 10);

  const adImage = "/wiresavvy_ads.jpg";

  const renderArticle = (a, i) => {
    const articleUrl = `/${a.category}/${a.slug}`;

    return (
      <Link href={articleUrl} title={a.title} key={i}>
        <div className="flex group">
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
  };

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
            <div className="w-full max-w-[400px] aspect-[5/8] flex items-center justify-center overflow-hidden">
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