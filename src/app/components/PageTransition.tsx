"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.css";

export default function PageTransition() {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      setAnimating(true);
      const t = setTimeout(() => {
        setCurrentPath(pathname);
        setAnimating(false);
      }, 1100);
      return () => clearTimeout(t);
    }
  }, [pathname, currentPath]);

  return (
    <div
      className={`${styles.curtain} ${animating ? styles.active : ""}`}
      aria-hidden="true"
    />
  );
}
