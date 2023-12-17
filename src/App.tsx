import Logo from "@assets/logo.png";
import AboutPage from "@components/AboutPage/AboutPage";
import AccountCreationContainer from "@components/AccountCreation/AccountCreationContainer";
import AuthenticatedContent from "@components/AuthenticatedContent/AuthenticatedContent";
import DataContainer from "@components/DataContainer/DataContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import Footer from "@components/HomePage/Footer";
import HomePage from "@components/HomePage/HomePage";
import NavBar from "@components/HomePage/NavBar";
import ActivitiesListContainer from "@containers/ActivitiesContainer";
import EventContainer from "@containers/EventContainer";
import GroupContainer from "@containers/GroupContainer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <main className={styles.main}>
              <img
                className={styles.logo}
                alt="React logo"
                width="400px"
                src={Logo}
              />
              <DataContainer />
              <div>
                {`VITE_SOME_ENVIRONMENT_VARIABLE from .env.local: "${
                  import.meta.env.VITE_SOME_ENVIRONMENT_VARIABLE
                }"`}
              </div>
              <HelloWorld msg="Hello EE Practicum Team 2!" />
              <Link to="/activities">Link to Activities</Link>
            </main>
          }
        ></Route> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" Component={ActivitiesListContainer} />
        <Route path="/signup" element={<AccountCreationContainer />} />
        <Route path="/about" element={<AboutPage />} />
        {/*TODO needs real path with group id */}
        <Route path="/group" Component={GroupContainer} />
        {/* TODO needs real path with group and event ids */}
        <Route path="/event" Component={EventContainer} />
        <Route
          path="/account"
          element={<AuthenticatedContent name={""} email={""} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
