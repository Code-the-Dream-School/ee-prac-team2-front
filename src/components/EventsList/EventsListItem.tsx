// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Link } from "react-router-dom";

export default function EventsListItem({ event }) {
  return (
    <li>
      <Link to={`/events/${event._id}`}>
        <h5>{event.name}</h5>
        <h6>{event.description}</h6>
      </Link>
    </li>
  );
}
