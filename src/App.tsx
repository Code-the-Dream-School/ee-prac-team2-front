import Logo from "@assets/logo.png";
import DataContainer from "@components/DataContainer/DataContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";
import styles from "./App.module.css";

import ActivitiesList, {
  Activity,
} from "@components/ActivitiesList/ActivitiesList";

export default function App() {
  // Hard coded Activities data moved to App component
  const activitiesData: Activity[] = [
    {
      id: 1,
      name: "Hiking",
      description: "Enjoy a day in nature.",
      voteCount: 0,
      category: "Outdoor",
    },
    {
      id: 2,
      name: "Cooking Class",
      description: "Learn to cook delicious dishes.",
      voteCount: 0,
      category: "Indoor",
    },
    {
      id: 3,
      name: "Movie Night",
      description: "Watch a favorite movie together.",
      voteCount: 0,
      category: "Indoor",
    },
    {
      id: 4,
      name: "Beach Picnic",
      description: "Relax by the seaside with a picnic.",
      voteCount: 0,
      category: "Outdoor",
    },
    {
      id: 5,
      name: "Board Games Night",
      description: "Play fun board games with friends.",
      voteCount: 0,
      category: "Indoor",
    },
  ];
  return (
    <main className={styles.main}>
      <img className={styles.logo} alt="React logo" width="400px" src={Logo} />
      <DataContainer />
      <div>
        {`VITE_SOME_ENVIRONMENT_VARIABLE from .env.local: "${
          import.meta.env.VITE_SOME_ENVIRONMENT_VARIABLE
        }"`}
      </div>
      <HelloWorld msg="Hello EE Practicum Team 2!" />
      <ActivitiesList activities={activitiesData} />
    </main>
  );
}
