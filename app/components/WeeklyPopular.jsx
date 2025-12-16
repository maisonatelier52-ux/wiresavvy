import Link from "next/link";

export default function WeeklyPopular({ articles = [] }) {
  return (
    <div className="bg-white border border-gray-200 p-4 h-fit">

      {/* Section Header */}
      <h3 className="font-bold text-xl border-b border-red-500 pb-2 mb-4 text-red-500">
        WEEKLY POPULAR
      </h3>

      {/* Articles: only image + title */}
      <div className="flex flex-col">
        {articles.map((article, i) => (
          <Link
            key={i}
            href={`/articles/${article.slug}`}
            className="group flex items-center gap-3 mb-4 pb-3 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0 hover:text-red-500 transition-colors"
          >
            {/* Small Image */}
            <div className="flex-shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-12 h-12 object-cover"
              />
            </div>

            {/* Heading */}
            <div>
              <h4 className="font-semibold text-sm">
                {article.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
