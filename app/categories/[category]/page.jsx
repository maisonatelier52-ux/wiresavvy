import ArticleLayout from "@/app/components/ArticleLayout";
import details from "../../../data/details.json";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);

  const formattedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return {
    title: `${formattedCategory} News — Wiresavvy`,
    description: `Read the latest ${formattedCategory.toLowerCase()} news, analysis and investigative stories from across the United States. Updated daily by Wiresavvy reporters.`,
    keywords: [
      `${formattedCategory} news`,
      `${formattedCategory} updates`,
      "US news",
      "Wiresavvy",
      "breaking news",
      "latest US headlines",
    ],
    openGraph: {
      title: `${formattedCategory} News — Wiresavvy`,
      description: `Latest US ${formattedCategory.toLowerCase()} news, reports and analysis.`,
      url: `https://wiresavvy.com/category/${categoryName}`,
      type: "website",
      images: [
        {
          url: "/og-default.webp",
          width: 1200,
          height: 630,
          alt: `${formattedCategory} News`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedCategory} News — Wiresavvy`,
      description: `Latest US ${formattedCategory.toLowerCase()} news and analysis.`,
      images: ["/og-default.webp"],
    },
    alternates: {
      canonical: `https://wiresavvy.com/category/${categoryName}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);

  // FILTER ARTICLES OF THIS CATEGORY
  const categoryArticles = details.articles.filter(
    a => a.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (categoryArticles.length === 0) {
    return (
      <ArticleLayout>
        <div className="max-w-4xl mx-auto py-20 text-center">
          <div className="text-sm text-zinc-600 mb-3">
            <Link href="/" className="hover:text-red-500">Home</Link>
            <span className="mx-2">›</span>
            <span className="uppercase text-red-500 font-semibold">
              {categoryName}
            </span>
          </div>
          <h1 className="text-3xl font-bold uppercase text-red-500">
            No articles found in "{categoryName}"
          </h1>
        </div>
      </ArticleLayout>
    );
  }

  // SORT CATEGORY ARTICLES BY DATE (LATEST FIRST)
  const sortedCategory = [...categoryArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // MAIN 4
  const mainFour = sortedCategory.slice(0, 4);

  // --- POPULAR POSTS LOGIC ---
  // First take from same category (after main 4)
  let popularPosts = sortedCategory.slice(4, 7);

  // If less than 3, fill from other categories
  if (popularPosts.length < 3) {
    const needed = 3 - popularPosts.length;

    const fallback = details.articles
      .filter(
        a =>
          a.category.toLowerCase() !== categoryName.toLowerCase() &&
          !popularPosts.some(p => p.slug === a.slug) // avoid duplicates
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // newest first
      .slice(0, needed);

    popularPosts = [...popularPosts, ...fallback];
  }

  return (
    <ArticleLayout>
      <div className="max-w-7xl mx-auto text-black">

        {/* PAGE WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1">

            {/* BREADCRUMB */}
            <div className="text-sm text-zinc-600 mb-3">
              <Link href="/" className="hover:text-red-500">Home</Link>
              <span className="mx-2">›</span>
              <span className="uppercase text-red-500 font-semibold">
                {categoryName}
              </span>
            </div>

            {/* CATEGORY TITLE */}
            <h1 className="text-3xl font-bold uppercase text-red-500 mb-8">
              {categoryName} News
            </h1>

            {/* MAIN 4 ARTICLES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {mainFour.map((article, i) => {
                const author = details.authors.find(a => a.id === article.authorId);

                return (
                <Link
                    key={i}
                    href={`/articles/${article.slug}`}
                    className="group block border border-gray-200 transition shadow-sm hover:shadow-lg overflow-hidden"
                >
                    {/* IMAGE */}
                    <div
                    className="w-full h-48 mb-3"
                    style={{
                        backgroundImage: `url(${article.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    />

                    {/* TITLE */}
                    <h2 className="text-lg font-semibold px-3 group-hover:text-red-500 leading-tight mb-2">
                    {article.title}
                    </h2>

                    {/* AUTHOR + DATE SIDE BY SIDE */}
                    <div className="flex items-center justify-between px-3 text-xs font-semibold uppercase text-red-500 hover:text-black">
                        <span>{author?.name}</span>
                        <span className="text-[10px] text-zinc-600 normal-case">
                            {article.date}
                        </span>
                    </div>

                    {/* EXCERPT – 3 LINES ONLY */}
                    <p className="px-3 mt-3 mb-4 text-sm text-zinc-700 line-clamp-3">
                        {article.excerpt}
                    </p>

                </Link>
                );
            })}
            </div>
          </div>

          {/* RIGHT SIDEBAR — POPULAR POSTS */}
          <aside className="w-full lg:w-[300px]">
            <div className="border border-gray-200 p-5">
              <h2 className="text-lg font-bold uppercase text-red-500 mb-5">
                Popular Posts
              </h2>

              <ul className="flex flex-col gap-5">
                {popularPosts.map((p, i) => {
                  const pAuthor = details.authors.find(a => a.id === p.authorId);

                  return (
                    <li key={i} className="list-none">
                        <Link
                            href={`/articles/${p.slug}`}
                            className="block group"
                        >

                          {/* IMAGE ON TOP */}
                          <div
                          className="w-full h-32 mb-3 overflow-hidden shadow-md"
                          style={{
                              backgroundImage: `url(${p.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                          }}
                          />

                          {/* TITLE */}
                          <p className="text-sm font-semibold group-hover:text-red-500 leading-snug mb-2">
                          {p.title}
                          </p>

                          {/* AUTHOR + DATE SIDE-BY-SIDE */}
                          <div className="flex items-center justify-between text-xs font-semibold uppercase text-red-500 hover:text-black mb-2">
                          <span>{pAuthor?.name || "Unknown Author"}</span>

                          <span className="text-[10px] text-zinc-600 normal-case">
                              {p.date}
                          </span>
                          </div>

                          {/* EXCERPT */}
                          <p className="text-[12px] text-zinc-600 line-clamp-3">
                          {p.excerpt}
                          </p>

                        </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </ArticleLayout>
  );
}
