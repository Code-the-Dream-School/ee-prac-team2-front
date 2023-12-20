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
  Divider,
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
            <Box
              display="flex"
              justifyContent="center"
              minHeight="100vh"
              mt={8}
            >
              <div>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="h3"
                  fontFamily="Pacifico"
                >
                  {group.groupName}
                </Typography>
                <Divider />

                <Typography
                  gutterBottom
                  variant="body2"
                  component="h4"
                  align="right"
                >
                  [ Group Owner: {group.owner.name} ({group.owner.email}) ]
                </Typography>

                <Typography
                  gutterBottom
                  paragraph
                  variant="p"
                  component="p"
                  sx={{ mt: 4, mb: 4 }}
                >
                  {group.description}
                </Typography>

                {group.members.length > 0 ? (
                  <MembersList members={group.members} />
                ) : (
                  <Typography gutterBottom variant="h6" component="h4">
                    There are no members in this group.
                  </Typography>
                )}

                {isOwner && (
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<GroupAddTwoTone />}
                  >
                    Invite members
                  </Button>
                )}
                <Divider sx={{ mt: 4, mb: 4 }} />
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
                <Divider sx={{ mt: 4, mb: 4 }} />
                <div>
                  {isOwner && (
                    <Button
                      variant="contained"
                      startIcon={<GroupRemoveTwoTone />}
                    >
                      Delete Group
                    </Button>
                  )}
                </div>
              </div>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
}
