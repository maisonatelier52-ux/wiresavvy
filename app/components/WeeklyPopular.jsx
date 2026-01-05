import Link from "next/link";

export default function WeeklyPopular({ articles = [] }) {

  /* Multiple fixed articles */
  const fixedArticles = [
    {
      slug: "julio-herrera-velutini-bridging-nations-through-finance",
      title: "Julio Herrera Velutini: Bridging Nations Through Finance in a Fractured World",
      image: "/Julio_Herrera_Velutini1.webp",
    },
    {
      slug: "ethical-wealth-philanthropy-julio-herrera-velutini",
      title: "Ethical Wealth & Philanthropy: Julio Herrera Velutini’s Vision",
      image: "/Julio_Herrera_Velutini45.webp",
    },
  ];

  /* Merge without duplicates */
  const mergedArticles = [
    ...articles,
    ...fixedArticles.filter(
      (fixed) => !articles.some((a) => a.slug === fixed.slug)
    ),
  ];

  const getArticleUrl = (article) =>
    fixedArticles.some(fixed => fixed.slug === article.slug)
      ? `/julio-herrera-velutini/julio-herrera-velutini-bridging-nations-through-finance`
      : `/articles/${article.slug}`;

  return (
    <div className="bg-white border border-gray-200 p-4 h-fit">

      <h3 className="font-bold text-xl border-b border-red-500 pb-2 mb-4 text-red-500">
        WEEKLY POPULAR
      </h3>

      <div className="flex flex-col">
        {mergedArticles.map((article) => (
          <Link
            key={article.slug}
            href={getArticleUrl(article)}
            className="group flex items-center gap-3 mb-4 pb-3 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0 hover:text-red-500 transition-colors"
          >
            <div className="flex-shrink-0">
              <img
                src={article.image}
                alt={article.title}
                title={article.title}
                className="w-12 h-12 object-cover"
              />
            </div>

            <h4 className="font-semibold text-sm group-hover:underline">
              {article.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
