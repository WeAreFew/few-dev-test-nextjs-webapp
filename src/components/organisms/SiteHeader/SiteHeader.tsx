"use client";
import React from "react";
import styles from "./SiteHeader.module.scss";
import Logo from "@/assets/svgs/main-logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";
interface Props {}

export default function SiteHeader({}: Props) {
  const pathname = usePathname();
  const successScreenVisible = pathname === "/sign-up/success";

  return (
    <header className={styles.siteHeader}>
      <Logo />
      <nav className={styles.mainNav}>
        <Link href="/">Home</Link>
        {successScreenVisible ? (
          <Link href="/">Log Out</Link>
        ) : (
          <Link href="/sign-up">
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
}
