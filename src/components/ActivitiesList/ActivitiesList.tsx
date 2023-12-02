import React, { ReactElement, useEffect, useState } from "react";

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
    <ul>
      {props.activities.map((activity) => (
        <li key={activity.id} className={styles.list__card}>
          <h2>Activity: {activity.name}</h2>
          <p>Description: {activity.description}</p>
          <p>Category: {activity.category}</p>
        </li>
      ))}
    </ul>
  );
}
