// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsList from "@components/EventsList/EventsList";
import theme from "@components/HomePage/theme";
import MembersList from "@components/MembersList/MembersList";
import {
  EditCalendarTwoTone,
  GroupRemoveTwoTone,
  LoginTwoTone,
  LogoutTwoTone,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function GroupView({ isLoading, group, isOwner, isMember }) {
  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: "flex", height: "100vh" }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <ThemeProvider theme={theme}>
          <Container>
            <Box>
              <Typography
                variant="h2"
                component="h2"
                fontFamily="Just Another Hand"
              >
                {group.groupName}
              </Typography>
              <Typography variant="h5" component="p">
                {group.description}
              </Typography>

              <MembersList />
              {isMember && (
                <Button
                  variant="contained"
                  color="info"
                  startIcon={<LogoutTwoTone />}
                >
                  Leave group
                </Button>
              )}
              {!isMember && !isOwner && (
                <Button
                  variant="contained"
                  color="info"
                  startIcon={<LoginTwoTone />}
                >
                  Join group
                </Button>
              )}
              <EventsList />
              <Button
                variant="contained"
                color="secondary"
                startIcon={<EditCalendarTwoTone />}
              >
                <Link to="/events/" state={{ groupID: group._id }}>
                  Create event
                </Link>
              </Button>

              {isOwner && (
                <Button variant="contained" startIcon={<GroupRemoveTwoTone />}>
                  Delete Group
                </Button>
              )}
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
}
