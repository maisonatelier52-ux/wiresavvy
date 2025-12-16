"use client";

import Link from "next/link";
import details from "../../data/details.json";

export default function MoreNews() {
  const businessNews = details.articles.filter(a => a.category === "Business").slice(3, 6);
  const lifestyleNews = details.articles.filter(a => a.category === "Lifestyle").slice(0, 1);
  const travelNews = details.articles.filter(a => a.category === "Travel").slice(0, 1);
  const financeNews = details.articles.filter(a => a.category === "Finance").slice(0, 1);


  const [first, second, third] = businessNews; 
  const [fourth] = lifestyleNews;
  const [fifth] = travelNews;
  const [sixth] = financeNews; 

  return (
    <section className="w-full mb-1">
      <h3 className="text-2xl font-bold text-red-500 text-left uppercase pb-2 mb-6">
        More News
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">

        {/* 1st Article — spans 1 col */}
        <Link href={`/articles/${first.slug}`} className="sm:col-span-1">
          <div className="bg-white h-full">
            {first.image && (
              <img src={first.image} alt={first.title} className="w-full h-[180px] object-cover mb-3" />
            )}
            <span className="text-xs font-bold text-red-500 hover:text-black uppercase">{first.category}</span>
            <h2 className="text-lg font-bold hover:text-red-500 mt-1 line-clamp-2">{first.title}</h2>
            <p className="text-sm text-zinc-600 mt-2 line-clamp-3">{first.excerpt}</p>
          </div>
        </Link>

        {/* 2nd Article — spans 2 cols ✅ */}
        <Link href={`/articles/${second.slug}`} className="sm:col-span-2">
          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[380px] flex flex-col justify-end p-5 text-white overflow-hidden">
            <img
              src={second.image}
              alt={second.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase w-fit py-1">
                {second.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-2 line-clamp-3">
                {second.title}
              </h2>
            </div>
          </div>
        </Link>

        {/* 3rd Article — spans 1 col */}
        <Link href={`/articles/${third.slug}`} className="sm:col-span-1">
          <div className="bg-white h-full">
            {third.image && (
              <img src={third.image} alt={third.title} className="w-full h-[180px] object-coverg mb-3" />
            )}
            <span className="text-xs font-bold text-red-500 hover:text-black uppercase">{third.category}</span>
            <h2 className="text-lg font-bold text-zinc-900 hover:text-red-500 mt-1 line-clamp-2">{third.title}</h2>
            <p className="text-sm text-zinc-600 mt-2 line-clamp-3">{third.excerpt}</p>
          </div>
        </Link>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 py-5 gap-5">

        {/* 4th Article — spans 2 cols ✅ */}
        <Link href={`/articles/${fourth.slug}`} className="sm:col-span-2">
          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[380px] flex flex-col justify-end p-5 text-white overflow-hidden">
            <img
              src={fourth.image}
              alt={fourth.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase w-fit py-1">
                {fourth.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-2 line-clamp-3">
                {fourth.title}
              </h2>
            </div>
          </div>
        </Link>

        {/* 5th Article — spans 1 col */}
        <Link href={`/articles/${fifth.slug}`} className="sm:col-span-1">
          <div className="bg-white h-full">
            {fifth.image && (
              <img src={fifth.image} alt={fifth.title} className="w-full h-[180px] object-cover mb-3" />
            )}
            <span className="text-xs font-bold text-red-500 hover:text-black uppercase">{fifth.category}</span>
            <h2 className="text-lg font-bold text-zinc-900 hover:text-red-500 mt-1 line-clamp-2">{fifth.title}</h2>
            <p className="text-sm text-zinc-600 mt-2 line-clamp-3">{fifth.excerpt}</p>
          </div>
        </Link>

        {/* 6th Article — spans 1 col */}
        <Link href={`/articles/${sixth.slug}`} className="sm:col-span-1">
          <div className="bg-white transition h-full">
            {sixth.image && (
              <img src={sixth.image} alt={sixth.title} className="w-full h-[180px] object-coverg mb-3" />
            )}
            <span className="text-xs font-bold text-red-500 hover:text-black uppercase">{sixth.category}</span>
            <h2 className="text-lg font-bold text-zinc-900 hover:text-red-500 mt-1 line-clamp-2">{sixth.title}</h2>
            <p className="text-sm text-zinc-600 mt-2 line-clamp-3">{sixth.excerpt}</p>
          </div>
        </Link>

      </div>
    </section>
  );
}
