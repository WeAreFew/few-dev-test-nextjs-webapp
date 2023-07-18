import React from "react";
import styles from "./SiteFooter.module.scss";
interface Props {}

function SiteFooter({}: Props) {
  return (
    <footer className={styles.siteFooter}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Work With Few.
      </p>
    </footer>
  );
}

export default SiteFooter;
