import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import SketchIcon from "./SketchIcon";
import styles from "./PageHero.module.css";

// Standard inner-page hero: navy band, breadcrumbs, big bold H1 and intro
// on the left, a hand-drawn orange sketch on the right. Optional `actions`
// render under the intro (buttons / CTAs).
export default function PageHero({
  breadcrumbs,
  breadcrumbSchema,
  title,
  icon,
  children,
  actions,
}: {
  breadcrumbs: Crumb[];
  breadcrumbSchema?: boolean;
  title: ReactNode;
  icon: string;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className={styles.hero} data-nav-theme="dark">
      <div className={styles.content}>
        <div className={styles.crumbs}>
          <Breadcrumbs items={breadcrumbs} schema={breadcrumbSchema} />
        </div>
        <h1 className={styles.title}>{title}</h1>
        {children && <div className={styles.sub}>{children}</div>}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      <SketchIcon name={icon} className={styles.sketch} />
    </header>
  );
}
