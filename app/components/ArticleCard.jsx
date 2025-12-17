import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <article className="rounded border bg-white p-5 shadow-sm">
      <div className="mb-3">
        <h3 className="text-lg font-semibold">
          <Link href={`/articles/${article.slug}`} title={article.title}>{article.title}</Link>
        </h3>
      </div>
      <p className="mb-3 text-sm text-zinc-600">{article.excerpt}</p>
      <div className="text-xs text-zinc-500">{article.date} • {article.author}</div>
    </article>
  );
}
