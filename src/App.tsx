// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Logo from "@assets/logo.png";
import AccountCreationContainer from "@components/AccountCreation/AccountCreationContainer";
import AddEventToGroupForm from "@components/AddEventToGroupForm/AddEventToGroupForm";
import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import DataContainer from "@components/DataContainer/DataContainer";
import GroupCreationContainer from "@components/Group/GroupCreationContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import HomePage from "@components/HomePage/HomePage";
import ActivitiesListContainer from "@containers/ActivitiesContainer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" Component={ActivitiesListContainer} />
        <Route path="/events" Component={AddEventToGroupForm} />
        <Route path="/signup" element={<AccountCreationContainer />} />
        <Route
          path="/account"
          element={<AuthenticatedContent name={""} email={""} />}
        />
        {/* New route for group creation */}
        <Route path="/create-group" element={<GroupCreationContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
