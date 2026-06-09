import Link from "next/link";
import ArticleLayout from "../components/ArticleLayout";

export const metadata = {
  title: "Terms & Conditions | Wiresavvy",
  description:
    "Read the Wiresavvy Terms & Conditions governing the use of our website, editorial content, intellectual property, user submissions, advertising, and legal responsibilities.",
  keywords: [
    "Wiresavvy Terms",
    "Terms and Conditions",
    "Website Terms",
    "Legal Information",
    "User Agreement",
    "Editorial Policy",
    "News Website Terms",
    "Wiresavvy",
  ],
  alternates: {
    canonical: "https://www.wiresavvy.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Wiresavvy",
    description:
      "Learn the terms governing your use of Wiresavvy, including intellectual property, advertising, user submissions, and website policies.",
    url: "https://www.wiresavvy.com/terms-and-conditions",
    siteName: "Wiresavvy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Wiresavvy",
    description:
      "Review the official Terms & Conditions for using Wiresavvy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions",
  headline: "Terms & Conditions",
  description:
    "Official Terms & Conditions governing the use of the Wiresavvy website and its editorial content.",
  url: "https://www.wiresavvy.com/terms-and-conditions",
  inLanguage: "en-US",
  dateModified: "2026-06-09",
  publisher: {
    "@type": "Organization",
    name: "Wiresavvy",
    url: "https://www.wiresavvy.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.wiresavvy.com/logo.png",
    },
  },
  mainEntity: {
    "@type": "CreativeWork",
    name: "Terms & Conditions",
    description:
      "Legal terms governing access to and use of the Wiresavvy website.",
    publisher: {
      "@type": "Organization",
      name: "Wiresavvy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.wiresavvy.com/logo.png",
      },
    },
    dateModified: "2026-06-09",
  },
};

const terms = [
  {
    id: "using",
    title: "Using Our Website",
    intro:
      "Wiresavvy is provided for personal, non-commercial use unless otherwise agreed. By using this website, you agree not to:",
    bullets: [
      "Use the website for unlawful purposes",
      "Attempt to disrupt or interfere with website operations",
      "Copy, reproduce, or distribute content without permission",
      "Misrepresent your identity or affiliation",
      "Upload or share harmful, misleading, or offensive material",
    ],
    footer: null,
  },
  {
    id: "ip",
    title: "Intellectual Property",
    intro: null,
    bullets: null,
    footer:
      "All content published on Wiresavvy — including articles, logos, graphics, images, videos, and design elements — is protected by copyright and intellectual property laws. Unless permission is expressly granted, content may not be copied, republished, modified, distributed, or used for commercial purposes.",
  },
  {
    id: "submissions",
    title: "User Submissions",
    intro: null,
    bullets: null,
    footer:
      "If you submit comments, feedback, tips, or other content to Wiresavvy, you grant us the right to review, edit, publish, or remove that content when necessary. Users remain responsible for the content they submit and must ensure it does not violate any laws or third-party rights.",
  },
  {
    id: "accuracy",
    title: "Accuracy of Information",
    intro: null,
    bullets: null,
    footer:
      "We work hard to provide accurate and up-to-date reporting. However, Wiresavvy does not guarantee that all content will always be complete, current, or error-free. Information published on the website should be considered with appropriate judgment and verified through additional sources where necessary.",
  },
  {
    id: "links",
    title: "Third-Party Links",
    intro: null,
    bullets: null,
    footer:
      "Our website may contain links to external websites for additional context, products, services, or reference. We are not responsible for the content, policies, or practices of third-party websites, and we encourage users to review their terms and privacy policies independently.",
  },
  {
    id: "advertising",
    title: "Advertising and Sponsored Content",
    intro: null,
    bullets: null,
    footer:
      "Wiresavvy may display advertisements, sponsored content, affiliate links, and promotional materials. Sponsored content and paid partnerships will be identified where appropriate. These commercial relationships do not direct or influence our editorial reporting.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    intro: null,
    bullets: null,
    footer:
      "To the fullest extent permitted by law, Wiresavvy, its owners, editors, writers, contributors, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the website or reliance on its content.",
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    intro: null,
    bullets: null,
    footer:
      "We may update these Terms and Conditions from time to time as the website evolves. Any updates will be posted on this page, and continued use of the website after changes are published constitutes acceptance of the revised terms.",
  },
  {
    id: "termination",
    title: "Termination of Access",
    intro: null,
    bullets: null,
    footer:
      "We reserve the right to restrict, suspend, or terminate access to the website for users who violate these Terms and Conditions or engage in conduct that may harm the website, its readers, or its operations.",
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <ArticleLayout>
        <div className="min-h-screen bg-[#f5f3ef] font-['Georgia',serif] text-[#0d0f14]">
          <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />

          {/* Hero — split with dark left panel */}
          <section className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-[#0d0f14] text-white px-8 py-16 md:py-24 flex flex-col justify-between">
              <div>
                <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans mb-4">
                  Legal
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  Terms &amp;
                  <br />
                  Conditions
                </h1>
              </div>
              <div className="mt-10 md:mt-0">
                <p className="text-white/30 font-sans text-xs">
                  Effective: June 2026
                </p>
              </div>
            </div>
            <div className="md:col-span-3 bg-white px-8 py-16 md:py-24 border-l border-black/8 flex items-center">
              <div>
                <p className="text-black/70 font-sans text-base leading-relaxed mb-4">
                  By accessing and using Wiresavvy, you agree to follow these Terms
                  and Conditions. They apply to all visitors, readers, contributors,
                  and anyone who uses the website.
                </p>
                <p className="text-black/50 font-sans text-base leading-relaxed">
                  If you do not agree with these terms, please do not use the
                  website.
                </p>
              </div>
            </div>
          </section>

          {/* Terms body */}
          <main className="max-w-5xl mx-auto px-6 py-14">
            <div className="space-y-10">
              {terms.map((t, i) => (
                <div
                  key={t.id}
                  id={t.id}
                  className="border-b border-black/8 pb-10 last:border-0"
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-red-600/40 font-sans text-xs tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-bold tracking-tight">{t.title}</h2>
                  </div>
                  <div className="ml-8">
                    {t.intro && (
                      <p className="text-black/65 font-sans text-base leading-relaxed mb-4">
                        {t.intro}
                      </p>
                    )}
                    {t.bullets && (
                      <ul className="space-y-2 mb-4">
                        {t.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-red-600 mt-1.5 text-xs shrink-0">▸</span>
                            <span className="text-black/65 font-sans text-base leading-relaxed">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {t.footer && (
                      <p className="text-black/65 font-sans text-base leading-relaxed">
                        {t.footer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Final note + contact */}
            <div className="mt-14 bg-[#0d0f14] text-white p-8">
              <p className="font-sans text-sm leading-relaxed text-white/70 mb-5">
                Wiresavvy exists to inform, investigate, and provide readers with
                the clearest possible picture of the news stories shaping the
                United States and the world. By using our website, you help us
                maintain a reliable and trustworthy space for everyone.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <p className="text-white/35 font-sans text-xs">Last updated: June 2026</p>
                <Link
                  href="/contact"
                  className="text-red-400 hover:text-red-300 font-sans text-sm underline underline-offset-4"
                >
                  Contact us with questions →
                </Link>
              </div>
            </div>
          </main>
        </div>
      </ArticleLayout>
    </>
  );
}