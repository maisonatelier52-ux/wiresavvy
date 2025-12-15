"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
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
    <header className="w-full">

      {/* MAIN HEADER */}
      <div className="mx-auto max-w-6xl px-4 py-4 border-b-2 border-gray-200 flex items-center justify-between relative">

        {/* Left Ghost Spacer */}
        <div className="invisible text-[13px] font-medium">
          {dateTime}
        </div>

        {/* Center Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-center"
        >
          Wiresavvy
        </Link>

        {/* Right Date & Time */}
        <div className="text-[13px] font-medium text-gray-700 whitespace-nowrap">
          {dateTime}
        </div>
      </div>

      {/* CATEGORY NAVBAR */}
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-center">
        <nav className="flex gap-6 overflow-x-auto text-sm font-semibold uppercase whitespace-nowrap pb-1 no-scrollbar">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/categories/${cat.href}`}
              className="hover:text-red-500 transition-colors duration-150"
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>

    </header>
  );
}
