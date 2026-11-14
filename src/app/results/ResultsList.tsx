"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import v from "../sections/v3/v3.module.css";
import s from "./results.module.css";

export type ResultStudy = {
  id: string; client: string; meta: string; category: string;
  metrics: { value: string; label: string }[];
  title: string; body: string[]; caseStudyHref?: string; image?: string; url?: string;
};

const Corner = () => (
  <svg className={v.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
);

// Bilberrry-style filter tabs + alternating image / text case rows
export default function ResultsList({ studies }: { studies: ResultStudy[] }) {
  const tabs = ["All projects", ...Array.from(new Set(studies.map((x) => x.category)))];
  const [tab, setTab] = useState(tabs[0]);
  const shown = tab === tabs[0] ? studies : studies.filter((x) => x.category === tab);

  return (
    <>
      <div className={s.tabsBar}>
        <div className={`${v.wrap} ${s.tabs}`} role="tablist" aria-label="Filter case studies">
          {tabs.map((t) => (
            <button key={t} type="button" role="tab" aria-selected={tab === t} className={`${s.tab} ${tab === t ? s.tabOn : ""}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className={`${v.wrap} ${s.list}`} id="case-studies">
        {shown.map((c, i) => (
          <article key={c.id} className={`${s.row} ${i % 2 ? s.flip : ""}`}>
            <Link href={c.caseStudyHref ?? "#"} className={s.media} aria-label={`Read the ${c.client} case study`}>
              {c.image && <Image src={c.image} alt={`${c.client} case study`} fill sizes="(max-width: 900px) 100vw, 640px" />}
            </Link>
            <div className={s.text}>
              <h2 className={s.client}>{c.client}</h2>
              <p className={s.title}>{c.title}</p>
              <div className={s.metrics}>
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <span className={s.metricValue}>{m.value}</span>
                    <span className={v.small}>{m.label}</span>
                  </div>
                ))}
              </div>
              <p className={v.p}>{c.body[0]}</p>
              <ul className={s.tags}>{c.meta.split(" · ").map((t) => <li key={t}>/ {t}</li>)}</ul>
              <div className={s.actions}>
                {c.caseStudyHref && (
                  <Link href={c.caseStudyHref} className={`${v.btn} ${v.btn_navy}`}><span>Read case study</span><Corner /></Link>
                )}
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className={v.textLink}>Visit website <Corner /></a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
