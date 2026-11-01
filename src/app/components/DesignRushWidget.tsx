"use client";
import { useEffect } from "react";

// DesignRush agency reviews widget. The script scans the page for
// [data-designrush-widget] elements, so the container renders first and the
// script is loaded once after mount.
export default function DesignRushWidget({ className }: { className?: string }) {
  useEffect(() => {
    if (document.querySelector('script[data-designrush-loader]')) return;
    const s = document.createElement("script");
    s.src = "https://www.designrush.com/topbest/js/widgets/agency-reviews.js";
    s.async = true;
    s.setAttribute("data-designrush-loader", "");
    document.body.appendChild(s);
  }, []);
  return (
    <div className={className}>
      <div
        data-designrush-widget=""
        data-agency-id="132344"
        data-style="dark"
        aria-label="DesignRush agency reviews section"
      />
      <noscript>
        <a
          href="https://www.designrush.com/agency/profile/scale-seo#reviews"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Scale SEO reviews on DesignRush"
        >
          REVIEW US ON DESIGNRUSH
        </a>
      </noscript>
    </div>
  );
}
