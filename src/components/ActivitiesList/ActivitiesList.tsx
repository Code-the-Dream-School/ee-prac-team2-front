import ListView from "../ItemList/ItemList";
import { Activity } from "./Definition";
import styles from "./ActivityList.module.css";

interface ActivityListProps {
  activities: Activity[];
}

export default function ActivitiesList(props: ActivityListProps) {
  return (
    <ListView<Activity>
      items={props.activities}
      className={styles.test}
      renderer={(activity) => (
        <div>
          <p>Name: {activity.name}</p>
          <p>Description: {activity.description}</p>
          <p>Votes: {activity.voteCount}</p>
          <p>Category: {activity.category}</p>
        </div>
      )}
    />
  );
}
