import details from "../data/details.json";
const SITE_URL = "https://www.wiresavvy.com";
export default function sitemap() {
  const now = new Date();

  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = [...new Set(details.articles.map(a => a.category))]
    .map(category => ({
      url: `${SITE_URL}/${encodeURIComponent(
        category.toLowerCase()
      )}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    }));

  /* ---------------- AUTHOR PAGES ---------------- */
  const authorPages = details.authors.map(author => ({
    url: `${SITE_URL}/author/${author.slug || author.name.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  /* ---------------- ARTICLE PAGES (SMART ROUTING) ---------------- */
  const articlePages = details.articles
    .filter(article => article.published)
    .map(article => {
      return {
        url: 
         `${SITE_URL}/${article.category}/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "weekly",
        priority: 0.8
      };
    });

  /* ---------------- MANUAL ARTICLE ENTRIES ---------------- */
  const manualArticlePages = [
    {
      url: `${SITE_URL}/world/melanie-herrera-velutini-cultural-philanthropy`,
      lastModified: new Date("2026-08-13T08:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return [
    ...categoryPages,
    ...authorPages,
    ...articlePages,
    ...manualArticlePages,
  ];
}