import Link from "next/link";
import s from "./v3.module.css";

// Shared building blocks for the homepage: one eyebrow, one H2, one button.
export const Corner = () => (
  <svg className={s.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

export const Mark = () => (
  <svg className={s.mark} viewBox="0 0 366 366" fill="none" stroke="currentColor" aria-hidden="true">
    <circle cx="183" cy="183" r="164" strokeWidth="44" />
    <path d="M101 139 H224.5 V262" strokeWidth="46" />
  </svg>
);

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={s.eyebrow}>
      <Mark />
      <span>{children}</span>
    </p>
  );
}

export function Btn({
  href,
  children,
  tone = "blue",
  external = false,
}: { href: string; children: React.ReactNode; tone?: "blue" | "navy" | "light" | "line"; external?: boolean }) {
  const cls = `${s.btn} ${s["btn_" + tone]}`;
  const inner = (
    <>
      <span>{children}</span>
      <Corner />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}
