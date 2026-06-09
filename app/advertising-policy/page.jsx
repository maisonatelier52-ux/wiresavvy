import Link from "next/link";
import ArticleLayout from "../components/ArticleLayout";

const SITE_URL = "https://www.wiresavvy.com";
const PAGE_URL = `${SITE_URL}/advertising-policy`;

export const metadata = {
  title: "Advertising Policy | Wiresavvy Editorial Standards",
  description:
    "Read Wiresavvy's Advertising Policy explaining editorial independence, sponsored content disclosures, affiliate partnerships, advertising standards, and our commitment to reader trust.",
  keywords: [
    "Wiresavvy advertising policy",
    "advertising standards",
    "sponsored content policy",
    "affiliate disclosure",
    "editorial independence",
    "native advertising",
    "journalism ethics",
    "advertising transparency",
    "news advertising policy",
    "media advertising guidelines",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Advertising Policy | Wiresavvy Editorial Standards",
    description:
      "Learn how Wiresavvy separates advertising from editorial content while maintaining transparency and reader trust.",
    url: PAGE_URL,
    siteName: "Wiresavvy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Wiresavvy Advertising Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertising Policy | Wiresavvy Editorial Standards",
    description:
      "Understand Wiresavvy's advertising standards, sponsored content policies, and editorial independence.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const policies = [
  {
    label: "Editorial Firewall",
    heading: "Our Editorial Team Works Independently",
    body: "The stories, investigations, and analysis published by Wiresavvy are selected and produced by our newsroom. Advertisers do not determine what we cover, how we frame our reporting, or the positions expressed in our editorial content.",
  },
  {
    label: "Sponsored Content",
    heading: "Clearly Labelled Every Time",
    body: "We may occasionally work with organisations on sponsored articles, campaigns, or special projects. Whenever content is sponsored, it will be clearly identified so readers can recognise it at a glance — no ambiguity, no fine print.",
  },
  {
    label: "Standards",
    heading: "Advertising Standards",
    body: "We aim to work with advertisers whose products, services, and values are relevant and appropriate for our audience. We reserve the right to decline, remove, or reject advertising that we consider misleading, deceptive, offensive, or inconsistent with our editorial standards.",
  },
  {
    label: "Affiliate Links",
    heading: "Affiliate Partnerships",
    body: "Some content may include affiliate links. If readers make a purchase through these links, Wiresavvy may receive a commission. These partnerships help support our publication and do not influence our editorial decisions or coverage.",
  },
  {
    label: "Trust",
    heading: "Accuracy and Trust",
    body: "Advertising relationships do not guarantee positive coverage, reviews, or editorial mentions. Our primary obligation is to our readers, and we work to maintain the trust they place in our reporting.",
  },
  {
    label: "Updates",
    heading: "Changes to This Policy",
    body: "As our business and advertising practices evolve, this policy may be updated from time to time. Any changes will be reflected on this page with a revised effective date.",
  },
];

export default function AdvertisingPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Advertising Policy",
        description:
          "Wiresavvy's advertising policy covering sponsored content, affiliate partnerships, editorial independence, and advertising standards.",
        inLanguage: "en-US",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${PAGE_URL}#policy`,
        name: "Wiresavvy Advertising Policy",
        url: PAGE_URL,
        description:
          "Policy describing Wiresavvy's advertising practices, editorial firewall, affiliate relationships, and sponsored content disclosures.",
        creator: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        dateModified: "2026-06-09",
        inLanguage: "en-US",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Wiresavvy",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "NewsMediaOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: "Wiresavvy",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        publishingPrinciples: `${SITE_URL}/editorial-policy`,
        ethicsPolicy: `${SITE_URL}/editorial-policy`,
        correctionsPolicy: `${SITE_URL}/corrections-policy`,
        ownershipFundingInfo: `${SITE_URL}/ownership-funding`,
      },
      {
        "@type": "ItemList",
        name: "Advertising Policy Principles",
        itemListElement: policies.map((policy, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: policy.heading,
          description: policy.body,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Advertising Policy",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <ArticleLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="min-h-screen bg-[#f5f3ef] text-[#0d0f14] font-['Georgia',serif]">
        {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />

      {/* Hero — newspaper column layout */}
      <section className="bg-[#0d0f14] text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans mb-3">
              Editorial Standards
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Advertising
              <br />
              Policy
            </h1>
          </div>
          <div>
            <p className="text-white/55 font-sans text-base leading-relaxed">
              Advertising helps sustain Wiresavvy's independent journalism.
              This page explains precisely how advertising works here — and
              where the line is drawn between commercial and editorial.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment callout */}
      <div className="border-b border-black/10 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center gap-4">
          <div className="w-1 h-10 bg-red-600 shrink-0 rounded-full" />
          <p className="font-sans text-sm text-black/70 leading-relaxed">
            <strong className="text-black">Our promise:</strong> Wiresavvy
            wants to be a platform where readers follow breaking news and
            in-depth investigations with full confidence in what they are
            reading. Transparency, editorial integrity, and reader trust will
            always guide the way we approach advertising.
          </p>
        </div>
      </div>

      {/* Policy grid */}
      <main className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-black/8 p-7 hover:shadow-md transition-shadow group"
            >
              <span className="inline-block text-red-600 font-sans text-xs uppercase tracking-widest mb-3">
                {p.label}
              </span>
              <h2 className="text-lg font-bold tracking-tight mb-3 group-hover:text-red-700 transition-colors">
                {p.heading}
              </h2>
              <p className="text-black/65 font-sans text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Contact footer */}
        <div className="mt-14 border-t border-black/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-black/50 font-sans text-sm">
            Advertising enquiries:{" "}
            <Link href="mailto:advertising@wiresavvy.com" className="text-red-600 hover:underline">
              advertising@wiresavvy.com
            </Link>
          </p>
          <p className="text-black/30 font-sans text-xs">Last updated: June 2026</p>
        </div>
      </main>
    </div>
    </ArticleLayout>
  );
}