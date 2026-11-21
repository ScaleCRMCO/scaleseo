import Link from "next/link";
import Image from "next/image";
import s from "./v3.module.css";
import { Btn, Corner, Eyebrow, Mark } from "./ui";
import ClientLogos from "../../components/ClientLogos";
import CountUp from "../../components/CountUp";
import Signature from "../../components/Signature";
import HeroMark from "../home/HeroMark";
import { defaultPoints, whyPoints, type DiffPoint } from "../home/Differently";
import { testimonials } from "../../components/testimonials";
import { posts } from "../../blog/posts";
import PostCard from "../../blog/PostCard";

const CAL = "https://cal.com/corbinjensen-scaleseo/30min";

const Icon = ({ d }: { d: string }) => (
  <span className={s.icon} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  </span>
);

/* 1. Hero — navy, contained, Bilberrry-style statement with the large mark */
export function Hero() {
  return (
    <header className={`${s.navy} ${s.hero}`} data-nav="dark">
      <div className={`${s.wrap} ${s.heroInner}`}>
        <HeroMark className={s.heroMark} />
        <div className={s.heroText}>
          <Eyebrow>Calgary SEO Company for Accountants</Eyebrow>
          <h1 className={s.h1}>SEO &amp; Google Ads for Accounting Firms</h1>
          <p className={s.lead}>Good SEO should pay for itself. That&rsquo;s what we work toward.</p>
          <div className={s.heroActions}>
            <Btn href={CAL} external>Book A Strategy Call</Btn>
            <Btn href="/results" tone="line">See Our Results</Btn>
          </div>
        </div>
        <div className={s.heroProof}>
          <div className={s.heroMetric}>
            <span className={s.statValue}>$1M+</span>
            <span className={s.small}>in Client Revenue Generated</span>
          </div>
          <a href="https://agencies.semrush.com/scale-seo/" target="_blank" rel="noopener noreferrer" aria-label="Scale SEO — Semrush Certified Agency Partner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner badge" width={56} height={56} />
          </a>
          <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" aria-label="Scale SEO reviews on Clutch">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/clutch-reviewed.svg" alt="Reviewed on Clutch" width={140} height={27} />
          </a>
        </div>
      </div>
      <div className={s.logoStrip}>
        <ClientLogos dark />
      </div>
    </header>
  );
}

/* 2. Intro + differentiators — Mamba: eyebrow left, statement right, 3 ruled points */
export function Intro() {
  return (
    <section className={`${s.white} ${s.sec}`} aria-labelledby="intro-h">
      <div className={s.wrap}>
        <div className={s.split}>
          <h2 id="intro-h" className={s.eyebrow}><Mark /><span>About Scale SEO</span></h2>
          <div>
            <p className={s.statement}>
              Scale SEO is an independent search consultancy based in Calgary, Alberta, founded in 2025 by Corbin Jensen.
            </p>
            <div className={s.twoCol}>
              <p className={s.p}>
                Our focus is accounting and professional services. Through our work with firms in Canada and Australia, we&rsquo;ve developed experience across corporate tax, bookkeeping, fractional CFO, and business advisory marketing.
              </p>
              <p className={s.p}>
                We combine technical SEO, website development, and Google Ads to help businesses improve how they&rsquo;re found online and reach the clients they want to work with.
              </p>
            </div>
            <p className={`${s.p} ${s.introNote}`}>
              While accounting is our specialty, we also work with established businesses across consulting, construction, and other service industries.
            </p>
          </div>
        </div>
        <h2 className={s.subhead}>What Makes Scale SEO Different?</h2>
        <Points points={defaultPoints} cols={3} />
        <div className={s.endRow}>
          <Btn href="/about" tone="navy">More About Scale SEO</Btn>
        </div>
      </div>
    </section>
  );
}

function Points({ points, cols }: { points: DiffPoint[]; cols: 3 | 4 }) {
  return (
    <div className={`${s.points} ${cols === 4 ? s.cols4 : s.cols3}`}>
      {points.map((p) => (
        <div key={p.title} className={s.point}>
          <Icon d={p.icon} />
          <h3 className={s.h3}>{p.title}</h3>
          <p className={s.p}>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

/* 3. Services — Bilberrry numbered list on navy */
const services = [
  { href: "/services/seo", icon: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3M8 13l2-2 2 2 3-3", title: "SEO for Accounting Firms", desc: "Improve your visibility for searches related to corporate tax, bookkeeping, business advisory, and other valuable accounting services. Our SEO campaigns cover technical improvements, service page optimization, content development, and local search." },
  { href: "/services/google-ads-management", icon: "M3 11l14-6v14L3 13zM7 12v6a2 2 0 0 0 4 0v-5M21 9v6", title: "Google Ads Management", desc: "Reach potential clients actively searching for accounting and tax services. We build and manage targeted Google Ads campaigns, focusing on relevant searches, lead tracking, and ongoing performance improvements." },
  { href: "/services/web-development", icon: "M3 4h18v12H3zM8 20h8M12 16v4M9 8l-2 2 2 2M15 8l2 2-2 2", title: "Accounting Website Development", desc: "Professional websites designed to represent your firm, explain your services clearly, and make it easier for potential clients to get in touch. Every website is developed with search visibility, usability, and long-term growth in mind." },
  { href: "/services/seo-audits", icon: "M9 3h6v3H9zM6 5H5v16h14V5h-1M9 12l2 2 4-4", title: "SEO Audits & Consulting", desc: "Understand what’s holding your accounting website back. We review technical issues, keyword targeting, existing content, competitors, and opportunities to improve your search visibility." },
  { href: "/services/geo", icon: "M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z", title: "AI Search Optimization", desc: "Help search engines and AI-powered platforms better understand your firm, its services, and areas of expertise. We improve website content, structured data, and business information to support visibility across evolving search experiences." },
];

export function Services() {
  return (
    <section className={`${s.navy} ${s.sec}`} id="services" data-nav="dark" aria-labelledby="services-h">
      <div className={s.wrap}>
        <div className={s.head}>
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2 id="services-h" className={s.h2}>SEO &amp; Digital Marketing for Accounting Firms</h2>
          </div>
          <p className={s.p}>
            SEO, Google Ads, and your website shouldn&rsquo;t operate as separate marketing efforts. We bring them together around your firm&rsquo;s goals, whether that&rsquo;s attracting more corporate tax clients, growing monthly bookkeeping revenue, or expanding your advisory services.
          </p>
        </div>
        <ol className={s.list}>
          {services.map((x, i) => (
            <li key={x.href}>
              <Link href={x.href} className={s.listRow}>
                <span className={s.listIcon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={x.icon} /></svg></span>
                <span className={s.listName}>{x.title} <Corner /></span>
                <span className={s.listDesc}>{x.desc}</span>
              </Link>
            </li>
          ))}
        </ol>
        <div className={s.endRow}>
          <Btn href="/services" tone="light">Explore All Services</Btn>
        </div>
      </div>
    </section>
  );
}

/* 4. Case studies — Bilberrry alternating image / text rows */
type Case = { href: string; client: string; services: string; image: string; metric: { from?: number; to: number; prefix?: string; suffix?: string }; metricLabel: string; metricNote?: string; summary: string };

export function Cases({ cases }: { cases: Case[] }) {
  return (
    <section className={`${s.white} ${s.sec}`} id="results" aria-labelledby="cases-h">
      <div className={s.wrap}>
        <div className={s.head}>
          <div>
            <Eyebrow>Scale SEO Client Work</Eyebrow>
            <h2 id="cases-h" className={s.h2}>SEO Results From Real Accounting Firms</h2>
          </div>
          <p className={s.p}>
            We work with accounting firms to improve their search visibility, strengthen their websites, and attract more of the clients they want to serve. Here&rsquo;s a look at some of our work.
          </p>
        </div>
        <div className={s.cases}>
          {cases.map((c, i) => (
            <article key={c.href} className={`${s.case} ${i % 2 ? s.caseFlip : ""}`}>
              <Link href={c.href} className={s.caseMedia} aria-label={`Read the ${c.client} case study`}>
                <Image src={c.image} alt={c.client} fill sizes="(max-width: 900px) 100vw, 640px" className={s.cover} />
              </Link>
              <div className={s.caseText}>
                <p className={s.small}>{c.client}</p>
                <p className={s.stat}>
                  <span className={s.statValue}><CountUp from={c.metric.from ?? 0} to={c.metric.to} prefix={c.metric.prefix} suffix={c.metric.suffix} /></span>
                  <span className={s.small}>{c.metricLabel}</span>
                </p>
                {c.metricNote && <p className={s.metricNote}>{c.metricNote}</p>}
                <p className={s.p}>{c.summary}</p>
                <ul className={s.tags}>
                  {c.services.split(" / ").map((t) => <li key={t}>/ {t}</li>)}
                </ul>
                <Link href={c.href} className={s.textLink}>Read case study <Corner /></Link>
              </div>
            </article>
          ))}
        </div>
        <div className={s.endRow}>
          <Btn href="/results" tone="navy">View All Results</Btn>
        </div>
      </div>
    </section>
  );
}

/* 5. How we help — Mamba: heading left, three white cards on grey */
const help = [
  { title: "Attract More Valuable Clients", body: "Not every accounting enquiry has the same value. We help firms target services such as corporate tax, business advisory, bookkeeping, and fractional CFO support to reach clients looking for ongoing professional services." },
  { title: "Improve Your Visibility on Google", body: "We optimize your website for the services and locations your prospective clients are searching for. This includes improving existing pages, creating useful content, fixing technical issues, and building stronger connections between related services." },
  { title: "Turn More Visitors Into Enquiries", body: "Getting found is only part of the process. We improve how your website presents your services, answers potential clients’ questions, and guides visitors toward contacting your firm." },
];

export function Help() {
  return (
    <section className={`${s.grey} ${s.sec}`} aria-labelledby="help-h">
      <div className={s.wrap}>
        <div className={s.head}>
          <div>
            <Eyebrow>How We Help</Eyebrow>
            <h2 id="help-h" className={s.h2}>How We Help Accounting Firms Grow Through Search</h2>
          </div>
          <div className={s.headSide}>
            <p className={s.p}>
              Accounting firms compete for different clients, services, and locations. We build search strategies around the opportunities that matter most to each practice.
            </p>
            <Btn href="/services/seo" tone="navy">Explore Our SEO Services</Btn>
          </div>
        </div>
        <ol className={`${s.cards} ${s.cols3}`}>
          {help.map((h, i) => (
            <li key={h.title} className={s.card}>
              <span className={s.cardNum}>0{i + 1}</span>
              <h3 className={s.h3}>{h.title}</h3>
              <p className={s.p}>{h.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 6. Founder — portrait left, story right, signed note */
export function Founder() {
  return (
    <section className={`${s.white} ${s.sec}`} id="about" aria-labelledby="founder-h">
      <div className={`${s.wrap} ${s.founder}`}>
        <figure className={s.portrait}>
          <Image src="/images/corbin-portrait.webp" alt="Corbin Jensen, founder of Scale SEO" fill sizes="(max-width: 900px) 90vw, 480px" className={s.cover} />
        </figure>
        <div>
          <h2 id="founder-h" className={s.h2}>Meet the Founder</h2>
          <div className={s.stack}>
            <p className={s.p}>Corbin Jensen founded Scale SEO in Calgary in 2025.</p>
            <p className={s.p}>His work spans technical SEO, website development, content strategy, and Google Ads, with a particular focus on accounting and professional services.</p>
            <p className={s.p}>Through his work with firms in Canada and Australia, Corbin has developed practical experience in how accounting practices present their services, compete in search, and attract new business.</p>
          </div>
          <blockquote className={s.quote}>
            <p>&ldquo;Every business has its own ambitions, challenges, and definition of success. I founded Scale SEO to bring a more considered approach to search, one that starts with understanding the client, values thoughtful execution, and places long-term relationships ahead of short-term gains.&rdquo;</p>
          </blockquote>
          <div className={s.signRow}>
            <div className={s.sign}>
              <Signature className={s.signature} />
              <span className={s.small}>&mdash; <strong>Corbin Jensen</strong>, Founder of Scale SEO</span>
            </div>
            <Btn href="/corbin-jensen" tone="navy">Read Corbin&rsquo;s Bio</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 7. Who we work with — navy, four outlined boxes */
const industries = [
  { title: "CPA & Chartered Accounting Firms", body: "SEO and Google Ads for accounting practices looking to attract more corporate tax, business accounting, and ongoing advisory clients." },
  { title: "Corporate Tax & Tax Advisory Firms", body: "Search strategies focused on reaching businesses that need corporate tax filing, tax planning, restructuring, and specialized tax advice." },
  { title: "Bookkeeping & Cloud Accounting Practices", body: "Improve visibility for monthly bookkeeping, payroll, cloud accounting, and outsourced financial management services." },
  { title: "Fractional CFO & Advisory Firms", body: "Reach business owners searching for financial planning, cash flow management, outsourced CFO support, and strategic business advice." },
];

export function Industries() {
  return (
    <section className={`${s.navy} ${s.sec}`} id="industries" data-nav="dark" aria-labelledby="ind-h">
      <div className={s.wrap}>
        <div className={s.head}>
          <div>
            <Eyebrow>Industries</Eyebrow>
            <h2 id="ind-h" className={s.h2}>Who We Work With</h2>
          </div>
          <div className={s.headSide}>
            <Btn href="/industries/accounting-firms" tone="light">Explore SEO for Accounting Firms</Btn>
          </div>
        </div>
        <div className={`${s.boxes} ${s.cols4}`}>
          {industries.map((x, i) => (
            <div key={x.title} className={s.box}>
              <span className={s.listNum}>/ 0{i + 1}</span>
              <h3 className={s.h3}>{x.title}</h3>
              <p className={s.p}>{x.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8. Process — four-step timeline */
const steps = [
  { name: "Conversation", time: "Week 1", body: "A 30-minute strategy call to learn about your firm, current marketing, target clients, and growth goals. We’ll discuss the services you want to promote and whether SEO, Google Ads, or a combination of both makes sense." },
  { name: "Audit & Strategy", time: "Weeks 1–2", body: "We review your website, search visibility, competitors, and existing marketing. From there, we identify the opportunities most relevant to your firm’s services, location, and budget." },
  { name: "Implementation", time: "Months 1–3", body: "We get to work implementing the agreed strategy. Depending on your campaign, this can include technical SEO, service page improvements, content development, Google Ads management, and website updates." },
  { name: "Ongoing Growth", time: "Ongoing", body: "We monitor search performance, review enquiries where tracking is available, and continue improving your campaign based on results. Our goal is to build a reliable, long-term source of new business for your firm." },
];

export function Process() {
  return (
    <section className={`${s.white} ${s.sec}`} id="process" aria-labelledby="proc-h">
      <div className={s.wrap}>
        <div className={s.head}>
          <div>
            <Eyebrow>Our Process</Eyebrow>
            <h2 id="proc-h" className={s.h2}>4 Steps to Getting Started</h2>
          </div>
          <p className={s.p}>
            We start by understanding your accounting firm, the services you want to grow, and where search marketing can make the biggest difference.
          </p>
        </div>
        <ol className={`${s.timeline} ${s.cols4}`}>
          {steps.map((x, i) => (
            <li key={x.name} className={s.step}>
              <span className={s.stepDot}>0{i + 1}</span>
              <span className={s.pill}>{x.time}</span>
              <h3 className={s.h3}>{x.name}</h3>
              <p className={s.p}>{x.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 9. Why choose — Mamba: heading top, image left, label + 2x2 ruled points right */
export function Why() {
  return (
    <section className={`${s.navy} ${s.sec}`} data-nav="dark" aria-labelledby="why-h">
      <div className={s.wrap}>
        <div className={s.whyHead}>
          <h2 id="why-h" className={s.h2}>Why Accounting Firms Choose Scale SEO</h2>
        </div>
        <div className={s.whyGrid}>
          <div className={s.whyImg}>
            <Image src="/images/calgary-skyline-bw.webp" alt="Black and white panorama of the downtown Calgary skyline" fill sizes="(max-width: 900px) 100vw, 620px" />
          </div>
          <div>
            <p className={s.whyLabel}>Here&rsquo;s what sets us apart.</p>
            <div className={s.whyPoints}>
              {whyPoints.map((p) => (
                <div key={p.title} className={s.whyPoint}>
                  <span className={s.whyIcon}><Icon d={p.icon} /></span>
                  <h3 className={s.h3}>{p.title}</h3>
                  <p className={s.p}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 10. Testimonials — card grid */
export function Reviews() {
  const items = testimonials.filter((t) => !t.placeholder || process.env.NODE_ENV !== "production");
  if (!items.length) return null;
  return (
    <section className={`${s.white} ${s.sec}`} aria-labelledby="rev-h">
      <div className={s.wrap}>
        <div className={s.head}>
          <div>
            <Eyebrow>Testimonials</Eyebrow>
            <h2 id="rev-h" className={s.h2}>What Clients Say</h2>
          </div>
          <p className={s.p}>Clients rate 5 stars on Google, reflecting their trust and satisfaction with the work.</p>
        </div>
        <div className={`${s.reviews} ${items.length > 2 ? s.cols3 : s.cols2}`}>
          {items.map((t) => (
            <figure key={t.name} className={s.review}>
              <span className={s.stars} aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote className={s.reviewQuote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className={s.small}><strong>{t.name}</strong><br />{t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 11. FAQ — heading left, accordion right */
const FAQ_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
function faqRich(t: string) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of t.matchAll(FAQ_LINK)) {
    if (m.index! > last) out.push(t.slice(last, m.index));
    out.push(<Link key={m.index} href={m[2]} className={s.inlineLink}>{m[1]}</Link>);
    last = m.index! + m[0].length;
  }
  if (last < t.length) out.push(t.slice(last));
  return out;
}

export function Faq({ faqs }: { faqs: { q: string; a: string[] }[] }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.map((x) => x.replace(FAQ_LINK, "$1")).join(" ") } })) };
  return (
    <section className={`${s.grey} ${s.sec}`} id="faq" aria-labelledby="faq-h">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={`${s.wrap} ${s.faq}`}>
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-h" className={s.h2}>Frequently Asked Questions</h2>
          <Btn href={CAL} external tone="navy">Speak to an Expert</Btn>
        </div>
        <div className={s.acc}>
          {faqs.map((f, i) => (
            <details key={f.q} className={s.accItem} name="home-faq" open={i === 0}>
              <summary className={s.accSum}>
                <h3 className={s.accQ}>{f.q}</h3>
                <span className={s.plus} aria-hidden="true" />
              </summary>
              <div className={s.stack}>{f.a.map((p) => <p key={p} className={s.p}>{faqRich(p)}</p>)}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 12. Blog */
export function Blog() {
  const latest = posts.slice(0, 3);
  if (!latest.length) return null;
  return (
    <section className={`${s.white} ${s.sec}`} id="blog" aria-labelledby="blog-h">
      <div className={s.wrap}>
        <div className={s.head}>
          <div>
            <Eyebrow>Recent Articles</Eyebrow>
            <h2 id="blog-h" className={s.h2}>SEO Insights for Accounting Firms</h2>
          </div>
          <div className={s.headSide}>
            <p className={s.p}>Practical resources covering SEO, Google Ads, website development, and client acquisition for accounting practices.</p>
            <Btn href="/blog" tone="navy">View All Resources</Btn>
          </div>
        </div>
        <div className={`${s.blog} ${s.cols3}`}>
          {latest.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </div>
    </section>
  );
}

/* 13. Closing CTA — contained navy panel */
export function Cta() {
  return (
    <section className={`${s.white} ${s.ctaSec}`} id="contact">
      <div className={s.wrap}>
        <div className={s.ctaBox} data-nav="dark">
          <HeroMark className={s.ctaMark} />
          <Eyebrow>Contact</Eyebrow>
          <h2 className={s.h2}>Ready to Grow Your Accounting Firm?</h2>
          <p className={s.p}>
            Let&rsquo;s discuss your firm&rsquo;s goals, current marketing, and opportunities to attract more clients through Google. Tell us about your practice and the services you want to grow. You&rsquo;ll hear back directly, usually within 24 hours.
          </p>
          <Btn href={CAL} external>Speak to an Expert</Btn>
        </div>
      </div>
    </section>
  );
}
