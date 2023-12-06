import styles from "@components/ActivitiesList/ActivitiesList.module.css";
import React, { ReactElement } from "react";

export interface Voter {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Vote {
  _id: string;
  activityID: string;
  voters: Voter[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Activity {
  _id: number;
  name: string;
  description: string;
  vote: Vote;
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
        {props.activities.map(({ _id, name, description, category, vote }) => (
          <li key={_id} className={styles.activityItem}>
            <h2>
              <strong>Activity:</strong>: {name}
            </h2>
            <p>
              <strong>Description:</strong>: {description}
            </p>
            <p>
              <strong>Category:</strong>: {category}
            </p>
            <p>
              <strong>Votes:</strong>: {vote.voters?.length ?? 0}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
