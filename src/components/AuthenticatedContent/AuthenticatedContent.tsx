// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsDashboardContainer from "@components/EventsDashboard/EventsDashboardContainer";
import GroupsDashboardContainer from "@components/GroupsDashboard/GroupsDashboardContainer";
import theme from "@components/HomePage/theme";
import { GroupAddTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AuthenticatedContent = () => {
  const [groupCount, setGroupCount] = useState(null);
  const [eventsCount, setEventsCount] = useState(null);

  const location = useLocation();
  const { state } = location;

  const user = state && state.user;

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ height: "100vh" }}>
        <Typography variant="h2" component="h2" fontFamily="Just Another Hand">
          Welcome to your Dashboard, {user.name}
        </Typography>
        <Typography variant="h6">Email: {user.email}</Typography>

        <div>
          <Typography variant="h5" component="h3">
            Your upcoming events:
          </Typography>
          {eventsCount === 0 ? (
            <Typography variant="body1" component="p">
              You currently do not have any upcoming events. Create a group
              below or click on an existing group to create an event.
            </Typography>
          ) : (
            <EventsDashboardContainer
              eventsCount={eventsCount}
              setEventsCount={setEventsCount}
              userID={user.userID}
            />
          )}
        </div>

        <Box>
          <Typography variant="h5" component="h3">
            Your groups:
          </Typography>
          {groupCount === 0 ? (
            <Typography variant="body1" component="p">
              You currently do not belong to any groups.
            </Typography>
          ) : (
            <GroupsDashboardContainer
              groupCount={groupCount}
              setGroupCount={setGroupCount}
              userID={user.userID}
            />
          )}
        </Box>
        <Link to={"/create-group"}>
          <Button variant="contained" startIcon={<GroupAddTwoTone />}>
            Add a group
          </Button>
        </Link>
      </Container>
    </ThemeProvider>
  );
};

export default AuthenticatedContent;
