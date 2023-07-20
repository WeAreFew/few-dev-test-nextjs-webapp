"use client";

import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  firstName: string;
  lastName: string;
  setUserNames: (firstName: string, lastName: string) => void;
};

export const UserContext = createContext<UserContextType>({
  firstName: "",
  lastName: "",
  setUserNames: (firstName: string, lastName: string) => {},
});

export default function UserDataProvider(props: { children: ReactNode }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { children } = props;
  const setUserNames = (firstName: string, lastName: string) => {
    setFirstName(firstName);
    setLastName(lastName);
  };

  return (
    <UserContext.Provider
      value={{
        firstName,
        lastName,
        setUserNames,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
