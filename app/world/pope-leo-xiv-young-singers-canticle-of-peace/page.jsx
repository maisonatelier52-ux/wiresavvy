import Link from "next/link";
import {
  Link2,
  Clock,
  CheckCircle2,
  MapPin,
  Users,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";
import ArticleLayout from "@/app/components/ArticleLayout";

const SITE_URL = "https://www.wiresavvy.com";

const PAGE_PATH =
  "/world/pope-leo-xiv-young-singers-canticle-of-peace";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const OG_IMAGE = `${SITE_URL}/pope-leo-xiv-young-singers-canticle-of-peace.webp`;

const TITLE =
  "Pope Leo XIV and the Young Singers at Canticle of Peace";

const DESCRIPTION =
  "Pope Leo XIV addressed 164 young choristers from Uganda, the Holy Land and Italy at Castel Gandolfo on July 29, 2026. What his own words at Canticle of Peace establish — and what they don't.";

const PUBLISHED = "2026-08-14T08:00:00.000Z";

const MODIFIED = PUBLISHED;

const KEYWORDS_LIST = [
  "Pope Leo XIV",
  "Robert Francis Prevost",
  "Canticle of Peace",
  "Castel Gandolfo",
  "Borgo Laudato si'",
  "Andrea Bocelli Foundation",
  "ABF Voices Of",
  "Laudato si' Higher Education Center",
  "Amazing Grace",
];


// ================= SEO METADATA =================

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: PAGE_PATH,
  },

  keywords: KEYWORDS_LIST,

  authors: [
    {
      name: "Michael Alex",
      url: `${SITE_URL}/author/michael-alex`,
    },
  ],

  category: "World",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "WireSavvy",
    type: "article",
    locale: "en_US",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: [`${SITE_URL}/author/michael-alex`],
    section: "World",
    tags: KEYWORDS_LIST,

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: "Pope Leo XIV addresses young choristers at Canticle of Peace",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    site: "@wiresavvy",
    creator: "@wiresavvy",
  },
};


// ================= JSON-LD STRUCTURED DATA =================

function ArticleJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",

    headline: TITLE,
    description: DESCRIPTION,

    image: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 675,
    },

    datePublished: PUBLISHED,
    dateModified: MODIFIED,

    inLanguage: "en",
    isAccessibleForFree: true,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },

    author: {
      "@type": "Organization",
      name: "Michael Alex",
      url: `${SITE_URL}/author/michael-alex`,
    },

    publisher: {
      "@type": "Organization",
      name: "WireSavvy",

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60,
      },
    },

    articleSection: "World",

    keywords: KEYWORDS_LIST.join(", "),

    about: [
      {
        "@type": "Person",
        name: "Pope Leo XIV",
        alternateName: "Robert Francis Prevost",
      },
      {
        "@type": "Organization",
        name: "Andrea Bocelli Foundation",
        sameAs: "https://www.andreabocellifoundation.org/",
      },
      {
        "@type": "Organization",
        name: "Laudato si' Higher Education Center",
        sameAs: "https://www.laudatosi.va/en/about-us/",
      },
      {
        "@type": "Place",
        name: "Borgo Laudato si'",
        sameAs: "https://www.laudatosi.va/en/borgo-laudato-si-2/",
      },
      {
        "@type": "Person",
        name: "Andrea Bocelli",
      },
    ],
  };

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",

    name: "Canticle of Peace",

    startDate: "2026-07-29",
    endDate: "2026-07-29",

    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",

    eventStatus: "https://schema.org/EventScheduled",

    location: {
      "@type": "Place",
      name: "Borgo Laudato si'",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Castel Gandolfo",
        addressCountry: "IT",
      },
    },

    performer: [
      {
        "@type": "PerformingGroup",
        name: "ABF Voices",
      },
      {
        "@type": "Person",
        name: "Andrea Bocelli",
      },
    ],

    organizer: [
      {
        "@type": "Organization",
        name: "Andrea Bocelli Foundation",
        sameAs: "https://www.andreabocellifoundation.org/",
      },
      {
        "@type": "Organization",
        name: "Laudato si' Higher Education Center",
        sameAs: "https://www.laudatosi.va/en/about-us/",
      },
    ],

    description:
      "A prayer and fraternity gathering held at Borgo Laudato si' in Castel Gandolfo on July 29, 2026, at which Pope Leo XIV addressed 164 young choristers who had performed with Andrea Bocelli.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
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
        name: "World",
        item: `${SITE_URL}/world`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: TITLE,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
    </>
  );
}


// ================= TABLE OF CONTENTS =================

const toc = [
  {
    id: "who-is-leo-xiv",
    label: "Who Is Leo XIV",
  },
  {
    id: "the-central-image",
    label: "The Choir as a Central Image",
  },
  {
    id: "a-religious-message",
    label: "A Religious Message, Explicitly Stated",
  },
  {
    id: "gratitude-and-its-limits",
    label: "Gratitude — and Its Limits",
  },
  {
    id: "the-setting",
    label: "Why the Setting Mattered",
  },
  {
    id: "what-the-record-shows",
    label: "What the Record Shows",
  },
];


function SectionNumber({ n }) {
  return (
    <span className="block font-black text-[#c8102e]/15 text-6xl md:text-7xl leading-none select-none">
      {n}
    </span>
  );
}


function Quote({
  children,
  cite,
}) {
  return (
    <div className="my-10 relative pl-1">
      <span className="absolute -top-4 left-0 text-[#c8102e] text-6xl font-black leading-none select-none">
        &ldquo;
      </span>

      <p className="pl-10 text-xl md:text-[26px] text-black font-medium italic leading-snug">
        {children}
      </p>

      <p className="pl-10 mt-3 text-[12px] font-bold uppercase tracking-[0.15em] text-[#c8102e]">
        {cite}
      </p>
    </div>
  );
}


// ================= PAGE =================

export default function PopeLeoXIVYoungSingersPage() {
  return (
    <ArticleLayout className="bg-white text-black">
      <ArticleJsonLd />

      {/* ================= HERO ================= */}

      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 pb-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div>
          <span className="inline-block bg-red-500 text-white text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1 mb-5">
            <Link href="/world">World</Link>
          </span>

          <h1 className="font-black text-black text-[34px] sm:text-[42px] md:text-[50px] leading-[1.05] tracking-tight">
            {TITLE}
          </h1>

          <p className="mt-6 text-lg text-black/60 leading-relaxed border-l-[3px] border-red-500 pl-4">
            Pope Leo XIV addressed 164 young choristers who had performed with Andrea Bocelli at Castel Gandolfo. His own July 29 address, not later accounts by sponsors or participants, is the clearest record of what he actually said and did.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link href="/author/michael-alex" className="hover:text-[#c8102e] transition-colors">
              Michael Alex
            </Link>

            <span className="flex items-center gap-1.5 text-black/50">
              <time dateTime="2026-08-14">August 14, 2026</time>
            </span>

            <span className="flex items-center gap-1.5 text-black/50">
              <Clock size={13} /> 8 min read
            </span>
          </div>
        </div>

        {/* ================= AT A GLANCE ================= */}
        <div className="p-6 md:p-7 border border-black/10 bg-zinc-100 text-black/85">
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff4d5e] mb-4">
            At A Glance
          </p>

          <ul className="space-y-4 text-[14px]">
            <li className="flex items-start gap-3">
              <CalendarDays
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />
              <span><strong className="font-bold">Canticle of Peace</strong> — Borgo Laudato si', Castel Gandolfo, July 29, 2026</span>
            </li>

            <li className="flex items-start gap-3">
              <Users
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> 164 young choristers from Uganda, the Holy Land and Italy addressed directly </span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> Promoted by the Laudato si' Higher Education Center and the Andrea Bocelli Foundation </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> Service closed with the Lord's Prayer, apostolic blessing and "Amazing Grace" </span>
            </li>
          </ul>
        </div>
      </div>


      {/* ================= HERO IMAGE ================= */}

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative w-full aspect-[16/7] bg-black overflow-hidden">
          <Image
            src="/pope-leo-xiv-young-singers-canticle-of-peace.webp"
            alt="Pope Leo XIV addresses young choristers at Canticle of Peace"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <span className="absolute top-0 right-0 bg-[#c8102e] text-white text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5">
            Photo Feature
          </span>
        </div>

        <p className="mt-2 text-[12px] text-black/45 leading-snug">
          Pope Leo XIV addresses the young choristers of ABF Voices Of at Borgo Laudato si'.
        </p>
      </div>


      {/* ================= MAIN GRID ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12 grid lg:grid-cols-[220px_1fr] gap-12">

        {/* ================= STICKY SIDEBAR ================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-15 pb-5">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black mb-4 border-b-2 border-black pb-2">
              In This Article
            </p>

            <nav className="space-y-3">
              {toc.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-[13px] text-black/55 hover:text-[#c8102e] leading-snug transition-colors"
                >
                  <span className="text-[#c8102e] font-bold mr-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* ================= ARTICLE BODY ================= */}
        <div className="max-w-2xl text-[17px] leading-[1.85] text-black/85 space-y-6">
          <p className="text-xl md:text-[22px] text-black font-medium leading-snug">
            Pope Leo XIV's own words at Castel Gandolfo are the clearest guide to what the occasion meant to him.
          </p>
          <p>
            He attended Canticle of Peace at Borgo Laudato si' on July 29, 2026, and addressed the young singers who had performed with Andrea Bocelli. The Vatican identified the gathering as an occasion of prayer and fellowship, promoted by the Laudato si' Higher Education Center and the Andrea Bocelli Foundation, and its advance release counted 164 choir members.
          </p>
          <p>
            Leo's public greeting named children and young people from Uganda, the Holy Land and Italy. He thanked them for the work behind their singing and congratulated their choir directors — a direct record of what he emphasized, separate from later accounts of the occasion by sponsors or participants.
          </p>

          {/* ================= SECTION 01 ================= */}
          <div
            id="who-is-leo-xiv"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="01" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Who Is Leo XIV
            </h2>
          </div>
          <p>
            Leo XIV is Robert Francis Prevost, elected Pope on May 8, 2025. The Vatican biography identifies him as the first pope from the United States and the first Augustinian pope.
          </p>
          <p>
            Before his election, he served in Peru and held leadership roles in the Order of Saint Augustine. Pope Francis later appointed him prefect of the Dicastery for Bishops and president of the Pontifical Commission for Latin America.
          </p>
          <p>
            Those experiences form part of his public biography, but the July 2026 address itself is the best guide to his message at Castel Gandolfo. It was directed to the young people and framed their performance through faith, beauty and peace.
          </p>

          {/* ================= SECTION 02 ================= */}
          <div
            id="the-central-image"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="02" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Choir as a Central Image
            </h2>
          </div>
          <p>
            The Pope's central image was the choir itself. Distinct voices, he said, make a common sound while each retains a particular contribution.
          </p>
          <Quote cite="Pope Leo XIV, Canticle of Peace address">
            Music can bring different voices together while allowing each one to contribute something unique to the whole.
          </Quote>
          <p>
            He linked that experience to cooperation and harmony — a point made practical for children who had spent days rehearsing together after arriving from separate local choirs. ABF's programme had gathered singers from Nabikabala, Jerusalem, Bethlehem, Naples and Camerino for ten days in Italy.
          </p>
          <p>
            The papal address did not claim that singing could end conflicts in their home communities. It asked the audience to notice what joint work had made possible in the room — or, in this case, beneath the trees of the Pontifical Gardens.
          </p>

          {/* ================= SECTION 03 ================= */}
          <div
            id="a-religious-message"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="03" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              A Religious Message, Explicitly Stated
            </h2>
          </div>

          <p>
            Leo XIV also spoke explicitly as a religious leader. He compared the beauty of music to a stream that can be followed toward its source, then encouraged the children to use their gifts in a search for God and meaning.
          </p>
          <p>
            He prayed for their families and countries and asked that peace might come to homes and places suffering violence.
          </p>
          <p>
            The Vatican's account of the service places those words among readings and songs on creation, human dignity, faith and unity. A multilingual prayer by children followed, then the Lord's Prayer, sign of peace and apostolic blessing. Bocelli and the choir performed "Amazing Grace" as the gathering closed.
          </p>

          {/* ================= SECTION 04 ================= */}
          <div
            id="gratitude-and-its-limits"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="04" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Gratitude — and Its Limits
            </h2>
          </div>

          <p>
            The Pope thanked the Andrea Bocelli Foundation for its work with young people experiencing educational and social disadvantage. That statement acknowledged the programme presented to him. It was not a formal evaluation of every project in the Voices Of network.
          </p>
          <p>
            Nor did the address name Banvelca Foundation, though Banvelca later said it had supported the gathering. A page focused on Leo XIV should take care to report his words and actions rather than assigning him views on the private supporters, finances or later publicity surrounding the event.
          </p>

          {/* ================= SECTION 05 ================= */}
          <div
            id="the-setting"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="05" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Why the Setting Mattered
            </h2>
          </div>

          <p>
            The place was also relevant to his participation. Borgo Laudato si' is a project begun under Pope Francis in the papal estate at Castel Gandolfo, meant to put ideas about ecological care and human dignity into practice through education.
          </p>
          <p>
            The 2026 gathering drew on the "Canticle of the Creatures" and formed part of commemorations of Saint Francis of Assisi. In that setting, Leo XIV's prayer for peace sat alongside attention to the world in which the young people live.
          </p>
          <p>
            Vatican News described the ancient holm oak known as "Methuselah" above the gathering — a reminder of the site's environmental setting as well as its religious one.
          </p>

          {/* ================= SECTION 06 ================= */}
          <div
            id="what-the-record-shows"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="06" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              What the Record Shows
            </h2>
          </div>

          <p>
            For the choir, an audience with a pope was a public culmination of substantial preparation. For Leo XIV, the occasion was an opportunity to address children from several places through a shared Catholic prayer service.
          </p>
          <p>
            The verified record does not support claims that he personally knew the singers or that he endorsed every adult attendee. It does show him placing the children and their work at the center of the evening.
          </p>

          {/* ================= SOURCE DISCLOSURE ================= */}
          <div className="mt-10 border-t-2 border-black pt-5 text-[12px] text-black/50 leading-relaxed pb-5">
            <span className="font-black text-black/70 uppercase tracking-wide text-[11px]">
              Sources:
            </span>

            <div className="mt-3 space-y-2">
              <p>
                Official biography of Leo XIV:{" "}
                <a
                  href="https://www.vatican.va/content/leo-xiv/en/biography/documents/biografia_leone-xiv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  Vatican.va
                </a>
              </p>

              <p>
                Pope's July 29 address:{" "}
                <a
                  href="https://www.vatican.va/content/leo-xiv/en/speeches/2026/july/documents/20260729-incontro-cantico-di-pace.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  Vatican.va
                </a>
              </p>

              <p>
                Vatican event release:{" "}
                <a
                  href="https://press.vatican.va/content/dam/salastampa/it/fuori-bollettino/pdf/2026/EN_Comunicato%20-%20Cantico%20di%20Pace%2029.7.26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  press.vatican.va
                </a>
              </p>

              <p>
                Vatican News event report:{" "}
                <a
                  href="https://www.vaticannews.va/en/pope/news/2026-07/pope-music-leads-us-to-god-concert-castel-gandolfo-choir.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  Vatican News
                </a>
              </p>

              <p>
                ABF Global Gathering:{" "}
                <a
                  href="https://www.andreabocellifoundation.org/on-the-eve-of-its-15th-anniversary-andrea-bocelli-foundation-hosts-the-first-abf-voices-of-global-gathering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  Andrea Bocelli Foundation
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}