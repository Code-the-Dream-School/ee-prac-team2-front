// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import EventsList from "@components/EventsList/EventsList";
import theme from "@components/HomePage/theme";
import MembersList from "@components/MembersList/MembersList";
import {
  EditCalendarTwoTone,
  GroupAddTwoTone,
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
              <Typography variant="h6" component="h4">
                Group Owner: {group.owner.name} ({group.owner.email})
              </Typography>

              {group.members.length > 0 ? (
                <MembersList members={group.members} />
              ) : (
                <Typography variant="h6" component="h4">
                  There are no members in this group.
                </Typography>
              )}

              {isOwner && (
                <Button
                  variant="contained"
                  color="info"
                  startIcon={<GroupAddTwoTone />}
                >
                  Invite members
                </Button>
              )}

              {isMember && (
                <Button
                  variant="contained"
                  color="info"
                  startIcon={<LogoutTwoTone />}
                >
                  Leave Group
                </Button>
              )}
              {!isMember && !isOwner && (
                <Button
                  variant="contained"
                  color="info"
                  startIcon={<LoginTwoTone />}
                >
                  Join Group
                </Button>
              )}
              {group.groupEvents.length > 0 ? (
                <EventsList events={group.groupEvents} />
              ) : (
                <Typography variant="h6" component="h4">
                  There are no upcoming events for this group.
                </Typography>
              )}

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
