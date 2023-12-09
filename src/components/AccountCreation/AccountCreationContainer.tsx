// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import React, { useState } from "react";

import AccountCreation from "./AccountCreation";

const AccountCreationContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAccountCreate = async (name, email, password) => {
    // Simulate API call success
    setIsAuthenticated(true);
    console.log(
      `Account created: Name - ${name}, Email - ${email}, Password - ${password}`
    );

    try {
      const response = await fetch(
        "https://dn-live-test.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
        <AuthenticatedContent username={""} email={""} />
      ) : (
        <AccountCreation onCreateAccount={handleAccountCreate} />
      )}
    </div>
  );
};

export default AccountCreationContainer;
