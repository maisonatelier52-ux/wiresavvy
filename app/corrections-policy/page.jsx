import ArticleLayout from "../components/ArticleLayout";

const SITE_URL = "https://www.wiresavvy.com";
const PAGE_URL = `${SITE_URL}/corrections-policy`;

export const metadata = {
  title: "Corrections Policy | Wiresavvy Editorial Standards",
  description:
    "Read the Wiresavvy Corrections Policy and learn how we review, verify, correct, and transparently update factual errors in our journalism.",
  keywords: [
    "Wiresavvy corrections policy",
    "news corrections",
    "editorial corrections",
    "fact checking",
    "journalism standards",
    "editorial accountability",
    "news updates",
    "correction policy",
    "responsible journalism",
    "editorial transparency",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Corrections Policy | Wiresavvy Editorial Standards",
    description:
      "Learn how Wiresavvy handles corrections, updates, and editorial accountability.",
    url: PAGE_URL,
    siteName: "Wiresavvy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Wiresavvy Corrections Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy | Wiresavvy Editorial Standards",
    description:
      "Transparency and accountability guide every correction at Wiresavvy.",
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

const correctionTypes = [
  { icon: "◈", label: "Names & Titles" },
  { icon: "◉", label: "Dates & Timelines" },
  { icon: "◆", label: "Quotes & Statements" },
  { icon: "◎", label: "Locations & Jurisdictions" },
  { icon: "◇", label: "Financial Figures & Data" },
  { icon: "◌", label: "Company & Organisation Info" },
  { icon: "◷", label: "Context & Reporting Accuracy" },
  { icon: "◈", label: "Statistics & Research Data" },
];

const steps = [
  {
    number: "01",
    title: "Flag the Error",
    body: "Readers, editors, or the subjects of reporting identify a potential factual inaccuracy. Anyone can flag an error — we treat every submission seriously.",
  },
  {
    number: "02",
    title: "Editorial Review",
    body: "Our editorial team reviews the original reporting, checks available evidence, and determines whether a correction, clarification, or update is warranted.",
  },
  {
    number: "03",
    title: "Correction Made",
    body: "Confirmed errors are corrected promptly. The article is updated with accurate information and, where the change is meaningful, readers are informed of what changed.",
  },
  {
    number: "04",
    title: "Transparency Logged",
    body: "Significant corrections are noted within the article itself. We do not quietly rewrite history — readers deserve to know when and why an article changed.",
  },
];

const faqs = [
  {
    q: "How quickly are corrections made?",
    a: "We aim to correct confirmed factual errors as quickly as possible after they are identified and verified. The editorial review process is thorough, but speed and accuracy are both priorities.",
  },
  {
    q: "What is the difference between a correction and an update?",
    a: "A correction addresses a factual error in the original reporting. An update reflects new developments in an ongoing story — for example, a court ruling, a company statement, or a policy change that emerged after publication. Both are labelled clearly.",
  },
  {
    q: "Will Wiresavvy tell me if my submission led to a change?",
    a: "Where possible, we will respond to correction requests that result in a meaningful change to the article. Not every submission will receive an individual reply, but all are reviewed by our editorial team.",
  },
  {
    q: "What if I disagree with Wiresavvy's reporting but there is no factual error?",
    a: "Our corrections process is for confirmed factual inaccuracies. If you believe the framing, interpretation, or editorial judgment of a story is unfair, you are welcome to use our Right of Reply process instead.",
  },
];

export default function CorrectionsPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Corrections Policy",
        description:
          "Wiresavvy's corrections policy describing how factual errors are reviewed and corrected.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "CreativeWork",
        "@id": `${PAGE_URL}#policy`,
        name: "Wiresavvy Corrections Policy",
        url: PAGE_URL,
        creator: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        dateModified: "2026-06-09",
        inLanguage: "en-US",
        description:
          "Policy outlining Wiresavvy's approach to corrections, updates, transparency, and editorial accountability.",
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
        correctionsPolicy: PAGE_URL,
        ethicsPolicy: `${SITE_URL}/editorial-policy`,
        publishingPrinciples: `${SITE_URL}/editorial-policy`,
      },
      {
        "@type": "HowTo",
        name: "How Wiresavvy Handles Corrections",
        description:
          "The editorial process followed when a factual error is identified.",
        step: steps.map((step) => ({
          "@type": "HowToStep",
          name: step.title,
          text: step.body,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Correction Categories",
        itemListElement: correctionTypes.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
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
            name: "Corrections Policy",
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

      <div className="min-h-screen bg-[#f5f3ef] font-['Georgia',serif] text-[#0d0f14]">
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />

      {/* Hero — split dark/light */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#0d0f14] text-white px-8 py-16 md:py-24 flex flex-col justify-between">
          <div>
            <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans mb-5">
              Editorial Standards
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Corrections
              <br />
              Policy
            </h1>
            <p className="text-white/50 font-sans text-base leading-relaxed max-w-xs">
              Accuracy is not optional. When we get something wrong, we say so — clearly, promptly, and on the record.
            </p>
          </div>
          <p className="text-white/20 font-sans text-xs mt-10 md:mt-0">
            Last updated: June 2026
          </p>
        </div>

        {/* Right — three-stat trust block */}
        <div className="bg-white border-l border-black/8 px-8 py-16 md:py-24 flex flex-col justify-center gap-10">
          {[
            { stat: "Prompt", label: "Confirmed errors corrected as quickly as possible" },
            { stat: "Transparent", label: "Meaningful changes noted within the article itself" },
            { stat: "Accountable", label: "Every correction request reviewed by our editorial team" },
          ].map((item) => (
            <div key={item.stat} className="flex items-start gap-5">
              <div className="w-1 h-10 bg-red-600 shrink-0 rounded-full mt-0.5" />
              <div>
                <p className="text-xl font-bold tracking-tight mb-1">{item.stat}</p>
                <p className="text-black/50 font-sans text-sm leading-relaxed">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What we correct */}
      <section className="border-t border-b border-black/8 bg-[#f5f3ef]">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight">What We Correct</h2>
            <div className="flex-1 h-px bg-black/10" />
          </div>
          <p className="text-black/55 font-sans text-base leading-relaxed max-w-2xl mb-10">
            Corrections may apply to any factual element of an article, including but not limited to:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {correctionTypes.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-black/8 px-4 py-4 flex items-center gap-3 hover:border-red-500/40 hover:shadow-sm transition-all group"
              >
                <span className="text-red-600/40 text-base shrink-0">{c.icon}</span>
                <span className="font-sans text-xs text-black/65 leading-snug group-hover:text-black transition-colors">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="bg-[#0d0f14] text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold tracking-tight">Our Process</h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {steps.map((s) => (
              <div
                key={s.number}
                className="border border-white/10 p-7 hover:border-red-500/40 transition-colors group"
              >
                <span className="text-red-500/40 font-sans text-xs tabular-nums tracking-widest">
                  {s.number}
                </span>
                <h3 className="text-base font-bold mt-2 mb-3 tracking-tight group-hover:text-red-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 font-sans text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updating stories */}
      <section className="border-t border-b border-black/8 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <span className="text-red-600/50 text-lg">◉</span>
              <h2 className="text-xl font-bold tracking-tight mt-2">
                Updating Stories
              </h2>
            </div>
            <div className="md:col-span-3 space-y-4">
              <p className="text-black/65 font-sans text-base leading-relaxed">
                News across business, finance, law, and politics can develop
                rapidly. As new verified information becomes available, we may
                update existing articles to reflect the latest facts and give
                readers the most accurate version of a story.
              </p>
              <p className="text-black/65 font-sans text-base leading-relaxed">
                Updates are distinct from corrections — they reflect a developing
                story, not a past error. Both are handled with the same commitment
                to transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

        <section className="bg-[#f5f3ef]">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Common Questions
              </h2>
              <div className="flex-1 h-px bg-black/10" />
            </div>

            <div className="divide-y divide-black/8">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <h3 className="font-sans text-base font-semibold text-black mb-3">
                    {faq.q}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed text-black/65 max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Submit a correction CTA */}
      <section className="bg-[#0d0f14] text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Spotted an Error?
            </h2>
            <p className="text-white/50 font-sans text-base leading-relaxed">
              Readers are a vital part of how we maintain high editorial
              standards. If you believe an article contains a factual error,
              contact our editorial team. Every submission is reviewed.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:corrections@wiresavvy.com"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 transition-colors text-white font-sans text-sm font-semibold px-6 py-4 tracking-wide"
            >
              corrections@wiresavvy.com →
            </a>
            <p className="text-white/25 font-sans text-xs text-center">
              Please include the article URL and the specific detail you believe
              is incorrect.
            </p>
          </div>
        </div>
      </section>

      {/* Trust footer */}
      <div className="bg-white border-t border-black/8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-black/40 font-sans text-sm">
            Trust is not built through perfection. It is built through
            accountability.
          </p>
          <div className="flex gap-6 text-xs font-sans text-black/30">
            <a href="/editorial-policy" className="hover:text-red-600 transition-colors">
              Editorial Policy
            </a>
            <a href="/right-of-reply" className="hover:text-red-600 transition-colors">
              Right of Reply
            </a>
            <a href="/source-methodology" className="hover:text-red-600 transition-colors">
              Source Methodology
            </a>
          </div>
        </div>
      </div>
    </div>
    </ArticleLayout>
  );
}