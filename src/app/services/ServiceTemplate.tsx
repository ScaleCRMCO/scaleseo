import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import CountUp from "../components/CountUp";
import v from "../sections/v3/v3.module.css";
import { Btn } from "../sections/v3/ui";
import { Faq } from "../sections/v3/Sections";
import s from "./template.module.css";

/* Shared service-page template: Mamba split hero, Bilberrry statement with
   "/" tags, Mamba icon accordion, case rows, markets, process timeline,
   fit + pricing panel, FAQ and CTA. Every section is optional except hero. */

const CAL = "https://cal.com/corbinjensen-scaleseo/30min";
const Corner = () => (
  <svg className={v.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
);
const Icon = ({ d }: { d: string }) => (
  <span className={v.icon} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  </span>
);

export const ICONS = {
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
  page: "M6 3h9l3 3v15H6zM9 9h6M9 13h6M9 17h4",
  pen: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4",
  pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  building: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6",
  briefcase: "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
  hammer: "M14 6l4 4M3 21l9-9M12 4l8 8-3 3-8-8z",
};

export type ServiceTemplateProps = {
  crumb: string;
  title: string;
  heroLead: string;
  heroImage: { src: string; alt: string };
  statementLabel: string;
  statement: string;
  statementNote?: string;
  included?: { title: string; lead: string; items: { title: string; body: string; icon: string }[]; image: { src: string; alt: string } };
  cases?: { title: string; lead: string; items: { name: string; body: string; stats: { from: number; to: number; prefix?: string; suffix?: string; label: string }[]; href: string; cta: string; img: string }[]; note?: string };
  markets?: { title: string; items: { title: string; body: string; icon: string; href?: string; cta?: string }[]; outro?: string };
  process?: { title: string; lead: string; items: { title: string; body: string }[] };
  fit?: { title: string; label: string; body: ReactNode };
  pricing?: { title: string; price: string; unit: string; body: string[]; points: string[] };
  faqs?: { q: string; a: string[] }[];
  cta: { title: string; lead: string };
};

export default function ServiceTemplate(p: ServiceTemplateProps) {
  return (
    <>
      {/* Hero */}
      <header className={`${v.navy} ${s.hero}`} data-nav="dark">
        <div className={`${v.wrap} ${s.heroGrid}`}>
          <div className={s.heroText}>
            <div className={s.crumbs}>
              <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: p.crumb }]} schema={false} />
            </div>
            <h1 className={s.h1}>{p.title}</h1>
            <p className={v.lead}>{p.heroLead}</p>
            <div className={s.btns}>
              <Btn href={CAL} external>Book a Strategy Call</Btn>
              <Btn href="/results" tone="line">View Client Results</Btn>
            </div>
            <div className={s.badges}>
              <a href="https://agencies.semrush.com/scale-seo/" target="_blank" rel="noopener noreferrer" aria-label="Semrush Certified Agency Partner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner" width={52} height={52} />
              </a>
              <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" aria-label="Scale SEO reviews on Clutch">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/clutch-reviewed.svg" alt="Reviewed on Clutch" width={134} height={26} />
              </a>
            </div>
          </div>
          <div className={s.heroImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.heroImage.src} alt={p.heroImage.alt} />
          </div>
        </div>
      </header>

      {/* Statement + "/" tags */}
      <section className={`${v.white} ${v.sec}`}>
        <div className={`${v.wrap} ${s.labelled}`}>
          <span className={s.sideLabel}>{p.statementLabel}</span>
          <div>
            <p className={s.statement}>{p.statement}</p>
            {p.statementNote && <p className={s.note}>{p.statementNote}</p>}
            {p.included && (
              <ul className={s.tags}>{p.included.items.map((x) => <li key={x.title}>/ {x.title}</li>)}</ul>
            )}
          </div>
        </div>
      </section>

      {/* What's included — icon accordion + sticky image */}
      {p.included && (
        <section className={`${v.grey} ${v.sec}`}>
          <div className={v.wrap}>
            <div className={s.accHead}>
              <h2 className={v.h2}>{p.included.title}</h2>
              <p className={v.p}>{p.included.lead}</p>
            </div>
            <div className={s.accGrid}>
              <div className={s.acc}>
                {p.included.items.map((x, i) => (
                  <details key={x.title} className={s.item} name="included" open={i === 0}>
                    <summary className={s.sum}>
                      <Icon d={(ICONS as Record<string, string>)[x.icon] ?? ICONS.search} />
                      <h3 className={s.itemTitle}>{x.title}</h3>
                      <span className={s.plus} aria-hidden="true" />
                    </summary>
                    <div className={s.itemBody}><p className={v.p}>{x.body}</p></div>
                  </details>
                ))}
              </div>
              <div className={s.accImg}>
                <Image src={p.included.image.src} alt={p.included.image.alt} fill sizes="(max-width: 900px) 100vw, 600px" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case rows */}
      {p.cases && (
        <section className={`${v.white} ${v.sec}`}>
          <div className={v.wrap}>
            <div className={v.head}>
              <div><h2 className={v.h2}>{p.cases.title}</h2></div>
              <div className={v.headSide}><p className={v.p}>{p.cases.lead}</p><Btn href="/results" tone="navy">Explore All Client Results</Btn></div>
            </div>
            <div className={v.cases}>
              {p.cases.items.map((c, i) => (
                <article key={c.href} className={`${v.case} ${i % 2 ? v.caseFlip : ""}`}>
                  <Link href={c.href} className={v.caseMedia} aria-label={c.cta}>
                    <Image src={c.img} alt={c.name} fill sizes="(max-width: 900px) 100vw, 640px" className={v.cover} />
                  </Link>
                  <div className={v.caseText}>
                    <p className={v.small}>{c.name}</p>
                    <div className={s.stats}>
                      {c.stats.map((m) => (
                        <p key={m.label} className={v.stat}>
                          <span className={v.statValue}><CountUp from={m.from} to={m.to} prefix={m.prefix} suffix={m.suffix} /></span>
                          <span className={v.small}>{m.label}</span>
                        </p>
                      ))}
                    </div>
                    <p className={v.p}>{c.body}</p>
                    <Link href={c.href} className={v.textLink}>{c.cta} <Corner /></Link>
                  </div>
                </article>
              ))}
            </div>
            {p.cases.note && <p className={s.caseNote}>{p.cases.note}</p>}
          </div>
        </section>
      )}

      {/* Markets */}
      {p.markets && (
        <section className={`${v.navy} ${v.sec}`} data-nav="dark">
          <div className={v.wrap}>
            <div className={v.head}>
              <div><h2 className={v.h2}>{p.markets.title}</h2></div>
              {p.markets.outro && <p className={v.p}>{p.markets.outro}</p>}
            </div>
            <div className={`${v.points} ${v.cols3}`}>
              {p.markets.items.map((m) => (
                <div key={m.title} className={v.point}>
                  <span className={s.iconLight}><Icon d={(ICONS as Record<string, string>)[m.icon] ?? ICONS.building} /></span>
                  <h3 className={v.h3}>{m.title}</h3>
                  <p className={v.p}>{m.body}</p>
                  {m.href && <Link href={m.href} className={`${v.textLink} ${s.lightLink}`}>{m.cta} <Corner /></Link>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process timeline */}
      {p.process && (
        <section className={`${v.white} ${v.sec}`}>
          <div className={v.wrap}>
            <div className={v.head}>
              <div><h2 className={v.h2}>{p.process.title}</h2></div>
              <p className={v.p}>{p.process.lead}</p>
            </div>
            <ol className={`${v.timeline} ${p.process.items.length === 4 ? v.cols4 : v.cols3}`}>
              {p.process.items.map((x, i) => (
                <li key={x.title} className={v.step}>
                  <span className={v.stepDot}>0{i + 1}</span>
                  <h3 className={v.h3}>{x.title}</h3>
                  <p className={v.p}>{x.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Fit + pricing */}
      {(p.fit || p.pricing) && (
        <section className={`${v.white} ${v.sec}`}>
          <div className={`${v.wrap} ${s.fitGrid}`}>
            {p.fit && (
              <div className={s.fit}>
                <h2 className={v.h2}>{p.fit.title}</h2>
                <p className={s.fitLabel}>{p.fit.label}</p>
                <div className={s.fitBody}>{p.fit.body}</div>
              </div>
            )}
            {p.pricing && (
              <div className={s.price} data-nav="dark">
                <h2 className={s.priceTitle}>{p.pricing.title}</h2>
                <span className={s.from}>Starting at</span>
                <span className={s.amount}>{p.pricing.price}</span>
                <span className={s.unit}>{p.pricing.unit}</span>
                {p.pricing.body.map((b) => <p key={b} className={s.priceP}>{b}</p>)}
                <ul className={s.points}>{p.pricing.points.map((x) => <li key={x}>{x}</li>)}</ul>
                <Btn href="/pricing">View Pricing</Btn>
              </div>
            )}
          </div>
        </section>
      )}

      {p.faqs && <Faq faqs={p.faqs} />}

      <section className={`${v.white} ${v.ctaSec}`} style={{ paddingTop: 40 }}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>{p.cta.title}</h2>
            <p className={v.p}>{p.cta.lead}</p>
            <Btn href={CAL} external>Book a Strategy Call</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
