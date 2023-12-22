// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { CalendarTodayTwoTone } from "@mui/icons-material";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function EventsListItem({ event }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <CalendarTodayTwoTone />
        </Avatar>
      </ListItemAvatar>
      <Link to={`/events/${event._id}`}>
        <ListItemText primary={event.name} secondary={event.description} />
      </Link>
    </ListItem>
  );
}
