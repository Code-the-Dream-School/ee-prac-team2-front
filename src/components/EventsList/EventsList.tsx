// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsListItem from "@components/EventsList/EventsListItem";

export default function EventsList() {
  return (
    <div>
      <h4>EventsList</h4>
      <p>Displays Groups&apos;s Events</p>
      {/* use a mapped array here */}
      <EventsListItem />
      <EventsListItem />
      <EventsListItem />
      <EventsListItem />
    </div>
  );
}
