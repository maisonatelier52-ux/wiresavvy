"use client";
import Link from "next/link";
import ArticleLayout from "./components/ArticleLayout";

export default function NotFound() {
  return (
    <ArticleLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-zinc-700 mb-8 max-w-md">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="bg-red-500 text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </ArticleLayout>
  );
}
