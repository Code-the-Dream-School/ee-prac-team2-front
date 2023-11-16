import ItemList from "../ItemList/ItemList";
import { Activity } from "./Definition";

interface ActivityListProps {
  activities: Activity[];
}

export default function ActivityList(props: ActivityListProps) {
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
