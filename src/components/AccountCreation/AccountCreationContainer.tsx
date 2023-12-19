// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (data) => {
    setIsSignup(data);
  };

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
        `${import.meta.env.VITE_BACKEND_URL}auth/login`,
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
      {isSignup ? (
        <AccountCreation
          name={name}
          email={email}
          password={password}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          onCreateAccount={handleAccountCreate}
          onIsSignup={handleSignup}
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
          onIsSignup={handleSignup}
        />
      )}
    </div>
  );
};

export default AccountCreationContainer;
