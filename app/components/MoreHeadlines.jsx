"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function MoreHeadlines({ articles = [] }) {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(articles.length / pageSize)), [
    articles.length,
  ]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return articles.slice(start, start + pageSize);
  }, [articles, page]);

  function prev() {
    setPage((p) => Math.max(1, p - 1));
  }

  function next() {
    setPage((p) => Math.min(totalPages, p + 1));
  }

  return (
    <div className="bg-white border border-gray-200 p-4 h-fit">
            <h3 className="font-bold text-xl border-b border-red-500 pb-2 mb-4 text-red-500">MORE HEADLINES</h3>

      <div className="flex flex-col">
        {paged.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group hover:text-red-500 transition-colors duration-200 block mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0"
          >
            <h4
              className="font-semibold text-sm line-clamp-2"
              title={article.title.length > 90 ? article.title.substring(0, 90) + '...' : article.title}
            >
              {article.title}
            </h4>
          </Link>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        {/* PREV BUTTON */}
        <button
          onClick={prev}
          disabled={page <= 1}
          className={`flex items-center gap-1 px-3 py-1 text-xs rounded transition-colors duration-150 border border-gray-200 ${
            page <= 1
              ? "bg-gray-200 text-zinc-400 cursor-not-allowed"
              : "bg-white text-zinc-700 hover:bg-red-500 hover:text-white"
          }`}
        >
          {/* Left Arrow Icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
          <span>Prev</span>
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={next}
          disabled={page >= totalPages}
          className={`flex items-center gap-1 px-3 py-1 text-xs rounded transition-colors duration-150 border border-gray-200 ${
            page >= totalPages
              ? "bg-gray-200 text-zinc-400 cursor-not-allowed"
              : "bg-white text-zinc-700 hover:bg-red-500 hover:text-white"
          }`}
        >
          <span>Next</span>
          {/* Right Arrow Icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
