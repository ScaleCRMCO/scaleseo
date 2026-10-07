import type { ReactNode } from "react";

// Hand-drawn style line icons. Plain strokes are run through an SVG
// turbulence filter that roughens the edges so they read like marker
// drawings. Stroke colour, width and size come from the CSS class passed in
// (set `fill: none; stroke: …; stroke-width: …` there).

const icons: Record<string, ReactNode> = {
  // Folded newspaper with a flower photo — blog hero
  newspaper: (
    <g>
      <path d="M38 34l118-14 10 116-118 16z" />
      <path d="M38 34l-16 8 14 118 12-8" />
      <path d="M22 42l-10 6 14 114 22-10" />
      <path d="M56 50l80-10M58 64l58-7" />
      <path d="M60 84l22-3M62 100l20-3M64 118l20-3M66 134l18-2" />
      <path d="M96 78l52-6 6 62-52 6z" />
      <path d="M118 104c-8-4-6-14 2-14 0-8 12-8 12 0 8 0 10 10 2 14 4 8-6 14-12 8-6 6-14-2-10-8z" />
      <circle cx="125" cy="101" r="2" />
    </g>
  ),
  // Clipboard report with a rising bar chart and a check — case studies
  caseStudy: (
    <g>
      <path d="M40 28h-14v136h128V28h-14" />
      <path d="M62 16h56v24H62z" />
      <path d="M48 140V112M72 140V96M96 140V82M120 140V62" />
      <path d="M44 146h92" />
      <path d="M48 76l22-18 18 10 34-26" />
      <path d="M112 42h12v12" />
      <path d="M128 92l10 10 22-26" />
    </g>
  ),
  // Person beside a map pin and a small house — about the practice
  about: (
    <g>
      <circle cx="64" cy="58" r="22" />
      <path d="M24 152c0-28 18-46 40-46s40 18 40 46" />
      <path d="M58 62c4 4 10 4 14 0" />
      <path d="M140 92s-22-22-22-40a22 22 0 0 1 44 0c0 18-22 40-22 40z" />
      <circle cx="140" cy="52" r="7" />
      <path d="M118 152v-26l22-16 22 16v26z" />
      <path d="M134 152v-14h12v14" />
      <path d="M12 160h160" />
    </g>
  ),
  // Briefcase in front of an office building — professional services / B2B
  industries: (
    <g>
      <path d="M96 150V24h58v126" />
      <path d="M108 40h10M132 40h10M108 60h10M132 60h10M108 80h10M132 80h10M108 100h10M132 100h10" />
      <path d="M118 150v-22h14v22" />
      <rect x="18" y="86" width="96" height="66" rx="6" />
      <path d="M50 86V72h32v14" />
      <path d="M18 112h96" />
      <path d="M60 106h12v12H60z" />
      <path d="M8 156h164" />
    </g>
  ),
  // Open ledger with a pen and tick marks — accounting firms
  ledger: (
    <g>
      <path d="M16 40c18-8 34-8 50 2v84c-16-10-32-10-50-2z" />
      <path d="M66 42c16-10 32-10 50-2v84c-18-8-34-8-50 2" />
      <path d="M28 60h26M28 74h26M28 88h20M78 60l6 6 10-12M78 82l6 6 10-12" />
      <path d="M110 112l14-62 8 2-14 62-8 6z" />
    </g>
  ),
  // Lightbulb with a speech bubble — consulting
  consulting: (
    <g>
      <path d="M50 92c-14-8-20-22-16-36 4-16 18-24 32-22 16 2 26 16 24 32-1 12-8 20-16 26v14H50z" />
      <path d="M52 116h22M56 126h14" />
      <path d="M60 70l4 10 4-10" />
      <path d="M86 18h40c6 0 10 4 10 10v20c0 6-4 10-10 10h-20l-12 12V58h-8c-6 0-10-4-10-10" />
      <path d="M96 32h28M96 44h18" />
      <path d="M22 40l-8-6M20 66H10M28 22l-4-8" />
    </g>
  ),
  // Shield with a dollar sign and a rising line — financial & advisory
  financial: (
    <g>
      <path d="M60 20l40 14v30c0 28-18 46-40 56-22-10-40-28-40-56V34z" />
      <path d="M70 52c-4-6-20-6-20 2s20 6 20 14-16 8-20 2" />
      <path d="M60 44v6M60 76v6" />
      <path d="M104 116l10-14 10 6 12-22" />
      <path d="M128 86h8v8" />
    </g>
  ),
  // Two buildings linked by arrows — B2B
  b2b: (
    <g>
      <path d="M14 124V54h36v70" />
      <path d="M24 66h6M36 66h6M24 80h6M36 80h6M24 94h6M36 94h6" />
      <path d="M90 124V36h40v88" />
      <path d="M100 50h6M114 50h6M100 66h6M114 66h6M100 82h6M114 82h6M100 98h6M114 98h6" />
      <path d="M56 64c10-8 20-8 28 0" />
      <path d="M78 58l6 6-8 4" />
      <path d="M84 102c-10 8-20 8-28 0" />
      <path d="M62 108l-6-6 8-4" />
      <path d="M6 128h132" />
    </g>
  ),
  // Magnifying glass over a rising line — SEO
  search: (
    <g>
      <circle cx="74" cy="72" r="44" />
      <path d="M106 104l46 46" />
      <path d="M48 90l16-18 14 10 24-28" />
      <path d="M92 54h10v10" />
    </g>
  ),
  // Browser window with layout blocks — web development
  browser: (
    <g>
      <rect x="18" y="34" width="144" height="110" rx="6" />
      <path d="M18 56h144" />
      <circle cx="32" cy="45" r="3" />
      <circle cx="44" cy="45" r="3" />
      <path d="M32 72h50v54H32zM98 72h48M98 90h48M98 108h32" />
    </g>
  ),
  // Target with an arrow — Google Ads
  target: (
    <g>
      <circle cx="80" cy="96" r="58" />
      <circle cx="80" cy="96" r="36" />
      <circle cx="80" cy="96" r="12" />
      <path d="M80 96l70-70" />
      <path d="M150 26l-4 22M150 26l-22 4" />
    </g>
  ),
  // Stacked coins with a price tag — pricing articles
  pricing: (
    <g>
      <ellipse cx="50" cy="88" rx="26" ry="8" />
      <path d="M24 88v10c0 4 12 8 26 8s26-4 26-8V88" />
      <path d="M24 74v14M76 74v14" />
      <ellipse cx="50" cy="74" rx="26" ry="8" />
      <path d="M24 60v14M76 60v14" />
      <ellipse cx="50" cy="60" rx="26" ry="8" />
      <path d="M74 22h26l12 12v24L86 84 62 60z" />
      <circle cx="96" cy="36" r="4" />
      <path d="M44 56h12" />
    </g>
  ),
  // Calculator beside a rising arrow — accounting firms
  accounting: (
    <g>
      <rect x="22" y="20" width="52" height="80" rx="6" />
      <rect x="30" y="28" width="36" height="16" rx="2" />
      <path d="M32 56h6M46 56h6M60 56h4M32 70h6M46 70h6M60 70h4M32 84h6M46 84h6M60 84h4" />
      <path d="M84 96l14-22 10 8 16-30" />
      <path d="M112 52h12v12" />
    </g>
  ),
  // Page and pencil — default for any other article
  article: (
    <g>
      <path d="M30 22h40l16 16v58H30z" />
      <path d="M70 22v16h16" />
      <path d="M40 50h32M40 62h32M40 74h20" />
      <path d="M78 96l22-34 8 5-22 34-10 4z" />
    </g>
  ),
};

const viewBoxes: Record<string, string> = {
  newspaper: "0 0 180 180",
  caseStudy: "0 0 180 180",
  about: "0 0 180 180",
  industries: "0 0 180 180",
  search: "0 0 180 180",
  browser: "0 0 180 180",
  target: "0 0 180 180",
};

// Pick a sketch that matches a blog article's category
export function iconForCategory(category: string) {
  const c = category.toLowerCase();
  if (c.includes("pric") || c.includes("cost")) return "pricing";
  if (c.includes("account")) return "accounting";
  return "article";
}

export default function SketchIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const id = `sketch-${name}`;
  return (
    <svg
      className={className}
      viewBox={viewBoxes[name] ?? "0 0 130 120"}
      overflow="visible"
      aria-hidden="true"
    >
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="5" />
        <feDisplacementMap in="SourceGraphic" scale="4" />
      </filter>
      <g filter={`url(#${id})`}>{icons[name] ?? icons.article}</g>
    </svg>
  );
}
