import ListView from "../ItemList/ItemList";
import { Activity } from "./Definition";

interface ActivityListProps {
  activities: Activity[];
  className?: string;
}

export default function ActivityList(props: ActivityListProps) {
  return (
    <ListView<Activity>
      items={props.activities}
      className={props.className}
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
