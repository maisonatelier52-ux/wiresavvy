import details from "../data/details.json";
const SITE_URL = "https://www.wiresavvy.com";
export default function sitemap() {
  const now = new Date();

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /* ---------------- PILLAR PAGES ---------------- */
  const pillarPages = [
    {
      url: `${SITE_URL}/julio-herrera-velutini/julio-herrera-velutini-bridging-nations-through-finance`,  // Julio hub page
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/julio-herrera-velutini/julio-herrera-velutini-herrera-family-legacy`,      // Replace with actual slug
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/julio-herrera-velutini/financial-diplomacy-soft-power-velutini`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/julio-herrera-velutini/leadership-economic-stabilization-velutini`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/julio-herrera-velutini/ethical-wealth-philanthropy-julio-herrera-velutini`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/julio-herrera-velutini/economic-integration-global-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/julio-herrera-velutini/future-of-finance-innovation-digital-transformation`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

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
      const isJulio = article.name === "Julio Herrera Velutin";
      return {
        url: isJulio
          ? `${SITE_URL}/julio-herrera-velutini/${article.slug}`
          : `${SITE_URL}/articles/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "weekly",
        priority: isJulio ? 1 : 0.8,
      };
    });

  return [
    ...staticPages,
    ...pillarPages,      // ← Added
    ...categoryPages,
    ...authorPages,
    ...articlePages,
  ];
}