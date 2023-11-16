// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import styles from "./ActivitiesList.module.css";

interface ActivitiesListProps {
  list: Array<any>;
}

export default function Activities(props: ActivitiesListProps) {
  return (
    <div className={styles.list__main}>
      <h1 className={styles.list__h1}>Your Activities</h1>
      {props.list.map((item: any) => (
        <div key={item.id} className={styles.list__card}>
          <h2>Activity: {item.name}</h2>
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <p>Vote Count: {item.voteCount}</p>
        </div>
      ))}
    </div>
  );
}
