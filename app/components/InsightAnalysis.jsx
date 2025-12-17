"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function InsightAnalysis({ articles = [] }) {
  if (!articles.length) return null;

  const carouselRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [index, setIndex] = useState(0);

  /* ---------- RESPONSIVE ---------- */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(4);
      else if (w >= 768) setVisibleCount(3);
      else setVisibleCount(1);
      setIndex(0); // reset on resize
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------- SCROLL HANDLER ---------- */
  const scrollToIndex = nextIndex => {
    const el = carouselRef.current;
    if (!el) return;

    const slideWidth = el.clientWidth / visibleCount;
    el.scrollTo({
      left: slideWidth * nextIndex,
      behavior: "smooth",
    });
  };

  const next = () => {
    const maxIndex = Math.max(0, articles.length - visibleCount);
    const nextIndex = index >= maxIndex ? 0 : index + 1;
    setIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const prev = () => {
    const maxIndex = Math.max(0, articles.length - visibleCount);
    const prevIndex = index <= 0 ? maxIndex : index - 1;
    setIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  return (
    <section className="w-full mb-12">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 px-2">
        <h2 className="text-2xl font-bold uppercase">
          Insight & Analysis
        </h2>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="border border-gray-400 p-1 hover:bg-red-500 hover:text-white transition"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M15.78 19.28a.75.75 0 0 1-1.06 0l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 1.06L9.81 12l5.97 5.97a.75.75 0 0 1 0 1.06z" />
            </svg>
          </button>
          <button
            onClick={next}
            className="border border-gray-400 p-1 hover:bg-red-500 hover:text-white transition"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M8.22 4.72a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06-1.06L14.19 12 8.22 6.03a.75.75 0 0 1 0-1.06z" />
            </svg>
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={carouselRef}
        className="
          flex overflow-x-hidden
          snap-x snap-mandatory
        "
      >
        {articles.map((a, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 px-2"
            style={{ width: `${100 / visibleCount}%` }}
          >
            <Link href={`/articles/${a.slug}`}>
              <article>
                {a.image && (
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-[160px] w-full object-cover"
                  />
                )}
                <p className="text-xs font-bold text-red-500 uppercase mt-3">
                  {a.authorName || "Wiresavvy"}
                </p>
                <h3 className="text-lg font-bold mt-1 line-clamp-2 hover:text-red-500">
                  {a.title}
                </h3>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
