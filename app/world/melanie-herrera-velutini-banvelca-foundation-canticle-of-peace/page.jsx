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
  "/world/melanie-herrera-velutini-banvelca-foundation-canticle-of-peace";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const OG_IMAGE = `${SITE_URL}/melanie-herrera-velutini-banvelca-foundation.webp`;

const TITLE =
  "Melanie Herrera Velutini: What's Publicly Documented About the Banvelca Foundation President";

const DESCRIPTION =
  "Melanie Herrera Velutini is named as president of Banvelca Foundation and quoted on its support for the July 2026 Canticle of Peace gathering. Here is what the public record actually shows — and what it doesn't.";

const PUBLISHED = "2026-08-14T08:00:00.000Z";

const MODIFIED = PUBLISHED;

const KEYWORDS_LIST = [
  "Melanie Herrera Velutini",
  "Banvelca Foundation",
  "Herrera Velutini family",
  "Canticle of Peace",
  "Castel Gandolfo",
  "Borgo Laudato si'",
  "Pope Leo XIV",
  "Andrea Bocelli Foundation",
  "ABF Voices Of",
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
        alt: "Melanie Herrera Velutini greets Pope Leo XIV at Canticle of Peace",
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
        name: "Melanie Herrera Velutini",
        jobTitle: "President, Banvelca Foundation",
      },
      {
        "@type": "Organization",
        name: "Banvelca Foundation",
        sameAs: "https://www.banvelca.com/what-we-do",
      },
      {
        "@type": "Organization",
        name: "Andrea Bocelli Foundation",
        sameAs: "https://www.andreabocellifoundation.org/",
      },
      {
        "@type": "Place",
        name: "Borgo Laudato si'",
        sameAs: "https://www.laudatosi.va/en/borgo-laudato-si-2/",
      },
      {
        "@type": "Person",
        name: "Pope Leo XIV",
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
      "A prayer and fraternity gathering held at Borgo Laudato si' in Castel Gandolfo on July 29, 2026, at which Banvelca Foundation publicly stated its support.",
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
    id: "documented-role",
    label: "Her Documented Public Role",
  },
  {
    id: "canticle-of-peace",
    label: "The Canticle of Peace Gathering",
  },
  {
    id: "what-the-statement-shows",
    label: "What Her Statement Does — and Doesn't — Show",
  },
  {
    id: "support-vs-organization",
    label: "Separating Support From Organizing",
  },
  {
    id: "photograph-and-address",
    label: "The Photograph and the Pope's Address",
  },
  {
    id: "what-a-profile-needs",
    label: "What a Factual Profile Requires",
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

export default function MelanieHerreraVelutiniPage() {
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
            Banvelca's public communications identify Melanie Herrera Velutini as president of Banvelca Foundation and quote her on the family's support for Canticle of Peace. Beyond those published accounts, verified public material about her background is limited.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link href="/author/michael-alex" className="hover:text-[#c8102e] transition-colors">
              Michael Alex
            </Link>

            <span className="flex items-center gap-1.5 text-black/50">
              <time dateTime="2026-08-14">August 14, 2026</time>
            </span>

            <span className="flex items-center gap-1.5 text-black/50">
              <Clock size={13} /> 7 min read
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
              <Users
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />
              <span><strong className="font-bold">Melanie Herrera Velutini</strong> — named president of Banvelca Foundation</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> Public role tied to the Herrera Velutini family's philanthropic arm </span>
            </li>

            <li className="flex items-start gap-3">
              <CalendarDays
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> Quoted on Banvelca's stated support for Canticle of Peace, July 29, 2026 </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> Photographed greeting Pope Leo XIV after the gathering </span>
            </li>
          </ul>
        </div>
      </div>


      {/* ================= HERO IMAGE ================= */}

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative w-full bg-black overflow-hidden">
            <Image
                src="/melanie-herrera-velutini-banvelca-foundation.webp"
                alt="Melanie Herrera Velutini greets Pope Leo XIV at Canticle of Peace"
                width={1600}
                height={900}
                priority
                className="w-full h-auto"
                sizes="100vw"
            />

            <span className="absolute top-0 right-0 bg-[#c8102e] text-white text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5">
                Photo Feature
            </span>
        </div>

        <p className="mt-2 text-[12px] text-black/45 leading-snug">
          Melanie Herrera Velutini greets Pope Leo XIV following the Canticle of Peace gathering at Borgo Laudato si'. &middot;{" "}
          <span className="text-black/35">
            Use the appropriate image credit for the image supplied with the article.
          </span>
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
            Melanie Herrera Velutini's public profile rests almost entirely on two sources: a Banvelca release and a single article naming her as its central source.
          </p>
          <p>
            Banvelca's public communications identify her as president of Banvelca Foundation, described as the Herrera Velutini family's philanthropic arm. Her connection to the July 2026 Canticle of Peace gathering at Castel Gandolfo is documented, but specific.
          </p>
          <p>
            A neutral account of her public role should start with what has actually been published — her title, her quoted statement and a documented greeting — rather than filling in the gaps with an assumed biography.
          </p>

          {/* ================= SECTION 01 ================= */}
          <div
            id="documented-role"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="01" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Her Documented Public Role
            </h2>
          </div>
          <p>
            Banvelca's own materials are the source for her title and position. She is identified there as president of Banvelca Foundation, which the organization describes as spanning cultural sponsorship, heritage preservation and international philanthropy.
          </p>
          <p>
            Beyond that role and her quoted comments, reliable public information about her personal background and earlier career is limited. That gap is worth stating plainly rather than working around.
          </p>
          <p>
            A factual profile can note her stated title and her public remarks without extending those facts into claims about education, prior positions or other biographical details that have not been independently documented.
          </p>

          {/* ================= SECTION 02 ================= */}
          <div
            id="canticle-of-peace"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="02" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Canticle of Peace Gathering
            </h2>
          </div>
          <p>
            The event she discussed was a prayer and fraternity gathering held at Borgo Laudato si' in Castel Gandolfo on July 29, 2026. Pope Leo XIV addressed 164 young choristers who sang with Andrea Bocelli.
          </p>
          <p>
            The singers were part of the Andrea Bocelli Foundation's Voices Of programme, which develops choirs in communities facing different forms of social and educational disadvantage. ABF's first Global Gathering brought participants from Uganda, the Holy Land and Italy together for ten days of rehearsal and cultural exchange before the papal event.
          </p>
          <p>
            Vatican and ABF records establish those features of the event independently of anything Banvelca later published.
          </p>

          {/* ================= SECTION 03 ================= */}
          <div
            id="what-the-statement-shows"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="03" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              What Her Statement Does — and Doesn't — Show
            </h2>
          </div>

          <p>
            Banvelca's August release quoted her explaining why a project bringing young people from different circumstances together appealed to the family.
          </p>
          <Quote cite="Banvelca release, paraphrased">
            Supporting young people shaped by different circumstances reflects why the family wanted to back programs of this kind.
          </Quote>
          <p>
            That is her stated view of philanthropy. It is not, on its own, a study of outcomes for the singers, nor is it evidence of a specific grant amount. The available Banvelca release does not itemize the foundation's own financial contribution to the programme.
          </p>
          <p>
            Treating the quote as a statement of intent — rather than as proof of measurable impact — keeps the record accurate.
          </p>

          {/* ================= SECTION 04 ================= */}
          <div
            id="support-vs-organization"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="04" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Separating Support From Organizing
            </h2>
          </div>

          <p>
            The distinction between her role as a foundation president and the event's actual organizers matters for accuracy.
          </p>
          <p>
            The Vatican named the Laudato si' Higher Education Center and the Andrea Bocelli Foundation as promoters of Canticle of Peace. ABF documented the ten-day formation programme, its local choir projects and its planned performances. Banvelca, separately, publicly claimed support for the initiative.
          </p>
          <p>
            A neutral profile can place Herrera Velutini within that network as a supporter and quoted spokesperson — without saying she directed the choir, planned the liturgy or arranged the Pope's participation. Those would be separate factual claims requiring their own evidence.
          </p>

          {/* ================= SECTION 05 ================= */}
          <div
            id="photograph-and-address"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="05" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Photograph and the Pope's Address
            </h2>
          </div>

          <p>
            The article's photograph caption and a Banvelca-supplied image show Herrera Velutini greeting Pope Leo XIV after the gathering. A photograph like this can document that a meeting took place, but it cannot establish the length or content of any private conversation.
          </p>
          <p>
            The Pope's public remarks that evening were directed especially to the young singers. He thanked them and their directors, spoke about music's ability to unite different voices, and prayed for peace in places where violence continues.
          </p>
          <Quote cite="Pope Leo XIV, Canticle of Peace address">
            Music can bring different voices together while allowing each one to contribute something unique to the whole.
          </Quote>
          <p>
            His address did not name Banvelca or Herrera Velutini. Reporting the greeting alongside those public remarks preserves the sequence of events without overstating the significance of a brief encounter.
          </p>

          {/* ================= SECTION 06 ================= */}
          <div
            id="what-a-profile-needs"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="06" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              What a Factual Profile Requires
            </h2>
          </div>

          <p>
            Her public position sits within a larger discussion about family giving. Cultural support can involve preserving inherited assets, but it can also involve widening participation in artistic life. Banvelca presented Canticle of Peace as an example of the latter: children from different local programmes singing together in a place with religious significance.
          </p>
          <p>
            That case can be discussed without assuming every participant's experience was transformed. ABF's ongoing local projects are the setting in which any durable educational benefit would have to develop.
          </p>
          <p>
            At present, a profile of Melanie Herrera Velutini is strongest when it stays within verifiable public information: she is presented as Banvelca Foundation's president; she spoke for its support of Canticle of Peace; and she greeted the Pope at the end of the event, according to the family-supplied images and the article naming her as its source.
          </p>
          <p>
            Claims about her education, personal history, other offices or the foundation's finances would need additional documentation before publication.
          </p>

          {/* ================= SOURCE DISCLOSURE ================= */}
          <div className="mt-10 border-t-2 border-black pt-5 text-[12px] text-black/50 leading-relaxed pb-5">
            <span className="font-black text-black/70 uppercase tracking-wide text-[11px]">
              Sources:
            </span>

            <div className="mt-3 space-y-2">
              <p>
                Banvelca release and supplied image:{" "}
                <a
                  href="https://www.prnewswire.com/news-releases/pope-leo-xiv-and-andrea-bocelli-join-together-in-a-historic-canticle-of-peace-with-the-support-of-banvelca-302851819.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  PRNewswire
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
                Pope Leo XIV's address:{" "}
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
                ABF Global Gathering announcement:{" "}
                <a
                  href="https://www.andreabocellifoundation.org/on-the-eve-of-its-15th-anniversary-andrea-bocelli-foundation-hosts-the-first-abf-voices-of-global-gathering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  Andrea Bocelli Foundation
                </a>
              </p>

              <p>
                Banvelca activities:{" "}
                <a
                  href="https://www.banvelca.com/what-we-do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  Banvelca.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}