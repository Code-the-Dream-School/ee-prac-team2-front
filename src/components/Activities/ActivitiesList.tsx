import React from "react";

import styles from "./ActivityList.module.css";
import { Activity } from "./Definition";
import ListView from "./ListView";

const builtInActivities: Activity[] = [
  {
    id: 1,
    name: "Kayaking",
    description: "Relax on a nice sunny day with a trip down the river.",
    voteCount: 4,
    category: "outdoor",
  },

  {
    id: 2,
    name: "Movies",
    description:
      "If the weather is bad outside, enjoy a cozy movie in a movie theater.",
    voteCount: 2,
    category: "indoor",
  },

  {
    id: 3,
    name: "Fondue",
    description:
      "If you enjoy cooking, try making fondue as a romantic activity.",
    voteCount: 2,
    category: "indoor",
  },

  {
    id: 4,
    name: "Kayaking",
    description: "An outdoor activity your friends will enjoy.",
    voteCount: 6,
    category: "outdoor",
  },

  {
    id: 5,
    name: "Salsa Class",
    description:
      "Learn a new dance and meet new people by attending a salsa class.",
    voteCount: 4,
    category: "indoor",
  },
];

const ActivityList = () => {
  return (
    <ListView<Activity>
      className={styles.test}
      items={builtInActivities}
      renderer={(activity, index, arr) => (
        <>
          <p>{activity.name}</p>
          <p>{activity.description}</p>
          <p>Votes: {activity.voteCount}</p>
          <p>Category: {activity.category}</p>
          <button
            onClick={(event) => {
              console.log(
                `Clicked ${activity.name} (Activity ${index + 1} of ${
                  arr.length + 1
                })`
              );
              console.log(event.target);
            }}
          >
            event test
          </button>
        </>
      )}
    />
  );
};

export default ActivityList;
