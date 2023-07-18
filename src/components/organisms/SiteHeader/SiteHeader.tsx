import React from "react";
import styles from "./SiteHeader.module.scss";
interface Props {}

export default function SiteHeader({}: Props) {
  return <header className={styles.siteHeader}>SiteHeader</header>;
}
