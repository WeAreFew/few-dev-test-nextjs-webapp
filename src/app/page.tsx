import Button from "@mui/material/Button";
import styles from "./page.module.scss";
import clsx from "clsx";
export default function Home() {
  return (
    <main className={clsx("section", styles.homePageContent)}>
      <div className="container">
        <h1>Few Developer Test</h1>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Nulla vitae elit libero, a pharetra augue. Donec id elit
          non mi porta gravida at eget metus.
        </p>
        <p>
          Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
          magna mollis euismod. Vestibulum id ligula porta felis euismod semper.
          Maecenas faucibus mollis interdum.
        </p>
        <Button variant="outlined">Sign Up</Button>
      </div>
    </main>
  );
}
