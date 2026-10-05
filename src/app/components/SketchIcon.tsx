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
};

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
