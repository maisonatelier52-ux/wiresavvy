"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TopTicker from "./TopTicker";
import Sidebar from "./Sidebar";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [dateTime, setDateTime] = useState({
    short: "",
    long: "",
  });

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live Date + Time (Responsive formats)
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const shortFormat = now.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });

      const longFormat = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });

      setDateTime({
        short: shortFormat,
        long: longFormat,
      });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { label: "Business", href: "business" },
    { label: "Travel", href: "travel" },
    { label: "Lifestyle", href: "lifestyle" },
    { label: "Law", href: "law" },
    { label: "Finance", href: "finance" },
    { label: "Investigation", href: "investigation" },
  ];

  return (
    <header className="bg-white">
      <TopTicker />

      {/* MAIN HEADER */}
      <div className="mx-auto max-w-6xl px-4 py-3 border-b-2 border-gray-200 flex items-center justify-between gap-2">

        {/* Left – Sidebar Icon */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded hover:text-red-500"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>

        {/* Center – Logo */}
        <Link
          href="/"
          title="WireSavvy Home"
          className="flex items-center justify-center"
          aria-label="Wiresavvy – Independent U.S. News"
        >
          <Image
            src="/wiresavvy.webp"
            alt="Wiresavvy – Independent U.S. News, Business & Investigations"
            width={180}
            height={40}
            title="WireSavvy Logo"
            priority
            className="h-auto w-[140px] sm:w-[170px]"
          />
        </Link>

        {/* Right – Responsive Date & Time */}
        <div className="text-[12px] sm:text-[13px] font-medium text-gray-700 whitespace-nowrap">
          <span className="sm:hidden">{dateTime.short}</span>
          <span className="hidden sm:inline">{dateTime.long}</span>
        </div>
      </div>

      {/* CATEGORY NAVBAR */}
      <div className={sticky ? "fixed top-0 left-0 w-full bg-white shadow-md z-50" : ""}>
        <div
          className={`mx-auto max-w-6xl px-4 ${
            sticky ? "py-3" : "py-4"
          } flex items-center justify-center`}
        >
          <nav className="flex gap-4 sm:gap-6 overflow-x-auto text-xs sm:text-sm font-semibold uppercase whitespace-nowrap pb-1 no-scrollbar">
            {/* HOME */}
            <Link
              href="/"
              title="Home"
              className="hover:text-red-500 transition-colors duration-150"
            >
              Home
            </Link>
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={`/categories/${cat.href}`}
                title={cat.href}
                className="hover:text-red-500 transition-colors duration-150"
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <Sidebar open={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}