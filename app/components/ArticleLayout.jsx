"use client";

import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function ArticleLayout({ children }) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen font-sans">
      <Header />

      {/* FULL WIDTH MAIN (override padding globally) */}
      <main className="w-screen relative left-1/2 -translate-x-1/2 px-4 sm:px-6 md:px-10 lg:px-16">
        {children}
      </main>

      {/* FOOTER WITHOUT LAYOUT PADDING */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-black">
        <Footer />
      </div>
    </div>
  );
}
