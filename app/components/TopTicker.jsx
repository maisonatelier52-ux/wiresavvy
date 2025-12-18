"use client";
import Link from "next/link";
import details from "../../data/details.json";

export default function TopTicker() {
  // Sort newest → oldest, take top 5
  const latestFive = [...details.articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const repeated = [...latestFive, ...latestFive];

  return (
    <div className="border-b border-gray-300 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 inline-block bg-red-500 px-3 py-1 text-sm font-bold text-white">
            FLASH NEWS
          </span>

          {/* Ticker area */}
          <div className="ticker-wrapper flex-grow overflow-hidden h-[28px] relative">
            <ul className="animate-vertical-ticker space-y-2">
              {repeated.map((item, i) => (
                <li key={i} className="list-none">
                  <Link
                    href={`/articles/${item.slug}`}
                    className="text-sm text-zinc-700 hover:text-red-500 transition-colors duration-200"
                  >
                    <span className="block font-medium">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Animation + Pause on Hover */}
      <style jsx>{`
        .ticker-wrapper:hover .animate-vertical-ticker {
          animation-play-state: paused;
        }

        .animate-vertical-ticker {
          position: absolute;
          top: 0;
          left: 0;
          animation: scrollUp 10s linear infinite;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}
