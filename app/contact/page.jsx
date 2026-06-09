import ArticleLayout from "../components/ArticleLayout";

export const metadata = {
  title: "Contact Us | Wiresavvy",
  description:
    "Contact Wiresavvy for editorial inquiries, news tips, corrections, advertising opportunities, media requests, and contributor applications.",
  alternates: {
    canonical: "https://www.wiresavvy.com/contact",
  },
};

export default function ContactPage() {
  return (
    <ArticleLayout>
      <div className="min-h-screen bg-white text-black">
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-red-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Contact Wiresavvy
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              We'd Love
              <br />
              to Hear From You
            </h1>

            <p className="text-lg text-black/70 max-w-2xl leading-relaxed font-sans">
              Whether you're a reader, journalist, contributor, business
              partner, or member of the media, our newsroom welcomes your
              questions, feedback, and ideas.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="border-b border-black/10">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">
                Get in Touch
              </h2>

              <p className="font-sans text-black/70 leading-relaxed mb-5">
                Wiresavvy welcomes feedback, story ideas, corrections,
                partnership opportunities, and press inquiries. Every message
                received is reviewed by our editorial team and directed to the
                appropriate department for timely consideration.
              </p>

              <p className="font-sans text-black/70 leading-relaxed">
                We believe open communication strengthens journalism and helps
                us better serve our readers through accurate, independent, and
                transparent reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Sections */}

        <section>
          <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">
                General Inquiries
              </h3>

              <p className="font-sans text-black/70 leading-relaxed">
                Questions about Wiresavvy, our newsroom, editorial policies, or
                general assistance can be directed to our editorial team. We are
                committed to responding as promptly as possible.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">
                Editorial & News Tips
              </h3>

              <p className="font-sans text-black/70 leading-relaxed mb-3">
                Have a breaking news tip, investigation lead, press release,
                interview opportunity, or story idea? Our editors welcome
                submissions related to U.S. news, politics, business, finance,
                law, technology, public policy, transportation, and
                investigative reporting.
              </p>

              <a
                href="mailto:editorial@wiresavvy.com"
                className="text-red-600 font-semibold hover:underline"
              >
                editorial@wiresavvy.com
              </a>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">
                Corrections & Updates
              </h3>

              <p className="font-sans text-black/70 leading-relaxed mb-3">
                Accuracy and accountability are fundamental to our journalism.
                If you believe an article contains an error or requires
                clarification, please contact our editorial staff with
                supporting information for review.
              </p>

              <a
                href="mailto:corrections@wiresavvy.com"
                className="text-red-600 font-semibold hover:underline"
              >
                corrections@wiresavvy.com
              </a>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">
                Advertising & Strategic Partnerships
              </h3>

              <p className="font-sans text-black/70 leading-relaxed">
                Wiresavvy partners with organizations, brands, agencies, and
                institutions interested in advertising, sponsorships, strategic
                collaborations, and audience engagement opportunities. All
                commercial partnerships remain clearly distinguished from
                independent editorial content.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">
                Media & Press Requests
              </h3>

              <p className="font-sans text-black/70 leading-relaxed">
                Journalists, researchers, broadcasters, and media organizations
                seeking interviews, comments, or information about Wiresavvy
                may contact our communications team for assistance.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">
                Careers & Contributors
              </h3>

              <p className="font-sans text-black/70 leading-relaxed">
                We welcome inquiries from experienced journalists, editors,
                analysts, photographers, researchers, and subject matter
                experts who are passionate about independent journalism and
                public-interest reporting.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">
                Our Editorial Commitment
              </h3>

              <p className="font-sans text-black/70 leading-relaxed mb-4">
                Wiresavvy is committed to responsible journalism guided by
                editorial independence, transparency, fairness, rigorous
                fact-checking, and accountability.
              </p>

              <p className="font-sans text-black/70 leading-relaxed">
                Our newsroom continuously reviews published content to ensure
                accuracy, relevance, and context, helping readers better
                understand the events and decisions shaping business,
                government, technology, and society.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}

        <section className="border-t border-black/10 bg-black/[0.02]">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center">

            <p className="text-red-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Wiresavvy
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Every Conversation Matters
            </h2>

            <p className="max-w-2xl mx-auto font-sans text-black/70 leading-relaxed">
              Whether you're sharing a news tip, requesting a correction,
              exploring a partnership, or simply reaching out with feedback,
              the Wiresavvy team values your voice and appreciates your trust in
              our journalism.
            </p>
          </div>
        </section>
      </div>
    </ArticleLayout>
  );
}