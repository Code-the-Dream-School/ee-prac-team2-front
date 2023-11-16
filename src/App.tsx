import Logo from "@assets/logo.png";
import ActivitiesList from "@components/ActivitiesList/ActivitiesList";
import { Activity } from "@components/ActivitiesList/Definition";
import DataContainer from "@components/DataContainer/DataContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import { Person } from "@components/PeopleList/Definition";
import PeopleList from "@components/PeopleList/PeopleList";

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

const people: Person[] = [
  {
    id: 1,
    name: "Person 1",
    age: 10,
    profession: "Job 1",
  },
  {
    id: 2,
    name: "Person 2",
    age: 20,
    profession: "Job 2",
  },
  {
    id: 3,
    name: "Person 3",
    age: 30,
    profession: "Job 3",
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
                <ActivitiesList activities={builtInActivities} />
                <DataContainer />
              </div>
            }
          />
          <Route
            path="/activities"
            element={<ActivitiesList activities={builtInActivities} />}
          />
          <Route path="/people" element={<PeopleList people={people} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
