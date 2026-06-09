import Link from "next/link";
import ArticleLayout from "../components/ArticleLayout";

const legalSections = [
  {
    id: "content-ownership",
    title: "Content Ownership",
    body: "Unless otherwise stated, all articles, images, graphics, logos, and other content published on Wiresavvy are protected by copyright and intellectual property laws. Content may not be copied, republished, distributed, or reproduced without prior written permission, except where permitted by applicable law.",
  },
  {
    id: "editorial-content",
    title: "Editorial Content",
    body: "The information published on Wiresavvy is provided for general informational purposes. While we strive for accuracy and work to keep our reporting current, we cannot guarantee that all information will always be complete, up to date, or free from error. Readers should use their own judgment when acting on information published on this website.",
  },
  {
    id: "external-links",
    title: "External Links",
    body: "Some articles may include links to third-party websites for additional context or reference. Wiresavvy does not control or endorse the content, policies, or practices of external websites and is not responsible for their content or availability.",
  },
  {
    id: "opinions",
    title: "Opinions and Views",
    body: "Opinions expressed in analysis, commentary, or guest contributions belong to the respective authors and do not necessarily reflect the editorial position of Wiresavvy as a whole.",
  },
  {
    id: "affiliate",
    title: "Affiliate Disclosure",
    body: "Some content may contain affiliate links. If readers make purchases through these links, Wiresavvy may earn a commission at no additional cost to the reader. These relationships do not influence our editorial decisions or coverage.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: "Wiresavvy, its writers, editors, contributors, and affiliates shall not be held liable for any loss, damage, or inconvenience resulting from the use of information published on this website. Use of the website and its content is at the reader's own discretion.",
  },
  {
    id: "changes",
    title: "Changes to Policies",
    body: "We may update our policies, guidelines, and legal information from time to time. Any updates will be reflected on this page. Continued use of the website after changes are published constitutes acceptance of those changes.",
  },
  {
    id: "commitment",
    title: "Our Commitment",
    body: "Wiresavvy is committed to maintaining a transparent, responsible, and accountable platform for readers, contributors, and partners. We believe trust is built through openness and clear communication.",
  },
];

export const metadata = {
  title: "Legal Information | Wiresavvy",
  description:
    "Read Wiresavvy's legal information, including copyright, editorial disclaimers, external links, affiliate disclosure, limitation of liability, and policy updates.",
  keywords: [
    "Wiresavvy Legal Information",
    "Legal Notice",
    "Editorial Disclaimer",
    "Copyright Policy",
    "Affiliate Disclosure",
    "Terms of Use",
    "Media Legal Policy",
    "External Links Policy",
    "Journalism Standards",
    "Wiresavvy Policies",
  ],
  alternates: {
    canonical: "https://www.wiresavvy.com/legal-information",
  },
  openGraph: {
    title: "Legal Information | Wiresavvy",
    description:
      "Learn about Wiresavvy's legal policies, editorial disclaimers, copyright protections, affiliate disclosures, and commitment to transparency.",
    url: "https://www.wiresavvy.com/legal-information",
    siteName: "Wiresavvy",
    type: "website",
    images: [
      {
        url: "https://www.wiresavvy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wiresavvy Legal Information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Information | Wiresavvy",
    description:
      "Review Wiresavvy's legal information, copyright policy, editorial disclaimer, affiliate disclosure, and transparency commitments.",
    images: ["https://www.wiresavvy.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.wiresavvy.com/legal-information",
      url: "https://www.wiresavvy.com/legal-information",
      name: "Legal Information | Wiresavvy",
      description:
        "Legal information governing the use of Wiresavvy, including copyright, editorial disclaimers, affiliate disclosures, and limitation of liability.",
      isPartOf: {
        "@id": "https://www.wiresavvy.com/#website",
      },
      about: {
        "@id": "https://www.wiresavvy.com/#organization",
      },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.wiresavvy.com/og-image.jpg",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.wiresavvy.com/#website",
      url: "https://www.wiresavvy.com",
      name: "Wiresavvy",
      publisher: {
        "@id": "https://www.wiresavvy.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.wiresavvy.com/#organization",
      name: "Wiresavvy",
      url: "https://www.wiresavvy.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.wiresavvy.com/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        url: "https://www.wiresavvy.com/contact",
      },
    },
    {
      "@type": "CreativeWork",
      "@id": "https://www.wiresavvy.com/legal-information#policy",
      name: "Legal Information",
      description:
        "Wiresavvy's legal information covering content ownership, editorial disclaimers, external links, opinions, affiliate relationships, liability limitations, and policy updates.",
      publisher: {
        "@id": "https://www.wiresavvy.com/#organization",
      },
      dateModified: "2026-06-01",
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.wiresavvy.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Legal Information",
          item: "https://www.wiresavvy.com/legal-information"
        }
      ]
    }
  ]
};

export default function LegalInformation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <ArticleLayout >
      <div className="min-h-screen bg-[#f5f3ef] font-['Georgia',serif] text-[#0d0f14]">
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />

        {/* Page header — broadsheet style */}
        <div className="bg-[#0d0f14] text-white">
          <div className="max-w-5xl mx-auto px-6 py-14">
            <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans mb-3">
              Legal
            </p>
            <div className="border-b border-white/20 pb-6 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Legal Information
              </h1>
            </div>
            <p className="text-white/50 font-sans text-sm max-w-2xl leading-relaxed">
              By accessing and using Wiresavvy, you agree to use the website in a
              lawful and respectful manner. These guidelines exist to protect our
              readers, contributors, and the content published across our platform.
              Last updated: June 2026.
            </p>
          </div>
        </div>

        {/* Two-column layout — sidebar TOC + content */}
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sticky sidebar TOC */}
            <aside className="md:w-56 shrink-0">
              <div className="md:sticky md:top-8">
                <p className="text-xs uppercase tracking-widest text-black/40 font-sans mb-4">
                  Contents
                </p>
                <ul className="space-y-2">
                  {legalSections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="font-sans text-sm text-black/60 hover:text-red-600 transition-colors block py-0.5 border-l-2 border-transparent hover:border-red-600 pl-3"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 space-y-12">
              {legalSections.map((s, i) => (
                <div key={s.id} id={s.id} className="scroll-mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-red-600/40 font-sans text-xs tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-bold tracking-tight">{s.title}</h2>
                  </div>
                  <div className="ml-8 border-l border-black/10 pl-5">
                    <p className="text-black/70 font-sans text-base leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t border-black/10 pt-8">
                <p className="text-black/40 font-sans text-sm">
                  Questions about this page?{" "}
                  <Link href="/contact" className="text-red-600 hover:underline">
                    Contact us
                  </Link>
                  .
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      </ArticleLayout>
    </>
  );
}