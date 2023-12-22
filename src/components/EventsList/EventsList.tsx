// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsListItem from "@components/EventsList/EventsListItem";
import { List, Typography } from "@mui/material";

export default function EventsList({ events }) {
  return (
    <div>
      <Typography variant="h3" component="h4" fontFamily="Just Another Hand">
        Upcoming Events:
      </Typography>
      <List>
        {events.map((event) => {
          return <EventsListItem key={event._id} event={event} />;
        })}
      </List>
    </div>
  );
}
