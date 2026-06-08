import ArticleLayout from "../components/ArticleLayout";

const coverageAreas = [
  { label: "U.S. News", icon: "◈" },
  { label: "Business & Finance", icon: "◉" },
  { label: "Law & Courts", icon: "◆" },
  { label: "Politics & Policy", icon: "◇" },
  { label: "Technology", icon: "◎" },
  { label: "Investigation", icon: "◌" },
];

const pillars = [
  {
    number: "01",
    title: "Speed Without Sacrifice",
    body: "Breaking news demands speed. Accuracy demands care. We refuse to treat these as competing priorities.",
  },
  {
    number: "02",
    title: "Context Behind Every Headline",
    body: "A headline tells you what happened. We tell you why it matters, who it affects, and what comes next.",
  },
  {
    number: "03",
    title: "Independent by Design",
    body: "Our newsroom operates free from political influence and commercial pressure. Editorial decisions belong to our journalists — no one else.",
  },
  {
    number: "04",
    title: "Accountability Journalism",
    body: "We follow the money, scrutinise the powerful, and report what others miss. Investigative reporting is not a feature here — it is a founding principle.",
  },
];

export default function About() {
  return (
    <ArticleLayout>
    <div className="min-h-screen font-['Georgia',serif]">
      {/* Accent bar */}
      <div className="h-1 w-full" />


      {/* Hero — full bleed editorial */}
      <section className="relative border-b border-black/10 overflow-hidden">
        <div className="absolute inset-0" />
        {/* Background texture grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32">
          <p className="text-red-500 text-xs uppercase tracking-[0.2em] font-sans mb-5">
            About Wiresavvy
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8 max-w-3xl">
            More Than
            <br />
            <span className="text-black/50">the Headline.</span>
          </h1>
          <p className="text-black/60 font-sans text-lg md:text-xl leading-relaxed max-w-2xl">
            At Wiresavvy, news is more than a notification, a clip, or a
            breaking alert. It is a story that deserves context — and readers
            who deserve the full picture.
          </p>
        </div>
      </section>

      {/* Mission statement — pull quote style */}
      <section className="border-b border-white/10 ">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px" />
                <span className="text-red-500 font-sans text-xs uppercase tracking-widest">
                  Our Mission
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-snug tracking-tight">
                Looking Beyond
                <br />
                the Story
              </h2>
            </div>
            <div className="md:col-span-3 space-y-5">
              <p className="text-black/65 font-sans text-base leading-relaxed">
                A federal ruling can generate thousands of words within minutes.
                The real story usually takes longer to find.
              </p>
              <p className="text-black/65 font-sans text-base leading-relaxed">
                Behind every policy sits a human impact. Behind every market
                move is a shift in power, risk, or consequence. We focus on the
                people, decisions, and institutions shaping what comes next.
              </p>
              <p className="text-black/65 font-sans text-base leading-relaxed">
                The facts matter. The context matters more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage areas */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="text-sm uppercase tracking-widest text-black/35 font-sans mb-8">
            What We Cover
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coverageAreas.map((c) => (
              <div
                key={c.label}
                className="border border-white/10 px-5 py-5 flex items-center gap-4 hover:border-red-500/40 transition-colors group"
              >
                <span className="text-red-400/60 text-lg">{c.icon}</span>
                <span className="font-sans text-sm font-medium group-hover:text-red-400 transition-colors">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12">
            How We Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.number} className="flex gap-5">
                <span className="text-red-500/40 font-sans text-xs tabular-nums mt-1 shrink-0 w-6">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-black/55 font-sans text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="max-w-2xl text-black/65">
            <h2 className="text-2xl text-black md:text-3xl font-bold tracking-tight mb-6">
              Why Wiresavvy Exists
            </h2>
            <p className="font-sans text-base leading-relaxed mb-5">
              Information reaches people faster than ever. Understanding it has
              never been harder.
            </p>
            <p className="font-sans text-base leading-relaxed mb-5">
              Wiresavvy was built to close that gap — to deliver independent
              journalism that cuts through noise and gives readers the context
              they need to make sense of the world.
            </p>
            <p className="font-sans text-base leading-relaxed">
              You don't need a law degree to follow the Supreme Court. You
              don't need a finance background to understand what the Fed's next
              decision means for your life. We write for everyone who wants to
              stay genuinely informed.
            </p>
          </div>
        </div>
      </section>
    </div>
    </ArticleLayout>
  );
}