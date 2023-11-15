import Logo from "@assets/logo.png";
import ActivityList from "@components/ActivitiesList/ActivityList";
import { Activity } from "@components/ActivitiesList/Definition";
import DataContainer from "@components/DataContainer/DataContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

const builtInActivities: Activity[] = [
  {
    id: 1,
    name: "Kayaking",
    description: "Relax on a nice sunny day with a trip down the river.",
    voteCount: 4,
    category: "outdoor",
  },

  {
    id: 2,
    name: "Movies",
    description:
      "If the weather is bad outside, enjoy a cozy movie in a movie theater.",
    voteCount: 2,
    category: "indoor",
  },

  {
    id: 3,
    name: "Fondue",
    description:
      "If you enjoy cooking, try making fondue as a romantic activity.",
    voteCount: 2,
    category: "indoor",
  },

  {
    id: 4,
    name: "Hiking",
    description: "An outdoor activity your friends will enjoy.",
    voteCount: 6,
    category: "outdoor",
  },

  {
    id: 5,
    name: "Salsa Class",
    description:
      "Learn a new dance and meet new people by attending a salsa class.",
    voteCount: 4,
    category: "indoor",
  },
];

export default function App() {
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
                <ActivityList activities={builtInActivities} />
                <DataContainer />
              </div>
            }
          />
          <Route
            path="/activities"
            element={<ActivityList activities={builtInActivities} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
