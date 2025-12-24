"use client";
import Link from "next/link";
import details from "../../data/details.json";

export default function TopTicker() {
  const latestThree = [...details.articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="border-b border-gray-300 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 py-2">
          <span className="flex-shrink-0 bg-red-500 px-3 py-1 text-sm font-bold text-white">
            FLASH NEWS
          </span>

          <div className="ticker-wrapper relative flex-grow overflow-hidden">
            <ul className="ticker-track flex gap-12 whitespace-nowrap w-max">
              {latestThree.map((item, i) => (
                <li key={i} className="list-none flex-shrink-0">
                  <Link
                    href={`/articles/${item.slug}`}
                    className="text-sm font-medium text-zinc-700 hover:text-red-500 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper:hover .ticker-track {
          animation-play-state: paused;
        }

        /* Slower speed, continuous loop after all items pass */
        .ticker-track {
          animation: scrollLoop 28s linear infinite;
        }

        @media (min-width: 640px) {
          /* Slightly slower on desktop for readability */
          .ticker-track {
            animation-duration: 18s;
          }
        }

        @keyframes scrollLoop {
          0% {
            transform: translateX(10%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
