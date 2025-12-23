import Header from "./components/Header";
import Footer from "./components/Footer";
import MoreHeadlines from "./components/MoreHeadlines";
import FeaturedNews from "./components/FeaturedNews";
import WeeklyPopular from "./components/WeeklyPopular";
import MoreNews from "./components/MoreNews";
import InsightAnalysis from "./components/InsightAnalysis";
import details from "../data/details.json";
import AdBanner from "./components/AdBanner";
import MostViewed from "./components/Mostviewed";

const SITE_URL = "https://wiresavvy.com";

export const metadata = {
  title: "Wiresavvy — Independent U.S. News, Business & Investigations",
  description:
    "Wiresavvy delivers fast, factual U.S. news across business, law, finance, lifestyle, travel, and investigations. Breaking headlines and trusted analysis.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "en-US": SITE_URL,
    },
  },
  openGraph: {
    title: "Wiresavvy — Latest U.S. News & Investigations",
    description:
      "Breaking U.S. news, in-depth investigations, and expert reporting across business, finance, law, and more.",
    url: SITE_URL,
    type: "website",
    siteName: "Wiresavvy",
    images: [
      {
        url: `${SITE_URL}/wiresavvy.webp`,
        width: 1200,
        height: 630,
        alt: "Wiresavvy U.S. News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiresavvy — Latest U.S. News",
    description:
      "Fast, factual U.S. news with in-depth reporting and investigations.",
    images: [`${SITE_URL}/wiresavvy.webp`],
  },
};

export default function Home() {

  // ---------- BASE DATA ----------
  const publishedArticles = details.articles
    .filter(a => a.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

    const featuredArticles = publishedArticles
    .filter(a => a.category === "Business")
    .slice(0, 3);

  const usedSlugs = new Set(featuredArticles.map(a => a.slug));

  const pickOneByCategory = (category) => {
    const article = publishedArticles.find(
      a => a.category === category && !usedSlugs.has(a.slug)
    );
    if (article) usedSlugs.add(article.slug);
    return article;
  };

  const moreNewsArticles = [
    pickOneByCategory("Business"),
    pickOneByCategory("Lifestyle"),
    pickOneByCategory("Travel"),
    pickOneByCategory("Law"),
    pickOneByCategory("Finance"),
    pickOneByCategory("Investigation"),
  ].filter(Boolean);

  const weeklyPopular = publishedArticles
    .filter(a => !usedSlugs.has(a.slug))
    .slice(0, 6);

  weeklyPopular.forEach(a => usedSlugs.add(a.slug));

  const insightArticles = publishedArticles
    .filter(a => !usedSlugs.has(a.slug))
    .slice(0, 6);

  insightArticles.forEach(a => usedSlugs.add(a.slug));

  const moreHeadlines = publishedArticles.filter(
    a => !usedSlugs.has(a.slug)
  );

  /* ---------- JSON-LD (Homepage) ---------- */

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wiresavvy",
    "url": SITE_URL,
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "Wiresavvy",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
      },
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen font-sans">

      <script
        id="website-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Header />
      {/* ===== SEO INTRO ===== */}
      <section className="sr-only px-4 py-6">
        <h1 className="text-2xl font-bold mb-3">
          Wiresavvy — Independent U.S. News, Business & Investigations
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Wiresavvy is an independent digital news platform delivering the latest
          U.S. news with a strong focus on depth, accuracy, and responsible
          reporting. Our newsroom covers business, finance, law, politics,
          technology, and public policy, offering readers clear context behind
          every headline.
        </p>
        <h2 className="text-xl font-semibold mt-6">
          Independent Journalism & Investigative Reporting You Can Trust
        </h2>

        <p className="text-gray-700 leading-relaxed mt-3">
          At Wiresavvy, in-depth reporting goes beyond breaking news. We prioritize
          verified facts, expert insights, and investigative journalism to help
          readers understand not just what happened, but why it matters. From
          market-moving developments to national issues shaping everyday life,
          Wiresavvy provides news you can trust.
        </p>
      </section>

      <main className="mx-auto max-w-6xl">

        {/* ===== RESPONSIVE HOME GRID (SINGLE RENDER) ===== */}
        <div className="grid gap-6 lg:grid-cols-4">

          {/* LEFT SIDEBAR */}
          <aside className="order-2 lg:order-1 lg:col-span-1">
            <MoreHeadlines articles={moreHeadlines} />
          </aside>

          {/* MAIN CONTENT */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <FeaturedNews articles={featuredArticles} />
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="order-3 lg:order-3 lg:col-span-1">
            <WeeklyPopular articles={weeklyPopular} />
          </aside>

        </div>

        <AdBanner />

        <section className="border-t-2 border-gray-200 pt-8">
          <MoreNews articles={moreNewsArticles} />
        </section>

        <section className="border-t-2 border-gray-200 pt-8">
          <InsightAnalysis articles={insightArticles} />
        </section>

        <section className="border-t-2 border-gray-200">
          <MostViewed />
        </section>

      </main>

      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-black">
        <Footer />
      </div>
    </div>
  );
}