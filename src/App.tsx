import Logo from "@assets/logo.png";
import ActivitiesList, {
  Activity,
} from "@components/ActivitiesList/ActivitiesList";
import DataContainer from "@components/DataContainer/DataContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

const ACTIVITIES_MOCK: Activity[] = [
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
  {
    id: 6,
    name: "Hiking",
    description: "Enjoy a day in nature.",
    voteCount: 0,
    category: "Outdoor",
  },
  {
    id: 7,
    name: "Cooking Class",
    description: "Learn to cook delicious dishes.",
    voteCount: 0,
    category: "Indoor",
  },
  {
    id: 8,
    name: "Movie Night",
    description: "Watch a favorite movie together.",
    voteCount: 0,
    category: "Indoor",
  },
  {
    id: 9,
    name: "Beach Picnic",
    description: "Relax by the seaside with a picnic.",
    voteCount: 0,
    category: "Outdoor",
  },
  {
    id: 10,
    name: "Board Games Night",
    description: "Play fun board games with friends.",
    voteCount: 0,
    category: "Indoor",
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
                <DataContainer />
              </div>
            }
          />
          <Route
            path="/activities"
            element={<ActivitiesList activities={ACTIVITIES_MOCK} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
