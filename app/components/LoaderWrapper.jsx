"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}

      {loading && <Loader />}
    </>
  );
}
