import ArticleLayout from "../components/ArticleLayout";

const SITE_URL = "https://www.wiresavvy.com";
const PAGE_URL = `${SITE_URL}/meet-the-team`;

export const metadata = {
  title:
    "Meet the Team | Wiresavvy Newsroom Journalists & Editorial Staff",
  description:
    "Meet the journalists and editors behind Wiresavvy. Learn about our newsroom, editorial expertise, and reporters covering business, politics, finance, travel, lifestyle, and investigative journalism.",
  keywords: [
    "Wiresavvy team",
    "Wiresavvy newsroom",
    "journalists",
    "editors",
    "news reporters",
    "business reporter",
    "political correspondent",
    "investigative journalist",
    "financial journalist",
    "editorial staff",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Meet the Team | Wiresavvy Newsroom Journalists & Editorial Staff",
    description:
      "Get to know the journalists behind Wiresavvy's independent reporting and investigative journalism.",
    url: PAGE_URL,
    siteName: "Wiresavvy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Meet the Wiresavvy Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Meet the Team | Wiresavvy Newsroom Journalists & Editorial Staff",
    description:
      "Meet the reporters and editorial staff behind Wiresavvy.",
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

const authors = [
  {
    id: 1,
    name: "Michael Thompson",
    slug: "michael-thompson",
    photo: "/author/Michael-Thompson.webp",
    role: "Senior Business & Policy Analyst",
    bio: "Senior business and policy analyst covering U.S. industries, finance, and corporate regulation.",
    social: {
      medium: "https://medium.com/@michaelthompson_wsavvy",
      quora: "https://www.quora.com/profile/Michael-Thompson-4141",
      reddit: "https://www.reddit.com/user/michael-thompson01/",
    },
    beat: "Business",
  },
  {
    id: 2,
    name: "Sophia L",
    slug: "sophia-l",
    photo: "/author/Sophia-L.webp",
    role: "Travel & Transportation Journalist",
    bio: "Travel and transportation journalist reporting on U.S. aviation, tourism, and regulatory developments.",
    social: {},
    beat: "Travel",
  },
  {
    id: 3,
    name: "Emily Johnson",
    slug: "emily-johnson",
    photo: "/author/Emily-Johnson.webp",
    role: "Lifestyle & Consumer Trends Reporter",
    bio: "Lifestyle and consumer trends reporter, covering home, wellness, and economic behavior.",
    social: {},
    beat: "Lifestyle",
  },
  {
    id: 4,
    name: "Alex John",
    slug: "alex-john",
    photo: "/author/Alex-R.webp",
    role: "Political Correspondent",
    bio: "Political correspondent covering the U.S. Supreme Court, federal agencies, and government policy.",
    social: {
      medium: "https://medium.com/@alex_john_wiresavvy",
      quora: "https://www.quora.com/profile/Alex-John-1535",
      reddit: "https://www.reddit.com/user/alex-john01/",
    },
    beat: "Politics",
  },
  {
    id: 5,
    name: "Dana Katherine",
    slug: "dana-katherine",
    photo: "/author/Dana-K.webp",
    role: "Financial Journalist",
    bio: "Financial journalist covering U.S. markets, banking, and the impact of technology on the economy.",
    social: {
      twitter: "https://x.com/DanaK25216",
      quora: "https://www.quora.com/profile/Dana-Katherine-10",
      reddit: "https://www.reddit.com/user/dana_katherine/",
    },
    beat: "Finance",
  },
  {
    id: 6,
    name: "Jordan Miles",
    slug: "jordan-miles",
    photo: "/author/Jordan-Miles.webp",
    role: "Investigative Reporter",
    bio: "Investigative reporter focusing on law enforcement, federal investigations, and legal affairs.",
    social: {},
    beat: "Investigation",
  },
];

const beatColors = {
  Business: "bg-blue-900/80 text-white border-blue-800/40",
  Travel: "bg-teal-900/80 text-white border-teal-800/40",
  Lifestyle: "bg-purple-900/80 text-white border-purple-800/40",
  Politics: "bg-amber-900/80 text-white border-amber-800/40",
  Finance: "bg-emerald-900/80 text-white border-emerald-800/40",
  Investigation: "bg-red-900/80 text-white border-red-800/40",
};

const SocialIcon = ({ platform, url }) => {
  if (!url) return null;

  const icons = {
    twitter: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
    medium: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    quora: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12.555 18.858c-.083 0-.166-.004-.247-.008-1.007 3.02-3.519 5.15-6.558 5.15H5.74c-.305 0-.552-.248-.552-.553s.247-.553.552-.553h.01c1.702 0 3.185-1.047 4.035-2.676C7.223 19.15 5.344 16.12 5.344 12.554c0-4.001 3.22-7.25 7.21-7.25 3.992 0 7.21 3.249 7.21 7.25 0 4.003-3.218 7.254-7.209 7.254zm-.002-12.499c-2.898 0-5.249 2.361-5.249 5.265 0 2.902 2.351 5.262 5.249 5.262 2.897 0 5.248-2.36 5.248-5.262 0-2.904-2.351-5.265-5.248-5.265z"/>
      </svg>
    ),
    reddit: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  };


  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black/30 hover:text-red-500 transition-colors"
      aria-label={platform}
    >
      {icons[platform]}
    </a>
  );
};

export default function MeetTheTeam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": PAGE_URL,
        url: PAGE_URL,
        name: "Meet the Team",
        description:
          "Meet the editorial team and journalists behind Wiresavvy.",
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Meet the Team",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
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
      },
      {
        "@type": "ItemList",
        name: "Wiresavvy Editorial Team",
        itemListElement: authors.map((author, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            description: author.bio,
            image: `${SITE_URL}${author.photo}`,
            url: `${SITE_URL}/author/${author.slug}`,
            sameAs: Object.values(author.social),
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Meet the Team",
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

      <div className="min-h-screen font-['Georgia',serif]">
        <div className="h-1 w-full" />

          {/* Hero remains unchanged */}
          <section className="border-b border-black/10 relative overflow-hidden">
          <div className="absolute inset-0" />
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
            <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans mb-4">
              The Newsroom
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Meet the Team
            </h1>
            <p className="text-black/55 font-sans text-lg leading-relaxed max-w-2xl">
              Every story starts with a journalist who cares enough to ask the
              right questions. Here is the Wiresavvy newsroom.
            </p>
          </div>
        </section>

        {/* Shared belief strip */}
        <div className="border-b border-black/10 bg-black/[0.025]">
          <div className="max-w-5xl mx-auto px-6 py-7 flex items-center gap-5">
            <div className="w-1 h-10 shrink-0 rounded-full" />
            <p className="font-sans text-sm text-black/55 leading-relaxed italic">
              "Different backgrounds. Different beats. One shared commitment: journalism
              that gives readers a clearer view of the world shaping their lives."
            </p>
          </div>
        </div>

        {/* Author Grid */}
        <main className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authors.map((author) => (
              <div
                key={author.id}
                className="border border-black/10 p-6 transition-all duration-300 hover:border-red-500/40 hover:bg-black/[0.03] group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-black/10">
                    <img
                      src={author.photo}
                      alt={author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span
                    className={`text-xs font-sans uppercase tracking-widest px-2.5 py-1 border rounded-sm ${
                      beatColors[author.beat]
                    }`}
                  >
                    {author.beat}
                  </span>
                </div>

                <h2 className="text-base font-bold tracking-tight mb-1 group-hover:text-red-500 transition-colors">
                  {author.name}
                </h2>

                <p className="text-black/40 font-sans text-xs uppercase mb-4">
                  {author.role}
                </p>

                <p className="text-black/60 font-sans text-sm leading-relaxed mb-5">
                  {author.bio}
                </p>

                <div className="flex items-center gap-3 border-t border-black/10 pt-4">
                  {Object.entries(author.social).map(([platform, url]) =>
                    url ? (
                      <SocialIcon
                        key={platform}
                        platform={platform}
                        url={url}
                      />
                    ) : null
                  )}

                  <a
                    href={`/author/${author.slug}`}
                    className="ml-auto text-xs font-sans text-black/40 hover:text-red-500"
                  >
                    Articles →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </ArticleLayout>
  );
}