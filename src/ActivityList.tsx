// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React, { useState, useEffect } from "react";

const ActivityList = () => {
  // Hardcoded activities data
  const activitiesData = [
    {
      id: 1,
      name: "Hiking",
      description: "Enjoy a day in nature.",
      voteCount: 0,
      category: "Outdoor",
    },

    {
      id: 2,
      name: "Cooking Class",
      description: "Learn to cook delicious dishes.",
      voteCount: 0,
      category: "Indoor",
    },
    {
      id: 3,
      name: "Movie Night",
      description: "Watch a favorite movie together.",
      voteCount: 0,
      category: "Indoor",
    },
    {
      id: 4,
      name: "Beach Picnic",
      description: "Relax by the seaside with a picnic.",
      voteCount: 0,
      category: "Outdoor",
    },
    {
      id: 5,
      name: "Board Games Night",
      description: "Play fun board games with friends.",
      voteCount: 0,
      category: "Indoor",
    },
  ];

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activitiesData.map((activity) => (
          <li key={activity.id}>
            <strong>Name:</strong> {activity.name}
            <br />
            <strong>Description:</strong> {activity.description}
            <br />
            <strong>Vote Count:</strong> {activity.voteCount}
            <br />
            <strong>Category:</strong> {activity.category}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
