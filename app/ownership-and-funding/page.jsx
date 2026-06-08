import Link from "next/link";
import ArticleLayout from "../components/ArticleLayout";

const sections = [
  {
    title: "Who We Are",
    content:
      "Wiresavvy is an independent digital news platform focused on U.S. news, business, finance, law, politics, technology, and investigative reporting. Our mission is straightforward: deliver fast, factual, and responsible journalism that gives readers the context behind every headline.",
  },
  {
    title: "Editorial Independence",
    content:
      "All editorial decisions at Wiresavvy are made by our newsroom. Advertisers, sponsors, brands, and outside partners play no role in determining what we cover, how we cover it, or the conclusions we draw. We believe readers deserve reporting guided by editorial judgment — not commercial interests.",
  },
  {
    title: "How We Are Funded",
    content:
      "Wiresavvy may generate revenue through advertising, sponsored content, affiliate partnerships, and other business activities that support the operation of the platform. These revenue sources allow us to continue producing independent news and investigative journalism for our readers.",
  },
  {
    title: "Sponsored Content",
    content:
      "From time to time, we may publish sponsored content or partner with organisations on special projects. Whenever this occurs, the content will be clearly labelled so readers can easily distinguish it from our independent editorial coverage.",
  },
  {
    title: "Affiliate Relationships",
    content:
      "Some articles may contain affiliate links. If a reader makes a purchase through one of these links, Wiresavvy may earn a commission at no additional cost to the reader. Affiliate partnerships do not affect our editorial standards, our reporting decisions, or the integrity of our coverage.",
  },
  {
    title: "Transparency Matters",
    content:
      "We believe readers should know who stands behind the content they consume and how this publication operates. That is why we are committed to being open about our ownership, funding practices, and business relationships.",
  },
  {
    title: "Our Commitment",
    content:
      "Regardless of how Wiresavvy is funded, our responsibility remains unchanged: to provide readers with accurate, fair, and independently produced journalism. The trust of our audience will always come first.",
  },
];

export default function OwnershipFunding() {
  return (
    <ArticleLayout>
    <div className="min-h-screen font-['Georgia',serif]">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/20">
        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
          <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans mb-4">
            Editorial Standards
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Ownership
            <br />
            <span className="text-black/60">&amp; Funding</span>
          </h1>
          <p className="text-black/60 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
            Wiresavvy is independently owned and operated. Here is a full
            account of who we are, how we are funded, and the principles that
            govern our editorial decisions.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="space-y-0 divide-y divide-black/20">
          {sections.map((s, i) => (
            <div key={i} className="group py-8">
              <button
                className="w-full text-left flex items-start justify-between gap-4 cursor-pointer md:cursor-default"
              >
                <div className="flex items-center gap-4">
                  <span className="text-red-500/60 font-sans text-xs tabular-nums">
                    0{i + 1}
                  </span>
                  <h2 className="text-lg md:text-xl font-bold tracking-tight group-hover:text-red-400 transition-colors">
                    {s.title}
                  </h2>
                </div>
              </button>
              <p
                className={`mt-4 ml-10 text-black/65 leading-relaxed font-sans text-base md:block`}
              >
                {s.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 border-t border-black/20 pt-8">
          <p className="text-black/50 font-sans text-sm">
            Questions about our ownership or funding?{" "}
            <Link href="/contact" className="text-red-400 hover:text-red-300 underline underline-offset-4">
              Contact our editorial team
            </Link>
            .
          </p>
          <p className="text-black/30 font-sans text-xs mt-3">
            Last updated: June 2026
          </p>
        </div>
      </main>
    </div>
    </ArticleLayout>
  );
}