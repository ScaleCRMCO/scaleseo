import styles from "./Process.module.css";

const steps = [
  {
    num: "01",
    name: "Conversation",
    body: "A 30-minute strategy call to learn about your firm, current marketing, target clients, and growth goals. We\u2019ll discuss the services you want to promote and whether SEO, Google Ads, or a combination of both makes sense.",
    time: "Week 1",
  },
  {
    num: "02",
    name: "Audit & Strategy",
    body: "We review your website, search visibility, competitors, and existing marketing. From there, we identify the opportunities most relevant to your firm\u2019s services, location, and budget.",
    time: "Weeks 1\u20132",
  },
  {
    num: "03",
    name: "Implementation",
    body: "We get to work implementing the agreed strategy. Depending on your campaign, this can include technical SEO, service page improvements, content development, Google Ads management, and website updates.",
    time: "Months 1\u20133",
  },
  {
    num: "04",
    name: "Ongoing Growth",
    body: "We monitor search performance, review enquiries where tracking is available, and continue improving your campaign based on results. Our goal is to build a reliable, long-term source of new business for your firm.",
    time: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.layout}>
        {/* LEFT — heading + intro, same column as the FAQ heading */}
        <div className={styles.aside}>
          <h2 className={`${styles.headingBig} reveal-up`}>
            4 Steps to Getting Started
          </h2>
          <p className={`${styles.intro} ${styles.introStrong} reveal-up`}>
            We start by understanding your accounting firm, the services you
            want to grow, and where search marketing can make the biggest
            difference.
          </p>
        </div>

        {/* RIGHT — numbered rows: big number | name | description */}
        <ol className={styles.rows}>
          {steps.map((step) => (
            <li key={step.num} className={`${styles.row} reveal-up`}>
              <span className={styles.num}>{step.num}</span>
              <h3 className={styles.name}>{step.name}</h3>
              <div>
                <p className={styles.body}>{step.body}</p>
                <span className={styles.time}>{step.time}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
