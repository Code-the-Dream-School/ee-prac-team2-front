import ListView from "../ItemList/ItemList";
import { Person } from "./Definition";
import styles from "./PeopleList.module.css";

interface PeopleListProps {
  people: Person[];
}

export default function PeopleList(props: PeopleListProps) {
  return (
    <ListView<Person>
      items={props.people}
      className={styles.test}
      renderer={({ name, age, profession }) => (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Profession: {profession}</p>
        </div>
      )}
    />
  );
}
