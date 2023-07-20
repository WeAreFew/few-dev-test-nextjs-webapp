"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { UserContext } from "@/components/UserDataProvider";

import styles from "./page.module.scss";

const userSchema = z
  .object({
    email: z.string().email({ message: "Please enter valid email" }),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    password: z
      .string()
      .min(8, {
        message:
          "Password must contain at least 8 characters that include at least one uppercase character, 1 number, and one special character.",
      })
      .refine(
        (password) => /(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9])/.test(password),
        {
          message:
            "Password must contain at least 8 characters that include at least one uppercase character, 1 number, and one special character.",
        }
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUp() {
  const router = useRouter();
  const { setUserNames } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onFormSubmit: SubmitHandler<FieldValues> = (formData) => {
    const { firstName, lastName } = formData;

    const capFirstName = `${firstName.charAt(0)}${firstName.slice(1)}`;
    const capLastName = `${lastName.charAt(0)}${lastName.slice(1)}`;

    if (!!errors) return;
    setUserNames(capFirstName, capLastName);
    router.push("/sign-up/success");
  };

  return (
    <main className="section">
      <div className={clsx("container", styles.signupContainer)}>
        <h1>Sign Up</h1>
        <p>
          Already have an acount? <a>Log In</a>
        </p>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <TextField
            id="emailField"
            variant="outlined"
            label="Email"
            placeholder="Enter your email"
            required
            fullWidth
            {...register("email")}
            helperText={errors.email?.message as string | undefined}
            error={!!errors.email}
          />
          <TextField
            id="firstNameField"
            variant="outlined"
            label="First Name"
            placeholder="Enter your first name"
            required
            fullWidth
            {...register("firstName")}
            helperText={errors.firstName?.message as string | undefined}
            error={!!errors.firstName}
          />
          <TextField
            id="lastNameField"
            variant="outlined"
            label="Last Name"
            placeholder="Enter your last name"
            required
            fullWidth
            {...register("lastName")}
            helperText={errors.lastName?.message as string | undefined}
            error={!!errors.lastName}
          />
          <TextField
            id="passwordField"
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
            fullWidth
            {...register("password")}
            helperText={errors.password?.message as string | undefined}
            error={!!errors.password}
          />
          <TextField
            id="confirmPasswordField"
            variant="outlined"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            required
            fullWidth
            {...register("confirmPassword")}
            helperText={errors.confirmPassword?.message as string | undefined}
            error={!!errors.confirmPassword}
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
