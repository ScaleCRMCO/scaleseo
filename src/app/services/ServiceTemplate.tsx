import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import CountUp from "../components/CountUp";
import v from "../sections/v3/v3.module.css";
import { Btn } from "../sections/v3/ui";
import { Faq } from "../sections/v3/Sections";
import HeroMark from "../sections/home/HeroMark";
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
  parent?: { name: string; href: string };
  primaryLabel?: string;
  primaryHref?: string;
  hideSecondary?: boolean;
  top?: ReactNode;
  title: string;
  heroLead: string;
  heroImage: { src: string; alt: string };
  heroBleed?: boolean;
  heroImgScale?: number;
  heroSecondary?: { href: string; label: string };
  panels?: { title: string; lead: string; note?: ReactNode; items: { title: string; strong: string; body: ReactNode }[] };
  statementLabel: string;
  statement: string;
  statementNote?: string;
  statementBody?: string[];
  explainer?: { title: string; lead: string; body: ReactNode };
  feature?: ReactNode;
  feature2?: ReactNode;
  splits?: { title: string; lead?: string; body: ReactNode; image: { src: string; alt: string }; cta?: { href: string; label: string } }[];
  included?: { title: string; lead: string; cta?: { href: string; label: string }; items: { title: string; body: string | string[]; icon: string }[]; image: { src: string; alt: string } };
  cases?: { title: string; lead: string; items: { name: string; body: string; tag?: string; stats: { from: number; to: number; prefix?: string; suffix?: string; label: string }[]; href: string; cta: string; img: string }[]; note?: string };
  markets?: { title: string; items: { title: string; body: string; icon: string; href?: string; cta?: string }[]; outro?: string };
  process?: { title: string; lead: string; note?: string; items: { title: string; body: string }[] };
  fit?: { title: string; label: string; body: ReactNode };
  pricing?: { title: string; price: string; unit: string; from?: string; body: string[]; points: string[]; cta?: string };
  faqs?: { q: string; a: string[] }[];
  cta: { title: string; lead: ReactNode; secondary?: { href: string; label: string } };
};

export default function ServiceTemplate(p: ServiceTemplateProps) {
  return (
    <>
      {/* Hero */}
      <header className={`${v.navy} ${s.hero} ${p.heroBleed ? s.bleed : ""}`} data-nav="dark">
        <div className={`${v.wrap} ${s.heroGrid}`}>
          <div className={s.heroText}>
            <div className={s.crumbs}>
              <Breadcrumbs items={[{ name: "Home", href: "/" }, p.parent ?? { name: "Services", href: "/services" }, { name: p.crumb }]} schema={false} />
            </div>
            <h1 className={s.h1}>{p.title}</h1>
            <p className={v.lead}>{p.heroLead}</p>
            <div className={s.btns}>
              {p.primaryHref ? <Btn href={p.primaryHref}>{p.primaryLabel ?? "Book a Strategy Call"}</Btn> : <Btn href={CAL} external>{p.primaryLabel ?? "Book a Strategy Call"}</Btn>}
              {!p.hideSecondary && <Btn href={p.heroSecondary?.href ?? "/results"} tone="line">{p.heroSecondary?.label ?? "View Client Results"}</Btn>}
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
          <div className={s.heroMedia}>
            <HeroMark className={s.heroMark} />
            <div className={s.heroImg} style={p.heroImgScale ? { aspectRatio: "auto", overflow: "visible" } : undefined}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.heroImage.src} alt={p.heroImage.alt} style={p.heroImgScale ? { width: `${p.heroImgScale * 100}%`, height: "auto", margin: "0 auto", display: "block" } : undefined} />
            </div>
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
            {p.statementBody && (
              <div className={s.stBody}>{p.statementBody.map((b) => <p key={b} className={v.p}>{b}</p>)}</div>
            )}
            {p.included && (
              <ul className={s.tags}>{p.included.items.map((x) => <li key={x.title}>/ {x.title}</li>)}</ul>
            )}
          </div>
        </div>
      </section>

      {p.top}

      {/* Explainer (optional) */}
      {p.explainer && (
        <section className={`${v.white} ${s.panelsSec}`}>
          <div className={`${v.wrap} ${s.explainer}`}>
            <h2 className={v.h2}>{p.explainer.title}</h2>
            <div>
              <p className={s.fitLabel}>{p.explainer.lead}</p>
              <div className={s.fitBody}>{p.explainer.body}</div>
            </div>
          </div>
        </section>
      )}

      {/* Two panels (optional) */}
      {p.panels && (
        <section className={`${v.white} ${s.panelsSec}`}>
          <div className={v.wrap}>
            <div className={v.head}>
              <div><h2 className={v.h2}>{p.panels.title}</h2></div>
              <p className={v.p}>{p.panels.lead}</p>
            </div>
            <div className={s.panels}>
              {p.panels.items.map((x, i) => (
                <div key={x.title} className={`${s.panel} ${i % 2 ? s.panelNavy : ""}`} data-nav={i % 2 ? "dark" : undefined}>
                  <h3 className={v.h3}>{x.title}</h3>
                  <p className={s.panelStrong}>{x.strong}</p>
                  <div className={s.panelBody}>{x.body}</div>
                </div>
              ))}
            </div>
            {p.panels.note && <div className={s.panelNote}>{p.panels.note}</div>}
          </div>
        </section>
      )}

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
                    <div className={s.itemBody}>{(Array.isArray(x.body) ? x.body : [x.body]).map((b) => <p key={b} className={v.p}>{b}</p>)}</div>
                  </details>
                ))}
              </div>
              <div className={s.accImg}>
                <Image src={p.included.image.src} alt={p.included.image.alt} fill sizes="(max-width: 900px) 100vw, 600px" />
              </div>
            </div>
            {p.included.cta && <div className={s.incCta}><Btn href={p.included.cta.href} tone="navy">{p.included.cta.label}</Btn></div>}
          </div>
        </section>
      )}

      {p.feature}

      {/* Alternating image / text splits (Mamba) */}
      {p.splits && (
        <section className={`${v.navy} ${v.sec}`} data-nav="dark">
          <div className={`${v.wrap} ${s.splits}`}>
            {p.splits.map((x, i) => (
              <div key={x.title} className={`${s.split} ${i % 2 ? s.splitFlip : ""}`}>
                <div className={s.splitText}>
                  <h2 className={v.h2}>{x.title}</h2>
                  {x.lead && <p className={s.splitLead}>{x.lead}</p>}
                  <div className={s.splitBody}>{x.body}</div>
                  {x.cta && <Btn href={x.cta.href} tone="light">{x.cta.label}</Btn>}
                </div>
                <div className={s.splitImg}>
                  <Image src={x.image.src} alt={x.image.alt} fill sizes="(max-width: 900px) 100vw, 620px" />
                </div>
              </div>
            ))}
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
                    {c.tag && <span className={s.caseTag}>{c.tag}</span>}
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

      {/* Markets — Mamba: side label + ruled columns, wide skyline below */}
      {p.markets && (
        <section className={`${v.white} ${v.sec} ${s.mkSec}`}>
          <div className={v.wrap}>
            <h2 className={`${v.h2} ${s.mkTitle}`}>{p.markets.title}</h2>
            <div className={s.mkRow}>
              <p className={s.mkLabel}>{p.markets.outro}</p>
              {p.markets.items.map((m) => (
                <div key={m.title} className={s.mkCol}>
                  <h3 className={v.h3}>{m.title}</h3>
                  <p className={v.p}>{m.body}</p>
                  {m.href && <Link href={m.href} className={v.textLink}>{m.cta} <Corner /></Link>}
                </div>
              ))}
            </div>
            <div className={s.mkImg}>
              <Image src="/images/toronto-skyline-bw.webp" alt="Black and white downtown Toronto skyline" fill sizes="(max-width: 1360px) 100vw, 1280px" />
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
            {p.process.note && <p className={s.caseNote}>{p.process.note}</p>}
          </div>
        </section>
      )}

      {p.feature2}

      {/* Fit + pricing */}
      {(p.fit || p.pricing) && (
        <section className={`${v.white} ${v.sec}`}>
          <div className={`${v.wrap} ${s.fitGrid} ${!p.pricing ? s.fitSolo : ""}`}>
            {!p.fit && p.pricing && (
              <div className={s.fit}>
                <h2 className={v.h2}>{p.pricing.title}</h2>
                {p.pricing.body.map((b) => <p key={b} className={s.fitBody}>{b}</p>)}
              </div>
            )}
            {p.fit && (
              <div className={s.fit}>
                <h2 className={v.h2}>{p.fit.title}</h2>
                <p className={s.fitLabel}>{p.fit.label}</p>
                <div className={s.fitBody}>{p.fit.body}</div>
              </div>
            )}
            {p.pricing && (
              <div className={s.price} data-nav="dark">
                {p.fit && <h2 className={s.priceTitle}>{p.pricing.title}</h2>}
                <span className={s.from}>{p.pricing.from ?? "Starting at"}</span>
                <span className={`${s.amount} ${p.pricing.price.length > 12 ? s.amountSm : ""}`}>{p.pricing.price}</span>
                <span className={s.unit}>{p.pricing.unit}</span>
                {p.fit && p.pricing.body.map((b) => <p key={b} className={s.priceP}>{b}</p>)}
                <ul className={s.points}>{p.pricing.points.map((x) => <li key={x}>{x}</li>)}</ul>
                <Btn href="/pricing">{p.pricing.cta ?? "View Pricing"}</Btn>
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
            <div className={v.p}>{p.cta.lead}</div>
            <div className={s.ctaBtns}>
              <Btn href={CAL} external>{p.primaryLabel ?? "Book a Strategy Call"}</Btn>
              {p.cta.secondary && <Btn href={p.cta.secondary.href} tone="line">{p.cta.secondary.label}</Btn>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
