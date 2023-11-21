import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const [activitiesList, setActivitiesList] = useState(props);

  return (
    <ul>
      {props.activities.map((activity) => (
        <li key={activity.id} className={styles.list__card}>
          <h2>Activity: {activity.name}</h2>
          <p>Description: {activity.description}</p>
          <p>Category: {activity.category}</p>
          <p>Place: {activity.location}</p>
          <p>When: {activity.date}</p>
          <p>
            Time: {activity.timeStart} - {activity.timeEnd}
          </p>

          <p>
            <span className={styles.thumb_up}>
              {activity.voteCountUp} &nbsp;
              <button>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </span>
            &nbsp; &nbsp;
            <span className={styles.thumb_down}>
              {activity.voteCountDown} &nbsp;
              <button>
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
