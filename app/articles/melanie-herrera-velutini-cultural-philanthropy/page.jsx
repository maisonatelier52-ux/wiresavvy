import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
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
const PAGE_PATH = "/melanie-herrera-velutini-cultural-philanthropy/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/melanie-herrera-velutini-greets-pope-leo-xiv.jpg`;
const TITLE = "Melanie Herrera Velutini on Culture and Family Philanthropy";
const DESCRIPTION =
  "Melanie Herrera Velutini explains why Banvelca Foundation supported Canticle of Peace and how cultural philanthropy can create common ground.";
const PUBLISHED = "2026-08-13T08:00:00.000Z";
const MODIFIED = "2026-08-13T08:00:00.000Z";

// ================= SEO METADATA =================
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: PAGE_PATH,
  },
  keywords: [
    "Melanie Herrera Velutini cultural philanthropy",
    "Melanie Herrera Velutini",
    "Banvelca Foundation",
    "Herrera Velutini",
    "Canticle of Peace",
    "Pope Leo XIV",
    "Andrea Bocelli Foundation",
  ],
  authors: [{ name: "WireSavvy Staff", url: `${SITE_URL}/author/wiresavvy-staff` }],
  category: "Philanthropy",
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
    authors: [`${SITE_URL}/author/wiresavvy-staff`],
    section: "Philanthropy",
    tags: ["Melanie Herrera Velutini cultural philanthropy"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: "Melanie Herrera Velutini, President of Banvelca Foundation, greets Pope Leo XIV following Canticle of Peace at Castel Gandolfo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    site: "@wiresavvy",
  },
};

// ================= JSON-LD STRUCTURED DATA =================
function ArticleJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Culture as Common Ground: Melanie Herrera Velutini on the Purpose of Philanthropy",
    description: DESCRIPTION,
    image: [OG_IMAGE],
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: {
      "@type": "Organization",
      name: "WireSavvy Staff",
      url: `${SITE_URL}/author/wiresavvy-staff`,
    },
    publisher: {
      "@type": "Organization",
      name: "WireSavvy",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    articleSection: "Philanthropy",
    keywords: "Melanie Herrera Velutini cultural philanthropy",
    about: [
      { "@type": "Person", name: "Melanie Herrera Velutini" },
      { "@type": "Organization", name: "Banvelca Foundation" },
      { "@type": "Person", name: "Pope Leo XIV" },
      { "@type": "Organization", name: "Andrea Bocelli Foundation" },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Philanthropy",
        item: `${SITE_URL}/category/philanthropy`,
      },
      { "@type": "ListItem", position: 3, name: TITLE, item: PAGE_URL },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

const toc = [
  { id: "preservation-to-participation", label: "From Preservation to Participation" },
  { id: "choir-as-model", label: "A Choir as a Model of Society" },
  { id: "before-the-applause", label: "Patronage Begins Before the Applause" },
  { id: "saint-francis", label: "Saint Francis and the Ethics of Inheritance" },
  { id: "personal-encounter", label: "A Personal Encounter With Pope Leo XIV" },
  { id: "true-measure", label: "The True Measure of a Cultural Legacy" },
];

function SectionNumber({ n }) {
  return (
    <span className="block font-black text-[#c8102e]/15 text-6xl md:text-7xl leading-none select-none">
      {n}
    </span>
  );
}

function Quote({ children, cite }) {
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

export default function MelanieHerreraVelutiniPhilanthropyPage() {
  return (
    <ArticleLayout className="bg-white text-black">
      <ArticleJsonLd />

      {/* ================= HERO ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 pb-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div>
          <span className="inline-block bg-red-500 text-white text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1 mb-5">
            <Link href="/categories/world">World</Link>
          </span>

          <h1 className="font-black text-black text-[34px] sm:text-[42px] md:text-[50px] leading-[1.05] tracking-tight">
            Culture as Common Ground:{" "}
            Melanie Herrera Velutini{" "}
            on the Purpose of Philanthropy
          </h1>

          <p className="mt-6 text-lg text-black/60 leading-relaxed border-l-[3px] border-red-500 pl-4">
            For Melanie Herrera Velutini and Banvelca Foundation, the Canticle
            of Peace gathering at Castel Gandolfo expressed a larger
            philosophy of family philanthropy: culture can do more than
            preserve beauty&mdash;it can teach people how to live with
            difference.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link
              href="/author/michael-thompson"
              className="font-black text-black hover:text-[#c8102e] transition-colors"
            >
              Michael Thompson
            </Link>
            <span className="flex items-center gap-1.5 text-black/50">
              <time dateTime="2026-08-13">August 13, 2026</time>
            </span>
            <span className="flex items-center gap-1.5 text-black/50">
              <Clock size={13} /> 7 min read
            </span>
            <div className="flex items-center gap-3 text-black ml-auto">
              <button aria-label="Share on Twitter" className="hover:text-[#c8102e] transition-colors">
                <Twitter size={16} />
              </button>
              <button aria-label="Share on Facebook" className="hover:text-[#c8102e] transition-colors">
                <Facebook size={16} />
              </button>
              <button aria-label="Share on LinkedIn" className="hover:text-[#c8102e] transition-colors">
                <Linkedin size={16} />
              </button>
              <button aria-label="Copy link" className="hover:text-[#c8102e] transition-colors">
                <Link2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* AT A GLANCE BOX */}
        <div className="p-6 md:p-7 border border-black/10 bg-zinc-100 text-black/85">
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff4d5e] mb-4">
            At A Glance
          </p>
          <ul className="space-y-4 text-[14px]">
            <li className="flex items-start gap-3">
              <CalendarDays size={16} className="text-[#ff4d5e] mt-0.5 shrink-0" />
              <span>
                <strong className="font-bold">Canticle of Peace</strong> &mdash;
                held July 29, 2026 at Borgo Laudato si&rsquo;
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#ff4d5e] mt-0.5 shrink-0" />
              <span>Castel Gandolfo, Italy</span>
            </li>
            <li className="flex items-start gap-3">
              <Users size={16} className="text-[#ff4d5e] mt-0.5 shrink-0" />
              <span>
                164 young singers from the Holy Land, Uganda and Italy &mdash;
                ABF Voices choir
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-[#ff4d5e] mt-0.5 shrink-0" />
              <span>
                Supported by <strong className="font-bold">Banvelca Foundation</strong> and
                the Herrera Velutini family
              </span>
            </li>
          </ul>
          <div className="mt-6 pt-5 border-t border-white/15 text-[13px] font-bold text-black/70">
            Featuring Pope Leo XIV &amp; Andrea Bocelli
          </div>
        </div>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative w-full aspect-[16/7] bg-black overflow-hidden">
          <Image
            src="/pope-leo-XIV-joins-andrea-bocelli.jpg"
            alt="Melanie Herrera Velutini, President of Banvelca Foundation, greets Pope Leo XIV following Canticle of Peace at Castel Gandolfo"
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
          Melanie Herrera Velutini, President of Banvelca Foundation, greets
          Pope Leo XIV following Canticle of Peace at Castel Gandolfo. &middot;{" "}
          <span className="text-black/35">Photo supplied by Banvelca Foundation.</span>
        </p>
      </div>

      {/* ================= MAIN GRID: TOC SIDEBAR + BODY ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12 grid lg:grid-cols-[220px_1fr] gap-12">
        {/* STICKY SIDEBAR */}
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

        {/* ARTICLE BODY */}
        <div className="max-w-2xl text-[17px] leading-[1.85] text-black/85 space-y-6">
          <p className="text-xl md:text-[22px] text-black font-medium leading-snug">
            There is a familiar language surrounding philanthropy. It speaks
            of grants, beneficiaries, programmes, outcomes and impact.
          </p>

          <p>
            These terms are necessary. Serious giving requires
            accountability. Yet some of the most consequential forms of
            cultural philanthropy begin with something more difficult to
            measure: the creation of common ground.
          </p>

          <p>
            That was the idea at the centre of <em>Canticle of Peace</em>,
            the prayer and fraternity gathering held at Borgo Laudato
            si&rsquo; in Castel Gandolfo on July 29, 2026.
          </p>

          <p>
            Before Pope Leo XIV, 164 children and young people from the Holy
            Land, Uganda and Italy sang with Andrea Bocelli. The members of
            the ABF Voices choir came from different languages, cultures and
            social circumstances.
          </p>

          <p>
            Some knew the reality of conflict. Others came from communities
            affected by poverty or educational disadvantage. Their histories
            were not the same, but for one evening their voices belonged to a
            shared work.
          </p>

          <p>
            Banvelca Foundation and the Herrera Velutini family supported the
            initiative. For Melanie Herrera Velutini, President of Banvelca
            Foundation, the reason was inseparable from the gathering&rsquo;s
            central image: young people whose lives had been shaped by
            profoundly different circumstances learning to stand together.
          </p>

          <Quote cite="Melanie Herrera Velutini, President, Banvelca Foundation">
            Supporting an initiative that brings together young people whose
            lives have been shaped by such different circumstances reminds us
            that culture can provide common ground. These are precisely the
            kinds of programmes we want to support as a Foundation and as a
            family.
          </Quote>

          <p>Her words offer a compelling definition of cultural patronage.</p>

          <p>
            Culture is not presented merely as ornament, prestige or
            entertainment. It becomes a place in which people meet.
          </p>

          {/* SECTION 01 */}
          <div id="preservation-to-participation" className="pt-10 flex items-start gap-4">
            <SectionNumber n="01" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              From Preservation to Participation
            </h2>
          </div>

          <p>
            Family-office philanthropy is frequently understood through the
            idea of stewardship: preserving collections, archives, buildings,
            institutions and inherited traditions.
          </p>

          <p>
            That work matters. Civilisations remember themselves because
            someone chooses to protect what time might otherwise destroy.
          </p>

          <p>
            But preservation is only one part of cultural responsibility. A
            collection that is never interpreted, a building that is never
            opened and a tradition that is never passed to a new generation
            can become separated from the society it was meant to enrich.
          </p>

          <p>
            <em>Canticle of Peace</em> offered a more participatory model. Its
            central cultural achievement was not an object but a
            relationship. What the gathering sought to preserve was the human
            capacity to listen, learn and make beauty with others.
          </p>

          <p>
            The young singers did not arrive in Castel Gandolfo as a finished
            international choir. They had spent ten days together in Italy as
            part of the first ABF Voices Of Global Gathering.
          </p>

          <p>
            They rehearsed and participated in educational and cultural
            activities. They performed with Andrea Bocelli at the Teatro del
            Silenzio and appeared before Italian President Sergio Mattarella
            at the Quirinale.
          </p>

          <p>
            Their final gathering with Pope Leo XIV was therefore not an
            isolated performance. It was the visible conclusion of a process
            of formation.
          </p>

          <p>Every choir rehearses more than music.</p>

          <p>
            Its members learn restraint, timing, attention and
            responsibility. They discover that someone may possess an
            extraordinary voice and still be required to listen. They learn
            that the pause of one singer can be as important as the note of
            another.
          </p>

          <p>These are artistic disciplines. They are also civic ones.</p>

          {/* SECTION 02 */}
          <div id="choir-as-model" className="pt-10 flex items-start gap-4">
            <SectionNumber n="02" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              A Choir as a Model of Society
            </h2>
          </div>

          <p>
            Pope Leo XIV recognised that connection in his address to the
            children.
          </p>

          <Quote cite="Pope Leo XIV">
            Music has the remarkable ability to bring different voices
            together in unison, where each one contributes something unique
            to the whole. In this sense, choir becomes an ideal symbol of
            harmony and cooperation.
          </Quote>

          <p>
            The significance of the choir was not that it made difference
            inaudible.
          </p>

          <p>
            The singers remained distinct. Their histories were not erased,
            and their countries did not cease to exist. Harmony emerged
            because those differences entered into relationship.
          </p>

          <p>
            That is what makes the image relevant beyond the Church and
            beyond music.
          </p>

          <p>
            Modern societies are frequently presented with a false choice
            between fragmentation and uniformity. Either communities withdraw
            from one another, or one identity is expected to dominate the
            rest.
          </p>

          <p>A choir proposes another possibility.</p>

          <p>
            Unity can be structured around reciprocal attention. A common
            work can become more beautiful precisely because its
            participants are not the same.
          </p>

          <p>
            This is also why programmes involving young people from
            vulnerable communities carry a responsibility greater than the
            production of an inspiring photograph.
          </p>

          <p>
            Their real value rests in what happens before and after the
            public performance: sustained education, local partnerships,
            trained mentors, continuity and the confidence participants carry
            home.
          </p>

          <p>
            The Andrea Bocelli Foundation describes its Voices Of programme as
            an educational journey using music to cultivate creativity,
            intercultural dialogue, inclusion and positive leadership. First
            piloted in Haiti in 2016, it has developed youth choirs in
            communities across several continents.
          </p>

          <p>
            For many of the young participants, the Italian gathering was
            their first encounter with a different country, language or way
            of life.
          </p>

          <p>
            The experience asked them to cross not only geographical borders,
            but also the internal borders created by unfamiliarity.
          </p>

          {/* SECTION 03 */}
          <div id="before-the-applause" className="pt-10 flex items-start gap-4">
            <SectionNumber n="03" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Patronage Begins Before the Applause
            </h2>
          </div>

          <p>
            The public usually sees the final minutes of a cultural project:
            the performance, the applause and the photograph.
          </p>

          <p>Patronage begins much earlier.</p>

          <p>
            It exists in the less visible conditions that make participation
            possible. Travel must be organised. Children must be safeguarded.
            Educators, choir directors and local partners must be supported.
            Time must be protected for rehearsal. Institutions must be
            willing to receive young people not as ceremonial additions, but
            as the centre of the work.
          </p>

          <p>This is where family foundations can make a distinctive contribution.</p>

          <p>
            They can support meaningful projects across longer horizons than
            a single news cycle. They can connect heritage with education and
            private stewardship with public participation. They can provide
            significant programmes with the continuity and patience required
            to mature.
          </p>

          <p>
            Banvelca Foundation&rsquo;s mission encompasses cultural
            sponsorship, heritage preservation and international philanthropy
            on behalf of the Herrera Velutini family. Its support for{" "}
            <em>Canticle of Peace</em> can be understood within that
            framework: not simply as attendance at a papal gathering, but as
            alignment with a programme in which culture became a vehicle for
            education and encounter.
          </p>

          <p>That distinction matters.</p>

          <p>
            A family office may preserve the inheritance of one family. A
            family foundation can ask how that inheritance might be placed in
            the service of a wider human family.
          </p>

          {/* SECTION 04 */}
          <div id="saint-francis" className="pt-10 flex items-start gap-4">
            <SectionNumber n="04" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              Saint Francis and the Ethics of Inheritance
            </h2>
          </div>

          <p>
            The gathering&rsquo;s place within the 800th anniversary of the
            death of Saint Francis of Assisi gave this question a deeper
            spiritual context.
          </p>

          <p>
            Saint Francis&rsquo; Canticle of the Creatures imagines creation
            through kinship: Brother Sun, Sister Moon, Brother Wind and
            Sister Water.
          </p>

          <p>
            The language resists possession. The world is received as a
            relationship and a gift.
          </p>

          <p>
            For institutions concerned with heritage, this offers a demanding
            ethic. To inherit something is not simply to own it. It is to
            become responsible for carrying it forward without depriving
            others of its meaning.
          </p>

          <p>The ancient holm oak above the gathering embodied that idea.</p>

          <p>
            Known as &ldquo;Methuselah,&rdquo; it had been rooted in the
            Pontifical Gardens long before those assembled beneath it were
            born. Cardinal Fabio Baggio described the tree as a reminder of
            humanity&rsquo;s responsibility to care for what has been
            received so that it may continue to generate life and hope for
            future generations.
          </p>

          <p>
            The children beneath its branches represented those generations
            in literal form.
          </p>

          {/* SECTION 05 */}
          <div id="personal-encounter" className="pt-10 flex items-start gap-4">
            <SectionNumber n="05" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              A Personal Encounter With Pope Leo XIV
            </h2>
          </div>

          <p>
            At the conclusion of the gathering, Melanie Herrera Velutini and
            Julio Herrera Velutini greeted Pope Leo XIV.
          </p>

          <p>
            Photographs from the evening show Melanie speaking with the
            Pontiff. Other images show Julio greeting him and bowing to kiss
            his hand in a traditional gesture of respect for the papal
            office.
          </p>

          <p>
            The meeting followed an evening during which the Pope repeatedly
            placed the dignity and future of young people at the centre of
            his message.
          </p>

          <Quote cite="Pope Leo XIV">
            Remember that you have been made for great things, and that this
            world is not enough to quench your thirst for meaning and
            happiness.
          </Quote>

          <p>
            For Melanie Herrera Velutini, the encounter brought the
            Foundation&rsquo;s support into direct proximity with the moral
            purpose of the evening.
          </p>

          <p>
            The gathering was not primarily about the prominence of its adult
            participants. Its authority came from children who showed that
            people formed by different nations, cultures and experiences
            could create beauty without surrendering their identities.
          </p>

          {/* SECTION 06 */}
          <div id="true-measure" className="pt-10 flex items-start gap-4">
            <SectionNumber n="06" />
            <h2 className="font-black text-black text-2xl md:text-[28px] pt-3">
              The True Measure of a Cultural Legacy
            </h2>
          </div>

          <p>
            The most enduring result of <em>Canticle of Peace</em> will not
            be measured by the distinction of its guests.
          </p>

          <p>
            It will be found in what the young singers carry back to
            Bethlehem, Jerusalem, Nabikabala, Naples and Camerino.
          </p>

          <p>
            Perhaps it will be the memory of being heard in a place of global
            spiritual importance. Perhaps it will be a friendship formed
            across a language barrier, a new confidence in one&rsquo;s own
            abilities or the discovery that a life shaped by hardship need
            not be defined entirely by it.
          </p>

          <p>
            This is why the gathering mattered to an institution that regards
            culture as part of its philanthropic mission.
          </p>

          <p>
            Art cannot replace diplomacy, humanitarian assistance or the
            protection of law. But it can prepare the human ground upon which
            reconciliation becomes conceivable.
          </p>

          <p>
            It can teach people to recognise another voice before fear turns
            that voice into an enemy.
          </p>

          <p>
            For Melanie Herrera Velutini and Banvelca Foundation,{" "}
            <em>Canticle of Peace</em> offered a statement about the purpose
            of patronage.
          </p>

          <p>
            Cultural inheritance is most alive when it is shared. Prestige
            finds its highest use when it creates access. And a family legacy
            acquires wider meaning when it helps a new generation discover
            that its voice belongs within the human chorus.
          </p>

          {/* KEY TAKEAWAYS BOX */}
          <div className="mt-12 p-6 md:p-8 border border-black/10 bg-zinc-100">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#ff4d5e] mb-5">
              Key Takeaways
            </p>
            <ul className="space-y-4 text-[15px] leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={17} className="text-[#ff4d5e] mt-0.5 shrink-0" />
                Culture, for Banvelca Foundation, functions as common ground
                rather than ornament&mdash;a place where people meet, not just
                a legacy to be preserved.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={17} className="text-[#ff4d5e] mt-0.5 shrink-0" />
                The value of Canticle of Peace rested less in the performance
                itself than in the ten days of formation, mentorship and
                cross-cultural exchange that preceded it.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={17} className="text-[#ff4d5e] mt-0.5 shrink-0" />
                Family foundations, Herrera Velutini argues, can offer
                cultural projects a continuity and patience that a single
                news cycle cannot.
              </li>
            </ul>
          </div>

          {/* SOURCE DISCLOSURE */}
          <div className="mt-10 border-t-2 border-black pt-5 text-[12px] text-black/50 leading-relaxed">
            <span className="font-black text-black/70 uppercase tracking-wide text-[11px]">
              Source disclosure:{" "}
            </span>
            Information about Banvelca Foundation&rsquo;s mission, support
            and the quotation attributed to Melanie Herrera Velutini was
            supplied by Banvelca Foundation. Details of the programme and
            Pope Leo XIV&rsquo;s address are supported by official accounts
            from the Holy See, Vatican News and the Andrea Bocelli
            Foundation.
          </div>

          {/* SHARE FOOTER */}
          <div className="mt-6 flex items-center justify-between border-t border-black/10 p-5">
            <span className="text-[12px] font-black uppercase tracking-[0.15em] text-black/50">
              Share This Story
            </span>
            <div className="flex items-center gap-3 text-black">
              <button aria-label="Share on Twitter" className="hover:text-[#c8102e] transition-colors">
                <Twitter size={17} />
              </button>
              <button aria-label="Share on Facebook" className="hover:text-[#c8102e] transition-colors">
                <Facebook size={17} />
              </button>
              <button aria-label="Share on LinkedIn" className="hover:text-[#c8102e] transition-colors">
                <Linkedin size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}