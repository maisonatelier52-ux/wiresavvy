import ArticleLayout from "../components/ArticleLayout";

const SITE_URL = "https://www.wiresavvy.com";
const PAGE_URL = `${SITE_URL}/editorial-policy`;

export const metadata = {
  title:
    "Editorial Policy | Wiresavvy Editorial Standards & Journalistic Principles",
  description:
    "Learn about Wiresavvy's editorial policy, including our commitment to accuracy, editorial independence, fact-checking, transparency, corrections, and responsible journalism.",
  keywords: [
    "Wiresavvy editorial policy",
    "editorial standards",
    "journalism ethics",
    "fact checking",
    "news corrections",
    "editorial independence",
    "newsroom policy",
    "responsible journalism",
    "investigative journalism",
    "editorial guidelines",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Editorial Policy | Wiresavvy Editorial Standards & Journalistic Principles",
    description:
      "Discover the editorial principles that guide Wiresavvy's independent journalism, fact-checking, transparency, and accountability.",
    url: PAGE_URL,
    siteName: "Wiresavvy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Wiresavvy Editorial Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Editorial Policy | Wiresavvy Editorial Standards & Journalistic Principles",
    description:
      "Read the editorial principles and standards that guide Wiresavvy's reporting.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const principles = [
  {
    id: "accuracy",
    tag: "Foundation",
    title: "Accuracy First",
    icon: "◆",
    paragraphs: [
      "Names matter. Dates matter. Facts matter.",
      "We verify information before publishing and review details carefully. If a claim cannot be independently confirmed, we say so — clearly and without hedging. We do not present speculation as fact.",
    ],
  },
  {
    id: "independence",
    tag: "Governance",
    title: "Editorial Independence",
    icon: "◎",
    paragraphs: [
      "Coverage is determined by our editors and writers — not by advertisers, brands, or commercial partners.",
      "Sponsored content is clearly identified and kept separate from our independent reporting. No arrangement, however valuable commercially, can direct what our newsroom investigates or publishes.",
    ],
  },
  {
    id: "reporting",
    tag: "Process",
    title: "How We Report",
    icon: "◉",
    paragraphs: [
      "News across business, finance, law, and politics moves fast. Our team follows policy developments, official announcements, court filings, public records, interviews, and firsthand reporting wherever available.",
      "Every story undergoes editorial review before publication. We do not publish first and verify later.",
    ],
  },
  {
    id: "sources",
    tag: "Standards",
    title: "Research and Sources",
    icon: "◈",
    paragraphs: [
      "Our reporting is based on official statements, interviews, public documents, regulatory filings, industry research, and trusted news organisations.",
      "News develops. Stories evolve. We update coverage as new, verified information comes to light — and we tell readers when we do.",
    ],
  },
  {
    id: "fairness",
    tag: "Values",
    title: "Fairness and Representation",
    icon: "◇",
    paragraphs: [
      "The stories we cover affect real people across every region, background, and perspective.",
      "We seek fairness, context, and appropriate representation in all reporting. Where multiple legitimate viewpoints exist, we work to reflect that complexity — not flatten it.",
    ],
  },
  {
    id: "reviews",
    tag: "Commerce",
    title: "Reviews and Recommendations",
    icon: "◌",
    paragraphs: [
      "Where Wiresavvy evaluates products, services, or platforms, assessments are based on research, direct experience, and editorial judgment.",
      "Coverage cannot be purchased. Positive reviews are never guaranteed as part of any commercial arrangement.",
    ],
  },
  {
    id: "corrections",
    tag: "Accountability",
    title: "Corrections",
    icon: "◷",
    paragraphs: [
      "Mistakes happen. Ignoring them is not an option.",
      "When a significant error is identified, we correct it promptly and transparently. Meaningful corrections are noted in the article so readers understand what changed and why.",
    ],
  },
];

export default function EditorialPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Editorial Policy",
        description:
          "Wiresavvy's editorial standards and journalistic principles governing all published content.",
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
        name: "Wiresavvy Editorial Policy",
        url: PAGE_URL,
        description:
          "Editorial standards covering accuracy, independence, fairness, sourcing, corrections, and accountability.",
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
        inLanguage: "en-US",
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
        description:
          "Wiresavvy is an independent digital news publication providing reporting, analysis, and investigative journalism across U.S. news, business, finance, politics, law, and technology.",
        ethicsPolicy: PAGE_URL,
        publishingPrinciples: PAGE_URL,
        sameAs: [
          "https://facebook.com/wiresavvy",
          "https://x.com/wiresavvy",
          "https://www.linkedin.com/company/wiresavvy",
          "https://www.instagram.com/wiresavvy"
        ],
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
            name: "Editorial Policy",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Editorial Principles",
        itemListElement: principles.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          description: item.paragraphs.join(" "),
        })),
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

      <div className="min-h-screen bg-[#f5f3ef] font-['Georgia',serif] text-[#0d0f14]">
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />

      {/* Hero — stark broadsheet style */}
      <section className="bg-[#0d0f14] text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans mb-4">
            Editorial Standards
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Editorial
              <br />
              Policy
            </h1>
            <div>
              <p className="text-white/50 font-sans text-base leading-relaxed">
                Every article begins with a single goal: earn the reader's trust.
                This page sets out the standards that govern everything we publish
                at Wiresavvy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standard intro bar */}
      <div className="bg-white border-b border-black/10">
        <div className="max-w-5xl mx-auto px-6 py-7 flex items-center gap-5">
          <div className="w-1 h-10 bg-red-600 shrink-0 rounded-full" />
          <p className="font-sans text-sm text-black/65 leading-relaxed">
            <strong className="text-black">Our standard:</strong> Wiresavvy covers
            U.S. news, business, finance, law, politics, and investigative reporting.
            We aim to make every story accurate, clear, and meaningful — regardless
            of how fast the news is moving.
          </p>
        </div>
      </div>

      {/* Principles — alternating layout */}
      <main className="max-w-5xl mx-auto px-6 py-14 space-y-0 divide-y divide-black/8">
        {principles.map((p, i) => (
          <div
            key={p.id}
            id={p.id}
            className={`py-10 grid md:grid-cols-5 gap-8 items-start ${
              i % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Left meta */}
            <div className="md:col-span-2 flex items-start gap-4">
              <span className="text-red-600/50 text-xl mt-0.5 shrink-0">{p.icon}</span>
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-black/35 block mb-1">
                  {p.tag}
                </span>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">{p.title}</h2>
              </div>
            </div>
            {/* Right content */}
            <div className="md:col-span-3 space-y-4">
              {p.paragraphs.map((para, j) => (
                <p key={j} className="text-black/70 font-sans text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Promise block */}
      <div className="bg-[#0d0f14] text-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 tracking-tight">Our Promise</h2>
              <p className="text-white/60 font-sans text-base leading-relaxed mb-4">
                Wiresavvy exists to inform, investigate, and connect readers to the
                stories shaping the United States and the world.
              </p>
              <p className="text-white/60 font-sans text-base leading-relaxed">
                Accuracy matters. Independence matters. Readers come first.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-white/25 font-sans text-xs">Last updated: June 2026</p>
              <a
                href="mailto:editorial@wiresavvy.com"
                className="mt-3 text-red-400 hover:text-red-300 font-sans text-sm underline underline-offset-4"
              >
                Contact editorial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ArticleLayout>
  );
}