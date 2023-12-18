// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventVotingWindow from "@components/EventVotingWindow/EventVotingWindow";
import VotableActivitiesList from "@components/VotableActivitiesList/VotableActivitiesList";

export default function EventView() {
  return (
    <div>
      <h3>EventView</h3>
      <p>event details here</p>
      <EventVotingWindow />
      <VotableActivitiesList />
    </div>
  );
}
