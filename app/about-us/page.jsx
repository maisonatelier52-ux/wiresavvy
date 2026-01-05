import Header from "../components/AboutHeader";
import Footer from "../components/Footer";

const SITE_URL = "https://www.wiresavvy.com";

export const metadata = {
  title: "About Wiresavvy — Independent US Digital News Platform",
  description:
    "Learn about Wiresavvy, an independent US digital news platform delivering factual reporting across business, finance, law, lifestyle, travel, and investigations.",  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: "About Wiresavvy — Independent US Digital News Platform",
    description:
      "Discover the mission and vision behind Wiresavvy — an independent US digital news platform.",
    url: `${SITE_URL}/about-us`,
    type: "website",
    siteName: "Wiresavvy",
    images: [
      {
        url: `${SITE_URL}/wiresavvy.webp`,
        width: 1200,
        height: 630,
        alt: "About Wiresavvy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Wiresavvy",
    description:
      "Learn who we are and what drives our mission to deliver factual US news.",
    images: [`${SITE_URL}/wiresavvy.webp`],
  },
};

export default function AboutPage() {

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/about-us#webpage`,
    "url": `${SITE_URL}/about-us`,
    "name": "About Wiresavvy",
    "description": metadata.description,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Wiresavvy",
      "url": SITE_URL
    },
    "about": {
      "@type": "NewsMediaOrganization",
      "name": "Wiresavvy"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${SITE_URL}/about-us`
      }
    ]
  };

  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      <div className="min-h-screen bg-gray-50 text-gray-900">

        {/* HERO */}
        <section className="relative w-full h-[550px] overflow-hidden rounded-b-3xl shadow-md">
          <img
            src="/about.webp"
            alt="Wiresavvy newsroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Truthful reporting is the foundation<br />of an informed society.
            </h1>
          </div>
        </section>

        {/* MISSION */}
        <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <p className="text-lg leading-relaxed py-10">
            <strong className="text-2xl"><em>At Wiresavvy,</em></strong> we believe truthful journalism forms the foundation of an informed society. Our reporting is built on accuracy, independence, and accountability to help readers understand complex issues shaping the United States.
          </p>
          <img
            src="/write.webp"
            alt="Wiresavvy editorial mission"
            className="rounded-2xl shadow-lg object-cover w-full h-72"
          />
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center px-16 py-48">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Stay Ahead of the News
          </h2>
          <p className="text-lg">
            Follow Wiresavvy for fast, accurate, and insightful reporting across the United States.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}