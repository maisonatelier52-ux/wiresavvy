"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function RelatedArticles({ articles }) {

  // ❌ If no articles — show message
  if (!articles || articles.length === 0) {
    return (
      <div className="mt-10 mb-10 text-center text-gray-500 text-sm">
        There are no related articles.
      </div>
    );
  }

  const total = articles.length;

  // ❌ If less than 5 — no buttons, no slider, just a grid
  const showButtons = total >= 4;
  const enableSlider = total >= 4;

  const carouselRef = useRef(null);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  // Only use clones if slider enabled
  const cloned = enableSlider
    ? [articles[total - 1], ...articles, articles[0], articles[1]]
    : articles;

  // ✔ Responsive card count
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

  // Slider logic runs ONLY if enough items
  useEffect(() => {
    if (!enableSlider) return;

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
  }, [index, total, enableSlider]);

  useEffect(() => {
    if (!enableSlider || transition) return;
    carouselRef.current.style.transition = "none";
    carouselRef.current.style.transform = `translateX(-${(index / visibleCount) * 100}%)`;
    setTimeout(() => setTransition(true), 50);
  }, [transition, index, visibleCount, enableSlider]);

  const next = () => {
    if (!transition || !enableSlider) return;
    carouselRef.current.style.transition = "transform 500ms ease-in-out";
    setIndex(i => i + 1);
  };

  const prev = () => {
    if (!transition || !enableSlider) return;
    carouselRef.current.style.transition = "transform 500ms ease-in-out";
    setIndex(i => i - 1);
  };

  return (
    <section className="overflow-hidden w-full mb-14 mt-14 border-t pt-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 px-2">
        <h3 className="text-2xl font-bold text-red-500 uppercase">
          Related Articles
        </h3>

        {/* ❌ Buttons hidden if less than 5 */}
        {showButtons && (
          <div className="flex gap-2">
          <button
            onClick={next}
            className="border border-gray-400 p-1 hover:bg-red-500 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M15.78 19.28a.75.75 0 0 1-1.06 0l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 1.06L9.81 12l5.97 5.97a.75.75 0 0 1 0 1.06z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={prev}
            className="border border-gray-400 p-1 hover:bg-red-500 hover:text-white transition-colors"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M8.22 4.72a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06-1.06L14.19 12 8.22 6.03a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        )}
      </div>

      {/* CONTENT */}
      {enableSlider ? (
        // ✔ Slider mode
        <div
          className="flex"
          ref={carouselRef}
          style={{
            transform: `translateX(-${(index / visibleCount) * 100}%)`,
            transition: transition ? "transform 500ms ease-in-out" : "none"
          }}
        >
          {cloned.map((post, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <Link href={`/articles/${post.slug}`}>
                <div>
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[150px] object-cover"
                    />
                  )}
                  <p className="text-xs font-bold text-red-500 uppercase mt-3">
                    {post.category}
                  </p>
                  <h2 className="text-lg font-bold hover:text-red-500 mt-1 line-clamp-2">
                    {post.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        // ✔ Simple grid (when < 5 items)
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
          {articles.map((post, i) => (
            <Link key={i} href={`/articles/${post.slug}`}>
              <div>
                {post.image && (
                  <img
                    src={post.image}
                    className="w-full h-[150px] object-cover"
                  />
                )}
                <p className="text-xs font-bold text-red-500 uppercase mt-3">
                  {post.category}
                </p>
                <h2 className="text-lg font-bold hover:text-red-500 mt-1 line-clamp-2">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}

    </section>
  );
}
