"use client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styles from "./page.module.scss";

export default function SignUp() {
  const router = useRouter();

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    // save user data
    router.push("/sign-up/success");
  };

  return (
    <main className="section">
      <div className={clsx("container", styles.signupContainer)}>
        <h1>Sign Up</h1>
        <p>
          Already have an acount? <a>Log In</a>
        </p>
        <form className={styles.formContainer} onSubmit={onFormSubmit}>
          <TextField
            variant="outlined"
            label="Email"
            placeholder="Enter your email"
            required
            fullWidth
          />
          <TextField
            variant="outlined"
            label="First Name"
            placeholder="Enter your first name"
            required
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Last Name"
            placeholder="Enter your first name"
            required
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Enter your first name"
            required
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Confirm Password"
            type="password"
            placeholder="Enter your first name"
            required
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
          >
            Continue
          </Button>
        </form>
      </div>
    </main>
  );
}
