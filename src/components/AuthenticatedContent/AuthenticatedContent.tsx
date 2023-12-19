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
  Divider,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AuthenticatedContent = () => {
  const [groupCount, setGroupCount] = useState(null);
  const [eventsCount, setEventsCount] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const user = state?.user;

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, []);

  if (!user) {
    return (
      <Typography color="warning" variant="h1">
        User not found. Please sign in.
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box display="flex" justifyContent="center" minHeight="100vh" mt={8}>
          <div>
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              fontFamily="Pacifico"
            >
              Welcome to your Dashboard, {user.name}
            </Typography>
            <Divider />
            <Typography gutterBottom variant="body2" align="right">
              [ Email: {user.email} ]
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              fontFamily="Just Another Hand"
              mt={4}
            >
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

            <Typography
              variant="h4"
              component="h3"
              fontFamily="Just Another Hand"
              mt={4}
            >
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
            <Button variant="contained" startIcon={<GroupAddTwoTone />}>
              <Link to={"/create-group"}>Add a group</Link>
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AuthenticatedContent;
