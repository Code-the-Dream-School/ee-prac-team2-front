// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import Login from "@components/Login/Login";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountCreation from "./AccountCreation";

const AccountCreationContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleAccountCreate = async (name, email, password) => {
    try {
      const response = await fetch(
        "https://dn-live-test.onrender.com/api/v1/auth/signup",
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

        setUser({
          userID: responseData.user._id,
          name: responseData.user.name,
          email: responseData.user.email,
        });
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

  const loginUser = async (currentUser) => {
    try {
      const response = await fetch(
        "https://dn-live-test.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: currentUser.email,
            password: currentUser.password,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Logged in successfully!", responseData);

        setEmail(currentUser.email);
        setName(responseData.name);

        setIsAuthenticated(true);

        setUser({
          userID: responseData.user._id,
          name: responseData.user.name,
          email: responseData.user.email,
        });
        console.log(
          `Account logged in: Name - ${name}, Email - ${email}, Password - ${password}`
        );
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Error during account creation:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account", { state: { user } });
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      {signup ? (
        <AccountCreation
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          onCreateAccount={handleAccountCreate}
        />
      ) : (
        <Login
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          loginUser={loginUser}
        />
      )}
    </div>
  );
};

export default AccountCreationContainer;
