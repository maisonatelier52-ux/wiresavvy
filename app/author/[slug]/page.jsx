import ArticleLayout from "@/app/components/ArticleLayout";
import details from "../../../data/details.json";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://www.wiresavvy.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const author = details.authors.find(a => a.slug === slug);
  const imageUrl = `${SITE_URL}${author.photo}`;

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
      canonical: `${SITE_URL}/author/${author.slug}`,
      languages: {
        "en": `${SITE_URL}/author/${author.slug}`,
        "en-US": `${SITE_URL}/author/${author.slug}`,
      },
    },
    openGraph: {
      title: `${author.name} — Wiresavvy Journalist`,
      description: author.bio,
      url: `${SITE_URL}/author/${author.slug}`,
      type: "profile",
      siteName: "Wiresavvy",
      images: [
        {
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;

  const author = details.authors.find(a => a.slug === slug);

  if (!author) {
    return (
      <ArticleLayout>
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-red-500">
            Author not found
          </h1>
        </div>
      </ArticleLayout>
    );
  }

  const authorArticles = details.articles.filter(
        a => a.authorId === author.id && a.published !== false  
  );

  /* ---------- JSON-LD ---------- */

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "url": `${SITE_URL}/author/${author.slug}`,
    "image": `${SITE_URL}${author.photo}`,
    "description": author.bio,
    "jobTitle": "Journalist",
    "worksFor": {
      "@type": "NewsMediaOrganization",
      "name": "Wiresavvy",
      "url": SITE_URL,
    },
    "sameAs": [
      author.twitter,
      author.quora,
      author.reddit
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
            "item": `${SITE_URL}/author/${author.slug}`,
            },
        ],
    };

  return (
    <ArticleLayout>

      {/* Structured Data */}
      <script
        id="author-person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <script
        id="author-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ===== UI ===== */}
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* AUTHOR HEADER */}
        <div className="flex gap-6 items-start">
          <Image
            src={author.photo}
            alt={`${author.name}, author at Wiresavvy`}
            width={128}
            height={128}
            className="rounded-full shadow-md object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold">
              {author.name}, Author at Wiresavvy
            </h1>
            <p className="mt-2 text-gray-600 max-w-xl">
              {author.name} is a journalist and author at Wiresavvy. {author.bio}
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              {author.twitter && (
                <a
                  href={author.twitter}
                  title={`${author.name} on Twitter`}
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
              {author.reddit && (
                <a
                  href={author.reddit}
                  title={`${author.name} on Reddit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${author.name} on Reddit`}
                  className="p-2 rounded-sm bg-zinc-200 hover:bg-[#FF4500] hover:text-white transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 20c4.418 0 8-2.686 8-6s-3.582-6-8-6-8 2.686-8 6 3.582 6 8 6Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="9" cy="13" r="1" fill="currentColor" />
                    <circle cx="15" cy="13" r="1" fill="currentColor" />
                    <path
                      d="M9.5 15.5c.8.7 1.8 1 2.5 1s1.7-.3 2.5-1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="19" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M14.5 7.5 15.5 4l3 .5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
              {author.quora && (
                <a
                  href={author.quora}
                  title={`${author.name} on Quora`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${author.name} on Quora`}
                  className="p-2 rounded-sm bg-zinc-200 hover:bg-[#B92B27] hover:text-white transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    {/* Q outer circle */}
                    <circle
                      cx="11"
                      cy="11"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    {/* Q tail */}
                    <path
                      d="M14.5 14.5 18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ARTICLES */}
        <h2 className="mt-12 text-2xl font-bold text-red-500 uppercase">
          Articles written by {author.name} at Wiresavvy
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
              title={article.title}
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