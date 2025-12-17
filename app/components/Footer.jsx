"use client";

import Link from "next/link";
import details from "@/data/details.json";

export default function Footer() {
  // pick only first 2 authors
  const featuredAuthors = details.authors.slice(0, 2);

  return (
    <footer className="bg-zinc-900 text-zinc-200 pt-20 pb-15">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ===== Upper Footer: columns ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* ==== About / Brand + Social ==== */}
          <div>
            <h3 className="text-3xl font-bold pb-8 text-white">Wiresavvy</h3>

            <div className="border-t border-zinc-700 pt-4 text-sm text-zinc-500">
              <p>© {new Date().getFullYear()} | Made by Wiresavvy</p>
            </div>

            {/* Social Icons */}
            <div className="px-4 py-6 flex gap-3">
              <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#1DA1F2] hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.92c-.64.28-1.32.47-2.04.55.73-.44 1.28-1.14 1.54-1.97-.68.4-1.44.7-2.24.86C18.7 4.6 17.7 4 16.56 4c-1.86 0-3.37 1.79-2.95 3.6C10.7 7.3 8.07 6.1 6.15 4.1c-.92 1.58-.28 3.67 1.14 4.72-.56-.02-1.08-.17-1.54-.42v.04c0 1.74 1.23 3.19 2.86 3.52-.5.14-1.02.17-1.56.06.44 1.36 1.72 2.35 3.24 2.38C8.9 18.2 6.9 18.8 4.8 18.6c2 1.28 4.38 2.04 6.94 2.04 8.32 0 12.86-6.9 12.86-12.86v-.59c.88-.62 1.62-1.4 2.22-2.29-.8.36-1.66.6-2.56.71z" />
                </svg>
              </a>
              <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#1877F2] hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.95v-7.04H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.53v1.85h2.74l-.44 2.91h-2.3v7.04C18.34 21.2 22 17.06 22 12.07z" />
                </svg>
              </a>
              <a href="https://instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#E1306C] hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 11.37a4 4 0 1 1-4.63-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://youtube.com" title="YouTube" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#FF0000] hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ==== Quick Links ==== */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use">Terms of Use</Link></li>
            </ul>
          </div>

          {/* ==== Authors Section (REPLACED CATEGORIES) ==== */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Featured Authors</h4>

            <ul className="space-y-4">
              {featuredAuthors.map((author) => (
                <li key={author.id}>

                  <Link
                    href={`/author/${author.id}`}
                    className="flex gap-3 items-start group"
                  >
                    {/* LEFT: Author Image */}
                    <img
                      src={author.photo}
                      alt={author.name}
                      title={author.name}
                      className="w-14 h-14 object-cover rounded-full group-hover:opacity-80 transition"
                    />

                    {/* RIGHT: Name + Bio */}
                    <div>
                      <p className="font-semibold text-white group-hover:text-blue-400 transition">
                        {author.name}
                      </p>

                      <p className="text-sm text-zinc-400 leading-snug">
                        {author.bio.slice(0, 70)}...
                      </p>
                    </div>
                  </Link>

                </li>
              ))}
            </ul>
          </div>

          {/* ==== Newsletter ==== */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Stay Updated</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
              />
              <button
                type="submit"
                className="py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

      </div>
    </footer>
  );
}

{/* <form
  action="https://formsubmit.co/cobeca6771@besenica.com"
  method="POST"
  className="flex flex-col space-y-3"
>
  <input
    type="email"
    name="email"
    placeholder="Your email address"
    required
    className="p-2 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
  />

  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New Subscriber on Wiresavvy!" />

  <button
    type="submit"
    className="py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
  >
    Subscribe
  </button>
</form> */}