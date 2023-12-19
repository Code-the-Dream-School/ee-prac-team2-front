// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsListItem from "@components/EventsList/EventsListItem";

export default function EventsList({ events }) {
  return (
    <div>
      <h4>Upcoming Events:</h4>
      <ul>
        {events.map((event) => {
          return <EventsListItem key={event._id} event={event} />;
        })}
      </ul>
    </div>
  );
}
