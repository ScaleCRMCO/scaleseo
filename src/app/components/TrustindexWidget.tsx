"use client";
import { useEffect, useRef } from "react";

// Trustindex Google review widget. The loader renders the widget next to
// its own <script> tag, so the tag is injected into this container on mount
// (a <script> written in JSX would never execute).
export default function TrustindexWidget({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.querySelector("script")) return;
    const s = document.createElement("script");
    s.src = `https://cdn.trustindex.io/loader.js?${id}`;
    s.defer = true;
    s.async = true;
    el.appendChild(s);
  }, [id]);
  return <div ref={ref} className={className} />;
}
