// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from "react";

// Exporting Activity type for reuse
export interface Activity {
  id: number;
  name: string;
  description: string;
  voteCount: number;
  category: string;
}

// Modified ActivitiesList component to accept activities as a prop
const ActivitiesList: React.FC<{ activities: Activity[] }> = ({
  activities,
}) => {
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity) => (
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

export default ActivitiesList;
