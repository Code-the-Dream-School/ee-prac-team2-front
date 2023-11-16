import React, { ReactElement } from "react";

import styles from "./ActivitiesList.module.css";

export interface Activity {
  id: number;
  name: string;
  description: string;
  voteCount: number;
  category: string;
}

interface ActivitiesListProps {
  activities: Activity[];
}

export default function Activities(props: ActivitiesListProps): ReactElement {
  return (
    <div className={styles.list__main}>
      <h1 className={styles.list__h1}>Your Activities</h1>
      <ul>
        {props.activities.map((activity) => (
          <li key={activity.id} className={styles.list__card}>
            <h2>
              <strong>Activity:</strong>: {activity.name}
            </h2>
            <p>
              <strong>Description:</strong>: {activity.description}
            </p>
            <p>
              <strong>Category:</strong>: {activity.category}
            </p>
            <p>
              <strong>Vote Count:</strong>: {activity.voteCount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
