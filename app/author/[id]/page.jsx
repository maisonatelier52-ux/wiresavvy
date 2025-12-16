import Script from "next/script";
import ArticleLayout from "@/app/components/ArticleLayout";
import details from "../../../data/details.json";
import { notFound } from "next/navigation";
import Link from "next/link";

const SITE_URL = "https://wiresavvy.com";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const author = details.authors.find(a => a.id.toString() === id);
  if (!author) {
    return {
      title: "Author Not Found — Wiresavvy",
      description: "This author profile does not exist on Wiresavvy.",
    };
  }

  return {
    title: `${author.name} — Author at Wiresavvy`,
    description:
      author.bio ||
      `Read articles and investigative reports written by ${author.name} on Wiresavvy.`,
    alternates: {
      canonical: `${SITE_URL}/author/${id}`,
    },
    openGraph: {
      title: `${author.name} — Wiresavvy Journalist`,
      description: author.bio,
      url: `${SITE_URL}/author/${id}`,
      type: "profile",
      images: [
        {
          url: author.photo
            ? `${SITE_URL}${author.photo}`
            : `${SITE_URL}/default-author.webp`,
          width: 600,
          height: 600,
          alt: author.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} — Wiresavvy`,
      description: author.bio,
      images: [
        author.photo
          ? `${SITE_URL}${author.photo}`
          : `${SITE_URL}/default-author.webp`,
      ],
    },
  };
}

export default async function AuthorPage({ params }) {
  const { id } = await params;

  const author = details.authors.find(a => a.id.toString() === id);
  if (!author){
    return (
      <ArticleLayout>
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-red-500">
            Author  Not found.
          </h1>
        </div>
      </ArticleLayout>
    );
  }
  const authorArticles = details.articles.filter(
    a => a.authorId.toString() === id
  );

  /* ---------- JSON-LD ---------- */

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "url": `${SITE_URL}/author/${id}`,
    "image": author.photo
      ? `${SITE_URL}${author.photo}`
      : `${SITE_URL}/default-author.webp`,
    "description": author.bio,
    "jobTitle": "Journalist",
    "worksFor": {
      "@type": "NewsMediaOrganization",
      "name": "Wiresavvy",
      "url": SITE_URL,
    },
    "sameAs": [
      author.twitter,
      author.facebook,
      author.instagram,
    ].filter(Boolean),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Authors",
        "item": `${SITE_URL}/author`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": author.name,
        "item": `${SITE_URL}/author/${id}`,
      },
    ],
  };

  return (
    <ArticleLayout>

      {/* ✅ Structured Data */}
      <Script
        id="author-person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Script
        id="author-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ===== UI ===== */}
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* AUTHOR HEADER */}
        <div className="flex gap-6 items-start">
          <img
            src={author.photo || "/default-author.webp"}
            alt={author.name}
            className="w-32 h-32 object-cover rounded-full shadow-md"
          />

          <div>
            <h1 className="text-3xl font-bold">{author.name}</h1>
            <p className="text-gray-700 mt-3 max-w-xl">
              {author.bio}
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${author.name} on Twitter`}
                  className="p-2 rounded-sm bg-zinc-200 hover:bg-[#1DA1F2] hover:text-white transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 5.92c-.64.28-1.32.47-2.04.55.73-.44 1.28-1.14 1.54-1.97-.68.4-1.44.7-2.24.86C18.7 4.6 17.7 4 16.56 4c-1.86 0-3.37 1.79-2.95 3.6C10.7 7.3 8.07 6.1 6.15 4.1c-.92 1.58-.28 3.67 1.14 4.72-.56-.02-1.08-.17-1.54-.42v.04c0 1.74 1.23 3.19 2.86 3.52-.5.14-1.02.17-1.56.06.44 1.36 1.72 2.35 3.24 2.38C8.9 18.2 6.9 18.8 4.8 18.6c2 1.28 4.38 2.04 6.94 2.04 8.32 0 12.86-6.9 12.86-12.86v-.59c.88-.62 1.62-1.4 2.22-2.29-.8.36-1.66.6-2.56.71z" />
                  </svg>
                </a>
              )}

              {author.facebook && (
                <a
                  href={author.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${author.name} on Facebook`}
                  className="p-2 rounded-sm bg-zinc-200 hover:bg-[#1877F2] hover:text-white transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.95v-7.04H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.53v1.85h2.74l-.44 2.91h-2.3v7.04C18.34 21.2 22 17.06 22 12.07z" />
                  </svg>
                </a>
              )}

              {author.instagram && (
                <a
                  href={author.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${author.name} on Instagram`}
                  className="p-2 rounded-sm bg-zinc-200 hover:bg-[#E1306C] hover:text-white transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 11.37a4 4 0 1 1-4.63-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5h.01"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ARTICLES */}
        <h2 className="mt-12 text-2xl font-bold text-red-500 uppercase">
          Articles by {author.name}
        </h2>

        <div className="mt-6 space-y-6">
          {authorArticles.length === 0 && (
            <p className="text-gray-500">
              No articles written by this author yet.
            </p>
          )}

          {authorArticles.map(article => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="flex gap-4 group"
            >
              <img
                src={article.image}
                alt={article.title}
                title={article.title}
                className="w-32 h-24 object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg group-hover:text-red-500">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ArticleLayout>
  );
}