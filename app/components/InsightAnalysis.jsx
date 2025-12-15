"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import details from "../../data/details.json";

export default function InsightAnalysis() {
  const categories = [...new Set(details.articles.map(a => a.category))];

  // Latest article from each category
  const news = categories
    .map(cat =>
      details.articles
        .filter(a => a.category === cat)
        .sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    )
    .filter(Boolean); // clean nulls

  if (!news.length) return null;

  const total = news.length;
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  // CLONED SLIDES FOR LOOPING
  const clonedNews = [
    news[total - 1], 
    ...news, 
    news[0], 
    news[1] || news[0]
  ];

  // RESPONSIVE SLIDES COUNT
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 768) setVisibleCount(4);
      else if (w >= 480) setVisibleCount(3);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // LOOP FIX — AFTER CLONE JUMP
  useEffect(() => {
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(total);
      }, 500);
    }

    if (index === total + 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 500);
    }
  }, [index, total]);

  useEffect(() => {
    if (!transition) {
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(-${(index / visibleCount) * 100}%)`;
      setTimeout(() => setTransition(true), 50);
    }
  }, [index, transition, visibleCount]);

  const next = () => {
    if (transition) {
      carouselRef.current.style.transition = "transform 500ms ease-in-out";
      setIndex(i => i + 1);
    }
  };

  const prev = () => {
    if (transition) {
      carouselRef.current.style.transition = "transform 500ms ease-in-out";
      setIndex(i => i - 1);
    }
  };

  return (
    <section className="overflow-hidden w-full mb-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 px-2">
        <h3 className="text-2xl font-bold text-red-500 uppercase text-black">
          INSIGHT & ANALYSIS
        </h3>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="border border-gray-400 p-1 hover:bg-red-500 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M15.78 19.28a.75.75 0 0 1-1.06 0l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 1.06L9.81 12l5.97 5.97a.75.75 0 0 1 0 1.06z" />
            </svg>
          </button>

          <button
            onClick={next}
            className="border border-gray-400 p-1 hover:bg-red-500 hover:text-white transition-colors"
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
        className="flex"
        ref={carouselRef}
        style={{
          transform: `translateX(-${(index / visibleCount) * 100}%)`,
          transition: transition ? "transform 500ms ease-in-out" : "none"
        }}
      >
        {clonedNews.map((a, i) => {
          if (!a) return null;

          const author = details.authors.find(x => x.id === a.authorId);

          return (
            <div
              key={i}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <Link href={`/articles/${a.slug}`}>
                <div>
                  {a.image && (
                    <img
                      src={a.image}
                      className="w-auto max-w-full mx-auto h-[150px] object-cover"
                      alt={a.title}
                    />
                  )}

                  <p className="text-xs font-bold text-red-500 hover:text-black uppercase mt-3">
                    {author?.name || "Unknown Author"}
                  </p>

                  <h2 className="text-lg font-bold hover:text-red-500 mt-1 line-clamp-2">
                    {a.title}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
