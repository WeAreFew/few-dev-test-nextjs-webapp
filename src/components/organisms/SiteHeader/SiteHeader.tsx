import React from "react";
import styles from "./SiteHeader.module.scss";
import Logo from "@/assets/svgs/main-logo.svg";
import Link from "next/link";
import { Button } from "@mui/material";
interface Props {}

export default function SiteHeader({}: Props) {
  return (
    <header className={styles.siteHeader}>
      <Logo />
      <nav class={styles.mainNav}>
        <Link href="/">Home</Link>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </nav>
    </header>
  );
}
