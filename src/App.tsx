import Logo from "@assets/logo.png";
import DataContainer from "@components/DataContainer/DataContainer";
import HelloWorld from "@components/HelloWorld/HelloWorld";

import styles from "./App.module.css";

export default function App() {
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
    </main>
  );
}
