export const metadata = {
  title: "Wiresavvy — U.S. News on Business, Law, Finance, Lifestyle, Travel & Investigations",
  description:
    "Wiresavvy delivers sharp, fast, and factual U.S. news across Business, Travel, Lifestyle & Health, Law, Finance, and Investigations. Stay informed with breaking headlines, featured stories, political insights, and in-depth analysis.",
  keywords: [
    "US news",
    "latest news",
    "breaking news",
    "business news",
    "law news",
    "finance news",
    "investigation news",
    "travel news",
    "lifestyle news",
    "Wiresavvy",
    "American news platform",
  ],
  openGraph: {
    title:
      "Wiresavvy — Latest U.S. News, Breaking Headlines & In-Depth Reporting",
    description:
      "Stay updated with the latest U.S. news on business, finance, law, lifestyle, investigations, and politics — curated and reported by Wiresavvy.",
    url: "https://wiresavvy.com",
    type: "website",
    images: [
      {
        url: "/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Wiresavvy — Latest U.S. News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Wiresavvy — Latest U.S. News Across Business, Law, Finance, Lifestyle & More",
    description:
      "Real-time reporting, investigative journalism, and curated coverage of U.S. news — only on Wiresavvy.",
    images: ["/og-home.webp"],
  },
  alternates: {
    canonical: "https://wiresavvy.com",
  },
};

import Link from "next/link";
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

export default function Home() {

  const featuredNews = details.articles.filter( (article) => article.category === "Business" && article.published !== false);

  const sortedBusiness = [...featuredNews].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const featuredArticles = sortedBusiness.slice(0, 3);
  const featuredSlugs = new Set(featuredArticles.map(a => a.slug));

  const moreHeadlines = details.articles.filter((article) => article.published !== false && !featuredSlugs.has(article.slug));
  const weeklyPopular = details.articles
    .filter(a => a.published !== false && !featuredSlugs.has(a.slug))
    .slice(0, 7)
    .reverse();
  
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="mx-auto max-w-6xl">

        {/* ===== SMALL SCREENS: STACKING ORDER ===== */}
        <div className="flex flex-col gap-6 lg:hidden">
          <FeaturedNews/>
          <aside>
            <MoreHeadlines articles={moreHeadlines} />
          </aside>
          <aside>
            <WeeklyPopular articles={weeklyPopular} />
          </aside>
        </div>

        {/* ===== LARGE SCREENS: KEEP ORIGINAL 3-COLUMN APPEARANCE ===== */}
        <div className="hidden lg:grid gap-6 grid-cols-4">
          <aside className="col-span-1">
            <MoreHeadlines articles={moreHeadlines} />
          </aside>

          <FeaturedNews articles={featuredArticles}/>

          <aside className="col-span-1">
            <WeeklyPopular articles={weeklyPopular} />
          </aside>
        </div>

        {/* ===== ✅ AD BANNER ABOVE POLITICAL SECTION ===== */}
        <AdBanner />
        {/* ============================================= */}

        {/* ===== RESPONSIVE MORE POLITICAL NEWS SECTION ===== */}
        <section className="border-t-2 border-gray-200 pt-8">
          <MoreNews />
        </section>

        <section className="border-t-2 border-gray-200 pt-8">
          <InsightAnalysis />
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
