import ArticleLayout from "@/app/components/ArticleLayout";
import details from "@/data/details.json";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.wiresavvy.com";

function getCategoryArticles(rawCategoryName) {
  const normalizedCategory = rawCategoryName.toLowerCase();

  const manualWorldArticle = {
    slug: "melanie-herrera-velutini-cultural-philanthropy",
    title:
      "Culture as Common Ground: Melanie Herrera Velutini on the Purpose of Philanthropy",
    excerpt:
      "For Melanie Herrera Velutini and Banvelca Foundation, the Canticle of Peace gathering at Castel Gandolfo expressed a larger philosophy of family philanthropy: culture can do more than preserve beauty—it can teach people how to live with difference.",
    image: "/pope-leo-XIV-joins-andrea-bocelli.jpg",
    date: "2026-08-13",
    authorName: "Michael Thompson",
    category: "World",
    authorId: null,
  };

  const categoryArticles = details.articles.filter(
    (a) => a.category?.toLowerCase() === normalizedCategory
  );

  let sortedCategory;

  if (normalizedCategory === "world") {
    sortedCategory = [...categoryArticles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    sortedCategory = [
      manualWorldArticle,
      ...sortedCategory.filter(
        (article) => article.slug !== manualWorldArticle.slug
      ),
    ];
  } else {
    sortedCategory = [...categoryArticles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  return { normalizedCategory, sortedCategory };
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);
  const { normalizedCategory, sortedCategory } = getCategoryArticles(categoryName);

  const formattedCategory = normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1);

  const canonicalUrl = `${SITE_URL}/${normalizedCategory}`;

  const isEmpty = sortedCategory.length === 0;

  return {
    title: `${formattedCategory} News — Wiresavvy`,
    description: `Read the latest ${formattedCategory.toLowerCase()} news, analysis and investigative stories from across the United States. Updated daily by Wiresavvy reporters.`,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: isEmpty
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
          },
        },
    openGraph: {
      title: `${formattedCategory} News — Wiresavvy`,
      description: `Latest U.S. ${formattedCategory.toLowerCase()} news, reports and analysis.`,
      url: canonicalUrl,
      type: "website",
      siteName: "Wiresavvy",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}/wiresavvy.webp`,
          width: 1200,
          height: 630,
          alt: `${formattedCategory} News`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedCategory} News — Wiresavvy`,
      description: `Latest U.S. ${formattedCategory.toLowerCase()} news and analysis.`,
      images: [`${SITE_URL}/wiresavvy.webp`],
      site: "@wiresavvy",
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);
  const { normalizedCategory, sortedCategory } =
    getCategoryArticles(categoryName);

  const formattedCategory =
    normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1);

  /*
   * ---------------------------------------------------------
   * EMPTY CATEGORY CHECK
   *
   * Previously this rendered a 200-status "No articles found"
   * page, which Google could index as thin/soft-404 content.
   * Genuinely nonexistent categories now 404; if you'd rather
   * keep a friendly message instead of a hard 404, remove the
   * notFound() call below and rely on the noindex robots meta
   * set in generateMetadata instead.
   * ---------------------------------------------------------
   */
  if (sortedCategory.length === 0) {
    notFound();
  }

  /*
   * ---------------------------------------------------------
   * MAIN ARTICLES
   * ---------------------------------------------------------
   */
  const mainFour = sortedCategory.slice(0, 4);
  const popularPosts = sortedCategory.slice(4, 7);

  const getArticleUrl = (article) =>
    `/${(article.category || normalizedCategory).toLowerCase()}/${article.slug}`;

  /* ---------- JSON-LD ---------- */

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${formattedCategory} News`,
    description: `Latest U.S. ${formattedCategory} news and analysis from Wiresavvy.`,
    url: `${SITE_URL}/${normalizedCategory}`,
    numberOfItems: sortedCategory.length,
    hasPart: sortedCategory.slice(0, 10).map((article) => ({
      "@type": "NewsArticle",
      headline: article.title,
      url: `${SITE_URL}${getArticleUrl(article)}`,
      datePublished: new Date(article.date).toISOString(),
      image: article.image?.startsWith("http")
        ? article.image
        : `${SITE_URL}${article.image}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: formattedCategory,
        item: `${SITE_URL}/${normalizedCategory}`,
      },
    ],
  };

  const CATEGORY_DESCRIPTIONS = {
    business:
      "Wiresavvy Business News covers U.S. companies, corporate strategy, leadership, and the forces shaping the modern economy.",

    travel:
      "Wiresavvy Travel News reports on airlines, tourism, policy changes, and trends shaping how Americans move and explore.",

    lifestyle:
      "Wiresavvy Lifestyle News explores culture, wellness, design, and everyday trends shaping modern American life.",

    fashion:
      "Wiresavvy Fashion News covers red carpet moments, designers, style trends, and the personalities shaping fashion today.",

    law:
      "Wiresavvy Law News delivers in-depth coverage of courts, legal battles, government enforcement, and constitutional issues.",

    finance:
      "Wiresavvy Finance News tracks markets, banking, economic policy, and risks impacting finance of investors and consumers.",

    investigation:
      "Wiresavvy Investigation News is a dedicated investigation news section featuring original investigation reporting, accountability journalism, and in-depth investigation stories examining power, corruption, and public policy across the United States.",

    world:
      "Wiresavvy World News covers major international events, global affairs, culture, diplomacy, and stories shaping the world.",
  };

  return (
    <ArticleLayout>
      {/* JSON-LD */}
      <script
        id="category-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />

      <script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <div className="max-w-7xl mx-auto text-black">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1">

            {/* BREADCRUMB */}
            <div className="text-sm text-zinc-600 mb-3">
              <Link
                href="/"
                title="WireSavvy Home"
                className="hover:text-red-500"
              >
                Home
              </Link>

              <span className="mx-2">›</span>

              <span className="uppercase text-red-500 font-semibold">
                {formattedCategory}
              </span>
            </div>

            {/* CATEGORY TITLE */}
            <h1 className="text-3xl font-bold uppercase text-red-500 mb-3">
              {formattedCategory} News — Wiresavvy
            </h1>

            {/* CATEGORY DESCRIPTION */}
            <p className="text-zinc-700 mb-8 max-w-4xl">
              {CATEGORY_DESCRIPTIONS[normalizedCategory] ||
                `Read the latest ${formattedCategory} news, analysis, and reporting from Wiresavvy.`}
            </p>

            {/* MAIN 4 ARTICLES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {mainFour.map((article, i) => {
                const author = details.authors.find(
                  (a) => a.id === article.authorId
                );

                return (
                  <Link
                    key={`${article.slug}-${i}`}
                    title={article.title}
                    href={getArticleUrl(article)}
                    className="group block border border-gray-200 transition shadow-sm hover:shadow-lg overflow-hidden"
                  >
                    {/* IMAGE */}
                    <img
                      src={article.image}
                      alt={article.title}
                      title={article.title}
                      className="w-full h-48 mb-3 object-cover"
                      loading="lazy"
                    />

                    {/* TITLE */}
                    <h2 className="text-lg font-semibold px-3 group-hover:text-red-500 leading-tight mb-2">
                      {article.title}
                    </h2>

                    {/* AUTHOR + DATE */}
                    <div className="flex items-center justify-between px-3 text-xs font-semibold uppercase text-red-500 hover:text-black">
                      <span>
                        {author?.name ||
                          article.authorName ||
                          "Unknown Author"}
                      </span>

                      <span className="text-[10px] text-zinc-600 normal-case">
                        {article.date}
                      </span>
                    </div>

                    {/* EXCERPT */}
                    <p className="px-3 mt-3 mb-4 text-sm text-zinc-700 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full lg:w-[300px]">
            <div className="border border-gray-200 p-5">
              <h2 className="text-lg font-bold uppercase text-red-500 mb-5">
                Popular Posts
              </h2>

              <ul className="flex flex-col gap-5">
                {popularPosts.map((p, i) => {
                  const pAuthor = details.authors.find(
                    (a) => a.id === p.authorId
                  );

                  return (
                    <li key={`${p.slug}-${i}`} className="list-none">
                      <Link
                        href={getArticleUrl(p)}
                        title={p.title}
                        className="block group"
                      >
                        {/* IMAGE */}
                        <img
                          src={p.image}
                          alt={p.title}
                          title={p.title}
                          className="w-full h-32 mb-3 object-cover shadow-md"
                          loading="lazy"
                        />

                        {/* TITLE */}
                        <p className="text-sm font-semibold group-hover:text-red-500 leading-snug mb-2">
                          {p.title}
                        </p>

                        {/* AUTHOR + DATE */}
                        <div className="flex items-center justify-between text-xs font-semibold uppercase text-red-500 hover:text-black mb-2">
                          <span>
                            {pAuthor?.name ||
                              p.authorName ||
                              "Unknown Author"}
                          </span>

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