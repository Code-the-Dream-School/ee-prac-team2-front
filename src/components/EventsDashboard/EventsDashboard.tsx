// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { EventTwoTone } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

const EventsDashboard = ({ usersEvents, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Box>
          <List>
            {usersEvents.map((event) => {
              return (
                <ListItem key={event._id}>
                  <ListItemButton divider>
                    <ListItemIcon>
                      <EventTwoTone color="info" />
                    </ListItemIcon>
                    <Link to={"/events/:id"}>{event.name}</Link>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </div>
  );
};

export default EventsDashboard;
