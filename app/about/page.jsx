import Header from "../components/AboutHeader";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us — Wiresavvy",
  description:
    "Learn about Wiresavvy, a modern US digital news platform delivering sharp, factual, and timely journalism across Business, Travel, Lifestyle, Law, Finance, and Investigative reporting.",
  keywords: [
    "Wiresavvy",
    "About Wiresavvy",
    "US news",
    "digital news platform",
    "American journalism",
    "Business news",
    "Finance news",
    "Law news",
    "Investigative reporting",
  ],
  openGraph: {
    title: "About Wiresavvy",
    description:
      "Discover the mission and vision behind Wiresavvy — a fast, factual, independent US news platform.",
    url: "https://wiresavvy.com/about",
    type: "website",
    images: [
      {
        url: "/about.webp",
        width: 1200,
        height: 630,
        alt: "About Wiresavvy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Wiresavvy",
    description:
      "Learn who we are and what drives our mission to deliver factual, timely US news.",
    images: ["/about.webp"],
  },
  alternates: {
    canonical: "https://wiresavvy.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 text-gray-900">

        {/* Header Section */}
        <section className="relative w-full h-[550px] overflow-hidden rounded-b-3xl shadow-md">
          <img
            src="/about.webp"
            alt="Wiresavvy newsroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
              Truthful reporting is the foundation <br/> of an informed society.
            </h1>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <p className="text-lg leading-relaxed py-10">
            <strong className="text-2xl"><em>Wiresavvy</em></strong> is a modern digital news platform delivering sharp, factual, and timely coverage across the United States. We focus on the categories that shape everyday life — <strong>Business</strong>, <strong>Travel</strong>, <strong>Lifestyle & Health</strong>, <strong>Law</strong>, <strong>Finance</strong>, and <strong>Investigative</strong> journalism. Our mission is simple: Bring clarity to a world of noise.
          </p>
          <div>
            <img
              src="/write.webp"
              alt="Mission"
              className="rounded-2xl shadow-lg object-cover w-full h-72"
            />
          </div>
        </section>

        {/* Footer CTA */}
        <section>
          <div className="max-w-4xl mx-auto text-center p-16">
            <h2
              className="text-3xl md:text-5xl font-extrabold mb-6 bg-cover bg-center text-transparent bg-clip-text"
              style={{ backgroundImage: "url('/about.webp')" }}
            >
              Stay Ahead of the News
            </h2>
            <p className="mb-6 text-lg">
              Follow Wiresavvy for fast, accurate, and insightful reporting on the issues shaping United States.
            </p>
          </div>
        </section>

      </div>

      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-black">
        <Footer />
      </div>
    </>
  );
}
