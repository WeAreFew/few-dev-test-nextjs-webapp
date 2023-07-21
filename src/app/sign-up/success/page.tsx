"use client";
import { useContext } from "react";
import clsx from "clsx";

import { UserContext } from "@/components/UserDataProvider";
import Star from "@/assets/svgs/star.svg";

import styles from "./page.module.scss";

export default function SignUpSuccess() {
  const { firstName, lastName } = useContext(UserContext);
  return (
    <main className="section">
      <div className={clsx("container", styles.successContainer)}>
        <Star />
        <h1 className={styles.successHeader}>Success!</h1>
        <h3 className={styles.welcome}>
          Welcome, {firstName} {lastName}.
        </h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Nulla vitae elit libero, a pharetra augue. Donec id elit
          non mi porta gravida at eget metus. Nulla vitae elit libero, a
          pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Etiam porta sem malesuada magna mollis euismod.
          Vestibulum id ligula porta felis euismod semper. Maecenas faucibus
          mollis interdum.
        </p>
      </div>
    </main>
  );
}
