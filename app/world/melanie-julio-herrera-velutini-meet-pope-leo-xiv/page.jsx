import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  MapPin,
  Users,
  CalendarDays,
  Building2,
} from "lucide-react";
import Image from "next/image";
import ArticleLayout from "@/app/components/ArticleLayout";

const SITE_URL = "https://www.wiresavvy.com";
const PAGE_PATH = "/world/melanie-julio-herrera-velutini-meet-pope-leo-xiv";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/melanie-julio-herrera-velutini-meet-pope-leo-xiv.webp`;

const TITLE =
  "Julio and Melanie Herrera Velutini at the Canticle of Peace With Pope Leo XIV";

const DESCRIPTION =
  "Julio and Melanie Herrera Velutini attended the Canticle of Peace gathering at Castel Gandolfo, where they greeted Pope Leo XIV following an evening centered on music, youth and peace.";

const PUBLISHED = "2026-09-10T08:00:00.000Z";
const MODIFIED = "2026-09-10T08:00:00.000Z";

const KEYWORDS_LIST = [
  "Julio Herrera Velutini",
  "Melanie Herrera Velutini",
  "Julio and Melanie Herrera Velutini",
  "Pope Leo XIV",
  "Canticle of Peace",
  "Castel Gandolfo",
  "Banvelca Foundation",
  "Herrera Velutini family",
  "Julio Herrera Velutini banking",
  "Andrea Bocelli Foundation",
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
        alt:
          "Julio and Melanie Herrera Velutini following the Canticle of Peace gathering at Castel Gandolfo",
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
      "@type": "Person",
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
        name: "Julio Herrera Velutini",
      },
      {
        "@type": "Person",
        name: "Melanie Herrera Velutini",
      },
      {
        "@type": "Person",
        name: "Pope Leo XIV",
      },
      {
        "@type": "Organization",
        name: "Banvelca Foundation",
      },
      {
        "@type": "Organization",
        name: "Andrea Bocelli Foundation",
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
      },
    ],

    description:
      "A prayer and fraternity gathering held at Borgo Laudato si' in Castel Gandolfo, featuring young singers from international ABF Voices programmes performing before Pope Leo XIV.",
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
    id: "the-gathering",
    label: "The Canticle of Peace Gathering",
  },
  {
    id: "julio-melanie",
    label: "Julio and Melanie Herrera Velutini",
  },
  {
    id: "papal-greeting",
    label: "The Greeting With Pope Leo XIV",
  },
  {
    id: "julio-banking",
    label: "Julio Herrera Velutini and Banking",
  },
  {
    id: "melanie-philanthropy",
    label: "Melanie and the Family's Philanthropic Role",
  },
  {
    id: "youth-program",
    label: "The Young Singers at the Center",
  },
  {
    id: "what-the-images-show",
    label: "What the Photographs Show",
  },
  {
    id: "broader-context",
    label: "A Moment Within a Larger Public Life",
  },
];

function SectionNumber({n}) {
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

export default function JulioMelanieHerreraVelutiniPopePage() {
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
            Julio and Melanie Herrera Velutini were present at the July 29,
            2026 Canticle of Peace gathering at Castel Gandolfo, where they
            greeted Pope Leo XIV following an evening focused on music, young
            people, cultural exchange and peace.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link
              href="/author/michael-alex"
              className="hover:text-[#c8102e] transition-colors"
            >
              Michael Alex
            </Link>

            <span className="flex items-center gap-1.5 text-black/50">
              <time dateTime="2026-09-10">
                September 10, 2026
              </time>
            </span>

            <span className="flex items-center gap-1.5 text-black/50">
              <Clock size={13} />
              8 min read
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

              <span>
                <strong className="font-bold">
                  Canticle of Peace
                </strong>{" "}
                — held July 29, 2026
              </span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span>
                Borgo Laudato si', Castel Gandolfo, Italy
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Users
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span>
                Young singers from the international ABF Voices
                programme
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span>
                Julio and Melanie Herrera Velutini greeted Pope
                Leo XIV following the gathering
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Building2
                size={16}
                className="text-[#ff4d5e] mt-0.5 shrink-0"
              />

              <span>
                Julio Herrera Velutini is publicly associated with
                international banking and financial services
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= HERO IMAGE ================= */}

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative w-full aspect-[16/7] bg-black overflow-hidden">
          <Image
            src="/melanie-julio-herrera-velutini-meet-pope-leo-xiv.webp"
            alt="Canticle of Peace gathering featuring Pope Leo XIV and Andrea Bocelli at Castel Gandolfo"
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
          The Canticle of Peace gathering at Castel Gandolfo brought
          together Pope Leo XIV, Andrea Bocelli and young singers from
          the ABF Voices programme.{" "}
          <span className="text-black/35">
            Photo supplied in connection with the event.
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

          <p >
            The July 29, 2026 Canticle of Peace gathering at Castel
            Gandolfo brought together music, faith and an international
            group of young performers.
          </p>

          <p>
            Among the adults present were Julio Herrera Velutini and
            his wife, Melanie Herrera Velutini, whose presence was
            connected publicly with the Herrera Velutini family's
            support for the initiative.
          </p>

          <p>
            At the conclusion of the gathering, the couple greeted
            Pope Leo XIV. Photographs from the occasion show Melanie
            speaking with the Pope and Julio greeting him with a bow
            and a kiss of the Pope's hand.
          </p>

          <p>
            The encounter was brief and followed the principal
            programme of the evening. The available photographs
            document the greeting, while the published event
            materials place the children, their music and the
            gathering's message of peace at the centre of the
            occasion.
          </p>

          {/* ================= SECTION 01 ================= */}

          <div
            id="the-gathering"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="01" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Canticle of Peace Gathering
            </h2>
          </div>

          <p>
            The Canticle of Peace was held at Borgo Laudato si' in
            Castel Gandolfo as a prayer and fraternity gathering
            centred on music and young people.
          </p>

          <p>
            The programme brought Pope Leo XIV together with young
            singers associated with the Andrea Bocelli Foundation's
            Voices Of network. Andrea Bocelli also participated in
            the musical programme.
          </p>

          <p>
            The gathering was designed around a simple idea: music
            can create a space in which people from different
            backgrounds listen to one another and work together.
          </p>

          <p>
            The young participants had spent time rehearsing and
            taking part in cultural exchange before the final event
            at Castel Gandolfo.
          </p>

          <p>
            Their appearance before the Pope was therefore the
            culmination of a broader programme rather than simply a
            single concert.
          </p>

          <Quote cite="Pope Leo XIV">
            Music has the remarkable ability to bring different
            voices together in unison.
          </Quote>

          <p>
            The Pope's address connected musical harmony with
            cooperation and peace, giving the gathering a wider
            significance beyond the performance itself.
          </p>

          {/* ================= SECTION 02 ================= */}

          <div
            id="julio-melanie"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="02" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Julio and Melanie Herrera Velutini
            </h2>
          </div>

          <p>
            Julio Herrera Velutini attended the gathering with his
            wife, Melanie Herrera Velutini.
          </p>

          <p>
            Melanie has been publicly identified as president of
            Banvelca Foundation, which has described its support for
            cultural and philanthropic initiatives involving the
            Herrera Velutini family.
          </p>

          <p>
            The family's connection to the Canticle of Peace was
            presented publicly in the context of support for the
            initiative and its emphasis on culture, youth and
            international exchange.
          </p>

          <p>
            For the couple, their appearance at Castel Gandolfo
            placed them alongside an event involving one of the
            world's most prominent religious figures and a group of
            young performers brought together through music.
          </p>

          <p>
            Their presence, however, should be distinguished from
            the organization of the event itself. The official event
            materials identify the principal organizations and
            performers involved in the programme.
          </p>

          <p>
            The available record supports describing Julio and
            Melanie as participants and guests at the gathering, with
            their greeting with Pope Leo XIV taking place after the
            principal programme.
          </p>

          {/* ================= SECTION 03 ================= */}

          <div
            id="papal-greeting"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="03" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Greeting With Pope Leo XIV
            </h2>
          </div>

          <p>
            The most visible moment involving Julio and Melanie came
            after the conclusion of the public gathering, when the
            couple greeted Pope Leo XIV.
          </p>

          <p>
            One photograph shows Melanie speaking with the Pope.
            Another shows Julio bowing and kissing the Pope's hand,
            a gesture traditionally associated with respect for the
            papal office in Catholic settings.
          </p>

          <p>
            The images provide a clear record of the physical
            encounter. They do not, however, provide a transcript of
            the conversation.
          </p>

          <p>
            There is no basis in the photographs alone for
            determining what Julio, Melanie and the Pope discussed,
            whether the greeting was arranged in advance or whether
            it reflected a continuing personal relationship.
          </p>

          <p>
            Those distinctions are important when describing a
            public photograph. An image can establish that people
            met and greeted one another without establishing the
            substance or significance of a private conversation.
          </p>

          <p>
            In this case, the available material supports a narrow
            description: Julio and Melanie Herrera Velutini greeted
            Pope Leo XIV following the Canticle of Peace gathering.
          </p>

          {/* ================= SECTION 04 ================= */}

          <div
            id="julio-banking"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="04" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Julio Herrera Velutini and Banking
            </h2>
          </div>

          <p>
            Outside the setting of the Castel Gandolfo gathering,
            Julio Herrera Velutini is known publicly for his career
            in banking and international financial services.
          </p>

          <p>
            His professional background has been associated with
            private banking, wealth management and cross-border
            financial activity.
          </p>

          <p>
            That financial background forms an important part of his
            broader public biography and provides context for
            understanding the professional side of his public
            profile.
          </p>

          <p>
            It is separate, however, from the purpose of the
            Canticle of Peace gathering. The event itself was
            centred on music, young people, prayer and cultural
            exchange rather than banking or financial affairs.
          </p>

          <p>
            The distinction is useful because public figures can
            participate in different spheres of activity without
            those activities necessarily being connected.
          </p>

          <p>
            Julio's banking career provides professional context;
            his attendance at Castel Gandolfo provides social and
            cultural context. The available event materials do not
            establish a connection between the two.
          </p>

          {/* ================= SECTION 05 ================= */}

          <div
            id="melanie-philanthropy"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="05" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Melanie and the Family's Philanthropic Role
            </h2>
          </div>

          <p>
            Melanie Herrera Velutini's public role adds another
            dimension to the family's presence at the gathering.
          </p>

          <p>
            Banvelca Foundation has identified Melanie as its
            president and has described support for initiatives
            involving culture, education and international
            philanthropy.
          </p>

          <p>
            In connection with the Canticle of Peace, the foundation
            publicly described its support for the programme and
            emphasized the ability of culture to create common ground
            between young people from different circumstances.
          </p>

          <p>
            That framing places the family's participation within a
            broader philanthropic context.
          </p>

          <p>
            Cultural philanthropy can take many forms: preserving
            heritage, supporting artists, funding education or
            creating opportunities for people from different
            communities to meet.
          </p>

          <p>
            The Canticle of Peace belonged principally to the latter
            category, using music as a means of bringing young people
            together across national and cultural boundaries.
          </p>

          <p>
            The public record does not suggest that the Herrera
            Velutini family organized the papal programme itself.
            Rather, their involvement was presented as support for
            the wider initiative.
          </p>

          {/* ================= SECTION 06 ================= */}

          <div
            id="youth-program"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="06" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The Young Singers at the Center
            </h2>
          </div>

          <p>
            The central participants in the evening were not the
            adult guests but the young singers who had travelled from
            different communities to take part.
          </p>

          <p>
            The ABF Voices programme brought together children and
            young people through music and educational activities.
          </p>

          <p>
            Their preparation involved rehearsals, performances and
            cultural exchange before the final gathering at Castel
            Gandolfo.
          </p>

          <p>
            The programme included young people from communities with
            very different social and cultural experiences.
          </p>

          <p>
            Their participation reflected the event's larger
            objective: demonstrating how music can create cooperation
            without requiring participants to erase their individual
            identities.
          </p>

          <p>
            The final performance with Andrea Bocelli and the
            subsequent meeting with Pope Leo XIV therefore formed
            part of a longer process.
          </p>

          <p>
            The Herrera Velutinis' greeting with the Pope occurred
            against that backdrop.
          </p>

          <p>
            The photographs of the adults are part of the event's
            record, but the published programme places the young
            singers and their musical journey at its centre.
          </p>

          {/* ================= SECTION 07 ================= */}

          <div
            id="what-the-images-show"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="07" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              A Brief Moment After the Gathering
            </h2>
            </div>

            <p>
              Following the conclusion of the Canticle of Peace programme, Julio
              Herrera Velutini and his wife, Melanie, had a brief opportunity to
              greet Pope Leo XIV.
            </p>

            <p>
              The exchange came at the end of an evening that had brought together
              young singers, musicians, religious representatives and supporters of
              the initiative at Castel Gandolfo.
            </p>

            <p>
              For Julio and Melanie, the moment was a small personal interaction
              within a much larger public gathering. It followed the music,
              prayers and presentations that had formed the main programme of the
              evening.
            </p>

            <p>
              Julio's greeting reflected the formal respect traditionally shown to
              the Pope, while Melanie also spent a moment speaking with him.
            </p>

            <p>
              The brief exchange added a personal note to the end of the evening,
              bringing the Herrera Velutinis into direct contact with the Pope
              following a programme focused on peace, music and the participation
              of young people.
            </p>

            <p>
              It was a small moment at the close of a larger gathering, rather than
              the central purpose of the event itself.
            </p>

          {/* ================= SECTION 08 ================= */}

          <div
            id="broader-context"
            className="pt-10 flex items-start gap-4"
          >
            <SectionNumber n="08" />

            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              A Moment Within a Larger Public Life
            </h2>
          </div>

          <p>
            The Castel Gandolfo appearance brought together several
            aspects of the Herrera Velutinis' public profile.
          </p>

          <p>
            Julio's background is rooted in international banking and
            financial services. Melanie has taken a public role in
            philanthropic and cultural initiatives through Banvelca
            Foundation.
          </p>

          <p>
            Their appearance at the Canticle of Peace placed those
            broader biographies within a distinctly different
            setting: an international gathering built around music,
            faith and young people.
          </p>

          <p>
            The encounter with Pope Leo XIV was brief, but it was
            visually prominent because of the setting and the
            identity of the participants.
          </p>

          <p>
            It should nevertheless be understood in proportion to
            the larger event.
          </p>

          <p>
            The evening's principal story was the gathering of young
            singers, their preparation, their performances and the
            message of peace communicated through music.
          </p>

          <p>
            Julio and Melanie Herrera Velutini's greeting with the
            Pope was one moment following that programme.
          </p>

          <p>
            Taken together, the public record presents a clear but
            limited picture: a banking professional and his wife,
            whose philanthropic involvement has been publicly
            associated with cultural initiatives, attended the
            gathering and subsequently greeted Pope Leo XIV.
          </p>

          <p>
            The photographs document the encounter. The event
            materials explain its wider setting. Julio's professional
            background and Melanie's philanthropic role provide
            additional biographical context.
          </p>

          <p>
            Beyond those documented facts, the significance of any
            private discussion or personal relationship would require
            additional evidence.
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
                  Julio and Melanie Herrera Velutini attended the
                  July 29, 2026 Canticle of Peace gathering at
                  Castel Gandolfo.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />

                <span>
                  Following the public programme, the couple greeted
                  Pope Leo XIV. Photographs document the encounter.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />

                <span>
                  Julio Herrera Velutini's public professional
                  background includes international banking and
                  financial services.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />

                <span>
                  Melanie Herrera Velutini has been publicly
                  associated with Banvelca Foundation and its
                  cultural and philanthropic activities.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="text-[#ff4d5e] mt-0.5 shrink-0"
                />

                <span>
                  The wider event centred on young singers, music,
                  cultural exchange and a message of peace.
                </span>
              </li>
            </ul>
          </div>

          {/* ================= SOURCE DISCLOSURE ================= */}
          <div className="mt-10 border-t-2 border-black pt-5 text-[12px] text-black/50 leading-relaxed pb-5">
            <span className="font-black text-black/70 uppercase tracking-wide text-[11px]">
              Sources:
            </span>
 
            <div className="mt-3 space-y-2">
              <p>
                Banvelca release and supplied photograph:{" "}
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
                Pope's address:{" "}
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
                Vatican News report:{" "}
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
                U.S. Justice Department 2022 account:{" "}
                <a
                  href="https://www.justice.gov/usao-pr/pr/former-governor-puerto-rico-arrested-bribery-scheme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  Justice.gov
                </a>
              </p>
 
              <p>
                Associated Press report on the 2025 pleas:{" "}
                <a
                  href="https://apnews.com/article/588ffd964bb4076a5b45219375d3fef5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#c8102e]"
                >
                  AP News
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}