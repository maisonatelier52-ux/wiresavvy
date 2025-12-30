import Script from "next/script";
import RelatedArticles from "@/app/components/RelatedArticles";
import details from "../../../data/details.json";
import ArticleLayout from "../../components/ArticleLayout";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://www.wiresavvy.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = details.articles.find(a => a.slug === slug);

  if (!article) {
    return {
      title: "Article not found | Wiresavvy",
      description: "This article does not exist.",
      robots: "noindex",
    };
  }

  const imageUrl = `${SITE_URL}${article.image}`;

  return {
    title: `${article.title}`,
    description: article.excerpt,
    alternates: {
      canonical: `${SITE_URL}/articles/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/articles/${slug}`,
      type: "article",
      siteName: "Wiresavvy",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  // FIND ARTICLE
  const article = details.articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <ArticleLayout>
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-red-500">Article not found</h1>
        </div>
      </ArticleLayout>
    );
  }

  const author = details.authors.find(a => a.id === article.authorId);

  // RELATED ARTICLES
  const related = details.articles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 4);

  // POPULAR POSTS — exclude related articles
  const relatedSlugs = related.map(a => a.slug);
  const popularPosts = details.articles
    .filter(a => a.category !== article.category && a.slug !== article.slug && !relatedSlugs.includes(a.slug))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(3, 9);

  // FORMAT ARTICLE DATE
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  /* ---------- JSON-LD ---------- */

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/articles/${article.slug}`,
    },
    "headline": article.title,
    "description": article.excerpt,
    "articleSection": article.category,
    "keywords": article.keywords,
    "image": [`${SITE_URL}${article.image}`],
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": author?.name || "Wiresavvy Staff",
      "url": author
        ? `${SITE_URL}/author/${author.id}`
        : undefined,
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Wiresavvy",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
      },
    },
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
        "name": article.category,
        "item": `${SITE_URL}/categories/${article.category}`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `${SITE_URL}/articles/${article.slug}`,
      },
    ],
  };

  return (
    <ArticleLayout>

      <script
        id="article-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
      />

      <script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }}
      />

      {/* BREADCRUMB SECTION */}
      <div className="text-sm text-zinc-600 mb-3">
        <Link href="/" title="WireSavvy Home" className="hover:text-red-500">Home</Link>
        <span className="mx-2">›</span>
        <span className="uppercase text-red-500 font-semibold">
          {article.category}
        </span>
      </div>

      <div className="max-w-6xl mx-auto pt-10 text-black px-4">

        {/* HERO SECTION */}
        {article.image ? (
          <section className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden flex items-end">
            <Image
              src={article.image}
              alt={article.title}
              title={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 w-full p-6 md:p-8">
              <Link 
                href={`/categories/${article.category}`} 
                title={article.category}
                className="text-zinc-300 hover:text-white underline underline-offset-4"
              >
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wide mb-2">
                  {article.category}
                </div>
              </Link>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {article.title}
              </h1>

              {/* AUTHOR + DATE */}
              <div className="flex gap-6 text-xs sm:text-sm text-zinc-300 uppercase font-medium">
                {/* AUTHOR NAME FROM JSON */}
                <Link
                  href={`/author/${author.slug}`}
                  title={`Articles by ${author.name}`}
                  className="hover:text-white underline underline-offset-4"
                >
                  {author?.name || "Unknown Author"}
                </Link>
                <span>{formattedDate}</span>
              </div>
            </div>
          </section>
        ) : (
          <div className="w-full h-[250px] sm:h-[320px] md:h-[420px] border bg-gray-200 flex items-center justify-center text-xs uppercase">
            NO IMAGE AVAILABLE
          </div>
        )}

        {/* MAIN CONTENT ROW */}
        <div className="flex flex-col lg:flex-row justify-between mt-12 items-start gap-10">

          {/* LEFT SOCIAL ICONS */}
              <div className="flex lg:flex-col gap-4 items-center lg:w-[40px] w-full lg:sticky top-16 lg:order-1 order-1 justify-center">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.92c-.64.28-1.32.47-2.04.55.73-.44 1.28-1.14 1.54-1.97-.68.4-1.44.7-2.24.86C18.7 4.6 17.7 4 16.56 4c-1.86 0-3.37 1.79-2.95 3.6C10.7 7.3 8.07 6.1 6.15 4.1c-.92 1.58-.28 3.67 1.14 4.72-.56-.02-1.08-.17-1.54-.42v.04c0 1.74 1.23 3.19 2.86 3.52-.5.14-1.02.17-1.56.06.44 1.36 1.72 2.35 3.24 2.38C8.9 18.2 6.9 18.8 4.8 18.6c2 1.28 4.38 2.04 6.94 2.04 8.32 0 12.86-6.9 12.86-12.86v-.59c.88-.62 1.62-1.4 2.22-2.29-.8.36-1.66.6-2.56.71z" />
                </svg>
              </a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.95v-7.04H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.53v1.85h2.74l-.44 2.91h-2.3v7.04C18.34 21.2 22 17.06 22 12.07z" />
                </svg>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 11.37a4 4 0 1 1-4.63-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#FF0000] hover:text-white transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

          {/* ARTICLE CONTENT */}
          <div
            className="prose max-w-none text-lg md:text-md pb-16 w-full lg:w-[650px] lg:order-2

              /* Heading spacing */
              [&_h1]:pt-6 [&_h1]:pb-3 
              [&_h2]:pt-5 [&_h2]:pb-2 
              [&_h3]:pt-4 [&_h3]:pb-2
              [&_h4]:pt-3 [&_h4]:pb-1

              /* Force strong, readable headings */
              [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:leading-snug
              [&_h3]:font-bold [&_h3]:text-xl [&_h3]:leading-snug
              [&_h4]:font-bold [&_h4]:text-md [&_h4]:leading-snug

              /* Paragraph spacing */
              [&_p]:pt-4 [&_p]:pb-2

              /* LIST */
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
              [&_li]:my-2 [&_li]:leading-relaxed

            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {/* RIGHT POPULAR POSTS */}
            <div className="lg:w-[300px] w-full border border-gray-200 p-5 h-fit lg:sticky top-16 lg:order-3 order-3">
            <h2 className="text-lg font-bold uppercase text-red-500 mb-5">Popular Posts</h2>

            <ul className="flex flex-col gap-5">
              {popularPosts.map((p, i) => {
                const pAuthor = details.authors.find(a => a.id === p.authorId);

                return (
                  <li key={i} className="list-none">
                    <Link href={`/articles/${p.slug}`} title={p.title} className="flex gap-4 items-start group">

                      <img
                        src={p.image}
                        alt={p.title}
                        title={p.title}
                        className="w-20 h-20 object-cover shadow-md shrink-0"
                        loading="lazy"
                      />

                      <div className="flex flex-col">
                        <p className="text-sm font-semibold group-hover:text-red-500">
                          {p.title}
                        </p>

                        <span className="text-xs font-bold uppercase text-red-500 hover:text-black">
                          {pAuthor?.name || "Unknown Author"}
                        </span>

                        <span className="text-[11px] uppercase text-zinc-600 mt-1">
                          {p.date}
                        </span>
                      </div>

                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        <RelatedArticles articles={related} />

      </div>

    </ArticleLayout>
  );
}
