import ActivitiesList from "./ActivitiesList";

const act_list = [
  {
    id: 1,
    name: "Death on the Nile",
    description:
      "Watch a movie starring Kenneth Branaugh about solving a murder mystery.",
    voteCount: 2,
    category: "Indoor",
  },
  {
    id: 2,
    name: "Make Pasta",
    description:
      "Make pasta from scratch using flour and egg. Then cook and use favorite sauce.",
    voteCount: 2,
    category: "Indoor",
  },
  {
    id: 3,
    name: "Swim 10 laps",
    description: "Swim 10 laps in the pool.",
    voteCount: 0,
    category: "Indoor/Outdoor",
  },
  {
    id: 4,
    name: "Wedding Crasher",
    description: "Go to a random wedding and crash",
    voteCount: 4,
    category: "Indoor",
  },
  {
    id: 5,
    name: "Netflix and Relax",
    description:
      "Pick a movie on Netflix and relax. No discration. You can also discuss the movie like pretentious intellectuals.",
    voteCount: 1,
    category: "Indoor",
  },
  {
    id: 6,
    name: "Play musical instruments",
    description: "Learn an instrument of choice and jam together.",
    voteCount: 3,
    category: "Indoor",
  },
  {
    id: 7,
    name: "Batting Cage Therapy",
    description: "Go to a batting cage and hit your problems away.",
    voteCount: 2,
    category: "Outdoor",
  },
];

export default function Activities() {
  return <ActivitiesList list={act_list} />;
}