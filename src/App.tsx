import Logo from "@assets/logo.png";
import AccountCreation from "@components/AccountCreation.tsx/AccountCreation";
import ActivitiesList from "@components/ActivitiesList/ActivitiesList";
import { ACTIVITIES_MOCK } from "@components/ActivitiesList/mocks";
import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import DataContainer from "@components/DataContainer/DataContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAccountCreate = (
    username: string,
    email: string,
    password: string
  ) => {
    console.log(
      `Account created: Username - ${username}, Email - ${email}, Password - ${password}`
    );
    setIsAuthenticated(true);
  };

  return (
    <main className={styles.main}>
      <img className={styles.logo} alt="React logo" width="400px" src={Logo} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>
                  {`VITE_SOME_ENVIRONMENT_VARIABLE from .env.local: "${
                    import.meta.env.VITE_SOME_ENVIRONMENT_VARIABLE
                  }"`}
                </div>
                <HelloWorld msg="Hello EE Practicum Team 2!" />
                <DataContainer />
              </div>
            }
          />
          <Route
            path="/activities"
            element={<ActivitiesList activities={ACTIVITIES_MOCK} />}
          />
          <Route
            path="/signup"
            element={<AccountCreation onAccountCreate={handleAccountCreate} />}
          />
          <Route
            path="/account"
            element={
              isAuthenticated ? (
                <AuthenticatedContent username={""} email={""} />
              ) : (
                <p>Not authenticated</p>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
