// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import styles from "./ActivitiesList.module.css";

interface ActivitiesListProps {
  list: Array<any>;
}

export default function ActivitiesList(props: ActivitiesListProps) {
  const [activitiesList, setActivitiesList] = useState(props);

  return (
    <div className={styles.list__main}>
      <h1 className={styles.list__h1}>Your Activities</h1>
      {activitiesList.list.map((item: any) => (
        <div key={item.id} className={styles.list__card}>
          <h2>Activity: {item.name}</h2>
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <p>Place: {item.location}</p>
          <p>When: {item.date}</p>
          <p>
            Time: {item.timeStart} - {item.timeEnd}
          </p>

          <p>
            <span className={styles.thumb_up}>
              {item.voteCountUp} &nbsp;
              <button>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </span>
            &nbsp; &nbsp;
            <span className={styles.thumb_down}>
              {item.voteCountDown} &nbsp;
              <button>
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
