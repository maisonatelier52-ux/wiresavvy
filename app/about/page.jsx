import Script from "next/script";
import Header from "../components/AboutHeader";
import Footer from "../components/Footer";

const SITE_URL = "https://wiresavvy.com";

export const metadata = {
  title: "About Us — Wiresavvy",
  description:
    "Learn about Wiresavvy, a modern US digital news platform delivering sharp, factual, and timely journalism across Business, Finance, Law, Lifestyle, Travel, and Investigative reporting.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Wiresavvy",
    description:
      "Discover the mission and vision behind Wiresavvy — an independent US digital news platform.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/about.webp`,
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
    images: [`${SITE_URL}/about.webp`],
  },
};

export default function AboutPage() {

  /* ---------- JSON-LD ---------- */

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "Wiresavvy",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "sameAs": [
      "https://twitter.com/wiresavvy",
      "https://www.facebook.com/wiresavvy",
      "https://www.instagram.com/wiresavvy"
    ],
    "publishingPrinciples": `${SITE_URL}/about`,
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    }
  };

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Wiresavvy",
    "url": `${SITE_URL}/about`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Wiresavvy",
      "url": SITE_URL
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
        "item": `${SITE_URL}/about`
      }
    ]
  };

  return (
    <>
      {/* ✅ STRUCTURED DATA */}
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Script
        id="aboutpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
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
            <strong className="text-2xl"><em>Wiresavvy</em></strong> is a modern US digital news platform delivering sharp, factual, and timely coverage across Business, Travel, Lifestyle & Health, Law, Finance, and Investigative journalism. Our mission is simple: bring clarity to a world of noise.
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