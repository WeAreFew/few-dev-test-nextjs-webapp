import React from "react";
import styles from "./SiteFooter.module.scss";
import Link from "next/link";
interface Props {}

function SiteFooter({}: Props) {
  return (
    <footer className={styles.siteFooter}>
      <nav className={styles.legalNav}>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms">Terms and Conditions</Link>
      </nav>

      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} | Few.
      </p>
    </footer>
  );
}

export default SiteFooter;
