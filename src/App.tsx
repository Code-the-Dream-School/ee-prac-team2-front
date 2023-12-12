import Logo from "@assets/logo.png";
import AccountCreationContainer from "@components/AccountCreation/AccountCreationContainer";
import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import DataContainer from "@components/DataContainer/DataContainer";
import GroupCreationContainer from "@components/Group/GroupCreationContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import ActivitiesListContainer from "@containers/ActivitiesContainer";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

const App = () => {
  return (
    <main className={styles.main}>
      <img className={styles.logo} alt="React logo" width="400px" src={Logo} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>{`VITE_SOME_ENVIRONMENT_VARIABLE from .env.local: "${
                  import.meta.env.VITE_SOME_ENVIRONMENT_VARIABLE
                }"`}</div>
                <HelloWorld msg="Hello EE Practicum Team 2!" />
                <DataContainer />
              </div>
            }
          />
          <Route path="/activities" Component={ActivitiesListContainer} />{" "}
          <Route path="/signup" element={<AccountCreationContainer />} />
          <Route
            path="/account"
            element={<AuthenticatedContent name={""} email={""} />}
          />
          <Route path="/create-group" element={<GroupCreationContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
