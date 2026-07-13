import styles from "./Interstitial.module.css";

type InterstitialProps = {
  eyebrow?: string;
  children: React.ReactNode;
};

export default function Interstitial({ eyebrow, children }: InterstitialProps) {
  return (
    <section className={styles.section}>
      {eyebrow && <p className={`${styles.eyebrow} reveal-up`}>{eyebrow}</p>}
      <p className={`${styles.statement} reveal-up`}>{children}</p>
    </section>
  );
}
