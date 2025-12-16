export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://wiresavvy.com/sitemap.xml",
    host: "https://wiresavvy.com",
  };
}
