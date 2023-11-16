import React, { ReactElement } from "react";

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

export default function ActivitiesList(
  props: ActivitiesListProps
): ReactElement {
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {props.activities.map((activity) => (
          <li key={activity.id}>
            <h2>
              <strong>Name:</strong> {activity.name}
            </h2>
            <p>
              <strong>Description:</strong> {activity.description}
            </p>
            <p>
              <strong>Vote Count:</strong> {activity.voteCount}
            </p>
            <p>
              <strong>Category:</strong> {activity.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
