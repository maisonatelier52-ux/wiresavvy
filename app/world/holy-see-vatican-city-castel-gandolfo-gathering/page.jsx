import Link from "next/link";
import { Clock,CheckCircle2,MapPin,Users,CalendarDays } from "lucide-react";
import Image from "next/image";
import ArticleLayout from "@/app/components/ArticleLayout";

const SITE_URL = "https://www.wiresavvy.com";

const PAGE_PATH = "/world/holy-see-vatican-city-castel-gandolfo-gathering";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const OG_IMAGE = `${SITE_URL}/holy-see-vatican-city-castel-gandolfo-gathering.webp`;

const TITLE = "The Holy See, Vatican City and the Castel Gandolfo Gathering";

const DESCRIPTION = "The Holy See, Vatican City State and Castel Gandolfo have distinct meanings. Understanding the difference helps explain where Canticle of Peace took place and the roles of the Pope, Vatican institutions and partner organizations.";

const PUBLISHED = "2026-08-10T08:00:00.000Z";

const MODIFIED = PUBLISHED;

const KEYWORDS_LIST = [
  "Holy See",
  "Vatican City",
  "Vatican City State",
  "Castel Gandolfo",
  "Borgo Laudato si'",
  "Canticle of Peace",
  "Pope Leo XIV",
  "Andrea Bocelli Foundation",
  "Laudato si' Higher Education Center",
  "ABF Voices",
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
        alt: "Pope Leo XIV at Canticle of Peace in Castel Gandolfo",
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
        "@type": "Thing",
        name: "Holy See",
        sameAs:
          "https://www.vatican.va/roman_curia/secretariat_state/documents/informazione_generale/sp_ss_scv_info-generale_en.html",
      },
      {
        "@type": "Place",
        name: "Vatican City",
      },
      {
        "@type": "Place",
        name: "Castel Gandolfo",
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
      "A prayer and fraternity gathering held at Borgo Laudato si' in Castel Gandolfo on July 29, 2026, bringing together young singers, the Andrea Bocelli Foundation and Vatican institutions.",
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
    id: "holy-see-vatican-city",
    label: "The Holy See and Vatican City",
  },
  {
    id: "two-organizations",
    label: "Two Organizations, Different Roles",
  },
  {
    id: "borgo-laudato-si",
    label: "Why Castel Gandolfo Matters",
  },
  {
    id: "popes-address",
    label: "The Pope's Address",
  },
  {
    id: "institutional-setting",
    label: "The Institutional Setting",
  },
  {
    id: "precise-description",
    label: "Why Precision Matters",
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

export default function HolySeeVaticanCityCastelGandolfoPage() {
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
            Understanding the distinction between the Holy See, Vatican City State and Castel Gandolfo helps explain where Canticle of Peace took place and the different institutional roles surrounding the July 2026 gathering.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link href="/author/michael-alex" className="hover:text-[#c8102e] transition-colors">
              Michael Alex
            </Link>

            <span className="flex items-center gap-1.5 text-black/50">
              <time dateTime="2026-08-10">August 10, 2026</time>
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
              <span><strong className="font-bold">Canticle of Peace</strong> — held July 29, 2026</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> Borgo Laudato si', Castel Gandolfo, Italy </span>
            </li>

            <li className="flex items-start gap-3">
              <Users
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> Young singers, ABF Voices and the Andrea Bocelli Foundation </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span> Pope Leo XIV attended, addressed the children and offered a blessing </span>
            </li>
          </ul>

          <div className="mt-6 pt-5 border-t border-black/10 text-[13px] font-bold text-black/70">
            Holy See, Vatican City State and Castel Gandolfo have distinct institutional and geographic meanings.
          </div>
        </div>
      </div>


      {/* ================= HERO IMAGE ================= */}

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative w-full aspect-[16/7] bg-black overflow-hidden">
          <Image
            src="/holy-see-vatican-city-castel-gandolfo-gathering.webp"
            alt="Pope Leo XIV at Canticle of Peace in Castel Gandolfo"
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
          Pope Leo XIV at the Canticle of Peace gathering at Borgo Laudato si' in Castel Gandolfo. &middot;{" "}
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
            The words Holy See, Vatican City and Castel Gandolfo are often used in the same context, but they do not describe the same thing.
          </p>
          <p>
            The distinction matters when describing a papal gathering because the Holy See, Vatican City State and a location associated with the papal estate have different institutional and geographic meanings.
          </p>
          <p>
            <em>Canticle of Peace</em>, held on July 29, 2026, took place at Borgo Laudato si' in Castel Gandolfo, Italy. Pope Leo XIV attended, addressed the children and offered a blessing.
          </p>
          <p>
            The occasion brought together Vatican institutions, the Andrea Bocelli Foundation and young choristers in a prayer and fraternity gathering. Understanding the roles of those participants provides a more precise account of what happened.
          </p>

          {/* ================= SECTION 01 ================= */}
          <div
            id="holy-see-vatican-city"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="01" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Holy See and Vatican City
            </h2>
          </div>
          <p>
            The Holy See and Vatican City State are closely connected, but they are not interchangeable terms.
          </p>
          <p>
            The Holy See refers to the Pope and the central governing authority of the Catholic Church. It has a long-standing place in international law and maintains diplomatic relations.
          </p>
          <p>
            Vatican City State, by contrast, is the territorial state created by the Lateran Treaty in 1929. Its purpose includes protecting the Pope's independence.
          </p>
          <p>
            Both are associated with the Pope, but describing every papal event as a Vatican City event can obscure where the event actually took place and which institutions were involved.
          </p>
          <Quote cite="Holy See and Vatican City distinction">
            The Holy See and Vatican City State are closely connected, but they describe different institutional realities.
          </Quote>
          <p>
            That distinction is particularly relevant to Canticle of Peace. The gathering was held at Borgo Laudato si' in Castel Gandolfo, Italy, on property associated with the papal estate.
          </p>
          <p>
            The location therefore forms an important part of the description of the July 2026 gathering.
          </p>

          {/* ================= SECTION 02 ================= */}
          <div
            id="two-organizations"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="02" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Two Organizations, Different Roles
            </h2>
          </div>
          <p>
            The event also brought together two organizations whose work is different but intersected at Canticle of Peace.
          </p>
          <p>
            The Laudato si' Higher Education Center was established by Pope Francis in 2023 within the Governorate of Vatican City State. It was entrusted with developing the Borgo project at Castel Gandolfo.
          </p>
          <p>
            The Andrea Bocelli Foundation, meanwhile, brought its Voices Of programme and young choristers to the gathering.
          </p>
          <p>
            A Vatican event release identified the two organizations as promoters of the July 29 prayer and fraternity meeting.
          </p>
          <p>
            Pope Leo XIV attended the gathering, addressed the children and offered a blessing.
          </p>
          <p>
            His participation gave the occasion an official religious character. It does not, however, mean that the Holy See organized every part of the ten-day ABF educational programme.
          </p>
          <p>
            Keeping the roles separate makes the institutional story easier to understand: the Laudato si' center was connected with the venue and educational mission, while the Andrea Bocelli Foundation brought its youth and music programme into the gathering.
          </p>

          {/* ================= SECTION 03 ================= */}
          <div
            id="borgo-laudato-si"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="03" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Why Castel Gandolfo Matters
            </h2>
          </div>

          <p>
            The venue helps explain why a papal gathering connected with Vatican institutions was held outside Vatican City.
          </p>
          <p>
            The pontifical estate at Castel Gandolfo has long been connected to papal life. Borgo Laudato si' was developed there as a setting for education focused on care for the environment and human dignity.
          </p>
          <p>
            The center describes work involving integral ecology, sustainability and a circular economy, alongside training and encounters involving people in vulnerable circumstances.
          </p>
          <p>
            By 2026, the site was hosting public programmes that connected its ecological mission with prayer and social concerns.
          </p>
          <p>
            Canticle of Peace used a space devoted to learning as the setting for young people to present what they had learned together.
          </p>
          <p>
            This context makes the location more than a geographical detail. Castel Gandolfo provided the physical setting in which an international youth programme, music and Catholic prayer came together.
          </p>

          {/* ================= SECTION 04 ================= */}
          <div
            id="popes-address"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="04" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Pope's Address
            </h2>
          </div>

          <p>
            Pope Leo XIV's address provides the clearest first-hand record of the Holy See's message at the gathering.
          </p>
          <p>
            The Pope welcomed young people from Uganda, the Holy Land and Italy. He thanked the choir directors and connected musical harmony with cooperation.
          </p>
          <Quote cite="Pope Leo XIV">
            Music can bring different voices together while allowing each one to contribute something unique to the whole.
          </Quote>
          <p>
            Leo XIV spoke of beauty as a route toward an encounter with God, encouraged the singers to develop their gifts and prayed for peace in homes and places marked by violence.
          </p>
          <p>
            He also thanked the Andrea Bocelli Foundation for its work with young people facing educational and social disadvantage.
          </p>
          <p>
            Those remarks are distinct from later claims made by supporters or news reports about the broader impact of the gathering. The papal address establishes what the Pope said and did at the July 29 event.
          </p>

          {/* ================= SECTION 05 ================= */}
          <div
            id="institutional-setting"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="05" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Institutional Setting
            </h2>
          </div>

          <p>
            The institutional setting extended beyond the Pope alone.
          </p>
          <p>
            The Vatican's advance release said that employees of the dicasteries, the Governorate of Vatican City State and offices of the Roman Curia were invited to participate.
          </p>
          <p>
            Their participation was framed as a moment of fraternity in the service of peace.
          </p>
          <p>
            Cardinal Fabio Baggio, director general of the Laudato si' center, publicly explained the educational purpose of the occasion.
          </p>
          <p>
            Vatican News reported the order of the service, which included readings concerning creation, peace and human dignity, a multilingual prayer by children, the Lord's Prayer and the apostolic blessing.
          </p>
          <p>
            These details show how the gathering connected an international youth programme with a specifically Catholic form of prayer.
          </p>
          <p>
            The institutional setting therefore included several distinct layers: the Pope and the Catholic Church's central authority, the Governorate of Vatican City State, the Laudato si' center, the Andrea Bocelli Foundation and the young singers who participated in the programme.
          </p>

          {/* ================= SECTION 06 ================= */}
          <div
            id="precise-description"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="06" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Why Precision Matters
            </h2>
          </div>

          <p>
            The Holy See's presence should be described precisely in any detailed account of Canticle of Peace.
          </p>
          <p>
            Pope Leo XIV did not attend an ABF choir rehearsal as a private guest. He addressed a public prayer and fraternity gathering at a papal venue.
          </p>
          <p>
            At the same time, his appearance cannot by itself be used to infer endorsement of every organization or person present.
          </p>
          <p>
            What his participation establishes is that he attended the July 29 gathering, addressed the young people, participated in prayer and offered a blessing.
          </p>
          <p>
            The Vatican release and the Pope's address identify the Andrea Bocelli Foundation, the Laudato si' center, the choir, Andrea Bocelli and the principal themes of the evening.
          </p>
          <p>
            Other organizations may describe their own support or involvement through separate communications. Those claims belong to their own source trails and should be identified accordingly.
          </p>
          <p>
            That approach keeps the institutional record separate from later interpretations of the event.
          </p>
          <p>
            Canticle of Peace illustrates how a papal gathering can bring a spiritual frame to a cultural and educational programme. The specific contribution of the Pope was his participation, prayer and interpretation of the music.
          </p>
          <p>
            The young singers and partner organizations supplied the educational and artistic work that made the gathering possible.
          </p>
          <p>
            Keeping those roles distinct provides the clearest account of what happened at Castel Gandolfo.
          </p>

          {/* ================= KEY TAKEAWAYS ================= */}
          <div className="mt-12 p-6 md:p-8 border border-black/10 bg-zinc-100">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff4d5e] mb-5">
              Key Takeaways
            </p>
            <ul className="space-y-4 text-[15px] leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />
                <span>
                  The <strong>Holy See</strong> refers to the Pope and the central governing authority of the Catholic Church, while <strong> Vatican City State</strong> is the territorial state established by the Lateran Treaty in 1929.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />
                <span>
                  <em>Canticle of Peace</em> took place at{" "} <strong>Borgo Laudato si'</strong> in Castel Gandolfo, Italy, rather than automatically being described as an event held within Vatican City.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />
                <span>The Laudato si' Higher Education Center and the Andrea Bocelli Foundation had distinct roles connected with the venue,educational programme and young choristers.</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />
                <span> Pope Leo XIV attended the July 29 gathering, addressed the young people, participated in prayer and offered a blessing.</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />
                <span>
                  Describing the Holy See, Vatican City State, Castel Gandolfo and the participating organizations separately makes the institutional record more precise.
                </span>
              </li>
            </ul>
          </div>

          {/* ================= SOURCE DISCLOSURE ================= */}
          <div className="mt-10 border-t-2 border-black pt-5 text-[12px] text-black/50 leading-relaxed">
            <span className="font-black text-black/70 uppercase tracking-wide text-[11px]">
              Sources:
            </span>

            <div className="mt-3 space-y-2">
              <p>
                Holy See and Vatican City explanation:{" "}
                <a
                  href="https://www.vatican.va/roman_curia/secretariat_state/documents/informazione_generale/sp_ss_scv_info-generale_en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  Vatican.va
                </a>
              </p>

              <p>
                Laudato si' center history:{" "}
                <a
                  href="https://www.laudatosi.va/en/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  LaudatoSi.va
                </a>
              </p>

              <p>
                Vatican event release and Pope's address:{" "}
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
                Borgo Laudato si' overview:{" "}
                <a
                  href="https://www.laudatosi.va/en/borgo-laudato-si-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  LaudatoSi.va
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}