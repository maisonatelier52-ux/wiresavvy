import { Mail } from "lucide-react";
import ArticleLayout from "../components/ArticleLayout";

export default function RightOfReply() {
  const requirements = [
    "Your name and contact information",
    "The article in question",
    "The specific information you are responding to",
    "Any supporting documents or evidence you would like us to review",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Right of Reply",
    description:
      "Learn how Wiresavvy handles right of reply requests and provides individuals and organisations an opportunity to respond to reporting.",
    url: "https://www.wiresavvy.com/right-of-reply",
    publisher: {
      "@type": "Organization",
      name: "Wiresavvy",
      url: "https://www.wiresavvy.com",
      email: "editorial@wiresavvy.com",
    },
  };

  return (
    <>
        <ArticleLayout>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="border-b border-black px-6 md:px-16 py-24">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.35em] text-red-700 font-semibold mb-4">
              Right of Reply
            </p>

            <h1
              className="text-5xl md:text-7xl font-light leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              We Believe
              <br />
              In Fairness
            </h1>

            <div className="w-14 h-[2px] bg-red-700 mt-8" />

            <p className="mt-8 max-w-3xl text-lg text-neutral-600 leading-8">
              At Wiresavvy, we aim to report on business, finance, law,
              politics, public policy, and investigative matters in a fair
              and responsible manner.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-neutral-200 px-6 md:px-16 py-20">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-2xl leading-relaxed text-neutral-700"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Our reporting sometimes involves individuals, companies,
              institutions, or organisations. When it does, we believe
              those subjects should have a meaningful opportunity to
              respond to information that directly concerns them.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="px-6 md:px-16 py-24">
          <div className="max-w-5xl mx-auto space-y-20">
            <PolicyBlock
              title="Our Approach"
              content="When a story includes criticism, allegations, or information that could affect a person's or organisation's reputation, we make reasonable efforts to seek comment before publication whenever circumstances allow. Hearing different perspectives helps produce more complete and balanced reporting."
            />

            <PolicyBlock
              title="Requesting a Response"
              content="If you believe a Wiresavvy article contains information about you, your company, or your organisation that requires clarification or a response, you are welcome to contact our editorial team. We review all legitimate requests carefully and take any additional information provided into account."
            />

            <PolicyBlock
              title="After Publication"
              content="Not every response is received before a story is published. If new information, a clarification, or an official statement becomes available after publication, our editorial team may update the article or incorporate the response when it is appropriate and relevant to the story."
            />

            {/* Requirements */}
            <div className="grid md:grid-cols-[260px_1fr] gap-10">
              <div>
                <h2
                  className="text-3xl font-serif"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  What We Ask From You
                </h2>
              </div>

              <div>
                <p className="text-neutral-600 text-lg leading-8 mb-8">
                  When submitting a right of reply request, please include:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {requirements.map((item) => (
                    <div
                      key={item}
                      className="border border-neutral-200 p-5"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-neutral-600 leading-8">
                  Providing clear information helps us assess and respond
                  to your request more efficiently.
                </p>
              </div>
            </div>

            <PolicyBlock
              title="Editorial Judgment"
              content="While we take all right of reply requests seriously, the decision to publish, update, edit, or include a response remains with our editorial team. Each request is reviewed on the basis of accuracy, relevance, public interest, and available evidence."
            />
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-neutral-200 px-6 md:px-16 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-red-700 font-semibold mb-4">
              Contact Editorial
            </p>

            <h2
              className="text-3xl md:text-5xl font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Submit a Right of Reply
            </h2>

            <p className="mt-6 text-neutral-600 leading-8">
              If you would like to submit a response, clarification,
              correction, or supporting information regarding one of our
              articles, please contact our editorial team.
            </p>

            <a
              href="mailto:editorial@wiresavvy.com"
              className="mt-8 inline-flex items-center gap-3 border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
            >
              <Mail />
              editorial@wiresavvy.com
            </a>
          </div>
        </section>

        {/* COMMITMENT */}
        <section className="border-t border-black px-6 md:px-16 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-red-700 font-semibold mb-4">
              Our Commitment
            </p>

            <h2
              className="text-4xl md:text-6xl font-light leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Good Journalism
              <br />
              Requires Listening
            </h2>

            <div className="w-14 h-[2px] bg-red-700 mx-auto my-10" />

            <p className="text-lg md:text-xl text-neutral-600 leading-9 max-w-3xl mx-auto">
              At Wiresavvy, we are committed to fairness, transparency,
              and responsible storytelling.
            </p>

            <p className="mt-8 text-neutral-700 leading-8 max-w-3xl mx-auto">
              We welcome constructive dialogue and believe that giving
              people the opportunity to respond strengthens trust with
              both our sources and our readers.
            </p>
          </div>
        </section>
      </main>
      </ArticleLayout>
    </>
  );
}

function PolicyBlock({ title, content }) {
  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-10">
      <div>
        <h2
          className="text-3xl font-serif"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {title}
        </h2>
      </div>

      <div>
        <p className="text-neutral-600 text-lg leading-8">
          {content}
        </p>
      </div>
    </div>
  );
}