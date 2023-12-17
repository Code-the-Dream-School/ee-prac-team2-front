// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import VotableActivitiesListItem from "@components/VotableActivitiesList/VotableActivitiesListItem";

export default function VotableActivitiesList() {
  return (
    <div>
      <h4>VotableActivitiesList</h4>
      <p>Displays Event&apos;s activities for voting</p>
      {/* use a mapped array here */}
      <VotableActivitiesListItem />
      <VotableActivitiesListItem />
      <VotableActivitiesListItem />
      <VotableActivitiesListItem />
    </div>
  );
}
