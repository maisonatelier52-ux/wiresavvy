"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdBanner() {
  const adSrc = "ad-banner.png";
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full flex justify-center my-8">
      <Link href="http://wiresavvy.com/">
        {/* Wrapper gives grey BG if no image */}
        <div className="w-full md:w-[728px] md:h-[120px] flex justify-center items-center">
          {!imgError ? (
            <img
              src={adSrc}
              alt="Political Sponsor Ad"
              className="
                w-full md:w-[728px] md:h-[120px]
                max-w-[728px]
                h-auto
                aspect-[728/90]
                object-contain
              "
              onError={() => setImgError(true)} /* triggers fallback */
            />
          ) : (
            /* Fallback UI when image fails */
            <span className="text-sm text-gray-600 uppercase font-semibold">
              Advertisement
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
