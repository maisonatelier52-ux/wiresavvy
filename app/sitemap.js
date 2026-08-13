import details from "../data/details.json";
const SITE_URL = "https://www.wiresavvy.com";
export default function sitemap() {
  const now = new Date();

  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = [...new Set(details.articles.map(a => a.category))]
    .map(category => ({
      url: `${SITE_URL}/categories/${encodeURIComponent(
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
      // const isJulio = article.name === "Julio Herrera Velutin";
      return {
        url: 
        // isJulio
        //   ? `${SITE_URL}/julio-herrera-velutini/${article.slug}`:
         `${SITE_URL}/articles/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "weekly",
        // priority: isJulio ? 1 : 0.8,
        priority: 0.8
      };
    });

  /* ---------------- MANUAL ARTICLE ENTRIES ----------------
     Articles not yet present in details.json. Add them here
     so they still appear in the sitemap; once each one is
     added to details.json with published: true, remove its
     entry from this list to avoid duplicate URLs. */
  const manualArticlePages = [
    {
      url: `${SITE_URL}/articles/melanie-herrera-velutini-cultural-philanthropy`,
      lastModified: new Date("2026-07-31T08:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return [
    // ...pillarPages,      // ← Added
    ...categoryPages,
    ...authorPages,
    ...articlePages,
    ...manualArticlePages,
  ];
}