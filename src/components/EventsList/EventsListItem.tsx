// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Link } from "react-router-dom";

export default function EventsListItem() {
  return (
    <div>
      <h5>EventsListItem</h5>
      <p>Event summary</p>
      <Link to={"/event"}>View Event</Link>
    </div>
  );
}
