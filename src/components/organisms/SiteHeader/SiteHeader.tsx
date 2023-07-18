import React from "react";
import styles from "./SiteHeader.module.scss";
import Logo from "@/assets/svgs/main-logo.svg";
interface Props {}

export default function SiteHeader({}: Props) {
  return (
    <header className={styles.siteHeader}>
      <Logo />
      SiteHeader
    </header>
  );
}
