"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar({ open, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const [homeOpen, setHomeOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 w-72 bg-white shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end px-4 py-3">
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded hover:text-red-500 transition-colors duration-200 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col text-sm flex-grow overflow-y-auto max-h-screen">
          {/* HOME DROPDOWN */}
          {/* <div className="border-b border-gray-200">
            <button
              onClick={() => setHomeOpen(!homeOpen)}
              aria-expanded={homeOpen}
              className="w-full text-left px-4 py-3 flex items-center justify-between hover:text-red-500"
            >
              <span>Home</span>
              <svg
                className={`transition-transform duration-300 ${
                  homeOpen ? "rotate-180" : "rotate-0"
                }`}
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                homeOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col pl-8 py-2">
                <Link href="/" className="py-2 hover:text-red-500">Home Default</Link>
                <Link href="/home-politics" className="py-2 hover:text-red-500">Home Politics</Link>
                <Link href="/home-fashion" className="py-2 hover:text-red-500">Home Fashion</Link>
                <Link href="/home-games" className="py-2 hover:text-red-500">Home Games</Link>
                <Link href="/home-videos" className="py-2 hover:text-red-500">Home Videos</Link>
                <Link href="/home-music" className="py-2 hover:text-red-500">Home Music</Link>
              </div>
            </div>
          </div> */}

          {/* PAGES DROPDOWN */}
          {/* <div className="border-b border-gray-200">
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              aria-expanded={pagesOpen}
              className="w-full text-left px-4 py-3 flex items-center justify-between hover:text-red-500"
            >
              <span>Pages</span>
              <svg
                className={`transition-transform duration-300 ${
                  pagesOpen ? "rotate-180" : "rotate-0"
                }`}
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                pagesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col pl-8 py-2">
                <Link href="/about" className="py-2 hover:text-red-500">About</Link>
                <Link href="/contact" className="py-2 hover:text-red-500">Contact</Link>
                <Link href="/search" className="py-2 hover:text-red-500">Search Results</Link>
                <Link href="/categories" className="py-2 hover:text-red-500">Categories</Link>
              </div>
            </div>
          </div> */}

          {/* OTHER LINKS */}
          <Link href="/categories/business" className="px-4 py-3 hover:text-red-500 border-b border-gray-200">Business</Link>
          <Link href="/categories/travel" className="px-4 py-3 hover:text-red-500 border-b border-gray-200">Travel</Link>
          <Link href="/categories/lifestyle" className="px-4 py-3 hover:text-red-500 border-b border-gray-200">Lifestyle</Link>
          <Link href="/categories/law" className="px-4 py-3 hover:text-red-500 border-b border-gray-200">Law</Link>
          <Link href="/categories/finance" className="px-4 py-3 hover:text-red-500 border-b border-gray-200">Finance</Link>
          <Link href="/categories/investigation" className="px-4 py-3 hover:text-red-500">Investigation</Link>

          <div className="px-4 py-6 flex gap-3">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#1DA1F2] hover:text-white transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 5.92c-.64.28-1.32.47-2.04.55.73-.44 1.28-1.14 1.54-1.97-.68.4-1.44.7-2.24.86C18.7 4.6 17.7 4 16.56 4c-1.86 0-3.37 1.79-2.95 3.6C10.7 7.3 8.07 6.1 6.15 4.1c-.92 1.58-.28 3.67 1.14 4.72-.56-.02-1.08-.17-1.54-.42v.04c0 1.74 1.23 3.19 2.86 3.52-.5.14-1.02.17-1.56.06.44 1.36 1.72 2.35 3.24 2.38C8.9 18.2 6.9 18.8 4.8 18.6c2 1.28 4.38 2.04 6.94 2.04 8.32 0 12.86-6.9 12.86-12.86v-.59c.88-.62 1.62-1.4 2.22-2.29-.8.36-1.66.6-2.56.71z" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#1877F2] hover:text-white transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.95v-7.04H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.53v1.85h2.74l-.44 2.91h-2.3v7.04C18.34 21.2 22 17.06 22 12.07z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#E1306C] hover:text-white transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 11.37a4 4 0 1 1-4.63-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#FF0000] hover:text-white transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
        </nav>
      </aside>
    </>
  );
}
