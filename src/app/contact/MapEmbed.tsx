import styles from "./MapEmbed.module.css";

export default function MapEmbed() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.mapFrame}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.49227131513!2d-114.087835!3d51.027623299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xada14f19cf89503f%3A0xf1861b58b17f2c95!2sScale%20SEO!5e0!3m2!1sen!2sca!4v1789355132106!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Scale SEO — Google Business Profile map"
            className={styles.map}
          />
        </div>
      </div>
    </section>
  );
}
