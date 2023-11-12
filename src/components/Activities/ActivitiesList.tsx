import { Activities } from "./Definition";
import ListView from "./ListView";

const builtInActivities: Activities[] = [
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
    <ListView
      items={builtInActivities}
      renderer={(activity) => (
        <div>
          <p>{activity.name}</p>
          <p>{activity.description}</p>
          <p>Votes: {activity.voteCount}</p>
          <p>Category: {activity.category}</p>
        </div>
      )}
    />
  );
};

export default ActivityList;
