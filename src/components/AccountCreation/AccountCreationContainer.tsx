// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import React, { useState } from "react";

import AccountCreation from "./AccountCreation";

const AccountCreationContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAccountCreate = async (name, email, password) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Account created successfully:", responseData);

        setIsAuthenticated(true);
        console.log(
          `Account created: Name - ${name}, Email - ${email}, Password - ${password}`
        );
      } else {
        console.error("Account creation failed.");
      }
    } catch (error) {
      console.error("Error during account creation:", error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <AuthenticatedContent name={name} email={email} />
      ) : (
        <AccountCreation
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          onCreateAccount={handleAccountCreate}
        />
      )}
    </div>
  );
};

export default AccountCreationContainer;
