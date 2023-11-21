import { Activity } from "@components/ActivitiesList/ActivitiesList";
import ItemList from "@components/ItemList/ItemList";
import { ReactElement } from "react";

interface ActivitiesListProps {
  activities: Activity[];
}

export default function ActivitiesList(
  props: ActivitiesListProps
): ReactElement {
  return (
    <ItemList<Activity>
      items={props.activities}
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
