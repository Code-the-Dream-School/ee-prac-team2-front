import Logo from "@assets/logo.png";
import ActivitiesList from "@components/ActivitiesList/ActivitiesList";
import { ACTIVITIES_MOCK } from "@components/ActivitiesList/mocks";
import DataContainer from "@components/DataContainer/DataContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
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
        ></Route>
        <Route
          path="/activities"
          element={<ActivitiesList activities={ACTIVITIES_MOCK} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
