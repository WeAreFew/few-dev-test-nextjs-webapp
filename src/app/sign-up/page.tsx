import clsx from "clsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styles from "./page.module.scss";

export default function SignUp() {
  return (
    <main className="section">
      <div className={clsx("container", styles.formContainer)}>
        <h1>Sign Up</h1>
        <p>
          Already have an acount? <a>Log In</a>
        </p>
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
        <Button variant="contained" color="primary" fullWidth>
          Continue
        </Button>
      </div>
    </main>
  );
}
