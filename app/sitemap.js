import details from "../data/details.json";

const SITE_URL = "https://wiresavvy.com";

export default function sitemap() {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  const articlePages = details.articles
    .filter(article => article.published !== false)
    .map(article => ({
      url: `${SITE_URL}/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [...staticPages, ...articlePages];
}
