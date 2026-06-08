import ArticleLayout from "../components/ArticleLayout";

const sourceTypes = [
  { label: "Official Government & Agency Statements", icon: "◆" },
  { label: "Court Filings & Public Records", icon: "◈" },
  { label: "Company Disclosures & SEC Filings", icon: "◉" },
  { label: "Industry Interviews", icon: "◎" },
  { label: "Regulatory Documents & Rulings", icon: "◇" },
  { label: "Respected News Organisations", icon: "◌" },
  { label: "Trade & Academic Publications", icon: "◷" },
  { label: "Verified Official Social Media Accounts", icon: "◈" },
  { label: "Market Data & Industry Research", icon: "◆" },
];

const principles = [
  {
    number: "01",
    title: "Fact-Checking",
    body: "Editors and writers fact-check names, dates, quotes, statistics, and institutional details before publication. Unsubstantiated claims are not presented as facts. Where information remains unverified, we say so.",
  },
  {
    number: "02",
    title: "Anonymous Sources",
    body: "We always favour named sources. Anonymous sources may be considered when information serves a clear public interest and comes from individuals with direct, first-hand knowledge of the matter. Such information undergoes additional editorial review before publication.",
  },
  {
    number: "03",
    title: "Social Media Standards",
    body: "Social media can be a fast signal for developing stories — but not every post meets our standards. We rely on confirmed, verified accounts and cross-reference against official sources. Rumour and speculation alone do not qualify for publication.",
  },
  {
    number: "04",
    title: "Developing News",
    body: "Some stories continue to evolve after initial publication. When credible new information becomes available, we review it carefully and update coverage where necessary — and we tell readers when we have done so.",
  },
];

const evaluationQuestions = [
  { q: "Is it credible?", desc: "Does the source have recognised expertise, standing, or direct involvement?" },
  { q: "Is it reliable?", desc: "Is this source consistent, verified, and free from obvious bias or conflict of interest?" },
  { q: "Is it relevant?", desc: "Does this source directly and materially support the specific claim being made?" },
];

export default function SourceMethodology() {
  return (
    <ArticleLayout>
    <div className="min-h-screen font-['Georgia',serif]">
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />

      {/* Hero */}
      <section className="border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" />
            <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans">
              Editorial Standards
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-3xl">
            Source
            <br />
            Methodology
          </h1>
          <p className="text-white/55 font-sans text-lg leading-relaxed max-w-2xl">
            Good journalism depends on good sources. Here is exactly how Wiresavvy
            identifies, vets, and uses the information that goes into our reporting.
          </p>
        </div>
      </section>

      {/* Opening statement */}
      <div className="border-b border-black/10 bg-black/[0.025]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="font-sans text-sm leading-relaxed text-black/55 max-w-3xl">
            Every Wiresavvy story begins with comprehensive research, fact-checking, and
            source verification. Reporting starts with asking better questions — and
            verifying every answer before publication.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-14 space-y-20">

        {/* Sources we use */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Sources We Use</h2>
            <div className="flex-1 h-px bg-black/10" />
          </div>
          <p className="text-black/55 font-sans text-base leading-relaxed mb-8 max-w-2xl">
            We rely on primary sources wherever possible. These include:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {sourceTypes.map((s, i) => (
              <div
                key={i}
                className="border border-black/10 px-4 py-4 flex items-start gap-3 hover:border-red-500/30 hover:bg-black/[0.02] transition-all group"
              >
                <span className="text-red-400/50 text-sm mt-0.5 shrink-0">{s.icon}</span>
                <span className="font-sans text-sm text-black/65 leading-snug group-hover:text-black/80 transition-colors">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Four principles */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Our Standards</h2>
            <div className="flex-1 h-px bg-black/10" />
          </div>
          <div className="space-y-0 divide-y divide-black/8">
            {principles.map((p) => (
              <div key={p.number} className="py-8 flex gap-6">
                <span className="text-red-500/40 font-sans text-xs tabular-nums mt-1 shrink-0 w-6">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-black/55 font-sans text-sm leading-relaxed max-w-2xl">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation framework */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              How We Evaluate Every Source
            </h2>
            <div className="flex-1 h-px bg-black/10" />
          </div>
          <p className="text-black/50 font-sans text-sm mb-8 leading-relaxed max-w-xl">
            Every source is assessed against three questions before it is used in
            our reporting:
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {evaluationQuestions.map((eq, i) => (
              <div key={i} className="border border-black/10 p-7 bg-black/[0.02]">
                <div className="w-8 h-8 rounded-full border border-red-500/40 flex items-center justify-center mb-5">
                  <span className="text-red-400 font-sans text-xs font-bold">{i + 1}</span>
                </div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">{eq.q}</h3>
                <p className="text-black/50 font-sans text-sm leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="border border-black/10 p-8 bg-black/[0.02]">
          <h3 className="font-bold text-lg mb-3">Why Sourcing Matters</h3>
          <p className="text-black/55 font-sans text-sm leading-relaxed max-w-2xl mb-5">
            Readers deserve information they can trust. That is why sourcing is at
            the centre of everything Wiresavvy publishes. These standards are not
            a checklist — they are how we earn and keep our readers' confidence,
            one story at a time.
          </p>
          <a
            href="/editorial-policy"
            className="text-red-400 hover:text-red-300 font-sans text-sm underline underline-offset-4 transition-colors"
          >
            Read our full Editorial Policy →
          </a>
        </div>

        <p className="text-black/45 font-sans text-xs">Last updated: June 2026</p>
      </main>
    </div>
    </ArticleLayout>
  );
}