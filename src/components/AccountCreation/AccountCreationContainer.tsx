// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import axios from "axios";
import React, { useState } from "react";

import AccountCreation from "./AccountCreation";

const AccountCreationContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAccountCreate = async (name, email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}auth/signup`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response) {
        console.log("Account created successfully:", response.data);

        setIsAuthenticated(true);
        console.log(
          `Account created: Name - ${name}, Email - ${email}, Password - ${password}`
        );
      } else {
        console.error("Account creation failed.");
      }
    } catch (error) {
      console.error("Error during account creation:", error.response.data.msg);
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
