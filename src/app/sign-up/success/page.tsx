"use client";
import { UserContext } from "@/components/UserDataProvider";
import { useContext } from "react";

export default function SignUpSuccess() {
  const { firstName, lastName } = useContext(UserContext);
  return (
    <main className="section">
      {firstName} {lastName}
    </main>
  );
}
