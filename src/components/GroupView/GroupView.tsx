// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsList from "@components/EventsList/EventsList";
import MembersList from "@components/MembersList/MembersList";

export default function GroupView() {
  return (
    <div>
      <h3>GroupView</h3>
      <p>group details here</p>
      <p>join/leave button</p>
      <MembersList />
      <EventsList />
      <p>delete group button</p>
    </div>
  );
}
