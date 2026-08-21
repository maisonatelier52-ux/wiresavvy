"use client";

import Link from "next/link";
import { useEffect } from "react";

const newsRoom = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Corrections Policy", href: "/corrections-policy" },
  { label: "Source Methodology", href: "/source-methodology" },
];

const standards = [
  { label: "Ownership & Funding", href: "/ownership-and-funding" },
  { label: "Advertising Policy", href: "/advertising-policy" },
  { label: "Right of Reply", href: "/right-of-reply" },
  { label: "Legal", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {

  useEffect(() => {
    // Set FormSubmit redirect URL dynamically
    const currentUrl = window.location.href.split('?')[0];
    const redirectUrl = currentUrl + '?success=true';
    const successInput = document.getElementById('formsubmit-success-url');
    if (successInput) {
      successInput.value = redirectUrl;
    }

    // Check for success parameter in URL
    const params = new URLSearchParams(window.location.search);
    
    if (params.get("success") === "true") {
      const popup = document.getElementById("newsletter-popup");
      if (!popup) return;

      // Show popup with animation
      popup.style.display = 'block';
      
      setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateX(-50%) translateY(0)';
      }, 10);

      // Hide popup after 3 seconds
      setTimeout(() => {
        popup.style.opacity = '0';
        popup.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => {
          popup.style.display = 'none';
        }, 300);
      }, 3000);

      // Clean URL without refreshing page
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

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
            <div className="px-4 py-6 flex flex-wrap gap-3">
              {/* Substack */}
              <a
                href="https://substack.com/@wiresavy"
                title="Substack"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#FF6719] hover:text-white transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 3h16v2H4V3zm0 4h16v2H4V7zm0 4h16v10l-8-4-8 4V11z" />
                </svg>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@wiresavy71"
                title="Medium"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-black hover:text-white transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6.5c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-13C4.67 19 4 18.33 4 17.5v-11zm2.5 1.2v8.6c0 .39-.31.7-.7.7H5.5v.5h3v-.5h-.3c-.39 0-.7-.31-.7-.7V9.1l3.7 9.4h.5l3.8-9.4v7.2c0 .39-.31.7-.7.7h-.3v.5h4v-.5h-.3c-.39 0-.7-.31-.7-.7V7.7c0-.39.31-.7.7-.7h.3v-.5h-3.3l-3.1 7.8-3.1-7.8H5.5v.5h.3c.39 0 .7.31.7.7z" />
                </svg>
              </a>

              {/* Reddit */}
              <a
                href="https://www.reddit.com/user/Wide_Media2/"
                title="Reddit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reddit"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#FF4500] hover:text-white transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.5 12.5c0-1.38-1.12-2.5-2.5-2.5-.68 0-1.29.27-1.74.71-1.43-.98-3.28-1.61-5.32-1.69l.9-3.65 2.53.6a1.75 1.75 0 1 0 .24-.98l-2.9-.69a.5.5 0 0 0-.6.36l-1.02 4.15c-2.09.06-3.99.69-5.45 1.7A2.49 2.49 0 0 0 4.5 10a2.5 2.5 0 0 0-2.5 2.5c0 .93.51 1.74 1.27 2.17-.03.23-.04.46-.04.7 0 3.4 3.93 6.13 8.77 6.13s8.77-2.73 8.77-6.13c0-.24-.01-.47-.04-.7.46-.42.77-1.02.77-1.67zm-14 1.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm7.38 3.74c-1.36 1.36-4.4 1.36-5.76 0a.5.5 0 0 1 .71-.71c1.03 1.03 3.31 1.03 4.34 0a.5.5 0 1 1 .71.71zm-.38-3.74a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/wire-savy-843509428/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#0A66C2] hover:text-white transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4zM3.3 9h3.8v12H3.3V9zm6.2 0h3.6v1.64h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.72V21h-3.8v-5.85c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9.5V9z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/wiresavy"
                title="X"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-black hover:text-white transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/wiresavy/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-zinc-200 text-zinc-700 rounded hover:bg-[#E1306C] hover:text-white transition-colors duration-200"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 11.37a4 4 0 1 1-4.63-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ==== Newsroom ==== */}
          <div>
            <div className="text-xl font-bold mb-4 text-white">
              Newsroom
            </div>

            <ul className="space-y-2 text-sm">
              {newsRoom.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    title={item.label}
                    className="text-zinc-300 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==== Standards ==== */}
          <div>
            <div className="text-xl font-bold mb-4 text-white">
              Standards
            </div>

            <ul className="space-y-2 text-sm">
              {standards.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    title={item.label}
                    className="text-zinc-300 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==== Newsletter ==== */}
          <div>
            <div className="text-xl font-bold mb-4 text-white">Stay Updated</div>
            <div className="text-sm text-zinc-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </div>
            <form 
              className="flex flex-col space-y-3"
              action="https://formsubmit.co/admin@investment-banking.org"
              method="POST"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Newsletter Subscription" />
              <input type="hidden" name="_next" id="formsubmit-success-url" />
              
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="p-2 rounded bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
                required
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

      {/* Success Popup - Placed at the end of footer */}
      <div
        id="newsletter-popup"
        style={{
          display: 'none',
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%) translateY(-20px)',
          background: '#013e84',
          color: '#fff',
          padding: '15px 20px',
          borderRadius: '6px',
          fontSize: '14px',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          opacity: 0,
          transition: 'all 0.3s ease',
        }}
      >
        Successfully signed up! 🎉
      </div>
    </footer>
  );
}