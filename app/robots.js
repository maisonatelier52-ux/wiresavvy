export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.wiresavvy.com/sitemap.xml",
    host: "https://www.wiresavvy.com",
  };
}
